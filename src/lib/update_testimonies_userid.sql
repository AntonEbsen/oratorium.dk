
-- Link Testimonies to Users
alter table public.testimonies 
add column if not exists user_id uuid references auth.users;

-- RLS Update
-- Allow users to see their OWN testimony even if approved=false (pending)
create policy "Users can see own testimony"
  on public.testimonies for select
  using ( auth.uid() = user_id );

create policy "Users can update own testimony"
  on public.testimonies for update
  using ( auth.uid() = user_id );
