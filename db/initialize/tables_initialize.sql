CREATE TABLE IF NOT EXISTS users (
  users_id SERIAL PRIMARY KEY,
  name_first text,
  name_last text,
  users_points int,
  email text UNIQUE not null,
  fitness_index = users_points/100,
  user_image text,
  profile_name = name_first + name_last,
  about text
);
CREATE TABLE IF NOT EXISTS activities (
  activities_id SERIAL PRIMARY KEY,
  activities_name text,
  description text,
  units_name text,
  points int
);
CREATE TABLE IF NOT EXISTS completed (
  completed_id SERIAL PRIMARY KEY,
  units_count int,
  completed_points int,
  activities_id int references activities(activities_id),
  users_id int references users(users_id) not null,
  completed_date date
);

