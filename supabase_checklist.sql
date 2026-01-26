create table if not exists user_checklist (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  item_id text not null,
  completed_at timestamptz default now(),
  unique(user_id, item_id)
);

alter table user_checklist enable row level security;

create policy "Users manage own checklist"
  on user_checklist for all
  using ( auth.uid() = user_id )
  with check ( auth.uid() = user_id );
