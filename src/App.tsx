import React, { useState, MouseEvent, useEffect } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import {
  FaSun,
  FaBackspace,
  FaHistory,
  FaMinus,
  FaPlus,
  FaEquals,
  FaAsterisk,
  FaDivide,
  FaPercent,
} from "react-icons/fa";


function App() {
  const [calculation, SetCalculation] = useState("");
  const [result, SetResult] = useState("");
  const [parentActive, SetParentActive] = useState(false);

  function Header() {
    function toggleDark() {
      let app = document.querySelector(".App");
      app?.classList.toggle("darkMode");
    }

    function toggleModal() {
      let app = document.querySelector(".Modal");
      app?.classList.toggle("ComponentHidden");
    }

    return (
      <div className="Header">
        <button onClick={toggleDark}><FaSun /></button>
        <button onClick={toggleModal}>
          <FaHistory />
        </button>
      </div>
    );
  }

  function Modal() {
    return (
      <div className="Modal ComponentHidden">
        <div>
          <input type="text" value={calculation} readOnly />
          <textarea value={result} readOnly></textarea>
        </div>
        <div>
          <input type="text" value={calculation} readOnly />
          <textarea value={result} readOnly></textarea>
        </div>
        <div>
          <input type="text" value={calculation} readOnly />
          <textarea value={result} readOnly></textarea>
        </div>
        <div>
          <input type="text" value={calculation} readOnly />
          <textarea value={result} readOnly></textarea>
        </div>
        <div>
          <input type="text" value={calculation} readOnly />
          <textarea value={result} readOnly></textarea>
        </div>
        <div>
          <input type="text" value={calculation} readOnly />
          <textarea value={result} readOnly></textarea>
        </div>
      </div>
    );
  }

  function Screen() {
    return (
      <div className="Screen">
        <input id="calc" type="text" value={calculation} readOnly />
        <textarea value={result} readOnly></textarea>
      </div>
    );
  }

  function KeyBoard() {
    function addNumber(event: MouseEvent) {
      console.log(event.currentTarget.textContent);
      let buffer = calculation;
      SetCalculation((buffer += event.currentTarget.textContent));
    }

    function addOperator(operator: String) {
      let operators = ["-", "+", "/", "*"];
      if (operators.includes(calculation.slice(-1))) {
        return;
      } else {
        let buffer = calculation;
        SetCalculation((buffer += operator));
      }
    }

    function handleParent() {
      if (parentActive) {
        let buffer = calculation;
        SetCalculation((buffer += ")"));
        SetParentActive(false);
      } else {
        let buffer = calculation;
        SetCalculation((buffer += "("));
        SetParentActive(true);
      }
    }

    function calcPercent() {
      let buffer = calculation.split(/(\-|\+|\*|\/)/);
      let last3Itens = buffer.slice(Math.max(buffer.length - 3, 0));
      let percent = (Number(last3Itens[0]) * Number(last3Itens[2])) / 100;
      buffer.pop();
      buffer.push(String(percent));
      let calc = buffer.join("");
      SetCalculation(calc);
    }

    function result() {
      console.log(calculation);
      let calc = String(calculation);
      let result = evaluate(calc);
      SetResult(result);
    }

    function clear() {
      SetResult("");
      SetCalculation("");
    }

    function remove() {
      let buffer = calculation;
      SetCalculation(buffer.slice(0, -1));
    }

    return (
      <div className="Keyboard">
        <div className="button-line">
          <button onClick={clear}>ac</button>
          <button onClick={handleParent}>( )</button>
          <button className="icon-button" onClick={calcPercent}><FaPercent /></button>
          <button onClick={() => addOperator("/")}><FaDivide /></button>
        </div>
        <div className="button-line">
          <button onClick={addNumber}>7</button>
          <button onClick={addNumber}>8</button>
          <button onClick={addNumber}>9</button>
          {/* <button onClick={() => addOperator("*")}><FaAsterisk /></button> */}
          <button onClick={() => addOperator("*")}>X</button>
        </div>
        <div className="button-line">
          <button onClick={addNumber}>4</button>
          <button onClick={addNumber}>5</button>
          <button onClick={addNumber}>6</button>
          <button onClick={() => addOperator("-")}>
            <FaMinus />
          </button>
        </div>
        <div className="button-line">
          <button onClick={addNumber}>1</button>
          <button onClick={addNumber}>2</button>
          <button onClick={addNumber}>3</button>
          <button onClick={() => addOperator("+")}>
            <FaPlus />
          </button>
        </div>
        <div className="button-line">
          <button onClick={remove}>
            <FaBackspace />
          </button>
          <button onClick={addNumber}>0</button>
          <button onClick={addNumber}>.</button>
          <button onClick={result}>
            <FaEquals />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Modal />
      <Header />
      <Screen />
      <KeyBoard />
    </div>
  );
}

export default App;
