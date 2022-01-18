import { query } from "../index.js";
import { energisers } from "../../data.js";

const sqlStringEnergiser = `INSERT INTO energisers (activity, category, url) VALUES ($1, $2, $3) RETURNING user`;

async function populateEnergiserTable() {
  for (let i = 0; i < energisers.length; i++) {
    let { activity, category, url } = energisers[i];

    //   energisers.map((item) => {
    //     return ({ activity, category, url } = item);
    //   });
    console.log("this is the data", activity, category, url);
    const res = await query(sqlStringEnergiser, [activity, category, url]);
    console.log(res);
  }
}
populateEnergiserTable();
