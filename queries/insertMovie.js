import pg from "pg";

const insertMovie = async ({ title, summary, imdbLink, rating }) => {
  const { Client } = pg;
  const client = new Client({
    user: "plujan2",
    password: "",
    host: "localhost",
    port: 5432,
    database: "movie-rating-app",
  });
  await client.connect();

  if (!title) {
    throw new Error("Title is required");
  }

  const insertQuery =
    "insert into movies (Title, Summary, IMDBLink, Rating) values ($1, $2, $3, $4) returning *;";

  const values = [title, summary, imdbLink, rating];

  const res = await client.query(insertQuery, values);
  await client.end();
  return res.rows;
};

export default insertMovie;
