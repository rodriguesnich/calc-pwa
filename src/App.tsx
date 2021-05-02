import React, { useState, MouseEvent } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import { FaSun, FaHistory } from "react-icons/fa";
import backspace from "./img/backspace-solid.svg";
import mult from "./img/times-solid.svg";
import minus from "./img/minus-solid.svg";
import plus from "./img/plus-solid.svg";
import divide from "./img/divide-solid.svg";
import percent from "./img/percentage-solid.svg";

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
        <button onClick={toggleDark}>
          <FaSun />
        </button>
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
          <button onClick={clear} className="number">
            ac
          </button>
          <button onClick={handleParent} className="number">
            ( )
          </button>
          <button onClick={calcPercent} className="icon-button">
            <img src={percent} />
          </button>
          <button onClick={() => addOperator("/")} className="icon-button">
            <img src={divide} />
          </button>
        </div>
        <div className="button-line">
          <button onClick={addNumber} className="number">
            7
          </button>
          <button onClick={addNumber} className="number">
            8
          </button>
          <button onClick={addNumber} className="number">
            9
          </button>
          <button onClick={() => addOperator("*")} className="icon-button">
            <img src={mult} />
          </button>
        </div>
        <div className="button-line">
          <button onClick={addNumber} className="number">
            4
          </button>
          <button onClick={addNumber} className="number">
            5
          </button>
          <button onClick={addNumber} className="number">
            6
          </button>
          <button onClick={() => addOperator("-")} className="icon-button">
            <img src={minus} alt="" />
          </button>
        </div>
        <div className="button-line">
          <button onClick={addNumber} className="number">
            1
          </button>
          <button onClick={addNumber} className="number">
            2
          </button>
          <button onClick={addNumber} className="number">
            3
          </button>
          <button onClick={() => addOperator("+")} className="icon-button">
            <img src={plus} alt="" />
          </button>
        </div>
        <div className="button-line">
          <button onClick={remove} className="icon-button">
            <img src={backspace} alt="" />
          </button>
          <button onClick={addNumber} className="number">
            0
          </button>
          <button onClick={addNumber} className="number">
            .
          </button>
          <button onClick={result}>=</button>
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
