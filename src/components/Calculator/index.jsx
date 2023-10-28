import { useState, useRef } from "react";
import "./style.css";

// components

import TopBar from "../TopBar";

export default function Calc() {
  const [input, setInput] = useState(0);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const [sum, setSum] = useState(0);

  const add = (evt) => {
    evt.preventDefault();
    if (typeof parseInt(input) === "number") {
      setSum(parseInt(sum) + parseInt(input));
    }
    setInput(0);
  };

  const subtract = (evt) => {
    evt.preventDefault();
    setSum(parseInt(sum) - parseInt(input));
    setInput(0);
  };

  const multiply = (evt) => {
    evt.preventDefault();
    setSum(parseInt(sum) * parseInt(input));
    setInput(0);
  };

  const divide = (evt) => {
    evt.preventDefault();
    if (parseInt(sum) !== 0 && parseInt(input) !== 0) {
      setSum(parseInt(sum) / parseInt(input));
    }
    setInput(0);
  };

  const resetInput = (evt) => {
    evt.preventDefault();
    setInput((previousInput) => (previousInput = 0));
  };

  const resetSum = (evt) => {
    evt.preventDefault();
    setSum((previousSum) => (previousSum = 0));
  };

  return (
    <>
      <section className="calc-body">
      <TopBar />
        <form>
          <h5>{sum}</h5>
          <input value={input} onChange={handleChange} type="number" />
          <button onClick={add}>Add</button>
          <button onClick={subtract}>Subtract</button>
          <button onClick={multiply}>Multiply</button>
          <button onClick={divide}>Divide</button>
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetSum}>Reset Sum</button>
        </form>
      </section>
    </>
  );
}
