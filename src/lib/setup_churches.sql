
-- Setup Churches Table & Seed Data

create table if not exists public.churches (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    address text,
    latitude double precision not null,
    longitude double precision not null,
    website text,
    image_url text,
    mass_times jsonb default '{}'::jsonb, -- e.g. { "sunday": "10:00", "weekdays": "17:00" }
    description text,
    created_at timestamp with time zone default now() not null
);

-- RLS
alter table public.churches enable row level security;

create policy "Churches are viewable by everyone."
  on public.churches for select
  using ( true );

-- Seed Data (Danish Catholic Churches)

-- 1. Skt. Ansgars Kirke (Domkirken) - København
insert into public.churches (name, address, latitude, longitude, website, mass_times, description)
values (
    'Skt. Ansgars Kirke (Domkirken)',
    'Bredgade 64, 1260 København K',
    55.6865, 12.5913,
    'https://sanktansgar.dk',
    '{ "sunday": "10:00 (Højmessen), 12:00 (Polsk), 15:00 (Fransk)", "saturday": "17:00 (Vigilie)", "weekdays": "08:00" }',
    'Den katolske domkirke i København. Grundlagt 1842. Centrum for bispedømmet.'
);

-- 2. Jesu Hjerte Kirke - Vesterbro, København
insert into public.churches (name, address, latitude, longitude, website, mass_times, description)
values (
    'Jesu Hjerte Kirke',
    'Stenosgade 4, 1616 København V',
    55.6738, 12.5574,
    'https://jesuhjerte.dk',
    '{ "sunday": "10:00, 18:00 (Engelsk)", "weekdays": "17:00" }',
    'En smuk neogotisk kirke på Vesterbro, kendt for sit aktive fællesskab og sakramentstilbedelse.'
);

-- 3. Sankt Albani Kirke - Odense
insert into public.churches (name, address, latitude, longitude, website, mass_times, description)
values (
    'Sankt Albani Kirke',
    'Adelgade 1, 5000 Odense C',
    55.3972, 10.3906,
    'https://albani.dk',
    '{ "sunday": "10:00, 19:00", "weekdays": "17:00" }',
    'Den katolske sognekirke i H.C. Andersens fødeby, indviet til den engelske martyr Sankt Alban.'
);

-- 4. Vor Frue Kirke - Aarhus
insert into public.churches (name, address, latitude, longitude, website, mass_times, description)
values (
    'Vor Frue Kirke',
    'Ryesgade 26, 8000 Aarhus C',
    56.1517, 10.2057,
    'https://katolsk-aarhus.dk',
    '{ "sunday": "10:00, 18:00 (Engelsk)", "weekdays": "17:00" }',
    'Den katolske hovedkirke i Aarhus, med en stor og international menighed.'
);

-- 5. Sankt Mariæ Kirke - Aalborg
insert into public.churches (name, address, latitude, longitude, website, mass_times, description)
values (
    'Sankt Mariæ Kirke',
    'Kastetvej 1, 9000 Aalborg',
    57.0504, 9.9126,
    'https://katolsk-nord.dk',
    '{ "sunday": "10:00", "weekdays": "09:00" }',
    'Cistercienserne grundlagde denne kirke. En smuk oase af bøn i Nordjylland.'
);
