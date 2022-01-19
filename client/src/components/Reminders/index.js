import "./styles.css";
import React from "react";
import reminderImage from "./Reminder.png"

export default function Reminders({ text }) {
  return <div id="reminder1"><img src={reminderImage} alt="title"/><p id="reminderText">{text}</p></div>;
}
