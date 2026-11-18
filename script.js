/* ATHAR content. Edit text here. Fields marked `todo` are placeholders awaiting verified information. */
const REGIONS = {
  north:{ar:'شمال الأردن',en:'Northern Jordan'},
  central:{ar:'وسط الأردن',en:'Central Jordan'},
  south:{ar:'جنوب الأردن',en:'Southern Jordan'}
};
const CATS = {
  arch:{ar:'موقع أثري',en:'Archaeological site'},
  castle:{ar:'قلعة',en:'Castle'},
  reserve:{ar:'محمية طبيعية',en:'Nature reserve'},
  nature:{ar:'معلم طبيعي',en:'Natural landmark'},
  cultural:{ar:'معلم ديني وثقافي',en:'Religious & cultural landmark'},
  viewpoint:{ar:'مطل',en:'Viewpoint'}
};
const PURPOSES={tourism:{ar:'سياحي',en:'Sightseeing'},wellness:{ar:'علاجي',en:'Wellness & therapeutic'}};
const WELLNESS=new Set(['dead-sea','himma','maein']);
const usedCats=()=>Object.keys(CATS).filter(k=>DEST.some(d=>d.cat===k));
const TODO = 'تُضاف لاحقًا';

/* ll = [latitude, longitude]. approx:true marks coordinates placed by area, to be refined. */
const DEST = [
/* ---------------- NORTH ---------------- */
{id:'umm-qais',ar:'أم قيس',en:'Umm Qais',region:'north',cat:'arch',art:'columns',ll:[32.6544,35.6853],gov:'محافظة إربد',near:'أقصى شمال غرب المملكة، مطلّة على وادي اليرموك',
 intro:'جدارا القديمة، إحدى مدن الديكابوليس، تطل من هضبتها على وادي اليرموك وبحيرة طبريا ومرتفعات الجولان.',
 about:['كانت جدارا مركزًا ثقافيًا مزدهرًا في العصرين الهلنستي والروماني، واشتهرت بفلاسفتها وشعرائها. وتميّز عمرانها بالحجر البازلتي الأسود الذي بُنيت به أعمدتها ومبانيها.','وفي العهد العثماني قامت فوق الأطلال قرية صغيرة، ولا يزال بعض بيوتها الحجرية قائمًا بين الآثار، ما يجعل الزائر يمشي في طبقتين من الزمن في آن واحد.'],
 explore:[['المسرح الغربي','مسرح من البازلت الأسود بمقاعد متدرجة، يعكس طابع المدينة الفريد.'],['الشارع المعمّد','طريق روماني تحفّه الأعمدة والمتاجر القديمة وتتخلله بقايا الأقواس.'],['بيت روسان','بيت عثماني حُوّل إلى متحف يحكي حياة القرية فوق المدينة القديمة.']],
 season:'الربيع والخريف',dur:'ساعتان إلى ثلاث'},
{id:'jerash',ar:'جرش',en:'Jerash',region:'north',cat:'arch',art:'columns',ll:[32.2808,35.8993],gov:'محافظة جرش',near:'على بعد نحو 50 كم شمال عمّان',
 intro:'جراسا الرومانية، من أفضل المدن الرومانية الإقليمية حفظًا في العالم، بشوارعها المعمّدة ومسارحها وساحاتها.',
 about:['ازدهرت جرش كواحدة من مدن الديكابوليس، وبلغ عمرانها ذروته في القرنين الثاني والثالث الميلاديين. وتتجاور فيها المعابد الرومانية والكنائس البيزنطية في موقع واحد يروي تعاقب الحضارات.','دفنت الرمال أجزاء من المدينة قرونًا طويلة فحفظتها، ثم كشفت أعمال التنقيب الحديثة عن شبكة شوارع وساحات تكاد تكون كاملة.'],
 explore:[['قوس هادريان','بوابة النصر عند المدخل الجنوبي، أُقيمت تكريمًا لزيارة الإمبراطور هادريان.'],['الساحة البيضاوية','ساحة بيضاوية الشكل محاطة بالأعمدة، وتنفتح على الشارع المعمّد الرئيسي.'],['معبد أرتميس والمسرح الجنوبي','معبد مهيب بأعمدته الكورنثية، ومسرح تتردد فيه الأصوات بوضوح.']],
 season:'الربيع والخريف',dur:'ثلاث ساعات أو أكثر'},
{id:'ajloun',ar:'قلعة عجلون',en:'Ajloun Castle',region:'north',cat:'castle',art:'castle',ll:[32.3256,35.7289],gov:'محافظة عجلون',near:'على قمة جبل عوف، وسط مرتفعات عجلون',
 intro:'قلعة أيوبية تشرف من جبل عوف على غور الأردن وطرق التجارة والحركة في الشمال.',
 about:['بناها عز الدين أسامة، أحد قادة صلاح الدين، في أواخر القرن الثاني عشر الميلادي لحماية المنطقة من الصليبيين والتحكم بمناجم الحديد القريبة. وأُضيفت إليها توسعات وترميمات في العصرين الأيوبي والمملوكي.','كانت القلعة حلقة في سلسلة إنذار تتصل بقلاع المنطقة بالإشارات الضوئية، وما زالت تطل على حرش عجلون بصنوبره وبلوطه.'],
 explore:[['القاعات المقبّبة','ممرات وغرف حجرية متشابكة تكشف هندسة الدفاع في القرون الوسطى.'],['الخندق والأبراج','خندق محفور في الصخر وأبراج تراقب الوديان المحيطة.'],['إطلالة على الغور','من الأسطح العليا تبدو أراضي غور الأردن وما وراءها في الأيام الصافية.']],
 season:'الربيع والخريف',dur:'ساعة ونصف'},
{id:'pella',ar:'طبقة فحل',en:'Pella (Tabaqat Fahl)',region:'north',cat:'arch',art:'columns',ll:[32.4486,35.617],gov:'محافظة إربد',near:'عند سفح المرتفعات المطلة على غور الأردن',
 intro:'موقع أثري مأهول منذ عصور ما قبل التاريخ، تتراكم فيه طبقات الحضارات على أطراف غور الأردن.',
 about:['تضم طبقة فحل بقايا من العصور الحجرية والبرونزية واليونانية والرومانية والبيزنطية والإسلامية، وكانت إحدى مدن الديكابوليس. وارتبط اسمها بمعركة فحل التي وقعت في القرن السابع الميلادي.','تحيط بالموقع ينابيع ومزارع، ويُنظر إليه كمكان يتيح قراءة تاريخ المنطقة طبقة فوق طبقة.'],
 explore:[['مجمع الكنائس البيزنطية','كنيسة ومجمع من القرنين الخامس والسادس يطلّان على الغور.'],['التل القديم','تلّ أثري تراكمت فيه مدن متعاقبة من العصر البرونزي وما بعده.'],['المسجد المملوكي','بقايا مسجد من العصر المملوكي تشهد على استمرار الحياة في الموقع.']],
 season:'الشتاء والربيع',dur:'ساعتان'},
{id:'himma',ar:'الحمة الأردنية',en:'Al-Himma Hot Springs',region:'north',cat:'nature',art:'springs',ll:[32.6335,35.7025],approx:true,gov:'محافظة إربد',near:'في وادي اليرموك قرب أم قيس',
 intro:'ينابيع حارة معدنية في وادي اليرموك، قصدها الناس للاستشفاء منذ العصور القديمة.',
 about:['تنبع المياه الساخنة من باطن الأرض في عمق وادي اليرموك قرب أم قيس، وارتبطت المنطقة منذ العصر الروماني بالحمّامات العلاجية. وتتميز بدفء مناخها في الشتاء ووفرة مياهها.','تفاصيل المرافق والخدمات الحالية تُضاف بعد التحقق منها.'],
 explore:[['الينابيع الساخنة','مياه معدنية دافئة تتدفق على مدار العام.'],['وادي اليرموك','وادٍ عميق تحيط به المنحدرات الخضراء ويفصل الأردن عن الجولان.'],['القرب من أم قيس','يمكن جمع الزيارتين في رحلة واحدة إلى أقصى الشمال.']],
 season:'الشتاء والربيع',dur:'نصف يوم'},
{id:'yarmouk',ar:'محمية غابات اليرموك',en:'Yarmouk Forest Reserve',region:'north',cat:'reserve',art:'forest',ll:[32.62,35.73],approx:true,gov:'محافظة إربد',near:'المنحدرات المطلة على نهر اليرموك',
 intro:'محمية في شمال المملكة تحمي بيئة حرجية وتنوعًا نباتيًا وحيويًا على منحدرات اليرموك.',
 about:['تقع المحمية في الأطراف الشمالية الغربية، حيث تلتقي المرتفعات بوادي اليرموك، وتحافظ على غطاء حرجي نادر في هذا الجزء من البلاد.','هذه الصفحة بحاجة إلى مراجعة المعلومات التفصيلية والإحداثيات الدقيقة قبل النشر النهائي.'],
 explore:[['الغطاء الحرجي','أشجار حرجية وأعشاب برية تتبدل ألوانها بين فصول السنة.'],['مسارات المشي','مسارات طبيعية بين المنحدرات، تُحدَّد تفاصيلها لاحقًا.'],['الحياة البرية','طيور وكائنات برية تعتمد على موائل الوادي.']],
 season:'الربيع',dur:'نصف يوم'},
/* ---------------- CENTRAL ---------------- */
{id:'citadel',ar:'جبل القلعة',en:'Amman Citadel',region:'central',cat:'arch',art:'columns',ll:[31.9547,35.9345],gov:'العاصمة عمّان',near:'أحد جبال عمّان القديمة وسط المدينة',
 intro:'تلّ يتوسط عمّان تتراكم عليه آثار الأمونيين والرومان والبيزنطيين والأمويين.',
 about:['اتخذ العمونيون هذا الجبل مركزًا لعاصمتهم ربّة عمّون، وبقي مأهولًا عبر العصور. وفي القرن الثاني الميلادي أُقيم عليه معبد هرقل، ثم شُيّد فيه المجمع الأموي بقصره وبوابته.','من هذه القمة تنتشر عمّان بجبالها وأحيائها، ويمكن قراءة تاريخ المدينة في طبقاتها المتعاقبة.'],
 explore:[['معبد هرقل','أعمدة ضخمة بقيت من معبد روماني من القرن الثاني الميلادي.'],['القصر الأموي','مجمع إداري من العصر الأموي ببوابته وقاعاته المقبّبة.'],['المتحف الأثري','المتحف الأثري الأردني، ويعرض مقتنيات من عصور متعددة.']],
 season:'الربيع والخريف',dur:'ساعتان'},
{id:'theatre',ar:'المدرج الروماني',en:'Roman Theatre, Amman',region:'central',cat:'arch',art:'theatre',ll:[31.9516,35.9393],gov:'العاصمة عمّان',near:'وسط البلد، قرب ساحة الهاشمية',
 intro:'مدرج روماني محفور في سفح الجبل، يتوسط قلب عمّان القديمة.',
 about:['شُيّد المدرج في القرن الثاني الميلادي في عهد الإمبراطور أنطونينوس بيوس، ويتسع لنحو ستة آلاف متفرج. وحُفر في المنحدر بحيث يتجه نحو الشمال ليخفف حرارة الشمس عن الجمهور.','ما يزال المكان حيًا بالمناسبات والعروض، ويجاوره الأوديون الصغير وساحة الهاشمية.'],
 explore:[['المقاعد المتدرجة','مدرجات حجرية تنحدر في تناسق مهيب نحو خشبة المسرح.'],['متحفا الفلكلور والتقاليد','متحفان صغيران داخل المدرج يعرضان الحياة التقليدية.'],['الأوديون وساحة الهاشمية','مسرح صغير مجاور وساحة تجمع أهل المدينة.']],
 season:'على مدار العام',dur:'ساعة'},
{id:'madaba',ar:'مادبا',en:'Madaba',region:'central',cat:'cultural',art:'mosaic',ll:[31.716,35.7939],gov:'محافظة مادبا',near:'على بعد نحو 30 كم جنوب غرب عمّان',
 intro:'مدينة الفسيفساء، حيث تحفظ الكنائس والأرضيات خرائط وقصصًا من العصر البيزنطي.',
 about:['اشتهرت مادبا بفسيفساء كنائسها وبيوتها القديمة، وفي كنيسة القديس جاورجيوس للروم الأرثوذكس تُحفظ خريطة مادبا الفسيفسائية التي تعود إلى العصر البيزنطي.','ويمتزج في مادبا الإرث المسيحي والإسلامي، وتحتضن مدارس ومتاحف وورش حِرف تحافظ على فن الفسيفساء.'],
 explore:[['خريطة مادبا','لوحة فسيفسائية قديمة ترسم أرض الشام ومدنها.'],['الحديقة الأثرية','أرضيات فسيفسائية وطريق روماني معمّد وسط المدينة.'],['كنيسة الرسل','كنيسة تضم أرضية فسيفسائية مميزة.']],
 season:'الربيع والخريف',dur:'ثلاث ساعات'},
{id:'nebo',ar:'جبل نيبو',en:'Mount Nebo',region:'central',cat:'cultural',art:'dome',ll:[31.7679,35.7259],gov:'محافظة مادبا',near:'غرب مادبا، مشرفًا على وادي الأردن',
 intro:'قمة مقدسة أطلّ منها النبي موسى، كما تروي التقاليد، على الأرض الموعودة.',
 about:['يرتفع جبل نيبو فوق الغور والبحر الميت، وتُقدَّس قمته في التقاليد الدينية. وتقوم عليه كنيسة تذكارية بيزنطية بأرضيات فسيفسائية تحميها الرهبنة الفرنسيسكانية.','في الأيام الصافية تمتد الرؤية عبر الوادي إلى البحر الميت وأفق فلسطين.'],
 explore:[['كنيسة التذكار','كنيسة بيزنطية تحتضن فسيفساء من القرن السادس.'],['نصب الحية النحاسية','عمل فني معاصر يرمز إلى الحية النحاسية وإلى الصليب.'],['منصة الإطلالة','موضع يكشف وادي الأردن والبحر الميت.']],
 season:'الربيع والخريف',dur:'ساعة ونصف'},
{id:'dead-sea',ar:'البحر الميت',en:'The Dead Sea',region:'central',cat:'nature',art:'sea',ll:[31.55,35.6],approx:true,gov:'محافظتا البلقاء ومادبا',near:'الشاطئ الشرقي، أخفض بقعة على اليابسة',
 intro:'أخفض مكان على سطح الأرض، ببحيرة شديدة الملوحة تحملك فوق مائها.',
 about:['يقع البحر الميت على أكثر من 430 مترًا تحت مستوى سطح البحر، وتبلغ ملوحة مائه أضعاف ملوحة البحار المعتادة، فيطفو الإنسان عليه بسهولة. ويُعرف طينه ومعادنه باستخدامات العناية والاستشفاء.','ويتراجع منسوب البحر عامًا بعد عام، ما يجعل زيارته فرصة للتأمل في هشاشة هذا المشهد الفريد.'],
 explore:[['الطفو على الماء','تجربة الاستلقاء على سطح مياه عالية الملوحة.'],['طين البحر الميت','طين معدني يُستخدم للعناية بالبشرة.'],['الغروب فوق الغور','يلوّن الأفق خلف الجبال المقابلة بلون ذهبي.']],
 season:'الشتاء والربيع والخريف',dur:'نصف يوم'},
{id:'iraq-al-amir',ar:'عراق الأمير',en:'Iraq al-Amir',region:'central',cat:'arch',art:'blocks',ll:[31.909,35.759],gov:'محافظة عمّان',near:'وادي السير، غرب عمّان',
 intro:'قصر العبد الهلنستي بكتل حجرية ضخمة ونحوت أسود، في وادٍ أخضر غرب عمّان.',
 about:['شُيّد القصر، المعروف بقصر العبد، في القرن الثاني قبل الميلاد على يد عائلة طوبيا، ويُعد من أبرز الأبنية الهلنستية في المنطقة. وتتميز جدرانه بكتل كلسية هائلة ونحت أسود.','تحيط بالقصر أراضٍ زراعية وكهوف ووادٍ يجعل الزيارة إلى جانب التاريخ نزهة في الطبيعة.'],
 explore:[['قصر العبد','مبنى هلنستي مهيب بحجارته الضخمة.'],['نحت الأسود','تماثيل حيوانية منحوتة في الجدران.'],['وادي السير','وادٍ مخضر تتجه فيه الينابيع والمزارع.']],
 season:'الربيع',dur:'ساعتان'},
{id:'mujib',ar:'وادي الموجب',en:'Wadi Mujib',region:'central',cat:'reserve',art:'canyon',ll:[31.445,35.6],approx:true,gov:'محافظتا مادبا والكرك',near:'يصبّ في البحر الميت',
 intro:'محمية وادٍ عميق من أخفض المحميات في العالم، تنحدر مسالكه المائية نحو البحر الميت.',
 about:['ينحدر وادي الموجب من مرتفعات تفوق ألف متر حتى يصل إلى مستوى البحر الميت تحت سطح البحر. وتحمي المحمية تنوعًا نباتيًا وحيويًا ضمن جدرانه الصخرية الحمراء.','تُنظَّم فيه مسارات سير مائية موسمية، وتُعلن مواعيدها وشروطها عبر إدارة المحمية.'],
 explore:[['مسار السيق','ممر مائي بين جدران صخرية ضيقة.'],['المسارات المائية','تجارب السير داخل المياه في المواسم المتاحة.'],['إطلالة السد','منظر لمجرى الوادي بعمقه الأخّاذ.']],
 season:'يُعلن موسم المسارات المائية رسميًا',dur:'يوم كامل'},
{id:'machaerus',ar:'قلعة مكاور',en:'Machaerus (Mukawir)',region:'central',cat:'castle',art:'castle',ll:[31.5695,35.6358],gov:'محافظة مادبا',near:'قرية مكاور، فوق البحر الميت',
 intro:'قلعة هيرودية على قمة منفردة تطل على البحر الميت، يرتبط اسمها بنهاية يوحنا المعمدان.',
 about:['بنى الملك هيرودس الكبير القلعة والقصر على قمة معزولة لحماية الحدود، وتذكر الروايات التاريخية أن يوحنا المعمدان سُجن فيها. وهدمها الرومان في القرن الأول الميلادي.','من القمة تنفتح مياه البحر الميت وجباله في أحد أجمل مشاهد المملكة.'],
 explore:[['أعمدة القصر الهيرودي','أعمدة أُعيد نصبها في فناء القصر القديم.'],['إطلالة البحر الميت','أفق واسع يمتد حتى الجبال المقابلة.'],['قرية مكاور','قرية صغيرة عند سفح القلعة.']],
 season:'الربيع والخريف',dur:'ساعتان'},
/* ---------------- SOUTH ---------------- */
{id:'petra',ar:'البتراء',en:'Petra',region:'south',cat:'arch',art:'cliffs',ll:[30.3285,35.4444],gov:'محافظة معان',near:'وادي موسى، جنوب المملكة',
 intro:'عاصمة الأنباط المنحوتة في الصخر الوردي، أحد عجائب الدنيا السبع الجديدة.',
 about:['كانت البتراء مركز تجارة القوافل في العصور القديمة، وأبدع الأنباط في نحت واجهاتها الضخمة وقنوات مياهها. وأدرجتها اليونسكو في قائمة التراث العالمي عام 1985.','يبدأ الدخول عبر السيق، ممر ضيق بين جدران عالية، ثم تنفتح المدينة أمام الزائر عند الخزنة.'],
 explore:[['السيق','ممر صخري طويل تعلوه جدران شاهقة وتتخلله نقوش وقنوات.'],['الخزنة','الواجهة الأشهر، منحوتة بدقة في الصخر الوردي.'],['الدير','صرح هائل في أعلى الجبل، يُبلغ إليه بمئات الدرجات.']],
 season:'الربيع والخريف',dur:'يوم كامل'},
{id:'little-petra',ar:'البتراء الصغيرة',en:'Little Petra (Siq al-Barid)',region:'south',cat:'arch',art:'cliffs',ll:[30.386,35.4613],gov:'محافظة معان',near:'نحو 9 كم شمال البتراء',
 intro:'السيق البارد، ضاحية نبطية هادئة شمال البتراء بواجهات صخرية وممرات ضيقة.',
 about:['كانت البتراء الصغيرة محطة وسكنًا للتجار والقوافل القادمة إلى المدينة. وتنتشر فيها غرف منحوتة وأروقة ومعاصر ومدرجات مياه.','يعرفها الزوار بالبيت المرسوم الذي حفظ بقايا من الزخارف الجدارية.'],
 explore:[['البيت المرسوم','غرفة منحوتة بقيت فيها آثار رسوم جدارية قديمة.'],['الممرات الصخرية','أزقة ضيقة بين الجدران الصخرية الحمراء.'],['واجهات المعيشة','غرف منحوتة كانت للضيافة والسكن.']],
 season:'الربيع والخريف',dur:'ساعتان'},
{id:'wadi-rum',ar:'وادي رم',en:'Wadi Rum',region:'south',cat:'nature',art:'dunes',ll:[29.58,35.42],approx:true,gov:'محافظة العقبة',near:'نحو 60 كم شمال شرق العقبة',
 intro:'وادي القمر، صحراء من الرمال الحمراء والجبال الجرانيتية والبرية التي لا تنتهي.',
 about:['يمتد وادي رم بين جبال من الحجر الرملي والجرانيت وأودية رملية متسعة، وقد أُدرج في قائمة التراث العالمي لليونسكو. وارتبط بالثورة العربية الكبرى وبحياة البدو.','يحتضن نقوشًا وكتابات صخرية قديمة، ويتيح تجارب ليلية تحت سماء صافية.'],
 explore:[['جبل أم الدامي','أعلى قمة في الأردن.'],['أعمدة الحكمة السبعة','تكوين صخري شهير ارتبط باسم كتاب لورانس.'],['المخيمات البدوية','مبيت في الصحراء وعشاء تقليدي.']],
 season:'الخريف والربيع',dur:'يوم كامل أو ليلة'},
{id:'aqaba',ar:'العقبة',en:'Aqaba',region:'south',cat:'nature',art:'sea',ll:[29.532,35.0063],gov:'محافظة العقبة',near:'الميناء الوحيد للمملكة على البحر الأحمر',
 intro:'مدينة ساحلية على خليج العقبة، بشعابها المرجانية وتاريخها التجاري الطويل.',
 about:['العقبة منفذ الأردن البحري الوحيد، وتحتضن موقع آيلة الإسلامي القديم وقلعة مملوكية قرب الشاطئ. وتجذب الغواصين بشعابها المرجانية وحياتها البحرية الغنية.','يبقى طقسها دافئًا معظم العام، ما يجعلها وجهة شتوية محببة.'],
 explore:[['قلعة العقبة','قلعة مملوكية قرب الشاطئ.'],['الغوص والشعاب','مواقع غوص غنية بالشعاب المرجانية.'],['آيلة','بقايا مدينة إسلامية مبكرة.']],
 season:'الخريف إلى الربيع',dur:'يومان'},
{id:'dana',ar:'محمية ضانا',en:'Dana Biosphere Reserve',region:'south',cat:'reserve',art:'forest',ll:[30.679,35.607],gov:'محافظة الطفيلة',near:'قرية ضانا الحجرية على حافة الوادي',
 intro:'محمية من أكبر محميات الأردن، تتنوع فيها المرتفعات والوديان حتى وادي عربة.',
 about:['تنحدر المحمية من الجبال المرتفعة إلى وادي عربة، فتجمع بيئات متنوعة في مساحة واحدة. وتقوم عند حافتها قرية ضانا الحجرية التي تعود إلى العهد العثماني.','تُدار برامج المبيت والمسارات فيها عبر الجمعية الملكية لحماية الطبيعة.'],
 explore:[['قرية ضانا','بيوت حجرية على حافة الوادي.'],['مسارات المشي','مسارات تهبط بين الجبال نحو وادي عربة.'],['نُزل ضانا','نُزل للمبيت ضمن القرية.']],
 season:'الربيع والخريف',dur:'يوم إلى يومين'},
{id:'shobak',ar:'قلعة الشوبك',en:'Shobak Castle',region:'south',cat:'castle',art:'castle',ll:[30.532,35.561],gov:'محافظة معان',near:'على جبل مشرف على وادي عربة',
 intro:'قلعة صليبية بُنيت عام 1115 على قمة معزولة، وعُرفت باسم مونتريال.',
 about:['بنى بلدوين الأول ملك القدس القلعة سنة 1115 للميلاد وسمّاها مونتريال، ثم استعادها صلاح الدين وتوالت عليها الإضافات المملوكية.','من أشهر ما فيها درج سري محفور داخل الجبل يهبط إلى نبع الماء.'],
 explore:[['الدرج السري','درج طويل نحو النبع داخل الجبل.'],['الإضافات المملوكية','نقوش وأبراج من العصر المملوكي.'],['إطلالة وادي عربة','أفق واسع نحو الغرب.']],
 season:'الربيع والخريف',dur:'ساعتان'},
{id:'karak',ar:'قلعة الكرك',en:'Karak Castle',region:'south',cat:'castle',art:'castle',ll:[31.1808,35.701],gov:'محافظة الكرك',near:'وسط مدينة الكرك، على هضبة مرتفعة',
 intro:'من أضخم القلاع الصليبية في المنطقة، بقاعاتها المقبّبة وممراتها الطويلة.',
 about:['بُنيت القلعة في القرن الثاني عشر الميلادي في عهد الصليبيين، وارتبطت بصراعهم مع صلاح الدين. وأضاف إليها المماليك لاحقًا أبراجًا وتحصينات.','تضم القلعة اليوم متحف الكرك الأثري، وتطل على المدينة والوديان المحيطة.'],
 explore:[['القاعات المقبّبة','ممرات طويلة وغرف حجرية.'],['متحف الكرك','قطع من عصور متعددة.'],['الأبراج المملوكية','إضافات من العصر المملوكي.']],
 season:'الربيع والخريف',dur:'ساعتان'},
{id:'ben-hammad',ar:'وادي بن حماد',en:'Wadi Ben Hammad',region:'south',cat:'nature',art:'canyon',ll:[31.2,35.6],approx:true,gov:'محافظة الكرك',near:'ينحدر نحو البحر الميت',
 intro:'وادٍ جبلي أخضر قرب الكرك، تجري فيه المياه وتحيط به المنحدرات الصخرية.',
 about:['يتسلل الوادي بين المنحدرات نحو البحر الميت، وتنمو على جانبيه نباتات وتتدفق فيه مياه في فصول عديدة.','المعلومات التفصيلية والإحداثيات الدقيقة بحاجة إلى توثيق قبل النشر.'],
 explore:[['المجرى المائي','جدول تتبدل غزارته بتبدل الفصول.'],['المسارات','دروب مشي بين المنحدرات.'],['الإطلالة على الغور','مناظر مفتوحة نحو البحر الميت.']],
 season:'الربيع',dur:'نصف يوم'},
{id:'feynan',ar:'فينان',en:'Wadi Feynan',region:'south',cat:'nature',art:'canyon',ll:[30.624,35.478],gov:'محافظة الطفيلة',near:'الجزء المنخفض من محمية ضانا',
 intro:'وادٍ في أدنى ضانا، حيث التعدين القديم للنحاس والنُزل البيئي والمسارات الصحراوية.',
 about:['كان فينان موقعًا لتعدين النحاس منذ العصور الحجرية الحديثة حتى العصر الروماني، ويحتضن اليوم نُزلًا بيئيًا تُضاء غرفه بالشموع.','يربط الوادي بين مرتفعات ضانا ووادي عربة، فتتغير ألوان المشهد على امتداد المسار.'],
 explore:[['نُزل فينان البيئي','نُزل يعمل بالطاقة الشمسية وسط الوادي.'],['مواقع النحاس القديمة','آثار تعدين من عصور متعاقبة.'],['مسارات وادي عربة','دروب صحراوية للمشي.']],
 season:'الخريف والشتاء والربيع',dur:'يوم إلى يومين'},
{id:'jabal-haroun',ar:'جبل هارون',en:'Jabal Haroun',region:'south',cat:'cultural',art:'dome',ll:[30.3167,35.4],approx:true,gov:'محافظة معان',near:'قرب البتراء',
 intro:'قمة قرب البتراء يعلوها مقام أبيض يُنسب إلى النبي هارون.',
 about:['يرتفع جبل هارون فوق وادي موسى، ويقوم على قمته مقام ذو قبة بيضاء ارتبط بتقاليد دينية متوارثة. وتوجد على سفحه بقايا دير بيزنطي.','يُنصح بالصعود برفقة دليل محلي، وتُضاف التفاصيل العملية لاحقًا.'],
 explore:[['المقام','قبة بيضاء على القمة.'],['مسار من البتراء','طريق جبلي يبدأ من محيط الموقع.'],['إطلالة وادي عربة','أفق فسيح نحو الغرب.']],
 season:'الربيع والخريف',dur:'نصف يوم'},
{id:'maein',ar:'حمامات ماعين',en:"Ma'in Hot Springs",region:'central',cat:'nature',art:'springs',ll:[31.6,35.6],approx:true,gov:'محافظة مادبا',near:'وادي زرقاء ماعين، على الطريق نحو البحر الميت',
 intro:'ينابيع حارة معدنية تتدفق من الجبل بشلالات دافئة بين الصخور، قصدها الناس للاستجمام والاستشفاء.',
 about:['تنبع مياه ماعين الحارة من باطن الأرض في وادٍ عميق قرب مادبا، وتُعرف بمعادنها واستخدامها في الاستجمام والعلاج الطبيعي.','تفاصيل المرافق والأسعار والإحداثيات الدقيقة تُضاف بعد التحقق منها.'],
 explore:[['الشلالات الساخنة','مياه دافئة تنحدر بين الصخور وتختلف حرارتها من نبع إلى آخر.'],['وادي زرقاء ماعين','وادٍ عميق تحيط به المنحدرات الصخرية.'],['الطريق إلى البحر الميت','يسهل جمع الزيارتين في يوم واحد.']],
 season:'الخريف والشتاء والربيع',dur:'نصف يوم'},
{id:'pink-lake',ar:'البحيرة الملونة (الوردية)',en:'The Colored (Pink) Lake',region:'central',cat:'nature',art:'sea',ll:[31.3,35.54],approx:true,gov:TODO,near:'الشاطئ الشرقي للبحر الميت',
 intro:'بحيرة ملونة قرب شاطئ البحر الميت الشرقي، يميل لونها إلى الوردي، وتُذكر ضمن جولات الشاطئ والملح.',
 about:['هذه الصفحة قيد الإعداد. موقع البحيرة على الخريطة تقريبي، ويُحدَّث بعد تثبيت الإحداثيات الدقيقة.','قد يتغير مظهر مثل هذه البحيرات بحسب الموسم والظروف، لذلك تُضاف التفاصيل بعد التحقق.'],
 explore:[['لون البحيرة','يميل إلى الوردي، وقد يختلف بحسب الموسم.'],['شاطئ الملح','يُذكر في الجولات المحلية ضمن الزيارة نفسها.'],['البحر الميت','أخفض نقطة على اليابسة على مقربة من الموقع.']],
 season:TODO,dur:TODO}
];
DEST.forEach((d,i)=>{d.n=i+1;d.purpose=WELLNESS.has(d.id)?'wellness':'tourism'});

