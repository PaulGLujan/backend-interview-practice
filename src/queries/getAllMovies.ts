import pool from "../database/db";

const getAllMovies = async () => {
  const res = await pool.query("select * from movies;");
  return res.rows;
};

export default getAllMovies;
