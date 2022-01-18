import { query } from "../index.js";
import { quotes } from "../../data.js";

const sqlStringQuote = `INSERT INTO quotes (quotation) VALUES ($1) RETURNING user`;

async function populateQuoteTable() {
  for (let i = 0; i < quotes.length; i++) {
    let { quotation } = quotes[i];

    //   quotes.map((item) => {
    //     return item.quotation;
    //   });

    const res = await query(sqlStringQuote, [quotation]);
    console.log(res);
  }
}

populateQuoteTable();
