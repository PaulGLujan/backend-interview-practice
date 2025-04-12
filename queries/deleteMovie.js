import pool from "../database/db.js";

const deleteMovie = async (id) => {
  const deleteQuery = "delete from movies where MovieID = $1 returning *;";
  const values = [id];
  const res = await pool.query(deleteQuery, values);
  return res.rows;
};

export default deleteMovie;
