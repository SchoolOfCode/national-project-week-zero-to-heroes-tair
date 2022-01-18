import "./styles.css";
import React from "react";

export default function Button({ zenButton, text }) {
  return (
    <div>
      <button onClick={zenButton}>{text}</button>
    </div>
  );
}
