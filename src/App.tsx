import React, { useState, MouseEvent } from "react";
import { evaluate } from "mathjs";
import "./App.css";


function App() {
  const [calculation, SetCalculation] = useState('')
  const [result, SetResult] = useState('')


function Screen() {
  return (
    <div className="Screen">
      <input type="text" value={calculation} />
      <textarea value={result}></textarea>
    </div>
  );
}

function KeyBoard() {
  
  function handleClick(event: MouseEvent) {
    console.log(event.currentTarget.textContent);
    let buffer = calculation
    SetCalculation(buffer += event.currentTarget.textContent)
  }

  function result() {
    console.log(calculation);
    let calc = String(calculation)
    let result = evaluate(calc)
    SetResult(result)
  }

  function clear() {
    SetResult('')
    SetCalculation('')
  }

  return (
    <div className="Keyboard">
      <div className="button-line">
        <button onClick={clear}>ac</button>
        <button>()</button>
        <button>%</button>
        <button onClick={handleClick}>/</button>
      </div>
      <div className="button-line">
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>*</button>
      </div>
      <div className="button-line">
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>
      </div>
      <div className="button-line">
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>+</button>
      </div>
      <div className="button-line">
        <button>r</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
        <button onClick={result}>=</button>
      </div>
    </div>
  );
}

  return (
    <div className="App">
      <Screen />
      <KeyBoard />
    </div>
  );
}

export default App;
