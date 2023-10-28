import { useState, useRef } from "react";
import "./style.css";

// components

import TopBar from "../TopBar";
import Display from "../Display";
import CalcButtons from "../CalcButtons";

export default function Calc() {
  const [input, setInput] = useState(0);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const [sum, setSum] = useState(0);

  const add = (evt) => {
    evt.preventDefault();
    if (typeof Number(input) === "number") {
      setSum(Number(sum) + Number(input));
    }
    setInput(0);
  };
  367.20000000000005
  const subtract = (evt) => {
    evt.preventDefault();
    setSum(Number(sum) - Number(input));
    setInput(0);
  };

  const multiply = (evt) => {
    evt.preventDefault();
    setSum(Number(sum) * Number(input));
    setInput(0);
  };

  const divide = (evt) => {
    evt.preventDefault();
    if (Number(sum) !== 0 && Number(input) !== 0) {
      setSum(Number(sum) / Number(input));
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
    setInput((previousSum) => (previousSum = 0));
  };

  return (
    <>
      <section className="calc-body">
      <TopBar />
      <Display result={sum}/>
      <CalcButtons logic={{input, handleChange, add, subtract, multiply, divide, resetSum, resetInput}}/>
        
      </section>
    </>
  );
}
