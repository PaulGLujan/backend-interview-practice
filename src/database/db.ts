import pg from "pg";
import config from "../config/config";

const { Pool } = pg;
const { db } = config;

const pool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,
});

export default pool;
