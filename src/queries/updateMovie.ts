import pool from "../database/db.js";
import { Movie } from "../models/movie.js";
import { validateMovieData } from "../validators/movieValidators.js";

export const updateMovie = async (id: number, updateData: Partial<Movie>) => {
  validateMovieData(updateData);

  const setClause = Object.keys(updateData)
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");

  const values = [...Object.values(updateData), id];
  const updateQuery = `UPDATE movies SET ${setClause} WHERE MovieID = $${values.length} RETURNING *;`;

  const res = await pool.query(updateQuery, values);
  return res.rows;
};
