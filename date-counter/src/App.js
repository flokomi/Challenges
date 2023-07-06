import { useState } from "react";
import "./index.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          n
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.currentTarget.value))}
        />
      </div>

      <div>
        <span> Step: {step} </span>
      </div>

      <button
        className="btn"
        onClick={() => {
          setCount((c) => c - step);
        }}
      >
        -
      </button>

      <input
        className="input-field"
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.currentTarget.value))}
      ></input>

      <button
        className="btn"
        onClick={() => {
          setCount((c) => c + step);
        }}
      >
        +
      </button>

      <p className="result">
        <span>{count === 0 ? "Today is " : ""}</span>
        <span>{count < 0 ? `${count} days ago was ` : ""}</span>
        <span>{count > 0 ? `${count} days from now is ` : ""}</span>
        <span>{date.toDateString()}</span>
      </p>

      {step !== 1 || count !== 0 ? (
        <div>
          <button
            className="btn-reset"
            onClick={(e) => {
              handleReset();
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
