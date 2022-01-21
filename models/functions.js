// Contacting Heroku to manage the data using SQL
import { query } from "../db/index.js";

// GET ALL ENERGISERS
export async function getAllEnergisers() {
  const data = await query(`SELECT * FROM energisers;`);
  console.log("energisers are", data);
  return data.rows;
}

// GET ALL QUOTES
export async function getAllQuotes() {
  const data = await query(`SELECT * FROM quotes;`);
  console.log("quotes are", data);
  return data.rows;
}

// GET ALL REMINDERS
export async function getAllReminders() {
  const data = await query(`SELECT * FROM reminders;`);
  console.log("reminders are", data);
  return data.rows;
}

// GET ENERGISER BY ID
export async function getEnergiserByID(id) {
  const data = await query(`SELECT * FROM energisers WHERE id = $1;`, [id]);
  return data.rows;
}

// GET QUOTE BY ID
export async function getQuoteByID(id) {
  const data = await query(`SELECT * FROM quotes WHERE id = $1;`, [id]);
  return data.rows;
}

// GET REMINDER BY ID
export async function getReminderByID(id) {
  const data = await query(`SELECT * FROM reminders WHERE id = $1;`, [id]);
  return data.rows;
}

// GET ENERGISER BY CATEGORY
export async function getEnergiserByCategory(category) {
  const data = await query(`SELECT * FROM energisers WHERE category = $1;`, [
    category,
  ]);
  return data.rows;
}

// ADD NEW ENERGISER
export async function addNewEnergiser(activity, category, url) {
  const data = await query(
    `INSERT INTO energisers (activity, category, url) VALUES ($1, $2, $3);`,
    [activity, category, url]
  );
  return data.rows;
}
