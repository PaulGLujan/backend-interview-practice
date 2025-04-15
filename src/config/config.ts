import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  db: {
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;
  };
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  db: {
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || "",
  },
};

export default config;
