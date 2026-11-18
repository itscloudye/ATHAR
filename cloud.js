/* ATHAR cloud layer: Supabase accounts, visitor comments, visitor photos and saved trips.
   Without values in config.js the site stays in demo mode and trips are kept in this browser only. */
(function(){
  'use strict';
  const cfg=window.ATHAR_CONFIG||{};
  const lib=window.supabase;
  const sb=(cfg.supabaseUrl&&cfg.supabaseKey&&lib)?lib.createClient(cfg.supabaseUrl,cfg.supabaseKey):null;
  const BUCKET='place-photos',LS='athar-trip';
  const readLocal=()=>{try{const a=JSON.parse(localStorage.getItem(LS)||'[]');return Array.isArray(a)?a.filter(x=>typeof x==='string'):[]}catch(e){return[]}};
  const writeLocal=a=>{try{localStorage.setItem(LS,JSON.stringify(a))}catch(e){}};
  const fail=e=>{if(e)throw e};
  const C={
    ready:!!sb,user:null,subs:[],
    onAuth(fn){C.subs.push(fn)},
    async init(){
      if(!sb)return;
      const {data}=await sb.auth.getSession();C.user=(data.session&&data.session.user)||null;
      sb.auth.onAuthStateChange((_e,s)=>{C.user=(s&&s.user)||null;C.subs.forEach(f=>f(C.user))});
    },
    name(){const u=C.user;return u?((u.user_metadata&&u.user_metadata.name)||(u.email||'').split('@')[0]):''},
    async signIn(email,password){const {error}=await sb.auth.signInWithPassword({email,password});return error},
    async signUp(email,password,name){
      const {data,error}=await sb.auth.signUp({email,password,options:{data:{name:name||email.split('@')[0]}}});
      return {error,needsConfirm:!error&&!data.session};
    },
    async signOut(){await sb.auth.signOut()},
    async comments(placeId){
      const {data,error}=await sb.from('comments').select('id,author_name,body,approved,created_at').eq('place_id',placeId).order('created_at',{ascending:false}).limit(50);
      fail(error);return data||[];
    },
    async addComment(placeId,body){
      const {error}=await sb.from('comments').insert({place_id:placeId,author_name:C.name()||'Guest',body:body.slice(0,1000)});fail(error);
    },
    async photos(placeId){
      const {data,error}=await sb.from('photos').select('id,path,caption,author_name,approved').eq('place_id',placeId).order('created_at',{ascending:false}).limit(30);
      fail(error);
      return (data||[]).map(p=>Object.assign({},p,{url:sb.storage.from(BUCKET).getPublicUrl(p.path).data.publicUrl}));
    },
    async addPhoto(placeId,file,caption){
      const ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[file.type];
      if(!ext||file.size>5*1024*1024)throw new Error('bad-file');
      const rnd=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():Date.now()+'-'+Math.random().toString(16).slice(2);
      const path=C.user.id+'/'+rnd+'.'+ext;
      let r=await sb.storage.from(BUCKET).upload(path,file,{contentType:file.type,upsert:false});fail(r.error);
      r=await sb.from('photos').insert({place_id:placeId,path,caption:(caption||'').slice(0,120),author_name:C.name()||'Guest'});fail(r.error);
    },
    async getTrip(){
      const local=readLocal();
      if(!sb||!C.user)return local;
      const {data,error}=await sb.from('trips').select('place_ids').eq('user_id',C.user.id).maybeSingle();fail(error);
      const cloud=(data&&data.place_ids)||[];
      const merged=cloud.concat(local.filter(x=>!cloud.includes(x)));
      if(local.length){await C.saveTrip(merged);writeLocal([])}
      return merged;
    },
    async saveTrip(ids){
      if(!sb||!C.user){writeLocal(ids);return}
      const {error}=await sb.from('trips').upsert({user_id:C.user.id,place_ids:ids,updated_at:new Date().toISOString()});fail(error);
    }
  };
  window.AtharCloud=C;
})();
