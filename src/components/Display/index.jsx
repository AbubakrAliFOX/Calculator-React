import "./style.css";

export default function Display({ firstNum, operation, secondNum, result }) {
  if (operation == "x") {
    operation = String.fromCharCode('0x2A2F');
  } else if (operation == "/") {
    operation = String.fromCharCode(0x00F7);
  }
  return (
    <div className="display">
      <p className="result">
        {firstNum}
        {operation}
        {secondNum}
        {result}
      </p>
    </div>
  );
}
