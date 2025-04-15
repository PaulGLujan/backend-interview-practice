import pool from "../database/db";

export const getAllMovies = async () => {
  const res = await pool.query("select * from movies;");
  return res.rows;
};
