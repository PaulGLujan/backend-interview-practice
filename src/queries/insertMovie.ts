import pool from "../database/db";
import { ClientError } from "../errors";
import type { Movie } from "../models/movie";

export const insertMovie = async (movie: Movie) => {
  const { title, summary, imdbLink, rating } = movie;
  if (!title) {
    throw new ClientError("Title is required", 400);
  }

  const insertQuery =
    "insert into movies (Title, Summary, IMDBLink, Rating) values ($1, $2, $3, $4) returning *;";
  const values = [title, summary, imdbLink, rating];

  const res = await pool.query(insertQuery, values);
  return res.rows;
};
