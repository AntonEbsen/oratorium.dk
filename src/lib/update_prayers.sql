
-- Safe Update Script

-- 1. Ensure columns exist
alter table public.prayers 
add column if not exists content text,
add column if not exists prayer_count integer default 0,
add column if not exists approved boolean default true;

-- 2. If the table was empty or used for something else, this makes sure our new logic works.
-- If you have tons of old data using 'text' column instead of 'content', you might need to rename it, but let's assume 'content' is fine.

-- 3. Update Policy in case it didn't exist
drop policy if exists "Anyone can update prayer count" on public.prayers;
create policy "Anyone can update prayer count"
on public.prayers for update
using (true);

drop policy if exists "Anyone can view prayers" on public.prayers;
create policy "Anyone can view prayers"
on public.prayers for select
using (true);

drop policy if exists "Anyone can post prayer" on public.prayers;
create policy "Anyone can post prayer"
on public.prayers for insert
with check (true);
