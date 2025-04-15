import pool from "../database/db";

export const deleteMovie = async (id: number) => {
  const deleteQuery = "delete from movies where MovieID = $1 returning *;";
  const values = [id];
  const res = await pool.query(deleteQuery, values);
  return res.rows;
};
