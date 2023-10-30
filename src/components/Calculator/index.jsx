import {useState} from "react";
import "./style.css";

// components

import TopBar from "../TopBar";
import Display from "../Display";
import CalcButtons from "../CalcButtons";

export default function Calc() {
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  const addNumber = (evt) => {
    evt.preventDefault();
    if (operation == null) {
      setResult(previousResult => previousResult = null);
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

  const addDot = (evt) => {
    evt.preventDefault();
    if(firstNum !== null && operation == null) {
      setFirstNum(previousFirstNum => String(previousFirstNum) + '.');
    }
    if(firstNum !== null && secondNum !== null && operation !== null) {
      setSecondNum(previousSecondNum => String(previousSecondNum) + '.');
    }
  }

  const makeOperation = (evt) => {
    evt.preventDefault();
    if (firstNum !== null) {
      setOperation(previousOperation => previousOperation = evt.target.value);
    }
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
      reseter();
    }
  } 

  const reseter = () => {
    setFirstNum(previousFirstNum => previousFirstNum = null);
    setSecondNum(previousSecondsetSecondNum => previousSecondsetSecondNum = null);
    setOperation(previousOperation => previousOperation = null);
  }
  
  const ACreseter = () => {
    setFirstNum(previousFirstNum => previousFirstNum = null);
    setSecondNum(previousSecondsetSecondNum => previousSecondsetSecondNum = null);
    setOperation(previousOperation => previousOperation = null);
    setResult(previousResult => previousResult = null);
  }
  

  return (
    <>
      <section className="calc-body">
      <TopBar />
      <Display result={result} firstNum={firstNum} secondNum={secondNum} operation={operation}/>
      <CalcButtons logic={{addDot, ACreseter, equals, makeOperation, addNumber}}/>
      </section>
    </>
  );
}
