import { query } from "../index.js";
import { reminders } from "../../data.js";

const sqlStringReminder = `INSERT INTO reminders (reminder) VALUES ($1) RETURNING user`;

async function populateReminderTable() {
  for (let i = 0; i < reminders.length; i++) {
    let { reminder } = reminders[i];

    //   reminders.map((item) => {
    //     return item.reminder;
    //   });

    const res = await query(sqlStringReminder, [reminder]);
    console.log(res);
  }
}

populateReminderTable();
