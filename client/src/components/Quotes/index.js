import "./styles.css";
import React from "react";
import motivationImage from "./Motivation.png"

export default function Quotes({ text }) {
  return <div><img src={motivationImage} alt="title"/>{text}</div>;
}