/* English content, keyed by destination id. Mirrors DEST fields: gov, near, intro, about[], explore[[title,text]], season, dur */
const EN = {
'umm-qais':{gov:'Irbid Governorate',near:'Far north-west corner of the kingdom, above the Yarmouk valley',
 intro:'Ancient Gadara, one of the Decapolis cities, looks from its hilltop over the Yarmouk valley, the Sea of Galilee and the Golan Heights.',
 about:['Gadara was a thriving cultural centre in the Hellenistic and Roman periods, known for its philosophers and poets. Its buildings and columns were raised in the black basalt typical of the area.','In Ottoman times a small village grew over the ruins, and some of its stone houses still stand among the antiquities, so visitors walk through two layers of time at once.'],
 explore:[['The West Theatre','A black basalt theatre with tiered seating that shows the unique character of the city.'],['The colonnaded street','A Roman road lined with columns and old shops, broken by the remains of arches.'],['Beit Rousan','An Ottoman house turned museum that tells the story of the village above the old city.']],
 season:'Spring and autumn',dur:'Two to three hours'},
'jerash':{gov:'Jerash Governorate',near:'About 50 km north of Amman',
 intro:'Roman Gerasa, among the best preserved provincial Roman cities in the world, with colonnaded streets, theatres and plazas.',
 about:['Jerash flourished as one of the Decapolis cities and reached its height in the 2nd and 3rd centuries AD. Roman temples and Byzantine churches stand side by side in one site that tells of succeeding civilisations.','Sand buried parts of the city for centuries and preserved them. Modern excavation has revealed a street grid and plazas that are almost complete.'],
 explore:[['Hadrian\'s Arch','A triumphal gate at the southern entrance, built to honour the visit of Emperor Hadrian.'],['The Oval Plaza','An oval space ringed by columns that opens onto the main colonnaded street.'],['Temple of Artemis and the South Theatre','A grand temple with Corinthian columns, and a theatre where voices carry clearly.']],
 season:'Spring and autumn',dur:'Three hours or more'},
'ajloun':{gov:'Ajloun Governorate',near:'On Jabal Auf, among the Ajloun highlands',
 intro:'An Ayyubid castle that watches over the Jordan Valley and the northern trade routes from Jabal Auf.',
 about:['It was built by Izz al-Din Usama, one of Saladin\'s commanders, in the late 12th century to guard against the Crusaders and to control nearby iron mines. Further expansions and repairs followed in the Ayyubid and Mamluk periods.','The castle was a link in a chain of signal castles that communicated by light, and it still overlooks the Ajloun forest of pine and oak.'],
 explore:[['The vaulted halls','Interlocking stone corridors and rooms that reveal medieval defensive design.'],['The moat and towers','A moat cut into the rock and towers that watch the surrounding valleys.'],['View over the valley','From the upper roofs the Jordan Valley and beyond can be seen on clear days.']],
 season:'Spring and autumn',dur:'An hour and a half'},
'pella':{gov:'Irbid Governorate',near:'At the foot of the highlands above the Jordan Valley',
 intro:'An archaeological site inhabited since prehistory, where layers of civilisations pile up on the edge of the Jordan Valley.',
 about:['Pella holds remains from the Stone and Bronze Ages and the Greek, Roman, Byzantine and Islamic periods, and was one of the Decapolis cities. Its name is tied to the Battle of Fahl in the 7th century AD.','Springs and farmland surround the site, which lets visitors read the history of the region layer by layer.'],
 explore:[['The Byzantine church complex','A church and compound from the 5th and 6th centuries overlooking the valley.'],['The ancient tell','An archaeological mound where successive cities were stacked from the Bronze Age onwards.'],['The Mamluk mosque','The remains of a mosque from the Mamluk era that show life continued on the site.']],
 season:'Winter and spring',dur:'Two hours'},
'himma':{gov:'Irbid Governorate',near:'In the Yarmouk valley near Umm Qais',
 intro:'Hot mineral springs in the Yarmouk valley, visited for healing since ancient times.',
 about:['Hot water rises from deep underground in the Yarmouk valley near Umm Qais, and the area has been tied to healing baths since Roman times. It is known for its warm winter climate and plentiful water.','Details of current facilities and services will be added once verified.'],
 explore:[['The hot springs','Warm mineral water that flows all year round.'],['The Yarmouk valley','A deep valley with green slopes that separates Jordan from the Golan.'],['Close to Umm Qais','Both visits can be combined into one trip to the far north.']],
 season:'Winter and spring',dur:'Half a day'},
'yarmouk':{gov:'Irbid Governorate',near:'Slopes overlooking the Yarmouk River',
 intro:'A reserve in the north of the kingdom that protects woodland habitat and plant and animal diversity on the Yarmouk slopes.',
 about:['The reserve lies in the north-west, where the highlands meet the Yarmouk valley, and keeps a woodland cover that is rare in this part of the country.','This page needs detailed information and precise coordinates to be reviewed before final publication.'],
 explore:[['Woodland cover','Forest trees and wild grasses whose colours change through the seasons.'],['Walking trails','Natural paths between the slopes; details to be set later.'],['Wildlife','Birds and wild creatures that depend on the valley habitats.']],
 season:'Spring',dur:'Half a day'},
'citadel':{gov:'Amman',near:'One of the old hills of Amman, in the city centre',
 intro:'A hill in the middle of Amman carrying the remains of the Ammonites, Romans, Byzantines and Umayyads.',
 about:['The Ammonites made this hill the centre of their capital Rabbath Ammon, and it stayed inhabited through the ages. In the 2nd century AD the Temple of Hercules was raised on it, and later the Umayyad complex with its palace and gate.','From this summit Amman spreads out with its hills and neighbourhoods, and the history of the city can be read in its layers.'],
 explore:[['Temple of Hercules','Huge columns left from a Roman temple of the 2nd century AD.'],['The Umayyad Palace','An administrative complex of the Umayyad era with its gate and vaulted halls.'],['The archaeological museum','The Jordan Archaeological Museum, displaying finds from many periods.']],
 season:'Spring and autumn',dur:'Two hours'},
'theatre':{gov:'Amman',near:'Downtown, near Hashemite Plaza',
 intro:'A Roman theatre cut into the hillside at the heart of old Amman.',
 about:['The theatre was built in the 2nd century AD under Emperor Antoninus Pius and seats about six thousand spectators. It was cut into the slope facing north so the sun would be gentler on the audience.','The place is still alive with events and performances, and sits beside the small Odeon and Hashemite Plaza.'],
 explore:[['The tiered seating','Stone steps that descend in majestic order toward the stage.'],['Folklore and Popular Traditions museums','Two small museums inside the theatre showing traditional life.'],['The Odeon and Hashemite Plaza','A small theatre next door and a square where the city gathers.']],
 season:'All year',dur:'One hour'},
'madaba':{gov:'Madaba Governorate',near:'About 30 km south-west of Amman',
 intro:'The city of mosaics, where churches and floors keep maps and stories from the Byzantine era.',
 about:['Madaba is famous for the mosaics of its churches and old houses. In the Greek Orthodox Church of St George the Madaba Mosaic Map, from the Byzantine era, is preserved.','Christian and Islamic heritage mingle in Madaba, which holds schools, museums and workshops that keep the art of mosaic alive.'],
 explore:[['The Madaba Map','An ancient mosaic that draws the land of the Levant and its cities.'],['The Archaeological Park','Mosaic floors and a Roman colonnaded road in the middle of the city.'],['Church of the Apostles','A church with a distinctive mosaic floor.']],
 season:'Spring and autumn',dur:'Three hours'},
'nebo':{gov:'Madaba Governorate',near:'West of Madaba, overlooking the Jordan Valley',
 intro:'A sacred summit from which, tradition says, the Prophet Moses looked out over the Promised Land.',
 about:['Mount Nebo rises above the valley and the Dead Sea, and its summit is revered in religious tradition. A Byzantine memorial church with mosaic floors stands on it, protected by the Franciscans.','On clear days the view stretches across the valley to the Dead Sea and the horizon of Palestine.'],
 explore:[['The Memorial Church','A Byzantine church holding mosaics from the 6th century.'],['The Brazen Serpent monument','A contemporary work symbolising the bronze serpent and the cross.'],['The viewing platform','A spot that opens the Jordan Valley and the Dead Sea.']],
 season:'Spring and autumn',dur:'An hour and a half'},
'dead-sea':{gov:'Balqa and Madaba governorates',near:'The eastern shore, the lowest place on land',
 intro:'The lowest place on the surface of the earth, a very salty lake that holds you up on its water.',
 about:['The Dead Sea lies more than 430 metres below sea level, and its water is many times saltier than ordinary seas, so a person floats with ease. Its mud and minerals are known for care and healing uses.','The sea level falls year after year, which makes a visit a chance to reflect on the fragility of this unique landscape.'],
 explore:[['Floating on the water','The experience of lying on the surface of highly saline water.'],['Dead Sea mud','A mineral mud used for skin care.'],['Sunset over the valley','Colours the horizon behind the opposite mountains with gold.']],
 season:'Winter, spring and autumn',dur:'Half a day'},
'iraq-al-amir':{gov:'Amman Governorate',near:'Wadi al-Seer, west of Amman',
 intro:'The Hellenistic Qasr al-Abd, with huge stone blocks and carved lions, in a green valley west of Amman.',
 about:['The palace, known as Qasr al-Abd, was built in the 2nd century BC by the Tobiad family and is among the most notable Hellenistic buildings in the region. Its walls are noted for huge limestone blocks and carved animals.','Farmland, caves and a valley surround the palace, so a visit is a walk in nature as well as in history.'],
 explore:[['Qasr al-Abd','A majestic Hellenistic building of enormous stones.'],['The carved lions','Animal sculptures carved into the walls.'],['Wadi al-Seer','A green valley of springs and farms.']],
 season:'Spring',dur:'Two hours'},
'mujib':{gov:'Madaba and Karak governorates',near:'Flows into the Dead Sea',
 intro:'A reserve in a deep canyon, among the lowest in the world, whose water routes fall toward the Dead Sea.',
 about:['Wadi Mujib drops from highlands above a thousand metres to the Dead Sea level below sea level. The reserve protects a variety of plant and animal life within its red rock walls.','Seasonal water trails are organised there, and their dates and conditions are announced by the reserve management.'],
 explore:[['The Siq trail','A water passage between narrow rock walls.'],['Water trails','Walking through water in the seasons when it is open.'],['Dam viewpoint','A view of the valley course in all its striking depth.']],
 season:'The water trail season is announced officially',dur:'A full day'},
'machaerus':{gov:'Madaba Governorate',near:'Mukawir village, above the Dead Sea',
 intro:'A Herodian fortress on a lone summit overlooking the Dead Sea, whose name is tied to the end of John the Baptist.',
 about:['King Herod the Great built the fortress and palace on an isolated summit to guard the frontier, and historical accounts say John the Baptist was imprisoned there. The Romans destroyed it in the 1st century AD.','From the summit the Dead Sea and its mountains open out in one of the finest views in the kingdom.'],
 explore:[['The Herodian palace columns','Columns re-erected in the courtyard of the old palace.'],['View of the Dead Sea','A wide horizon reaching to the opposite mountains.'],['Mukawir village','A small village at the foot of the castle.']],
 season:'Spring and autumn',dur:'Two hours'},
'petra':{gov:'Ma\'an Governorate',near:'Wadi Musa, southern Jordan',
 intro:'The Nabataean capital carved into rose-coloured rock, one of the New Seven Wonders of the World.',
 about:['Petra was the centre of caravan trade in ancient times, and the Nabataeans excelled at carving its great facades and water channels. UNESCO inscribed it on the World Heritage List in 1985.','Entry is through the Siq, a narrow passage between high walls, and then the city opens before the visitor at the Treasury.'],
 explore:[['The Siq','A long rock passage under towering walls, broken by carvings and channels.'],['The Treasury','The most famous facade, carved with precision in the rose rock.'],['The Monastery','A vast monument high on the mountain, reached by hundreds of steps.']],
 season:'Spring and autumn',dur:'A full day'},
'little-petra':{gov:'Ma\'an Governorate',near:'About 9 km north of Petra',
 intro:'Siq al-Barid, a quiet Nabataean suburb north of Petra with rock facades and narrow passages.',
 about:['Little Petra was a stopping place and home for merchants and caravans coming to the city. It holds carved rooms, porticoes, presses and water steps.','Visitors know it for the Painted House, which kept remains of wall decoration.'],
 explore:[['The Painted House','A carved room that kept traces of old wall paintings.'],['The rock passages','Narrow lanes between red rock walls.'],['Living quarters','Carved rooms used for hospitality and dwelling.']],
 season:'Spring and autumn',dur:'Two hours'},
'wadi-rum':{gov:'Aqaba Governorate',near:'About 60 km north-east of Aqaba',
 intro:'The Valley of the Moon, a desert of red sand, granite mountains and endless wilderness.',
 about:['Wadi Rum stretches between sandstone and granite mountains and wide sandy valleys, and is on UNESCO\'s World Heritage List. It is linked to the Great Arab Revolt and to Bedouin life.','It holds ancient inscriptions and rock writing, and offers nights under a clear sky.'],
 explore:[['Jabal Umm al-Dami','The highest peak in Jordan.'],['The Seven Pillars of Wisdom','A famous rock formation tied to the name of Lawrence\'s book.'],['Bedouin camps','A night in the desert and a traditional dinner.']],
 season:'Autumn and spring',dur:'A full day or a night'},
'aqaba':{gov:'Aqaba Governorate',near:'The kingdom\'s only port on the Red Sea',
 intro:'A coastal city on the Gulf of Aqaba, with coral reefs and a long trading history.',
 about:['Aqaba is Jordan\'s only sea outlet, and holds the old Islamic site of Ayla and a Mamluk fort near the shore. It draws divers with its coral reefs and rich marine life.','Its weather stays warm most of the year, which makes it a popular winter destination.'],
 explore:[['Aqaba Fort','A Mamluk fort near the shore.'],['Diving and reefs','Dive sites rich in coral reef.'],['Ayla','Remains of an early Islamic city.']],
 season:'Autumn to spring',dur:'Two days'},
'dana':{gov:'Tafilah Governorate',near:'The stone village of Dana on the edge of the valley',
 intro:'One of Jordan\'s largest reserves, where highlands and valleys vary all the way down to Wadi Araba.',
 about:['The reserve descends from high mountains to Wadi Araba, so it gathers varied habitats in one area. On its edge stands the stone village of Dana, which dates to Ottoman times.','Stays and trails are run through the Royal Society for the Conservation of Nature.'],
 explore:[['Dana village','Stone houses on the edge of the valley.'],['Walking trails','Trails that drop between the mountains toward Wadi Araba.'],['Dana Guesthouse','A guesthouse for staying within the village.']],
 season:'Spring and autumn',dur:'One to two days'},
'shobak':{gov:'Ma\'an Governorate',near:'On a mountain overlooking Wadi Araba',
 intro:'A Crusader castle built in 1115 on an isolated summit, known as Montreal.',
 about:['Baldwin I, king of Jerusalem, built the castle in 1115 AD and named it Montreal. Saladin later recaptured it and Mamluk additions followed.','Among its best known features is a secret stair cut inside the mountain that descends to the water spring.'],
 explore:[['The secret stair','A long stair down to the spring inside the mountain.'],['Mamluk additions','Inscriptions and towers from the Mamluk era.'],['View of Wadi Araba','A wide horizon to the west.']],
 season:'Spring and autumn',dur:'Two hours'},
'karak':{gov:'Karak Governorate',near:'In the centre of Karak city, on a high plateau',
 intro:'One of the largest Crusader castles in the region, with vaulted halls and long passages.',
 about:['The castle was built in the 12th century AD under the Crusaders and is tied to their struggle with Saladin. The Mamluks later added towers and fortifications.','It now holds the Karak Archaeological Museum and overlooks the city and surrounding valleys.'],
 explore:[['The vaulted halls','Long passages and stone rooms.'],['Karak Museum','Pieces from many periods.'],['The Mamluk towers','Additions from the Mamluk era.']],
 season:'Spring and autumn',dur:'Two hours'},
'ben-hammad':{gov:'Karak Governorate',near:'Descends toward the Dead Sea',
 intro:'A green mountain valley near Karak, where water runs and rocky slopes surround it.',
 about:['The valley winds between slopes toward the Dead Sea, with plants growing on either side and water flowing through much of the year.','Detailed information and precise coordinates need to be documented before publication.'],
 explore:[['The stream','A brook whose volume changes with the seasons.'],['The trails','Walking paths between the slopes.'],['View over the valley','Open views toward the Dead Sea.']],
 season:'Spring',dur:'Half a day'},
'feynan':{gov:'Tafilah Governorate',near:'The lower part of Dana Reserve',
 intro:'A valley at the foot of Dana, with ancient copper mining, an eco-lodge and desert trails.',
 about:['Feynan was a copper mining site from the Neolithic until the Roman period, and today holds an eco-lodge lit by candles.','The valley links the Dana highlands to Wadi Araba, so the colours of the scenery change along the trail.'],
 explore:[['Feynan Ecolodge','A solar-powered lodge in the middle of the valley.'],['Ancient copper sites','Mining remains from successive eras.'],['Wadi Araba trails','Desert paths for walking.']],
 season:'Autumn, winter and spring',dur:'One to two days'},
'jabal-haroun':{gov:'Ma\'an Governorate',near:'Near Petra',
 intro:'A peak near Petra crowned by a white shrine attributed to the Prophet Aaron.',
 about:['Jabal Haroun rises above Wadi Musa, and on its summit stands a white-domed shrine tied to inherited religious tradition. The remains of a Byzantine monastery lie on its slope.','Climbing with a local guide is advised, and practical details will be added later.'],
 explore:[['The shrine','A white dome on the summit.'],['The trail from Petra','A mountain route that starts near the site.'],['View of Wadi Araba','A broad horizon to the west.']],
 season:'Spring and autumn',dur:'Half a day'},
'maein':{gov:'Madaba Governorate',near:"Wadi Zarqa Ma'in, on the way to the Dead Sea",
 intro:'Hot mineral springs that pour down the mountain in warm waterfalls between the rocks, visited for relaxation and wellness.',
 about:["Ma'in's hot water rises from deep underground in a steep valley near Madaba. It is known for its minerals and for use in relaxation and natural therapy.",'Facilities, prices and exact coordinates will be added once verified.'],
 explore:[['The hot waterfalls','Warm water runs down the rocks, and the temperature differs from one spring to the next.'],["Wadi Zarqa Ma'in",'A deep valley framed by rocky slopes.'],['The road to the Dead Sea','Easy to combine with a Dead Sea visit in one day.']],
 season:'Autumn, winter and spring',dur:'Half a day'},
'pink-lake':{gov:'To be added',near:'Eastern shore of the Dead Sea',
 intro:'A colored lake near the eastern Dead Sea shore, tinted pink, mentioned in local shore and salt-beach tours.',
 about:['This page is in progress. The lake position on the map is approximate and will be updated once exact coordinates are confirmed.','The look of lakes like this can change with the season and conditions, so details will be added after verification.'],
 explore:[['The lake color','Leans pink, and may vary by season.'],['The salt beach','Mentioned in local tours as part of the same visit.'],['The Dead Sea','The lowest point on land, close by.']],
 season:'To be added',dur:'To be added'}
};

