import { query } from "../index.js";
import { energisers, reminders, quotes } from "../../data.js";

const sqlStringEnergiser = `INSERT INTO energisers (activity, category, url) VALUES ($1, $2, $3) RETURNING user`;

const sqlStringReminder = `INSERT INTO reminders (reminder) VALUES ($1) RETURNING user`;

const sqlStringQuote = `INSERT INTO quotes (quotation) VALUES ($1) RETURNING user`;

async function populateEnergiserTable() {
  for (let i = 0; i < energisers.length; i++) {
    let { activity, category, url } = energisers[i];

    console.log("this is the data", activity, category, url);
    const res = await query(sqlStringEnergiser, [activity, category, url]);
    console.log(res);
  }
}

async function populateReminderTable() {
  for (let i = 0; i < reminders.length; i++) {
    let { reminder } = reminders[i];

    const res = await query(sqlStringReminder, [reminder]);
    console.log(res);
  }
}

async function populateQuoteTable() {
  for (let i = 0; i < quotes.length; i++) {
    let { quotation } = quotes[i];

    const res = await query(sqlStringQuote, [quotation]);
    console.log(res);
  }
}

populateEnergiserTable();
// populateQuoteTable();
// populateReminderTable();
