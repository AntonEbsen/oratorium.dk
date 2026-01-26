
-- 1. Create the table
create table public.testimonies (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  location text, -- e.g. "Århus"
  content text not null,
  approved boolean default false -- Moderation: Visible only if true
);

-- 2. Enable Row Level Security (RLS)
alter table public.testimonies enable row level security;

-- 3. Create Policies

-- Allow ANYONE to insert (Submit story)
create policy "Anyone can upload testimony"
on public.testimonies for insert
with check (true);

-- Allow ANYONE to read APPROVED stories
create policy "Anyone can view approved testimonies"
on public.testimonies for select
using (approved = true);

-- (Optional) If you want to view UNAPPROVED stories, you need to be logged in as service/admin
-- But for now, you can just use the Supabase Dashboard Table Editor to flip "approved" to TRUE.
