select profile_name, units_count, activities_name, completed_date from completed 
full join users on users.users_id = completed.users_id
full join activities on activities.activities_id = completed.activities_id
where users.users_id = $1
order by completed_date desc
