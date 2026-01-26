
-- Add user_id to prayers to link them to profiles
alter table public.prayers 
add column if not exists user_id uuid references auth.users;

-- Update Policies to allow users to see/edit their own properly (optional but good)
-- For now, existing policies are permissive enough (everyone can view/insert), 
-- but this column allows us to filter "Mine".