/* Geographic data. All coordinates are [latitude, longitude].
   Jordan's outline is compiled from surveyed border points (Syria, Iraq, Saudi Arabia, Jordan River,
   Dead Sea mid-line, Wadi Araba, Gulf of Aqaba). Replace JORDAN with a Natural Earth / GADM polygon for survey-grade edges. */
const JORDAN = [
 [32.394,35.5457],[32.50,35.565],[32.60,35.575],[32.655,35.62],[32.68,35.67],[32.709,35.72],[32.72,35.80],[32.70,35.88],
 [32.63,35.96],[32.58,36.01],[32.50,36.15],[32.42,36.45],[32.313,36.834],[33.379,38.792],[32.161,39.195],[32.010,39.005],
 [31.508,37.002],[30.508,37.999],[30.339,37.668],[30.004,37.504],[29.865,36.741],[29.505,36.501],[29.197,36.069],[29.26,35.60],
 [29.357,34.956],[29.45,34.975],[29.515,34.998],[29.55,34.985],[29.58,34.99],[29.80,35.00],[30.10,35.12],[30.35,35.15],
 [30.55,35.22],[30.84,35.34],[31.10,35.43],[31.30,35.47],[31.50,35.51],[31.68,35.53],[31.7825,35.5453],[31.95,35.55],
 [32.10,35.55],[32.25,35.55]
];
const DEADSEA = [[31.785,35.470],[31.785,35.545],[31.70,35.585],[31.57,35.585],[31.45,35.575],[31.33,35.54],[31.24,35.46],[31.15,35.48],[31.03,35.49],[31.02,35.42],[31.15,35.41],[31.25,35.385],[31.40,35.39],[31.52,35.39],[31.65,35.42]];
const GALILEE = [[32.895,35.575],[32.85,35.63],[32.76,35.64],[32.70,35.585],[32.76,35.53],[32.85,35.53]];
const MED = [[34.4,32.6],[34.4,35.75],[34.0,35.65],[33.89,35.5],[33.3,35.2],[33.05,35.1],[32.92,35.07],[32.82,34.99],[32.45,34.85],[32.08,34.75],[31.8,34.65],[31.5,34.45],[31.3,34.25],[31.08,33.8],[31.0,33.6],[30.9,32.6]];
const GULF = [[29.357,34.956],[29.45,34.975],[29.515,34.998],[29.545,34.99],[29.555,34.965],[29.49,34.89],[29.30,34.80],[29.03,34.66],[28.5,34.48],[28.5,34.78],[28.8,34.82],[29.2,34.90]];
const RIVERS = {
  jordan:[[32.69,35.57],[32.55,35.565],[32.40,35.55],[32.20,35.55],[32.00,35.55],[31.85,35.54],[31.785,35.52]],
  yarmouk:[[32.67,35.57],[32.69,35.66],[32.72,35.78],[32.72,35.86]],
  zarqa:[[32.10,36.12],[32.14,35.95],[32.17,35.78],[32.15,35.63],[32.14,35.56]],
  mujib:[[31.40,36.15],[31.42,35.95],[31.43,35.78],[31.445,35.58]],
  hasa:[[30.85,36.05],[30.97,35.8],[31.03,35.62],[31.03,35.49]]
};
const CITIES = [
  {ar:'عمّان',ll:[31.9539,35.9106]},{ar:'إربد',ll:[32.5556,35.85]},{ar:'الزرقاء',ll:[32.0728,36.088]},
  {ar:'المفرق',ll:[32.3434,36.2079]},{ar:'معان',ll:[30.196,35.734]},{ar:'الطفيلة',ll:[30.8375,35.6044]}
];
const LABELS = [
  {t:'سوريا',ll:[33.55,36.75],c:'lb-country'},
  {t:'العراق',ll:[33.1,40.0],c:'lb-country'},
  {t:'المملكة العربية السعودية',ll:[29.2,38.4],c:'lb-country'},
  {t:'فلسطين',ll:[31.9,34.95],c:'lb-country'},
  {t:'مصر',ll:[29.1,33.7],c:'lb-country'},
  {t:'البحر الأبيض المتوسط',ll:[33.0,34.0],c:'lb-water'},
  {t:'البحر الميت',ll:[31.45,35.275],c:'lb-water'},
  {t:'خليج العقبة',ll:[28.85,34.6],c:'lb-water'},
  {t:'غور الأردن',ll:[32.05,35.67],c:'lb-feat'},
  {t:'وادي عربة',ll:[30.4,35.34],c:'lb-feat'},
  {t:'جبال الشراة',ll:[30.72,35.9],c:'lb-feat'},
  {t:'بادية الشام',ll:[32.0,37.6],c:'lb-feat'},
  {t:'الهضبة الجنوبية',ll:[30.0,36.5],c:'lb-feat'}
];
const HIGHLAND = [[32.36,35.76],[32.20,35.80],[32.04,35.74],[31.85,35.74],[31.72,35.79],[31.45,35.80],[31.18,35.72],[30.84,35.64],[30.68,35.62],[30.53,35.56],[30.33,35.46],[30.10,35.50],[29.95,35.62],[29.75,35.5],[29.60,35.42],[29.55,35.25]];

