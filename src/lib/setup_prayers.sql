
-- 1. Create the table for Intentions
create table public.prayers (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  content text not null, -- The intention e.g. "For min syge bror"
  prayer_count integer default 0, -- How many have clicked "Pray"
  approved boolean default true -- We default to TRUE for friction-less posting, but you can moderate later
);

-- 2. Enable RLS
alter table public.prayers enable row level security;

-- 3. Policies

-- Everyone can read
create policy "Anyone can view prayers"
on public.prayers for select
using (true);

-- Everyone can insert (post intention)
create policy "Anyone can post prayer"
on public.prayers for insert
with check (true);

-- Everyone can update (increment count)
-- ideally we'd restrict this to ONLY incrementing count, but for MVP this forces simple access
create policy "Anyone can update prayer count"
on public.prayers for update
using (true);
