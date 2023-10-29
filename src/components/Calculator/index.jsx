import { useState, useRef } from "react";
import "./style.css";

// components

import TopBar from "../TopBar";
import Display from "../Display";
import CalcButtons from "../CalcButtons";

export default function Calc() {
  const [input, setInput] = useState(0);
  const [sum, setSum] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const add = (evt) => {
    evt.preventDefault();
    if (typeof Number(input) === "number") {
      setSum(Number(sum) + Number(input));
    }
    setInput(0);
  };

  const subtract = (evt) => {
    evt.preventDefault();
    if(sum) {
      setSum(previousSum => String())
    }
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

  const addNumber = (evt) => {
    evt.preventDefault();
    setSum(previousSum => Number(String(previousSum) + String(evt.target.value)));
  } 

  const makeOperation = (evt) => {
    evt.preventDefault();
    const currentOperation = evt.target.value;
    if(currentOperation === '+') {
      console.log('This is addition');
    } else if(currentOperation === '+') {
      console.log('This is addition');
    } else if(currentOperation === '+') {
      console.log('This is addition');
    } else if(currentOperation === '+') {
      console.log('This is addition');
    }
  } 

  return (
    <>
      <section className="calc-body">
      <TopBar />
      <Display result={sum}/>
      <CalcButtons logic={{makeOperation, addNumber, input, handleChange, add, subtract, multiply, divide, resetSum, resetInput}}/>
      </section>
    </>
  );
}