function pointInPoly(lat,lng,poly){
  let inside=false;
  for(let i=0,j=poly.length-1;i<poly.length;j=i++){
    const yi=poly[i][0],xi=poly[i][1],yj=poly[j][0],xj=poly[j][1];
    if(((yi>lat)!==(yj>lat))&&(lng<(xj-xi)*(lat-yi)/(yj-yi)+xi))inside=!inside;
  }
  return inside;
}
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function lerpPath(path,t){
  let tot=0;const seg=[];
  for(let i=1;i<path.length;i++){const d=Math.hypot(path[i][0]-path[i-1][0],path[i][1]-path[i-1][1]);seg.push(d);tot+=d}
  let x=t*tot;
  for(let i=0;i<seg.length;i++){
    if(x<=seg[i]){const k=x/seg[i];return [path[i][0]+(path[i+1][0]-path[i][0])*k,path[i][1]+(path[i+1][1]-path[i][1])*k,path[i+1][0]-path[i][0],path[i+1][1]-path[i][1]]}
    x-=seg[i];
  }
  const l=path[path.length-1];return [l[0],l[1],0,0];
}
function haversine(a,b){
  const R=6371,r=Math.PI/180,dLat=(b[0]-a[0])*r,dLng=(b[1]-a[1])*r;
  const h=Math.sin(dLat/2)**2+Math.cos(a[0]*r)*Math.cos(b[0]*r)*Math.sin(dLng/2)**2;
  return 2*R*Math.asin(Math.sqrt(h));
}

/* UI strings. Arabic is the primary language. Edit here. */
const S={
ar:{
 nav_trip:'رحلتي',cont_guest:'المتابعة بدون حساب',no_acct:'ليس لديك حساب؟',create_acct:'أنشئ حسابًا',have_acct:'لديك حساب؟',acct_page:'حسابي',acct_in:'أنت مسجّل الدخول باسم {n}.',nav_logout:'تسجيل الخروج',trip_page:'ATHAR | رحلتي',f_purpose:'الغرض من الزيارة',
 trip_add:'أضف لرحلتي',trip_in:'في رحلتك ✓',trip_sub:'الأماكن التي اخترتها. رتّبها ثم افتحها كمسار في خرائط جوجل.',
 trip_empty:'لم تضف أي مكان بعد. افتح أي معلم واضغط «أضف لرحلتي».',trip_rm:'إزالة',trip_up:'نقل للأعلى',trip_dn:'نقل للأسفل',
 trip_open:'افتح المسار في خرائط جوجل',trip_total:'المسافة بخط مستقيم بين المحطات: نحو {k} كم',trip_hint:'سجّل الدخول لحفظ رحلتك على حسابك.',
 comm_h:'من زوّار المكان',comm_off:'التعليقات والصور تحتاج ربط قاعدة البيانات، وهي غير مفعّلة في هذه النسخة.',comm_login:'سجّل الدخول للمشاركة',comm_load_err:'تعذّر تحميل مشاركات الزوّار الآن.',
 ph_h:'صور الزوّار',ph_none:'لا توجد صور بعد. كن أول من يشارك.',ph_add:'ارفع الصورة',ph_cap:'وصف قصير (اختياري)',ph_ok:'وصلتنا صورتك وستظهر بعد المراجعة.',ph_err:'تعذّر رفع الصورة. الحد الأقصى 5 ميغابايت (JPG أو PNG أو WebP).',
 cm_h:'التعليقات',cm_none:'لا توجد تعليقات بعد.',cm_ph:'شاركنا تجربتك في هذا المكان',cm_send:'أرسل التعليق',cm_ok:'وصلنا تعليقك وسيظهر بعد المراجعة.',cm_err:'تعذّر إرسال التعليق. حاول مرة أخرى.',pending:'بانتظار المراجعة',
 signup_title:'إنشاء حساب',signup_btn:'إنشاء الحساب',to_signup:'ليس لديك حساب؟ أنشئ حسابًا',to_login:'لديك حساب؟ سجّل الدخول',a_name:'الاسم الظاهر',
 err_len:'كلمة المرور 6 أحرف على الأقل.',auth_confirm:'أرسلنا رابط تأكيد إلى بريدك. افتحه ثم سجّل الدخول.',auth_bad:'البريد أو كلمة المرور غير صحيحة.',auth_fail:'تعذّر إكمال الطلب. حاول مرة أخرى.',
 gate_t:'اختر لغة التصفح',gate_s:'Choose your language',gate_note:'يمكنك تغيير اللغة لاحقًا من القائمة الجانبية.',
 nav_home:'الرئيسية',nav_about:'من نحن',nav_login:'تسجيل الدخول',lang_btn:'English',lang_title:'Switch to English',
 collapse:'طيّ القائمة',expand:'توسيع القائمة',menu_open:'فتح القائمة',menu_close:'إغلاق القائمة',side_aria:'القائمة الرئيسية',
 map_aria:'خريطة الأردن التفاعلية',zin:'تكبير',zout:'تصغير',zhome:'العودة إلى عرض الأردن كاملًا',
 plate_b:'المملكة الأردنية الهاشمية',plate_s:'Atlas of Jordan',legend:'دليل الرموز',km:'كم',peek_open:'افتح الصفحة',
 help:'مساعدة',help_title:'كيف تستخدم أثر',help_close:'إغلاق المساعدة',
 h1t:'استكشف الخريطة',h1:'اسحب لتحريك الخريطة، وكبّر وصغّر بالأزرار أو بعجلة الفأرة أو بإصبعين.',
 h2t:'اختر وجهة',h2:'مرّر المؤشر على علامة لترى الاسم، ثم اضغطها لفتح صفحة الموقع.',
 h3t:'تصفّح صفحة الموقع',h3:'مرّر للأسفل لقراءة المعلومات والأماكن المقترحة والوجهات القريبة.',
 h4t:'العودة للرئيسية',h4:'اضغط «العودة إلى خريطة الأردن» أو «الرئيسية» في القائمة.',
 login_title:'تسجيل الدخول',login_sub:'تسجيل الدخول اختياري. يمكنك استكشاف كل الوجهات دون حساب.',email:'البريد الإلكتروني',password:'كلمة المرور',
 login_btn:'تسجيل الدخول',cont:'متابعة الاستكشاف دون حساب',close:'إغلاق',err_email:'أدخل بريدًا إلكترونيًا صحيحًا.',err_pw:'أدخل كلمة المرور.',
 demo:'هذه نسخة تجريبية، ولا يوجد تسجيل دخول فعلي بعد. يمكنك متابعة الاستكشاف.',
 crumb_nav:'مسار التنقل',crumb_home:'الرئيسية',crumb_about:'من نحن',sep:'‹',
 back:'العودة إلى خريطة الأردن',explore_btn:'استكشف الموقع',about_h:'عن المكان',visit_h:'معلومات الزيارة',
 f_loc:'الموقع',f_cat:'التصنيف',f_coord:'الإحداثيات',f_season:'أفضل موسم',f_dur:'مدة الزيارة',f_hours:'ساعات العمل',f_fee:'رسوم الدخول',approx:'(تقريبية)',
 loc_cap:'موقع {n} ضمن خريطة الأردن',explore_h:'استكشف',related_h:'وجهات قريبة',away:'على بعد نحو {k} كم',todo:'تُضاف لاحقًا',
 a_h1a:'لكل مكان في الأردن ',a_h1b:'حكاية',a_h1c:' تستحق أن تُروى.',
 a_lead:'أثر منصة عربية تفتح للزائر أطلسًا تفاعليًا للأردن، من القلاع والمدن الأثرية إلى المحميات والأودية والأماكن الأقل شهرة. نبدأ من الخريطة، ثم ننتقل إلى فصل مستقل لكل موقع.',
 a_vis:'الرؤية',a_vis_p:'أن يصبح الأردن مقروءًا كأطلس حيّ، يجد فيه الزائر والمقيم والباحث موضعًا لكل حجر وحكاية.',
 a_mis:'الرسالة',a_mis_p:'تقديم معرفة موثوقة وجميلة عن التراث الثقافي والطبيعي في الأردن، بلغة عربية واضحة وتصميم يحترم المكان.',
 a_why:'لماذا نوثّق التراث؟',
 p1:'الذاكرة',p1p:'الأماكن القديمة تحفظ طرق عيش الناس وتجارتهم ومعتقداتهم، وفقدانها فقدان لجزء من القصة.',
 p2:'الاكتشاف',p2p:'إلى جانب البتراء وجرش، مواقع هادئة مثل البتراء الصغيرة وفينان تستحق أن يعرفها الناس.',
 p3:'المسؤولية',p3p:'معرفة المكان تسبق حمايته. حين نفهم قيمته نعتني به ونزوره بوعي.',
 a_how:'كيف تعمل المنصة',
 s1:'ابدأ من الخريطة',s1p:'تفتح أثر مباشرة على خريطة الأردن بعلاماتها.',s2:'اختر وجهة',s2p:'اضغط أي علامة لتفتح صفحة الموقع.',s3:'اقرأ الفصل',s3p:'تاريخ وتفاصيل وأماكن للاستكشاف ومعلومات للزيارة.',
 ph_t:'محتوى قيد الإعداد',ph_p:'معلومات الفريق والشركاء والتواصل لم تُقدَّم بعد، وستُضاف هنا عند توفرها. لا تتضمن هذه النسخة أسماء أو شراكات أو جوائز.',
 f_about:'عن أثر',f_about_p:'أثر منصة عربية لاكتشاف المعالم التاريخية والمواقع السياحية والطبيعية في الأردن، تقدّمها على هيئة أطلس تفاعلي لكل مكان فيه حكاية.',
 f_links:'روابط',f_contact:'تواصل معنا',f_mail:'البريد الإلكتروني',f_tel:'الهاتف',copy:'© 2026 أثر. جميع الحقوق محفوظة.',tag:'ATHAR — Discover Jordan',
 logo_alt:'شعار أثر ATHAR',jordan_lbl:'الأردن',jordan_sub:'JORDAN',title_home:'أثر | ATHAR',title_about:'أثر | من نحن',
 search_ph:'ابحث عن معلم، قلعة، محمية...',filter_all:'الكل',
 layer_atlas:'الأطلس',layer_sat:'قمر صناعي',my_loc:'موقعي الحالي',
 route_label:'مسارات:',r_north:'مسار الشمال',r_golden:'المثلث الذهبي',r_kings:'طريق الملوك',
 drawer_more:'المزيد من التفاصيل',drawer_dir:'الاتجاهات',drawer_dist:'يبعد عنك نحو {km} كم ({time})',
 loc_err:'تعذّر تحديد موقعك. تأكد من تفعيل إذن الموقع في المتصفح.',loc_you:'موقعك الحالي'
},
en:{
 nav_trip:'My trip',cont_guest:'Continue without an account',no_acct:'No account yet?',create_acct:'Create an account',have_acct:'Already have an account?',acct_page:'My account',acct_in:'You are logged in as {n}.',nav_logout:'Log out',trip_page:'ATHAR | My trip',f_purpose:'Purpose of visit',
 trip_add:'Add to my trip',trip_in:'In your trip ✓',trip_sub:'The places you picked. Put them in order, then open them as a route in Google Maps.',
 trip_empty:'No places yet. Open any landmark and press Add to my trip.',trip_rm:'Remove',trip_up:'Move up',trip_dn:'Move down',
 trip_open:'Open the route in Google Maps',trip_total:'Straight-line distance between stops: about {k} km',trip_hint:'Log in to save your trip to your account.',
 comm_h:'From visitors',comm_off:'Comments and photos need the database to be connected, and it is not enabled in this version.',comm_login:'Log in to share',comm_load_err:'Visitor contributions could not be loaded right now.',
 ph_h:'Visitor photos',ph_none:'No photos yet. Be the first to share one.',ph_add:'Upload photo',ph_cap:'Short caption (optional)',ph_ok:'We received your photo. It will appear after review.',ph_err:'The photo could not be uploaded. Maximum 5 MB (JPG, PNG or WebP).',
 cm_h:'Comments',cm_none:'No comments yet.',cm_ph:'Share your experience of this place',cm_send:'Post comment',cm_ok:'We received your comment. It will appear after review.',cm_err:'The comment could not be sent. Please try again.',pending:'Awaiting review',
 signup_title:'Create account',signup_btn:'Create account',to_signup:'No account? Create one',to_login:'Have an account? Log in',a_name:'Display name',
 err_len:'Password must be at least 6 characters.',auth_confirm:'We sent a confirmation link to your email. Open it, then log in.',auth_bad:'Wrong email or password.',auth_fail:'The request could not be completed. Please try again.',
 gate_t:'Choose your language',gate_s:'اختر لغة التصفح',gate_note:'You can change the language later from the side menu.',
 nav_home:'Home',nav_about:'About us',nav_login:'Log in',lang_btn:'العربية',lang_title:'التبديل إلى العربية',
 collapse:'Collapse menu',expand:'Expand menu',menu_open:'Open menu',menu_close:'Close menu',side_aria:'Main menu',
 map_aria:'Interactive map of Jordan',zin:'Zoom in',zout:'Zoom out',zhome:'Back to the full view of Jordan',
 plate_b:'The Hashemite Kingdom of Jordan',plate_s:'أطلس الأردن',legend:'Legend',km:'km',peek_open:'Open page',
 help:'Help',help_title:'How to use ATHAR',help_close:'Close help',
 h1t:'Explore the map',h1:'Drag to pan the map. Zoom with the buttons, the mouse wheel or two fingers.',
 h2t:'Choose a destination',h2:'Hover over a marker to see its name, then click it to open the destination page.',
 h3t:'Browse a destination page',h3:'Scroll down to read the details, places to explore and nearby destinations.',
 h4t:'Return home',h4:'Press "Back to the map of Jordan" or "Home" in the menu.',
 login_title:'Log in',login_sub:'Logging in is optional. You can explore every destination without an account.',email:'Email',password:'Password',
 login_btn:'Log in',cont:'Continue exploring without an account',close:'Close',err_email:'Enter a valid email address.',err_pw:'Enter your password.',
 demo:'This is a prototype and there is no real login yet. You can keep exploring.',
 crumb_nav:'Breadcrumb',crumb_home:'Home',crumb_about:'About us',sep:'›',
 back:'Back to the map of Jordan',explore_btn:'Explore the site',about_h:'About the place',visit_h:'Visitor information',
 f_loc:'Location',f_cat:'Category',f_coord:'Coordinates',f_season:'Best season',f_dur:'Time needed',f_hours:'Opening hours',f_fee:'Entry fee',approx:'(approximate)',
 loc_cap:'Where {n} sits on the map of Jordan',explore_h:'Explore',related_h:'Nearby destinations',away:'about {k} km away',todo:'To be added',
 a_h1a:'Every place in Jordan has a ',a_h1b:'story',a_h1c:' worth telling.',
 a_lead:'ATHAR is an Arabic-first platform that opens an interactive atlas of Jordan, from castles and ancient cities to reserves, valleys and lesser-known places. We start from the map, then move to a chapter of its own for each site.',
 a_vis:'Vision',a_vis_p:'For Jordan to be read as a living atlas, where visitors, residents and researchers find a place for every stone and every story.',
 a_mis:'Mission',a_mis_p:'To offer reliable, beautiful knowledge about Jordan\'s cultural and natural heritage, in clear Arabic and a design that respects the place.',
 a_why:'Why document heritage?',
 p1:'Memory',p1p:'Old places keep how people lived, traded and believed. Losing them loses part of the story.',
 p2:'Discovery',p2p:'Beside Petra and Jerash, quiet sites such as Little Petra and Feynan deserve to be known.',
 p3:'Responsibility',p3p:'Knowing a place comes before protecting it. When we understand its value we care for it and visit with awareness.',
 a_how:'How the platform works',
 s1:'Start from the map',s1p:'ATHAR opens straight onto the map of Jordan and its markers.',s2:'Choose a destination',s2p:'Click any marker to open the site page.',s3:'Read the chapter',s3p:'History, details, places to explore and visitor information.',
 ph_t:'Content in preparation',ph_p:'Team, partner and contact information has not been provided yet and will be added here when available. This version includes no names, partnerships or awards.',
 f_about:'About ATHAR',f_about_p:'ATHAR is an Arabic platform for discovering the historical landmarks and tourist and natural sites of Jordan, presented as an interactive atlas in which every place has a story.',
 f_links:'Links',f_contact:'Contact us',f_mail:'Email',f_tel:'Phone',copy:'© 2026 ATHAR. All rights reserved.',tag:'ATHAR — Discover Jordan',
 logo_alt:'ATHAR logo',jordan_lbl:'Jordan',jordan_sub:'الأردن',title_home:'ATHAR | أثر',title_about:'ATHAR | About us',
 search_ph:'Search landmark, castle, reserve...',filter_all:'All',
 layer_atlas:'Atlas',layer_sat:'Satellite',my_loc:'My Location',
 route_label:'Routes:',r_north:'Northern Trail',r_golden:'Golden Triangle',r_kings:'King\'s Highway',
 drawer_more:'More Details',drawer_dir:'Directions',drawer_dist:'About {km} km away ({time})',
 loc_err:'Could not determine your location. Please enable location permissions.',loc_you:'Your Location'
}};
const LBL_EN={'سوريا':'SYRIA','العراق':'IRAQ','المملكة العربية السعودية':'SAUDI ARABIA','فلسطين':'PALESTINE','مصر':'EGYPT','البحر الأبيض المتوسط':'Mediterranean Sea','البحر الميت':'Dead Sea','خليج العقبة':'Gulf of Aqaba','غور الأردن':'Jordan Valley','وادي عربة':'Wadi Araba','جبال الشراة':'Sharah Mountains','بادية الشام':'Syrian Desert','الهضبة الجنوبية':'Southern Plateau','عمّان':'Amman','إربد':'Irbid','الزرقاء':'Zarqa','المفرق':'Mafraq','معان':'Ma\'an','الطفيلة':'Tafilah'};

