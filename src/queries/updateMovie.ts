import pool from "../database/db";
import { Movie } from "../models/movie";
import { ClientError } from "../errors";

export const updateMovie = async (id: number, updateData: Partial<Movie>) => {
  const setClause = Object.keys(updateData)
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");

  const values = [...Object.values(updateData), id];
  const updateQuery = `UPDATE movies SET ${setClause} WHERE MovieID = $${values.length} RETURNING *;`;

  const res = await pool.query(updateQuery, values);

  if (res.rowCount === 0) {
    throw new ClientError("Movie not found", 404);
  }

  return res.rows;
};
