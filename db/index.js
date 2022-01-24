// Create Pool to connect to Heroku
import pg from "pg";
import {
  host,
  dbname,
  username,
  password,
  port,
  databaseURL,
} from "../config.js";

const pool = new pg.Pool({
 // data from heroku,
  user: username,
 host: host,
  database: dbname,
   password: password,
   port: port,
  //connectionString: databaseURL,
  ssl: { rejectUnauthorized: false },
});

export async function query(text, params, callback) {
  return pool.query(text, params, callback);
}
