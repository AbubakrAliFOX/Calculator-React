import "./style.css";

export default function Display({firstNum, operation, secondNum, result}) {
  return (
    <div className="display">
        <p className="result">
            {firstNum}{operation}{secondNum}{result}
        </p>
        
    </div>
  );
}
