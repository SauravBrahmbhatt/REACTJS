import React , { useState } from 'react';
import ReactDOM from "react-dom/client";

function SetText() {
  const [text , SetText] = useState("Hello User");

  return (
    <>
      <p>{text}</p>
      <button type="button"
        onClick={() => SetText("Welcome subscriber!")}
      >Subscribe</button>
    </>
  )
}

export default SetText