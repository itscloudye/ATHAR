-- ATHAR community schema. Run once in Supabase: SQL Editor -> New query -> paste -> Run.
-- Comments and photos start as approved=false. Approve them in Table Editor (set approved = true).

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  place_id text not null,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  author_name text not null check (char_length(author_name) between 1 and 40),
  body text not null check (char_length(body) between 1 and 1000),
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.photos (
  id uuid primary key default gen_random_uuid(),
  place_id text not null,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  author_name text not null check (char_length(author_name) between 1 and 40),
  path text not null,
  caption text check (char_length(caption) <= 120),
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.trips (
  user_id uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  place_ids text[] not null default '{}',
  updated_at timestamptz not null default now()
);

create index on public.comments (place_id, created_at desc);
create index on public.photos (place_id, created_at desc);

alter table public.comments enable row level security;
alter table public.photos   enable row level security;
alter table public.trips    enable row level security;

-- Everyone sees approved items; authors also see their own pending items.
create policy "comments read"   on public.comments for select using (approved or user_id = auth.uid());
create policy "comments insert" on public.comments for insert to authenticated with check (user_id = auth.uid() and approved = false);
create policy "comments delete" on public.comments for delete to authenticated using (user_id = auth.uid());

create policy "photos read"     on public.photos for select using (approved or user_id = auth.uid());
create policy "photos insert"   on public.photos for insert to authenticated with check (user_id = auth.uid() and approved = false);
create policy "photos delete"   on public.photos for delete to authenticated using (user_id = auth.uid());

-- A trip is private to its owner.
create policy "trips own" on public.trips for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Photo storage: 5 MB, images only, each user writes only inside their own folder.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('place-photos', 'place-photos', true, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

create policy "photos upload own folder" on storage.objects for insert to authenticated
  with check (bucket_id = 'place-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "photos public read" on storage.objects for select using (bucket_id = 'place-photos');
