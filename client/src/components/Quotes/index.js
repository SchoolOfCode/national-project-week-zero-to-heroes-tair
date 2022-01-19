import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";

function Quotes({ id, text }) {
  const [quote, setQuote] = useState("");
  const URL = "http://localhost:3001/quotes";

  async function fetchQuote() {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    console.log(data.payload[0]);
    setQuote({
      quote: data.payload[0].quotation,
    });
    console.log(quote.quote);
  }

  useEffect(() => {
    fetchQuote();
  }, [id]);

  return <div>{quote.quote}</div>;
}

export default Quotes;