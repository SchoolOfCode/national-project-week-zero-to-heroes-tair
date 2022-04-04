import dotenv from "dotenv";
let config = dotenv.config();

export const username = process.env.PGUSER;
console.log(username);
export const dbname = process.env.PGDATABASE;
export const host = process.env.PGHOST;
export const password = process.env.PGPASSWORD;
export const port = process.env.PGPORT;
export const databaseURL = process.env.DATABASE_URL;

console.log(databaseURL);
