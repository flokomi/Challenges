import { useState } from "react";

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button
        onClick={() => {
          setStep((s) => s - 1);
        }}
      >
        -
      </button>
      <span> Set: {step} </span>
      <button
        onClick={() => {
          setStep((s) => s + 1);
        }}
      >
        +
      </button>
      <br />
      <button
        onClick={() => {
          setCount((c) => c - step);
        }}
      >
        -
      </button>
      <span> Count: {count} </span>
      <button
        onClick={() => {
          setCount((c) => c + step);
        }}
      >
        +
      </button>
      <p>
        <span>{count === 0 ? "Today is " : ""}</span>
        <span>{count < 0 ? `${count} days ago was ` : ""}</span>
        <span>{count > 0 ? `${count} days from now is ` : ""}</span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
