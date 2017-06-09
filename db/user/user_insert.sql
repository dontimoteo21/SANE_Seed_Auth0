INSERT INTO users (name_first, name_last, users_points , email, fitnes_index, user_image, profile_name, about)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;
