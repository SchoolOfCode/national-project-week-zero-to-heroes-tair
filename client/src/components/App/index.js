import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "../Button";
import Energisers from "../Energisers";
import Quotes from "../Quotes";
import Reminders from "../Reminders";

function App() {
  const [data, setData] = React.useState(null);
  const [id, setId] = useState(1);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [id]);

  function zenButton(event) {
    const randomId = Math.floor(Math.random() * 10);
    setId(randomId);
    //write all 3 functions in here
    // console.log(randomId);
  }
  return (
    <div>
      <Button onClick={zenButton} text="Zen-Time"></Button>
      <Energisers text="Energise!"></Energisers>
      <Quotes text="Your daily good vibes"></Quotes>
      <Reminders text="Remember!"></Reminders>
    </div>
  );
}

export default App;
