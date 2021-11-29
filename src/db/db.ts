import pg from "pg";

const client = {
  user: "postgres",
  host: "localhost",
  database: "database",
  password: "password",
  port: 5432,
  idleTimeoutMillis: 30000,
};

export const pool = new pg.Pool(client).on("error", (err) => {
  console.error("idle client error", err.message, err.stack);
});

