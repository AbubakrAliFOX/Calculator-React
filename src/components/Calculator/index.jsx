import { useState, useRef } from "react";
import "./style.css";

// components

import TopBar from "../TopBar";
import Display from "../Display";
import CalcButtons from "../CalcButtons";

export default function Calc() {
  const [input, setInput] = useState(0);
  const [display, setDisplay] = useState(0);
  const [sum, setSum] = useState(0);
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

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
    if (operation == null) {
      if(firstNum == null) {
        setFirstNum(previousFirstNum => previousFirstNum = 0);
      }
      setFirstNum(previousFirstNum => Number(String(previousFirstNum) + String(evt.target.value)));
    } else {
      if(secondNum == null) {
        setSecondNum(previousSecondNum => previousSecondNum = 0);
      }
      setSecondNum(previousSecondNum => Number(String(previousSecondNum) + String(evt.target.value)));
    }
  } 

  const makeOperation = (evt) => {
    evt.preventDefault();
    const currentOperation = evt.target.value;
    setOperation(previousOperation => previousOperation = evt.target.value);
  } 

  const equals = (evt) => {
    evt.preventDefault();
    if (firstNum != null && secondNum != null && operation != null) {
      if(operation == '+') {
        setResult(previousResult => previousResult = (firstNum + secondNum));
      }
      if(operation == '-') {
        setResult(previousResult => previousResult = (firstNum - secondNum));
      }
      if(operation == '/') {
        setResult(previousResult => previousResult = (firstNum / secondNum));
      }
      if(operation == 'x') {
        setResult(previousResult => previousResult = (firstNum * secondNum));
      }
      setFirstNum(previousFirstNum => previousFirstNum = null);
      setSecondNum(previousSecondsetSecondNum => previousSecondsetSecondNum = null);
      setOperation(previousOpesetOperation => previousOpesetOperation = null);
    }
  } 
  

  return (
    <>
      <section className="calc-body">
      <TopBar />
      <Display result={result} firstNum={firstNum} secondNum={secondNum} operation={operation}/>
      <CalcButtons logic={{equals, makeOperation, addNumber, input, handleChange, add, subtract, multiply, divide, resetSum, resetInput}}/>
      </section>
    </>
  );
}
