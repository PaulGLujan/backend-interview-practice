import pool from "../database/db";
import type { Movie } from "../models/movie";
import { validateMovieData } from "../validators/movieValidators";

export const insertMovie = async (movie: Movie) => {
  const { title, summary, imdbLink, rating } = movie;
  if (!title) {
    throw new Error("Title is required");
  }

  validateMovieData(movie);

  const insertQuery =
    "insert into movies (Title, Summary, IMDBLink, Rating) values ($1, $2, $3, $4) returning *;";
  const values = [title, summary, imdbLink, rating];

  const res = await pool.query(insertQuery, values);
  return res.rows;
};
