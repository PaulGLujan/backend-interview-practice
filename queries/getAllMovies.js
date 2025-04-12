import pg from "pg";

const getAllMovies = async () => {
  const { Client } = pg;
  const client = new Client({
    user: "plujan2",
    password: "",
    host: "localhost",
    port: 5432,
    database: "movie-rating-app",
  });
  await client.connect();

  const res = await client.query("select * from movies;");
  await client.end();
  return res.rows;
};

export default getAllMovies;
