import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "plujan2",
  password: "",
  host: "localhost",
  port: 5432,
  database: "movie-rating-app",
});

export default pool;