(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const AR=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
const LOGO='athar-logo.jpg';
const ICON={
 trip:'<svg viewBox="0 0 24 24"><path d="M6 20a2 2 0 100-4 2 2 0 000 4zM18 8a2 2 0 100-4 2 2 0 000 4zM8 18h6a3 3 0 000-6h-4a3 3 0 010-6h6"/></svg>',
 home:'<svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10"/></svg>',
 info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
 user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>',
 menu:'<svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
 chev:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
 x:'<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>',
 plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
 minus:'<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>',
 full:'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
 globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
 arrow:'<svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>'
};
const CI={ /* category glyphs, 24x24 */
 arch:'<svg viewBox="0 0 24 24"><path d="M5 20V9M10 20V9M15 20V9M20 20V9M3 9h19M4 6l8-3 8 3M3 20h19"/></svg>',
 castle:'<svg viewBox="0 0 24 24"><path d="M4 20V8h3v2h3V8h4v2h3V8h3v12zM10 20v-5h4v5"/></svg>',
 reserve:'<svg viewBox="0 0 24 24"><path d="M12 3l6 9h-4l5 7H5l5-7H6zM12 19v3"/></svg>',
 nature:'<svg viewBox="0 0 24 24"><path d="M2 19l7-12 4 7 3-4 6 9zM16 6.5a1.5 1.5 0 110 .01"/></svg>',
 cultural:'<svg viewBox="0 0 24 24"><path d="M5 20v-8a7 7 0 0114 0v8M12 3V1M9 20v-5a3 3 0 016 0v5M3 20h18"/></svg>',
 viewpoint:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/></svg>'
};

/* ---------- generative placeholder art (photo slots) ---------- */
function art(kind,seed,tag){
  const r=mulberry(seed*7919+13),W=1000,H=700;
  const sky=['#45050c','#5a0a0b','#720e07'];let o='';
  o+=`<defs><linearGradient id="g${seed}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#45050c"/><stop offset=".62" stop-color="#8b6220"/><stop offset="1" stop-color="#d5ac4e"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#g${seed})"/>`;
  o+=`<circle cx="${180+r()*620}" cy="${130+r()*90}" r="${46+r()*20}" fill="#eecf6d" opacity=".92"/>`;
  const ridge=(y,amp,fill,op,n)=>{let p=`M0 ${H}L0 ${y}`;for(let i=1;i<=n;i++)p+=`L${i*W/n} ${y-r()*amp}`;return `<path d="${p}L${W} ${H}Z" fill="${fill}" opacity="${op}"/>`};
  if(kind==='columns'){o+=ridge(480,70,'#8b6220',.7,9);for(let i=0;i<7;i++){const x=120+i*125,h=170+r()*30;o+=`<rect x="${x}" y="${520-h}" width="38" height="${h}" fill="#eecf6d" opacity=".92"/><rect x="${x-8}" y="${512-h}" width="54" height="12" fill="#eecf6d"/>`}o+=`<rect x="60" y="520" width="880" height="14" fill="#eecf6d"/>`+ridge(580,20,'#45050c',1,14)}
  else if(kind==='castle'){o+=ridge(470,110,'#8b6220',.8,7);const b=[[330,360,90],[420,320,110],[530,350,80],[610,380,70]];b.forEach(([x,y,w])=>{o+=`<rect x="${x}" y="${y}" width="${w}" height="${540-y}" fill="#d5ac4e"/>`;for(let k=0;k<4;k++)o+=`<rect x="${x+k*w/4}" y="${y-14}" width="${w/8}" height="14" fill="#d5ac4e"/>`});o+=`<path d="M470 540v-60q16-24 32 0v60z" fill="#45050c"/>`+ridge(590,30,'#45050c',1,11)}
  else if(kind==='cliffs'){o+=`<path d="M0 700V260L170 300L230 180L360 290L450 160L560 300L700 200L820 320L1000 260V700Z" fill="#720e07"/>`;o+=`<path d="M380 700V330h240v370z" fill="#d5ac4e"/><path d="M420 700V380h160v320z" fill="#eecf6d"/><path d="M470 700V520q30-34 60 0v180z" fill="#45050c"/>`;for(let i=0;i<5;i++)o+=`<rect x="${435+i*28}" y="390" width="10" height="110" fill="#d5ac4e"/>`}
  else if(kind==='dunes'){o+=ridge(420,50,'#8b6220',.7,6);o+=`<path d="M0 520Q250 380 500 500T1000 450V700H0Z" fill="#d5ac4e"/><path d="M0 590Q300 480 600 580T1000 540V700H0Z" fill="#eecf6d" opacity=".9"/>`;for(let i=0;i<3;i++){const x=150+i*300+r()*40;o+=`<path d="M${x} 400v-120q40-60 80 0v120z" fill="#45050c" opacity=".85"/>`}}
  else if(kind==='sea'){o+=ridge(380,40,'#8b6220',.75,7);o+=`<rect y="400" width="1000" height="300" fill="#45050c"/>`;for(let i=0;i<9;i++)o+=`<path d="M${r()*700} ${440+i*28}h${120+r()*160}" stroke="#d5ac4e" stroke-width="3" opacity=".6"/>`}
  else if(kind==='forest'){o+=ridge(430,80,'#8b6220',.7,8);for(let i=0;i<16;i++){const x=40+i*60+r()*20,s=1+r()*.6;o+=`<path d="M${x} 600l${-26*s} 0l${26*s} ${-92*s}l${26*s} ${92*s}z" fill="#45050c" opacity="${.7+r()*.3}"/>`}}
  else if(kind==='canyon'){o+=`<path d="M0 260L260 240L420 520L500 700H0Z" fill="#720e07"/><path d="M1000 240L720 260L580 540L500 700H1000Z" fill="#8b6220"/><path d="M420 520Q500 580 580 540L500 700Z" fill="#eecf6d" opacity=".8"/>`}
  else if(kind==='theatre'){o+=ridge(450,60,'#8b6220',.7,8);for(let i=0;i<8;i++){o+=`<path d="M${150+i*18} ${300+i*34}Q500 ${230+i*34} ${850-i*18} ${300+i*34}" stroke="#eecf6d" stroke-width="12" fill="none" opacity="${.95-i*.06}"/>`}o+=`<rect x="380" y="590" width="240" height="30" fill="#d5ac4e"/>`}
  else if(kind==='mosaic'){const c=['#eecf6d','#d5ac4e','#720e07','#45050c','#8b6220'];for(let y=0;y<14;y++)for(let x=0;x<20;x++){o+=`<rect x="${x*50}" y="${y*50}" width="48" height="48" fill="${c[Math.floor(r()*5)]}" opacity="${.6+r()*.4}"/>`}o+=`<circle cx="500" cy="350" r="150" fill="#45050c" opacity=".88"/><circle cx="500" cy="350" r="104" fill="none" stroke="#eecf6d" stroke-width="8"/>`}
  else if(kind==='dome'){o+=ridge(500,90,'#8b6220',.75,7);o+=`<path d="M400 520V430q100-150 200 0v90z" fill="#f6efdc"/><rect x="494" y="270" width="12" height="40" fill="#f6efdc"/>`+ridge(590,24,'#45050c',1,12)}
  else if(kind==='springs'){o+=ridge(430,70,'#8b6220',.7,8);for(let i=0;i<4;i++)o+=`<ellipse cx="${300+i*130}" cy="${560+(i%2)*20}" rx="${70-i*6}" ry="20" fill="#eecf6d" opacity=".8"/>`;for(let i=0;i<10;i++)o+=`<path d="M${280+r()*440} ${540-r()*10}q10 -40 0 -80" stroke="#f6efdc" stroke-width="3" fill="none" opacity=".5"/>`}
  else if(kind==='blocks'){o+=ridge(470,80,'#8b6220',.7,8);for(let i=0;i<3;i++)for(let j=0;j<5-i;j++)o+=`<rect x="${260+j*92+i*46}" y="${460-i*62}" width="88" height="58" fill="#eecf6d" stroke="#8b6220" stroke-width="3" opacity="${.85+.1*r()}"/>`}
  else {o+=ridge(480,90,'#8b6220',.8,8)}
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${o}</svg>`+(tag?`<span class="art-tag">${tag}</span>`:'');
}

/* ---------- locator mini map ---------- */
function locator(d){
  const x0=34.8,x1=39.4,y0=29.1,y1=33.5,W=300,H=Math.round(W*(y1-y0)/(x1-x0)*1.18);
  const px=lng=>((lng-x0)/(x1-x0))*W, py=lat=>H-((lat-y0)/(y1-y0))*H;
  const pts=JORDAN.map(p=>px(p[1]).toFixed(1)+','+py(p[0]).toFixed(1)).join(' ');
  const dot=DEST.map(o=>o.id===d.id?'':`<rect x="${px(o.ll[1])-3}" y="${py(o.ll[0])-3}" width="6" height="6" fill="#8b6220" transform="rotate(45 ${px(o.ll[1])} ${py(o.ll[0])})"/>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" aria-hidden="true"><rect width="${W}" height="${H}" fill="#efe5c8"/><polygon points="${pts}" fill="#e2d3ac" stroke="#8b6220" stroke-width="1.5"/>${dot}<g transform="translate(${px(d.ll[1])} ${py(d.ll[0])})"><circle r="11" fill="#720e07" opacity=".25"/><rect x="-6" y="-6" width="12" height="12" fill="#720e07" stroke="#eecf6d" stroke-width="2" transform="rotate(45)"/></g></svg>`;
}


/* ---------- language state ---------- */
let LANG='ar',CHOSEN=false;

const t=(k,v)=>{let s=S[LANG][k]||'';if(v)for(const q in v)s=s.replace('{'+q+'}',v[q]);return s};
const nm=d=>LANG==='ar'?d.ar:d.en, sub=d=>LANG==='ar'?d.en:d.ar, subCls=()=>LANG==='ar'?'en':'ar-s';
const DT=d=>LANG==='ar'?d:Object.assign({},d,EN[d.id]);
const num=n=>LANG==='ar'?AR(n):String(n);
const cat=k=>CATS[k][LANG], reg=k=>REGIONS[k][LANG];
const purp=k=>PURPOSES[k][LANG];
const CLOUD=window.AtharCloud;
let TRIP=[];
const inTrip=id=>TRIP.includes(id);
const tripLabel=id=>t(inTrip(id)?'trip_in':'trip_add');
const lbl=s=>LANG==='en'?(LBL_EN[s]||s):s;

/* ---------- photos: put a file named <id>.jpg in the photos/ folder (e.g. photos/petra.jpg). If missing, the illustration shows. ---------- */
const PHOTO_DIR='photos/';
const photoImg=(d,cls)=>`<img class="ph-img ${cls||''}" src="${PHOTO_DIR}${d.id}.jpg" alt="${esc(nm(d))}" loading="lazy" onerror="this.remove()">`;

/* ---------- layout pieces ---------- */
function footer(){return `<footer class="foot"><div class="wrap"><div class="foot-in">
<div><div class="logo-box"><img src="${LOGO}" alt="${t('logo_alt')}" width="1154" height="912"></div></div>
<div><h3>${t('f_about')}</h3><p>${t('f_about_p')}</p></div>
<div><h3>${t('f_links')}</h3><ul><li><a href="#map">${t('nav_home')}</a></li><li><a href="#about">${t('nav_about')}</a></li><li><button type="button" data-login style="background:none;border:0;padding:0;color:inherit;font-size:16px;text-align:start;cursor:pointer">${t('nav_login')}</button></li></ul></div>
<div><h3>${t('f_contact')}</h3><ul><li class="todo">${t('f_mail')}: ${t('todo')}</li><li class="todo">${t('f_tel')}: ${t('todo')}</li></ul></div>
</div><div class="foot-b"><span>${t('copy')}</span><span class="en">${t('tag')}</span></div></div></footer>`}
function crumbs(items){return `<nav class="crumbs" aria-label="${t('crumb_nav')}">${items.map((c,i)=>{const last=i===items.length-1;return last?`<span aria-current="page">${c[0]}</span>`:`<a href="${c[1]}">${c[0]}</a><i aria-hidden="true">${t('sep')}</i>`}).join('')}</nav>`}

/* ---------- views ---------- */
function viewDest(id){
  const base=DEST.find(x=>x.id===id);if(!base)return null;
  const d=DT(base);
  const rel=DEST.filter(o=>o.id!==d.id).map(o=>({o,km:haversine(d.ll,o.ll)})).sort((a,b)=>a.km-b.km).slice(0,3);
  const cx=ll=>ll[0].toFixed(3)+'°N, '+ll[1].toFixed(3)+'°E';
  return `<div class="page"><header class="d-hero"><div class="d-head">${crumbs([[t('crumb_home'),'#map'],[reg(d.region),'#map'],[nm(d)]])}
<div style="display:grid;gap:14px"><div class="chap"><b class="en">${String(d.n).padStart(2,'0')} / ${DEST.length}</b><span>${cat(d.cat)} · ${reg(d.region)}</span></div>
<h1 class="d-title">${esc(nm(d))}</h1><div class="d-en ${LANG==='ar'?'':'ar-s'}">${esc(sub(d))}</div><p class="d-intro">${esc(d.intro)}</p></div>
<div class="d-actions"><a class="btn" href="#map">${ICON.arrow}${t('back')}</a><a class="btn btn-ghost" href="#explore-${d.id}" data-scroll="explore">${t('explore_btn')}</a><button type="button" class="btn btn-ghost" data-trip="${d.id}">${tripLabel(d.id)}</button></div></div>
<div class="d-art">${art(d.art,d.n,LANG==='ar'?'رسم توضيحي — موضع صورة الموقع':'Placeholder illustration — site photo goes here')}${photoImg(d)}</div></header>
<main class="grow"><div class="wrap d-body"><section class="d-about"><h2 class="sec">${t('about_h')}</h2>${d.about.map(p=>`<p>${esc(p)}</p>`).join('')}</section>
<aside class="d-facts"><h2 class="sec">${t('visit_h')}</h2><dl class="facts">
<div><dt>${t('f_loc')}</dt><dd>${esc(d.gov)}, ${esc(d.near)}</dd></div>
<div><dt>${t('f_cat')}</dt><dd>${cat(d.cat)}${LANG==='ar'?` <span class="en">(${CATS[d.cat].en})</span>`:''}</dd></div>
<div><dt>${t('f_purpose')}</dt><dd>${purp(d.purpose)}</dd></div>
<div><dt>${t('f_coord')}</dt><dd class="en" style="text-align:start">${cx(d.ll)}${d.approx?` <span class="todo">${t('approx')}</span>`:''}</dd></div>
<div><dt>${t('f_season')}</dt><dd>${esc(d.season)}</dd></div>
<div><dt>${t('f_dur')}</dt><dd>${esc(d.dur)}</dd></div>
<div><dt>${t('f_hours')}</dt><dd class="todo">${t('todo')}</dd></div>
<div><dt>${t('f_fee')}</dt><dd class="todo">${t('todo')}</dd></div></dl>
<div class="locator">${locator(d)}<small>${t('loc_cap',{n:esc(nm(d))})}</small></div></aside></div>
<section class="d-explore" id="explore-${d.id}"><div class="wrap"><h2 class="sec">${t('explore_h')}</h2><div class="ex-grid">${d.explore.map(e=>`<article class="ex"><h3>${esc(e[0])}</h3><p>${esc(e[1])}</p></article>`).join('')}</div></div></section>
<section class="d-community"><div class="wrap"><h2 class="sec">${t('comm_h')}</h2><div id="community-body" data-place="${d.id}"></div></div></section>
<section class="d-related"><div class="wrap"><h2 class="sec">${t('related_h')}</h2><div class="rel-grid">${rel.map(({o,km})=>`<a class="rel" href="#d-${o.id}"><div class="rel-art">${art(o.art,o.n)}</div><div class="rel-t"><b>${esc(nm(o))}</b><span class="${subCls()}">${esc(sub(o))}</span><small>${cat(o.cat)} · ${t('away',{k:num(Math.round(km))})}</small></div></a>`).join('')}</div>
<div style="margin-top:34px"><a class="btn btn-ghost" href="#map">${ICON.arrow}${t('back')}</a></div></div></section></main>${footer()}</div>`;
}
function viewAbout(){return `<div class="page"><header class="wrap a-hero">${crumbs([[t('crumb_home'),'#map'],[t('crumb_about')]])}
<h1>${t('a_h1a')}<em>${t('a_h1b')}</em>${t('a_h1c')}</h1><p class="lead">${t('a_lead')}</p></header>
<div class="a-art">${art('cliffs',31,'')}</div>
<main class="grow"><section class="a-sec wrap"><div class="a-two"><div><h3>${t('a_vis')}</h3><p>${t('a_vis_p')}</p></div><div><h3>${t('a_mis')}</h3><p>${t('a_mis_p')}</p></div></div></section>
<section class="a-sec a-how"><div class="wrap"><h2 class="sec">${t('a_why')}</h2><div class="pillars"><div class="pil"><h3>${t('p1')}</h3><p>${t('p1p')}</p></div><div class="pil"><h3>${t('p2')}</h3><p>${t('p2p')}</p></div><div class="pil"><h3>${t('p3')}</h3><p>${t('p3p')}</p></div></div></div></section>
<section class="a-sec wrap"><h2 class="sec">${t('a_how')}</h2><ol class="how"><li><b>${t('s1')}</b>${t('s1p')}</li><li><b>${t('s2')}</b>${t('s2p')}</li><li><b>${t('s3')}</b>${t('s3p')}</li></ol>
<div class="ph"><b>${t('ph_t')}</b><p>${t('ph_p')}</p></div></section></main>${footer()}</div>`}

/* ---------- shell ---------- */
const root=document.getElementById('app');
let shell,stage,mapObj=null,mapEl=null,selId=null,markers={};
const $id=i=>document.getElementById(i);
function setNav(k){document.querySelectorAll('[data-nav]').forEach(a=>{const on=a.dataset.nav===k;a.classList.toggle('active',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')})}
function closeDrawer(){shell&&shell.classList.remove('open')}
let RET='#map';
function openLogin(){closeDrawer();showLogin()}
function closeLogin(){$id('modal').hidden=true}
function toggleHelp(f){const hp=$id('help'),hb=$id('help-btn');const on=typeof f==='boolean'?f:hp.hidden;hp.hidden=!on;hb.setAttribute('aria-expanded',String(on));if(on)$id('help-x').focus()}

function mount(){
  const collapsed=shell?shell.classList.contains('collapsed'):false;
  root.innerHTML=`<div class="shell${collapsed?' collapsed':''}" id="shell"><div class="scrim" id="scrim"></div>
<aside class="side" id="side" aria-label="${t('side_aria')}"><button class="drawer-close" id="dclose" aria-label="${t('menu_close')}">${ICON.x}</button>
<div class="logo-box"><img src="${LOGO}" alt="${t('logo_alt')}" width="1154" height="912"></div>
<nav class="side-nav"><a class="nav-item" data-nav="map" href="#map" title="${t('nav_home')}">${ICON.home}<span>${t('nav_home')}</span></a><a class="nav-item" data-nav="about" href="#about" title="${t('nav_about')}">${ICON.info}<span>${t('nav_about')}</span></a><a class="nav-item" data-nav="trip" href="#trip" title="${t('nav_trip')}">${ICON.trip}<span>${t('nav_trip')}</span></a><button type="button" class="nav-item" id="login-open" title="${t('nav_login')}">${ICON.user}<span>${t('nav_login')}</span></button><button type="button" class="nav-item" id="lang-sw" title="${t('lang_title')}">${ICON.globe}<span>${t('lang_btn')}</span></button></nav>
<div class="side-foot"><button type="button" class="collapse-btn" id="collapse" aria-expanded="${!collapsed}" aria-label="${collapsed?t('expand'):t('collapse')}">${ICON.chev}<span>${t('collapse')}</span></button></div></aside>
<button class="menu-btn" id="menu" aria-label="${t('menu_open')}">${ICON.menu}</button>
<div class="stage is-map" id="stage"></div></div>
<button class="help-btn" id="help-btn" aria-label="${t('help')}" aria-expanded="false" aria-controls="help">?</button>
<section class="help-panel" id="help" role="dialog" aria-label="${t('help_title')}" hidden><button class="help-x" id="help-x" aria-label="${t('help_close')}">${ICON.x}</button><h2>${t('help_title')}</h2><ol class="help-steps">
${[1,2,3,4].map(i=>`<li><div><b>${t('h'+i+'t')}</b>${t('h'+i)}</div></li>`).join('')}</ol></section>
`;
  shell=$id('shell');stage=$id('stage');mapObj=null;mapEl=null;markers={};selId=null;
  $id('menu').onclick=()=>shell.classList.add('open');
  $id('scrim').onclick=closeDrawer;$id('dclose').onclick=closeDrawer;
  $id('collapse').onclick=()=>{const c=shell.classList.toggle('collapsed');$id('collapse').setAttribute('aria-expanded',String(!c));$id('collapse').setAttribute('aria-label',c?t('expand'):t('collapse'));setTimeout(()=>{mapObj&&mapObj.invalidateSize()},320)};
  $id('help-btn').onclick=()=>toggleHelp();$id('help-x').onclick=()=>{toggleHelp(false);$id('help-btn').focus()};
  $id('login-open').onclick=()=>{if(CLOUD.user)CLOUD.signOut();else openLogin()};
  $id('lang-sw').onclick=()=>setLang(LANG==='ar'?'en':'ar');
  document.querySelectorAll('.side a').forEach(a=>a.addEventListener('click',closeDrawer));
  refreshAuthUI();
}

function route(){
  closeDrawer();
  const h=(location.hash||'#map').slice(1);
  if(h.startsWith('explore-'))return;
  if(h.startsWith('d-')){
    const d=DEST.find(x=>x.id===h.slice(2));
    if(d){showPage(viewDest(d.id));loadCommunity(d.id);setNav('map');document.title='ATHAR | '+nm(d);return}
  }
  if(h==='signup'){showPage(viewSignup());bindSignup();setNav('');document.title='ATHAR | '+t('signup_title');return}
  if(h==='trip'){showPage(viewTrip());setNav('trip');document.title=t('trip_page');return}
  if(h==='about'){showPage(viewAbout());setNav('about');document.title=t('title_about');return}
  showMap();setNav('map');document.title=t('title_home');
}
function initScrollReveal(container){
  const targets = container.querySelectorAll('.d-about, .d-facts, .ex, .rel, .a-two > div, .pil, .how li, .ph');
  targets.forEach((el, idx) => {
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min((idx % 4) * 70, 210) + 'ms';
  });
  if(!('IntersectionObserver' in window)){
    targets.forEach(el => el.classList.add('in'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { root: stage, threshold: 0.1 });
  targets.forEach(el => obs.observe(el));
}

function viewSignup(){
  const head=`<div class="page"><header class="wrap a-hero">${crumbs([[t('crumb_home'),'#map'],[t('signup_title')]])}<h1>${t('signup_title')}</h1><p class="lead">${t('login_sub')}</p></header><main class="grow"><div class="wrap acct">`;
  const foot=`</div></main>${footer()}</div>`;
  if(CLOUD.user)return head+`<div class="acct-card"><p>${t('acct_in',{n:esc(CLOUD.name())})}</p><div class="trip-acts"><a class="btn" href="#trip">${t('nav_trip')}</a><button type="button" class="btn btn-ghost" id="acct-out">${t('nav_logout')}</button></div></div>`+foot;
  const fld=(id,lab,type,ac,extra)=>`<div class="field"><label for="${id}">${lab}</label><input id="${id}" type="${type}" autocomplete="${ac}" ${extra||''}></div>`;
  return head+`<form class="acct-card" id="sf" novalidate>${fld('nm2',t('a_name'),'text','nickname','maxlength="40"')}${fld('em2',t('email'),'email','email','placeholder="name@example.com"')}${fld('pw2',t('password'),'password','new-password')}<div class="form-msg" id="smsg" role="status"></div><button class="btn btn-block" type="submit">${t('signup_btn')}</button><p class="auth-alt2">${t('have_acct')} <a href="#" id="s-login">${t('login_btn')}</a></p></form>`+foot;
}
function bindSignup(){
  const out=$id('acct-out');if(out)out.onclick=()=>CLOUD.signOut();
  const sl=$id('s-login');if(sl)sl.onclick=e=>{e.preventDefault();showLogin()};
  const sf=$id('sf');if(!sf)return;
  sf.onsubmit=async e=>{e.preventDefault();const em=$id('em2').value.trim(),pw=$id('pw2').value,msg=$id('smsg');
    if(!/^\S+@\S+\.\S+$/.test(em)){msg.textContent=t('err_email');return}
    if(!pw){msg.textContent=t('err_pw');return}
    if(!CLOUD.ready){msg.textContent=t('demo');return}
    if(pw.length<6){msg.textContent=t('err_len');return}
    msg.textContent='…';
    try{const r=await CLOUD.signUp(em,pw,$id('nm2').value.trim());if(r.error)msg.textContent=t('auth_fail');else if(r.needsConfirm)msg.textContent=t('auth_confirm');else{const x=RET;RET='#map';location.hash=(x==='#signup'?'#map':x)}}catch(x){msg.textContent=t('auth_fail')}};
}
let AUTH_READY=false;
function maybeLogin(){
  if(!AUTH_READY||document.querySelector('.gate'))return;
  if(CLOUD.user||(location.hash||'')==='#signup')return;
  try{if(sessionStorage.getItem('athar-auth-seen'))return}catch(e){}
  showLogin();
}
function showLogin(){
  if(document.querySelector('.gate.auth'))return;
  try{sessionStorage.setItem('athar-auth-seen','1')}catch(e){}
  const g=document.createElement('div');g.className='gate auth';g.setAttribute('role','dialog');g.setAttribute('aria-modal','true');g.setAttribute('aria-labelledby','at');
  g.innerHTML=`<div class="gate-in"><div class="logo-box"><img src="${LOGO}" alt="${t('logo_alt')}" width="1154" height="912"></div>
<h1 id="at" class="gate-t">${t('login_title')}</h1>
<form class="auth-form" id="af" novalidate>
<div class="field"><label for="a-em">${t('email')}</label><input id="a-em" type="email" autocomplete="email" placeholder="name@example.com"></div>
<div class="field"><label for="a-pw">${t('password')}</label><input id="a-pw" type="password" autocomplete="current-password"></div>
<div class="form-msg" id="amsg" role="status"></div>
<button class="btn btn-gold btn-block" type="submit">${t('login_btn')}</button>
<button type="button" class="btn btn-ghost-light btn-block" id="a-skip">${t('cont_guest')}</button></form>
<p class="auth-alt">${t('no_acct')} <a href="#signup" id="a-signup">${t('create_acct')}</a></p></div>`;
  document.body.appendChild(g);
  const close=()=>g.remove();
  $id('a-skip').onclick=close;
  g.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  $id('a-signup').onclick=e=>{e.preventDefault();const h=location.hash;RET=(h&&h!=='#signup')?h:'#map';close();location.hash='#signup'};
  $id('af').onsubmit=async e=>{e.preventDefault();const em=$id('a-em').value.trim(),pw=$id('a-pw').value,msg=$id('amsg');
    if(!/^\S+@\S+\.\S+$/.test(em)){msg.textContent=t('err_email');$id('a-em').focus();return}
    if(!pw){msg.textContent=t('err_pw');$id('a-pw').focus();return}
    if(!CLOUD.ready){msg.textContent=t('demo');return}
    msg.textContent='…';
    try{const err=await CLOUD.signIn(em,pw);if(err)msg.textContent=t('auth_bad');else close()}catch(x){msg.textContent=t('auth_fail')}};
  $id('a-em').focus();
}
function viewTrip(){
  const items=TRIP.map(id=>DEST.find(x=>x.id===id)).filter(Boolean);
  let km=0;for(let i=1;i<items.length;i++)km+=haversine(items[i-1].ll,items[i].ll);
  const ll=d=>d.ll[0]+','+d.ll[1];
  const url=items.length>1?'https://www.google.com/maps/dir/?api=1&origin='+ll(items[0])+'&destination='+ll(items[items.length-1])+(items.length>2?'&waypoints='+items.slice(1,-1).map(ll).join('%7C'):'')+'&travelmode=driving':items.length?'https://www.google.com/maps/search/?api=1&query='+ll(items[0]):'';
  return `<div class="page"><header class="wrap a-hero">${crumbs([[t('crumb_home'),'#map'],[t('nav_trip')]])}
<h1>${t('nav_trip')}</h1><p class="lead">${t('trip_sub')}</p></header>
<main class="grow"><div class="wrap trip">${items.length?`<ol class="trip-list">${items.map((d,i)=>`<li><span class="trip-n">${num(i+1)}</span><a href="#d-${d.id}"><b>${esc(nm(d))}</b><small>${cat(d.cat)} · ${purp(d.purpose)}</small></a><button type="button" class="trip-btn" data-trip-mv="${d.id}:up" aria-label="${t('trip_up')}">↑</button><button type="button" class="trip-btn" data-trip-mv="${d.id}:dn" aria-label="${t('trip_dn')}">↓</button><button type="button" class="trip-btn" data-trip-rm="${d.id}">${t('trip_rm')}</button></li>`).join('')}</ol>
<div class="trip-acts"><a class="btn" href="${url}" target="_blank" rel="noopener">${t('trip_open')}</a>${items.length>1?`<span>${t('trip_total',{k:num(Math.round(km))})}</span>`:''}</div>
${CLOUD.ready&&!CLOUD.user?`<p class="comm-note">${t('trip_hint')}</p>`:''}`:`<p class="comm-note">${t('trip_empty')}</p>`}</div></main>${footer()}</div>`;
}
function syncTripBtns(){document.querySelectorAll('[data-trip]').forEach(b=>{const id=b.dataset.trip;b.textContent=tripLabel(id);b.classList.toggle('on',inTrip(id))})}
async function tripToggle(id){TRIP=inTrip(id)?TRIP.filter(x=>x!==id):TRIP.concat(id);syncTripBtns();try{await CLOUD.saveTrip(TRIP)}catch(e){}}
async function tripLoad(){try{TRIP=await CLOUD.getTrip()}catch(e){}syncTripBtns();if((location.hash||'')==='#trip')route()}
function refreshAuthUI(){const b=$id('login-open');if(!b)return;const lab=CLOUD.user?t('nav_logout'):t('nav_login');const sp=b.querySelector('span');if(sp)sp.textContent=lab;b.title=lab}
async function loadCommunity(id){
  const box=$id('community-body');if(!box)return;
  if(!CLOUD.ready){box.innerHTML=`<p class="comm-note">${t('comm_off')}</p>`;return}
  let ph=[],cm=[];
  try{[ph,cm]=await Promise.all([CLOUD.photos(id),CLOUD.comments(id)])}catch(e){box.innerHTML=`<p class="comm-note">${t('comm_load_err')}</p>`;return}
  const cur=$id('community-body');if(!cur||cur.dataset.place!==id)return;
  const me=CLOUD.user,base=DEST.find(x=>x.id===id);
  const fmt=v=>new Date(v).toLocaleDateString(LANG==='ar'?'ar-JO':'en-GB');
  cur.innerHTML=`<h3 class="cm-h">${t('ph_h')}</h3>
${ph.length?`<div class="cm-photos">${ph.map(p=>`<figure><img src="${esc(p.url)}" alt="${esc(p.caption||nm(base))}" loading="lazy"><figcaption>${esc(p.caption||'')}<small>${esc(p.author_name)}${p.approved?'':' · '+t('pending')}</small></figcaption></figure>`).join('')}</div>`:`<p class="comm-note">${t('ph_none')}</p>`}
${me?`<form class="comm-form" id="ph-form"><input type="file" id="ph-file" accept="image/jpeg,image/png,image/webp" required><input type="text" id="ph-cap" maxlength="120" placeholder="${t('ph_cap')}"><button class="btn" type="submit">${t('ph_add')}</button><div class="form-msg" id="ph-msg" role="status"></div></form>`:''}
<h3 class="cm-h">${t('cm_h')}</h3>
${cm.length?`<ul class="cm-list">${cm.map(c=>`<li><b>${esc(c.author_name)}</b><small>${fmt(c.created_at)}${c.approved?'':' · '+t('pending')}</small><p>${esc(c.body)}</p></li>`).join('')}</ul>`:`<p class="comm-note">${t('cm_none')}</p>`}
${me?`<form class="comm-form" id="cm-form"><textarea id="cm-body" rows="3" maxlength="1000" required placeholder="${t('cm_ph')}"></textarea><button class="btn" type="submit">${t('cm_send')}</button><div class="form-msg" id="cm-msg" role="status"></div></form>`:`<p><button type="button" class="btn btn-ghost" data-login>${t('comm_login')}</button></p>`}`;
  cur.querySelectorAll('[data-login]').forEach(b=>b.onclick=openLogin);
  const pf=$id('ph-form');
  if(pf)pf.onsubmit=async e=>{e.preventDefault();const f=$id('ph-file').files[0];if(!f)return;const m=$id('ph-msg');m.textContent='…';
    try{await CLOUD.addPhoto(id,f,$id('ph-cap').value.trim());await loadCommunity(id);const m2=$id('ph-msg');if(m2)m2.textContent=t('ph_ok')}catch(err){m.textContent=t('ph_err')}};
  const cf=$id('cm-form');
  if(cf)cf.onsubmit=async e=>{e.preventDefault();const v=$id('cm-body').value.trim();if(!v)return;const m=$id('cm-msg');m.textContent='…';
    try{await CLOUD.addComment(id,v);await loadCommunity(id);const m2=$id('cm-msg');if(m2)m2.textContent=t('cm_ok')}catch(err){m.textContent=t('cm_err')}};
}
document.addEventListener('click',e=>{
  const b=e.target.closest&&e.target.closest('[data-trip]');if(b){e.preventDefault();tripToggle(b.dataset.trip);return}
  const r=e.target.closest&&e.target.closest('[data-trip-rm]');
  if(r){TRIP=TRIP.filter(x=>x!==r.dataset.tripRm);CLOUD.saveTrip(TRIP).catch(()=>{});route();return}
  const m=e.target.closest&&e.target.closest('[data-trip-mv]');
  if(m){const [id,dir]=m.dataset.tripMv.split(':');const i=TRIP.indexOf(id),j=i+(dir==='up'?-1:1);
    if(i>-1&&j>=0&&j<TRIP.length){[TRIP[i],TRIP[j]]=[TRIP[j],TRIP[i]];CLOUD.saveTrip(TRIP).catch(()=>{});route()}}
});
function showPage(html){
  if(mapEl)mapEl.style.display='none';
  stage.classList.remove('is-map');
  Array.from(stage.children).forEach(c=>{if(c!==mapEl)c.remove()});
  stage.insertAdjacentHTML('beforeend',html);stage.scrollTop=0;
  stage.querySelector('[data-scroll]')?.addEventListener('click',e=>{e.preventDefault();stage.querySelector('.d-explore').scrollIntoView({behavior:'smooth',block:'start'})});
  stage.querySelectorAll('[data-login]').forEach(b=>b.addEventListener('click',openLogin));
  initScrollReveal(stage);
}
function showMap(){
  Array.from(stage.children).forEach(c=>{if(c!==mapEl)c.remove()});
  stage.classList.add('is-map');
  if(!mapEl)buildMap();else{mapEl.style.display='';setTimeout(()=>mapObj.invalidateSize(),50)}
}
function buildMap(){
  mapEl=document.createElement('div');mapEl.className='view-map';
  const purpChips=Object.keys(PURPOSES).map(k=>`<button type="button" class="chip chip-p" data-purpose="${k}">${purp(k)}</button>`).join('');
  const catChips = usedCats().map(k=>`<button type="button" class="chip" data-cat="${k}">${cat(k)}</button>`).join('');
  mapEl.innerHTML=`<div id="map" role="region" aria-label="${t('map_aria')}"></div>
<div class="mc mc-tl"><button type="button" id="zin" aria-label="${t('zin')}">${ICON.plus}</button><button type="button" id="zout" aria-label="${t('zout')}">${ICON.minus}</button><button type="button" id="zhome" aria-label="${t('zhome')}">${ICON.full}</button></div>

<div class="map-hud">
  <div class="search-wrap" id="search-wrap">
    <div class="search-in-row">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
      <input type="text" id="map-search" placeholder="${t('search_ph')}" autocomplete="off" aria-label="${t('search_ph')}">
      <button type="button" class="search-clear" id="search-clear" aria-label="${t('close')}">${ICON.x}</button>
    </div>
    <div class="search-drop" id="search-drop" role="listbox"></div>
  </div>

  <div class="chips" role="group" aria-label="${t('legend')}">
    <button type="button" class="chip on" data-cat="all">${t('filter_all')}</button>
    ${catChips}${purpChips}
  </div>

  <div class="hud-tools">
    <button type="button" class="tool-pill" id="btn-sat">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18"/></svg>
      <span id="lbl-sat">${t('layer_sat')}</span>
    </button>
    <button type="button" class="tool-pill" id="btn-loc">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
      <span>${t('my_loc')}</span>
    </button>
  </div>
</div>

<div class="routes-dock">
  <span>${t('route_label')}</span>
  <button type="button" class="rt-btn" data-route="north">${t('r_north')}</button>
  <button type="button" class="rt-btn" data-route="golden">${t('r_golden')}</button>
  <button type="button" class="rt-btn" data-route="kings">${t('r_kings')}</button>
</div>

<div class="plate"><b>${t('plate_b')}</b><span class="${LANG==='ar'?'en':'ar-s'}">${t('plate_s')}</span></div>
<div class="legend"><h3>${t('legend')}</h3><ul>${usedCats().map(k=>`<li><span class="lg-d"><i></i></span>${cat(k)}</li>`).join('')}</ul><div class="scale"><span class="scale-bar" id="sbar"></span><span id="slab"></span></div></div>
<svg class="compass" id="map-compass" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="rgba(246,239,220,.88)" stroke="#8b6220"/><path d="M32 8l7 24-7-4-7 4z" fill="#720e07"/><path d="M32 56l-7-24 7 4 7-4z" fill="#8b6220" opacity=".5"/><text x="32" y="7" text-anchor="middle" font-size="9" fill="#45050c" font-family="Times New Roman">N</text></svg>

<aside class="place-drawer" id="place-drawer" aria-hidden="true">
  <div class="pd-art" id="pd-art"></div>
  <div class="pd-body">
    <h2 class="pd-title" id="pd-title"></h2>
    <div class="pd-sub" id="pd-sub"></div>
    <div class="pd-dist" id="pd-dist"></div>
    <p class="pd-intro" id="pd-intro"></p>
    <dl class="pd-facts" id="pd-facts"></dl>
    <h3 class="pd-h" id="pd-h-about"></h3>
    <p class="pd-about" id="pd-about"></p>
    <h3 class="pd-h" id="pd-h-hl"></h3>
    <ul class="pd-hl" id="pd-hl"></ul>
    <div class="pd-meta" id="pd-meta"></div>
    <div class="pd-acts">
      <a class="btn" id="pd-more" href="#">${t('drawer_more')}</a>
      <a class="btn btn-ghost" id="pd-dir" href="#" target="_blank" rel="noopener">${t('drawer_dir')}</a>
      <button type="button" class="btn btn-ghost" id="pd-trip" data-trip="">${t('trip_add')}</button>
    </div>
  </div>
</aside>`;
  stage.appendChild(mapEl);

  const M=L.map('map',{zoomControl:false,attributionControl:false,minZoom:6,maxZoom:17,zoomSnap:.25,zoomDelta:.5,maxBounds:[[26.2,32.0],[35.8,42.5]],maxBoundsViscosity:.7});
  mapObj=M;
  const bounds=L.latLngBounds(JORDAN);
  const home=()=>{
    closePlaceDrawer();
    M.flyToBounds(bounds,{paddingTopLeft:[40,85],paddingBottomRight:[40,55],animate:true,duration:1.35});
  };
  M.setView([31.2,36.9],7);
  M.fitBounds(bounds,{paddingTopLeft:[40,85],paddingBottomRight:[40,55],animate:false});

  /* Base Atlas Layer Group */
  const atlasGroup = L.layerGroup().addTo(M);
  const seaStyle={fillColor:'#b8c8c1',fillOpacity:1,color:'#6f8b87',weight:1.2,interactive:false};
  L.polygon(MED,seaStyle).addTo(atlasGroup);L.polygon(GULF,seaStyle).addTo(atlasGroup);
  L.polygon([[28.5,34.48],[27,34.0],[27,36.2],[28.5,34.78]],seaStyle).addTo(atlasGroup);
  M.createPane('land');M.getPane('land').style.zIndex=300;
  L.polygon(JORDAN,{pane:'land',fillColor:'#efdfa9',fillOpacity:1,color:'#45050c',weight:2.4,interactive:false}).addTo(atlasGroup);
  L.polygon(JORDAN,{pane:'land',fill:false,color:'#d5ac4e',weight:6,opacity:.35,interactive:false}).addTo(atlasGroup);
  L.polygon(HIGHLAND.concat(HIGHLAND.slice().reverse().map(p=>[p[0],p[1]+.42])),{fillColor:'#d5ac4e',fillOpacity:.35,weight:0,interactive:false}).addTo(atlasGroup);
  L.polygon(DEADSEA,Object.assign({},seaStyle,{weight:1.4})).addTo(atlasGroup);
  L.polygon(GALILEE,seaStyle).addTo(atlasGroup);
  Object.values(RIVERS).forEach(r=>L.polyline(r,{color:'#6f8b87',weight:1.6,opacity:.9,interactive:false}).addTo(atlasGroup));
  const rr=mulberry(77);
  for(let i=0;i<70;i++){const p=lerpPath(HIGHLAND,i/69);
    L.marker([p[0]+(rr()-.5)*.08,p[1]+.16+rr()*.3],{interactive:false,icon:L.divIcon({className:'',iconSize:[18,12],html:'<svg width="18" height="12" viewBox="0 0 18 12"><path d="M1 11L9 1l8 10" fill="none" stroke="#8b6220" stroke-width="1.4" opacity=".7"/></svg>'})}).addTo(atlasGroup)}
  for(let i=0;i<46;i++){const lat=29.4+rr()*2.8,lng=36.5+rr()*2.4;if(!pointInPoly(lat,lng,JORDAN))continue;
    L.marker([lat,lng],{interactive:false,icon:L.divIcon({className:'',iconSize:[10,6],html:'<svg width="10" height="6"><path d="M0 4q2-3 5 0t5 0" fill="none" stroke="#b58c3a" stroke-width="1" opacity=".7"/></svg>'})}).addTo(atlasGroup)}

  /* Satellite Layer + Golden Jordan Border Overlay */
  const satTiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:17});
  const satBorder = L.polygon(JORDAN,{fill:false,color:'#eecf6d',weight:2.5,dashArray:'6,4',interactive:false});
  let satOn = false;
  $id('btn-sat').onclick = () => {
    satOn = !satOn;
    mapEl.classList.toggle('sat-mode', satOn);
    $id('btn-sat').classList.toggle('on', satOn);
    $id('lbl-sat').textContent = satOn ? t('layer_atlas') : t('layer_sat');
    if(satOn){
      M.removeLayer(atlasGroup);
      satTiles.addTo(M);
      satBorder.addTo(M);
    } else {
      M.removeLayer(satTiles);
      M.removeLayer(satBorder);
      atlasGroup.addTo(M);
    }
  };

  /* Labels */
  LABELS.forEach(l=>L.marker(l.ll,{interactive:false,icon:L.divIcon({className:'',iconSize:[0,0],html:`<div class="lb ${l.c}">${lbl(l.t)}</div>`})}).addTo(M));
  L.marker([31.0,36.9],{interactive:false,zIndexOffset:-500,icon:L.divIcon({className:'',iconSize:[0,0],html:`<div class="lb lb-jo">${t('jordan_lbl')}<small>${t('jordan_sub')}</small></div>`})}).addTo(M);
  CITIES.forEach(c=>L.marker(c.ll,{interactive:false,icon:L.divIcon({className:'',iconSize:[0,0],html:`<div class="lb lb-city lb-feat" style="font-style:normal">${lbl(c.ar)}</div>`})}).addTo(M));

  /* User Geolocation & Road Distance Estimator */
  let userLL = null, userMarker = null;
  function estimateDrive(fromLL, toLL){
    const straight = haversine(fromLL, toLL);
    const roadKm = Math.max(1, Math.round(straight * 1.24));
    const totalMins = Math.round((roadKm / 75) * 60);
    const h = Math.floor(totalMins / 60), m = totalMins % 60;
    const timeStr = LANG === 'ar'
      ? (h > 0 ? `${AR(h)} س و ${AR(m)} د` : `${AR(m)} دقيقة`)
      : (h > 0 ? `${h}h ${m}m` : `${m} min`);
    return { roadKm: num(roadKm), timeStr };
  }

  $id('btn-loc').onclick = () => {
    if(!navigator.geolocation){ alert(t('loc_err')); return; }
    navigator.geolocation.getCurrentPosition(pos => {
      userLL = [pos.coords.latitude, pos.coords.longitude];
      if(userMarker) M.removeLayer(userMarker);
      userMarker = L.circleMarker(userLL, { radius: 8, color: '#eecf6d', weight: 2.5, fillColor: '#720e07', fillOpacity: 1 }).addTo(M);
      userMarker.bindTooltip(t('loc_you'), { permanent: true, direction: 'top', offset: [0, -10], className: 'mk-tip' });
      $id('btn-loc').classList.add('on');
      M.flyTo(userLL, 10, { animate: true, duration: 1.4 });
      if(selId){
        const curD = DEST.find(x=>x.id===selId);
        if(curD) updateDrawerDistance(curD);
      }
    }, () => alert(t('loc_err')));
  };

  /* Place Preview Drawer (Google Maps Style) */
  const drawer = $id('place-drawer');
  function updateDrawerDistance(d){
    const distEl = $id('pd-dist');
    if(userLL){
      const est = estimateDrive(userLL, d.ll);
      distEl.textContent = t('drawer_dist', { km: est.roadKm, time: est.timeStr });
      distEl.classList.add('on');
    } else {
      distEl.classList.remove('on');
    }
  }
  function openPlaceDrawer(base){
    const d = DT(base);
    if(selId && markers[selId]) markers[selId].el()?.classList.remove('sel');
    selId = d.id;
    markers[d.id]?.el()?.classList.add('sel');
    $id('pd-art').innerHTML = `${art(d.art, d.n, '')}${photoImg(d)}<button type="button" class="pd-close" id="pd-close-btn" aria-label="${t('close')}">${ICON.x}</button><span class="pd-badge">${cat(d.cat)}</span>`;
    $id('pd-close-btn').onclick = closePlaceDrawer;
    $id('pd-title').textContent = nm(d);
    $id('pd-sub').textContent = sub(d);
    $id('pd-sub').className = 'pd-sub ' + subCls();
    $id('pd-intro').textContent = d.intro;
    $id('pd-facts').innerHTML = `<div><dt>${t('f_loc')}</dt><dd>${esc(d.gov)}</dd></div><div><dt>${t('f_cat')}</dt><dd>${cat(d.cat)}</dd></div><div><dt>${t('f_season')}</dt><dd>${esc(d.season)}</dd></div><div><dt>${t('f_dur')}</dt><dd>${esc(d.dur)}</dd></div>`;
    $id('pd-h-about').textContent = t('about_h');
    $id('pd-about').textContent = d.about[0];
    $id('pd-h-hl').textContent = t('explore_h');
    $id('pd-hl').innerHTML = d.explore.map(e=>`<li><b>${esc(e[0])}</b><span>${esc(e[1])}</span></li>`).join('');
    drawer.scrollTop = 0;
    $id('pd-meta').innerHTML = `<span class="pd-tag">${reg(d.region)}</span><span class="pd-tag">${esc(d.gov)}</span><span class="pd-tag">${esc(d.season)}</span><span class="pd-tag">${esc(d.dur)}</span>`;
    $id('pd-more').href = '#d-' + d.id;
    $id('pd-dir').href = `https://www.google.com/maps/dir/?api=1&destination=${d.ll[0]},${d.ll[1]}`;
    $id('pd-trip').dataset.trip = d.id; syncTripBtns();
    updateDrawerDistance(d);
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  }
  function closePlaceDrawer(){
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if(selId && markers[selId]) markers[selId].el()?.classList.remove('sel');
    selId = null;
  }

  /* Cinematic FlyTo Destination */
  function flyToDest(base){
    M.flyTo(base.ll, 12.5, { animate: true, duration: 1.55, easeLinearity: 0.25 });
    openPlaceDrawer(base);
  }

  /* Markers with Staggered Drop & Radar Pulse */
  const featuredIds = new Set(['petra','jerash','wadi-rum','ajloun','dead-sea','citadel']);
  DEST.forEach((d, idx) => {
    const isFeat = featuredIds.has(d.id) ? ' featured' : '';
    const delay = Math.min(idx * 35, 750);
    const ic = L.divIcon({
      className: '', iconSize: [34, 34], iconAnchor: [17, 17],
      html: `<div class="mk mk-drop${isFeat}" style="animation-delay:${delay}ms" tabindex="0" role="button" aria-label="${esc(nm(d))}, ${cat(d.cat)}"><span class="mk-pulse"></span><i class="mk-d"></i>${CI[d.cat]}</div>`
    });
    const m = L.marker(d.ll, { icon: ic, keyboard: false, riseOnHover: true }).addTo(M);
    m.bindTooltip(`${esc(nm(d))}<span class="${subCls()}">${esc(sub(d))}</span>`, { direction: 'top', offset: [0, -18], className: 'mk-tip', opacity: 1 });
    const el = () => m.getElement() && m.getElement().querySelector('.mk');
    markers[d.id] = { m, el, data: d };
    m.on('click', ev => { L.DomEvent.stopPropagation(ev); flyToDest(d); });
    const e = el();
    if(e){
      e.addEventListener('keydown', ev => { if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); flyToDest(d); } });
    }
  });
  M.on('click', closePlaceDrawer);

  /* Category + purpose filters */
  let fCat='all',fPur='all';
  const applyFilters=()=>{Object.values(markers).forEach(({el,data})=>{const node=el();if(!node)return;node.classList.toggle('is-hidden',!((fCat==='all'||data.cat===fCat)&&(fPur==='all'||data.purpose===fPur)))})};
  mapEl.querySelectorAll('.chip[data-cat]').forEach(btn=>{btn.onclick=()=>{mapEl.querySelectorAll('.chip[data-cat]').forEach(c=>c.classList.remove('on'));btn.classList.add('on');fCat=btn.dataset.cat;applyFilters()}});
  mapEl.querySelectorAll('.chip[data-purpose]').forEach(btn=>{btn.onclick=()=>{const on=!btn.classList.contains('on');mapEl.querySelectorAll('.chip[data-purpose]').forEach(c=>c.classList.remove('on'));btn.classList.toggle('on',on);fPur=on?btn.dataset.purpose:'all';applyFilters()}});

  /* Smart Search with Instant Autocomplete */
  const sInput = $id('map-search'), sDrop = $id('search-drop'), sClear = $id('search-clear');
  function renderSearch(q){
    const term = q.trim().toLowerCase();
    sClear.classList.toggle('on', term.length > 0);
    if(!term){ sDrop.classList.remove('on'); sDrop.innerHTML = ''; return; }
    const hits = DEST.filter(d =>
      d.ar.toLowerCase().includes(term) ||
      d.en.toLowerCase().includes(term) ||
      d.gov.toLowerCase().includes(term) ||
      cat(d.cat).toLowerCase().includes(term)
    ).slice(0, 7);
    if(!hits.length){ sDrop.classList.remove('on'); return; }
    sDrop.innerHTML = hits.map(d => `<button type="button" class="search-opt" data-sid="${d.id}"><div><b>${esc(nm(d))}</b><small>${esc(sub(d))}</small></div><small>${cat(d.cat)}</small></button>`).join('');
    sDrop.classList.add('on');
    sDrop.querySelectorAll('.search-opt').forEach(opt => {
      opt.onclick = () => {
        const target = DEST.find(x => x.id === opt.dataset.sid);
        if(target){
          sInput.value = nm(target);
          sDrop.classList.remove('on');
          flyToDest(target);
        }
      };
    });
  }
  sInput.addEventListener('input', () => renderSearch(sInput.value));
  sInput.addEventListener('focus', () => { if(sInput.value.trim()) renderSearch(sInput.value); });
  sClear.onclick = () => { sInput.value = ''; renderSearch(''); sInput.focus(); };
  document.addEventListener('click', e => { if(!$id('search-wrap')?.contains(e.target)) sDrop.classList.remove('on'); });

  /* Animated Tour Routes */
  const ROUTES = {
    north: ['umm-qais', 'pella', 'ajloun', 'jerash'],
    golden: ['petra', 'wadi-rum', 'aqaba'],
    kings: ['citadel', 'madaba', 'nebo', 'karak', 'shobak', 'petra']
  };
  let activeRoute = null, activeRouteKey = null;
  mapEl.querySelectorAll('.rt-btn[data-route]').forEach(btn => {
    btn.onclick = () => {
      const key = btn.dataset.route;
      if(activeRoute){ M.removeLayer(activeRoute); activeRoute = null; }
      mapEl.querySelectorAll('.rt-btn').forEach(b => b.classList.remove('on'));
      if(activeRouteKey === key){ activeRouteKey = null; return; }
      activeRouteKey = key;
      btn.classList.add('on');
      const pts = ROUTES[key].map(id => DEST.find(x => x.id === id)?.ll).filter(Boolean);
      activeRoute = L.polyline(pts, {
        color: satOn ? '#eecf6d' : '#720e07',
        weight: 3.5,
        dashArray: '10, 10',
        className: 'athar-route-line',
        interactive: false
      }).addTo(M);
      M.flyToBounds(activeRoute.getBounds(), { padding: [70, 70], animate: true, duration: 1.45 });
    };
  });

  /* Zoom Controls, Scale Bar & Interactive Compass Physics */
  $id('zin').onclick=()=>M.zoomIn();$id('zout').onclick=()=>M.zoomOut();$id('zhome').onclick=home;
  const compassEl = $id('map-compass');
  let lastLng = M.getCenter().lng;
  const upd=()=>{
    mapEl.classList.toggle('nofeat',M.getZoom()<7.25);
    mapEl.classList.toggle('hide-jo',M.getZoom()>=8.75);
    const c=M.getCenter(),p1=M.latLngToContainerPoint(c),p2=L.point(p1.x+80,p1.y),km=M.containerPointToLatLng(p1).distanceTo(M.containerPointToLatLng(p2))/1000;
    const nice=[1,2,5,10,20,25,50,100,200].reduce((a,b)=>Math.abs(b-km)<Math.abs(a-km)?b:a);
    $id('sbar').style.width=(80*nice/km)+'px';$id('slab').textContent=num(nice)+' '+t('km');
    if(compassEl){
      const delta = (c.lng - lastLng) * 26;
      const tilt = Math.max(-28, Math.min(28, delta));
      compassEl.style.transform = `rotate(${tilt.toFixed(1)}deg)`;
      lastLng = c.lng;
    }
  };
  M.on('zoom move',upd);
  M.on('moveend',()=>{ if(compassEl) compassEl.style.transform = 'rotate(0deg)'; });
  upd();
}

/* ---------- language ---------- */
function applyLangAttrs(){const h=document.documentElement;h.setAttribute('lang',LANG);h.setAttribute('dir',LANG==='ar'?'rtl':'ltr')}
function setLang(l){
  LANG=l;CHOSEN=true;try{localStorage.setItem('athar-lang',l)}catch(e){}
  applyLangAttrs();
  if(mapObj){try{mapObj.remove()}catch(e){}}
  mount();route();
}
function showGate(){
  const g=document.createElement('div');g.className='gate';g.setAttribute('role','dialog');g.setAttribute('aria-modal','true');g.setAttribute('aria-labelledby','gt');
  g.innerHTML=`<div class="gate-in"><div class="logo-box"><img src="${LOGO}" alt="ATHAR أثر" width="1154" height="912"></div>
<h1 id="gt" class="gate-t"><span lang="ar" dir="rtl">اختر لغة التصفح</span><span lang="en" dir="ltr" class="en">Choose your language</span></h1>
<div class="gate-btns"><button type="button" class="btn btn-gold" id="g-ar" lang="ar">العربية</button><button type="button" class="btn btn-ghost-light" id="g-en" lang="en">English</button></div>
<p class="gate-note" lang="ar" dir="rtl">يمكنك تغيير اللغة لاحقًا من القائمة الجانبية.</p></div>`;
  document.body.appendChild(g);
  const pick=l=>{g.remove();setLang(l);maybeLogin()};
  $id('g-ar').onclick=()=>pick('ar');$id('g-en').onclick=()=>pick('en');
  $id('g-ar').focus();
}

document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;const m=$id('modal'),hp=$id('help');if(m&&!m.hidden)closeLogin();else if(hp&&!hp.hidden){toggleHelp(false);$id('help-btn').focus()}else closeDrawer()});
window.addEventListener('hashchange',()=>{if(stage)route()});
window.addEventListener('resize',()=>{if(mapObj&&mapEl&&mapEl.style.display!=='none')mapObj.invalidateSize()});
applyLangAttrs();mount();route();
CLOUD.onAuth(()=>{refreshAuthUI();tripLoad();if((location.hash||'')==='#signup')route();const cb=$id('community-body');if(cb)loadCommunity(cb.dataset.place)});
CLOUD.init().then(()=>{AUTH_READY=true;refreshAuthUI();tripLoad();maybeLogin()}).catch(()=>{AUTH_READY=true;maybeLogin()});
if(!CHOSEN)showGate();
})();
