insert into activities (activities_name text, description text, units_name text, points int)
values ($1, $2, $3, $4)
returning *;