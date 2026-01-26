
-- Add specific name columns
alter table public.profiles 
add column if not exists first_name text,
add column if not exists last_name text;

-- (Optional) You might want to migrate existing usernames to first_name if you wanted, 
-- but given it's a small userbase (just you), we can just leave them null and let you set them.
