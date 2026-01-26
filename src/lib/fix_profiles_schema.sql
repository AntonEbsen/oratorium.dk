
-- Fix Profiles Schema

-- 1. Add created_at if missing
-- We default to now(). For exact join date, we'd need to sync with auth.users, but this is a good enough approximation for existing users.
alter table public.profiles 
add column if not exists created_at timestamp with time zone default timezone('utc'::text, now()) not null;

-- 2. Ensure prayer_streak is correct (it exists, just confirming for clarity in my mind, no action needed)

-- 3. Ensure RLS allows select (just in case)
drop policy if exists "Public profiles are viewable by everyone." on public.profiles;
create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using ( true );
