import pool from "../database/db";
import { ClientError } from "../errors";

export async function deleteMovie(id: number) {
  const deleteQuery = "delete from movies where MovieID = $1 returning *;";
  const values = [id];
  const res = await pool.query(deleteQuery, values);

  if (res.rowCount === 0) {
    throw new ClientError("Movie not found", 404);
  }

  return res.rows;
}
