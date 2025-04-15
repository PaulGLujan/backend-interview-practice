import pool from "../database/db";

export async function getAllMovies() {
  const res = await pool.query("select * from movies;");
  return res.rows;
}
