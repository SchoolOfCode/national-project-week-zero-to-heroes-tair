import "./styles.css";
import React from "react";
import energiserImage from "./Energiser.png"

export default function Energisers({ text }) {
  return <div id="energiser1"><img src={energiserImage} alt="title"/>{text}</div>;
}
