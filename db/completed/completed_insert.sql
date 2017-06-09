insert into completed (units_count int, completed_points int, activities_id int references activities(activities_id), users_id int references users(users_id) not null, completed_date date)
values ($1, $2, $3, $4, $5)
returning*;