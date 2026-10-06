create table if not exists app_records (
  id text primary key,
  table_name text not null,
  record jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists app_records_table_name_idx on app_records(table_name);
create index if not exists app_records_created_at_idx on app_records(created_at);
create index if not exists app_records_record_gin_idx on app_records using gin(record);
