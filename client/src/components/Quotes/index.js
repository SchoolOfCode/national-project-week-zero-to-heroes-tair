import "./styles.css";
import React from "react";
import motivationImage from "./Motivation.png"

export default function Quotes({ text }) {
  return <div id="quotes1"><img src={motivationImage} alt="title"/><p id="quotesText">{text}</p></div>;
}
