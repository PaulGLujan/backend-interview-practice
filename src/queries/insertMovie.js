import pool from "../database/db.js";

const insertMovie = async ({ title, summary, imdbLink, rating }) => {
  if (!title) {
    throw new Error("Title is required");
  }

  const insertQuery =
    "insert into movies (Title, Summary, IMDBLink, Rating) values ($1, $2, $3, $4) returning *;";
  const values = [title, summary, imdbLink, rating];

  const res = await pool.query(insertQuery, values);
  return res.rows;
};

export default insertMovie;
