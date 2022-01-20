import { query } from "../index.js";

const sqlStringEnergise = `CREATE TABLE IF NOT EXISTS energisers (id SERIAL PRIMARY KEY, activity TEXT, category TEXT, url TEXT) `;

const sqlStringReminder = `CREATE TABLE IF NOT EXISTS reminders (id SERIAL PRIMARY KEY, reminder TEXT) `;

const sqlStringQuote = `CREATE TABLE IF NOT EXISTS quotes (id SERIAL PRIMARY KEY, quotation TEXT) `;

async function createEnergiserTable() {
  const res = await query(sqlStringEnergise);
  console.log("Table created", res);
}

async function createReminderTable() {
  const res = await query(sqlStringReminder);
  console.log("Table created", res);
}

async function createQuoteTable() {
  const res = await query(sqlStringQuote);
  console.log("Table created", res);
}

createEnergiserTable();
createReminderTable();
createQuoteTable();
