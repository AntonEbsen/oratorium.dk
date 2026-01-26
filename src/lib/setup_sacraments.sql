
-- Add Sacramental Tracking to Profiles
alter table public.profiles 
add column if not exists rosary_count integer default 0,
add column if not exists last_confession date;

-- Note: No new policies needed as profiles policies already cover update/select for owner.
