create table if not exists mentor_questions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id), -- Nullable if anon
  email text,
  subject text,
  question text not null,
  is_answered boolean default false,
  created_at timestamptz default now()
);

alter table mentor_questions enable row level security;

-- Allow anyone to insert (seekers)
create policy "Anyone can ask questions"
  on mentor_questions for insert
  with check ( true ); 

-- Only users can see their own
create policy "Users view own questions"
  on mentor_questions for select
  using ( auth.uid() = user_id );
