import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "../Button";
import Energisers from "../Energisers";
import Quotes from "../Quotes";
import Reminders from "../Reminders";

function App() {
  const [data, setData] = useState(null);
  const [idE, setIdE] = useState(1);
  // const [idQ, setIdQ] = useState(1);
  // const [idR, setIdR] = useState(1);
  const URL = "http://localhost:3001";
  
  useEffect(() => {
    fetch(`${URL}/energisers/1`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [idE]);
  function zenButton(event) {
    const randomId = Math.floor(Math.random() * 10);
    setIdE(randomId);

    // useEffect(() => {
    //   fetch({ URL })
    //     .then((res) => res.json())
    //     .then((data) => setData(data.message));
    // }, [idQ]);
    // useEffect(() => {
    //   fetch({ URL })
    //     .then((res) => res.json())
    //     .then((data) => setData(data.message));
    // }, [idR]);

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
