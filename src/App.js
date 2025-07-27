import { useState } from "react";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Logo />
      <TipCalculator />
    </div>
  );
}
function Logo() {
  return (
    <div className="img-container">
      <img src="./img/bill.jpg" alt="Logo for bill" />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  const tip = bill * ((percentage1 + percentage2) / 100 / 2);
  return (
    <div className="top-calculator">
      <BillInput onSetBill={setBill} bill={bill} />
      <SelectPercentage
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        What is your opinion for service?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        What is your friend's opinion for service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="bill">
      <label>What was your bill?</label>
      <input
        type="text"
        value={bill}
        placeholder="bill value"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ percentage, onSetPercentage, children }) {
  return (
    <div className="your-tip ">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">disstatisfied (0%)</option>
        <option value="5">it's okay (5%)</option>
        <option value="10">it's good (10%)</option>
        <option value="20">Abssolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <p className="output">
      You pay {bill + tip} $: ({bill} $+ {tip} $)
    </p>
  );
}
function Reset({ onReset }) {
  return (
    <button className="reset" onClick={onReset}>
      Reset
    </button>
  );
}
export default App;
