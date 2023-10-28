import "./style.css";

export default function Display({result}) {
  return (
    <div className="display">
        <p className="result">
            {result}
        </p>
    </div>
  );
}
