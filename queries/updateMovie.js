import pool from "../database/db.js";

const updateMovie = async (id, updateData) => {
  const setClause = Object.keys(updateData)
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");

  const values = [...Object.values(updateData), id];
  const updateQuery = `UPDATE movies SET ${setClause} WHERE MovieID = $${values.length} RETURNING *;`;

  const res = await pool.query(updateQuery, values);
  return res.rows;
};

export default updateMovie;
