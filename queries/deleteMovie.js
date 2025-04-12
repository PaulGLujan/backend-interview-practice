import pg from "pg";

const deleteMovie = async (id) => {
  const { Client } = pg;
  const client = new Client({
    user: "plujan2",
    password: "",
    host: "localhost",
    port: 5432,
    database: "movie-rating-app",
  });
  await client.connect();
  const deleteQuery = "delete from movies where MovieID = $1 returning *;";
  const values = [id];
  const res = await client.query(deleteQuery, values);
  await client.end();
  return res.rows;
};

export default deleteMovie;
