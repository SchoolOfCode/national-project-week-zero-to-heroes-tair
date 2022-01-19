import "./styles.css";
import React from "react";

import energiserImage from "./Energiser.png"
import { useState, useEffect } from "react";


function Energisers({ id, text }) {
  const [energiser, setEnergiser] = useState("");
  const URL = "http://localhost:3001/energisers";

  async function fetchEnergiser() {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    // console.log(data.payload[0]);
    setEnergiser({
      energiser: data.payload[0].activity,
      category: data.payload[0].category,
      url: data.payload[0].url,
    });
    // console.log(energiser.energiser);
  }

  useEffect(() => {
    fetchEnergiser();
  }, [id]);

  // return <div>{text}</div>;
  return <div id="energiser1"><img src={energiserImage} alt="title"/><p id="energiserText">{text}</p></div>;
  return (
    <div>
      <p>Your energiser for today is {energiser.energiser}</p>
      <a href={energiser.url} target="_blank" rel="noreferrer">
        Take me there!
      </a>
    </div>
  );

}

export default Energisers;
