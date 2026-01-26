-- Run this in your Supabase SQL Editor

create table if not exists user_stamps (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  stamp_id text not null,
  created_at timestamptz default now(),
  unique(user_id, stamp_id)
);

-- Enable RLS
alter table user_stamps enable row level security;

-- Policy: Users can read their own stamps
create policy "Users can read own stamps"
  on user_stamps for select
  using ( auth.uid() = user_id );

-- Policy: Only service role can insert (for now, or maybe authenticated if we handle logic client side? 
-- Ideally we use server actions, but for this MVP client-side simple insert if we trust the client logic, 
-- BUT better to be safe. Actually, the user's current code does inserts client-side for prayers etc.
-- So let's allow insert for authenticated users for now, to keep it consistent with their current arch).
create policy "Users can insert own stamps"
  on user_stamps for insert
  with check ( auth.uid() = user_id );
