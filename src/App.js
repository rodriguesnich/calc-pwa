import React from 'react';
import { evaluate } from 'mathjs'


import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { operation: "", result: "", hasParent: false };
    this.handleClick = this.handleClick.bind(this);
    this.eval = this.eval.bind(this);
    this.erase = this.erase.bind(this);
    this.percent = this.percent.bind(this);
    this.parent = this.parent.bind(this);
    this.clean = this.clean.bind(this);
  }

  eval() {
    let buffer = evaluate(this.state.operation)
    this.setState({ result: buffer })
  };

  erase() {
    this.setState({ operation: "", result: "" })
  };

  clean() {
    let buffer = this.state.operation
    buffer = buffer.slice(0, -1)
    this.setState({ operation: buffer })
  }

  parent() {
    if (this.state.hasParent === false) {
      let buffer = this.state.operation += "("
      this.setState({ operation: buffer })
      this.setState({hasParent:true})
    } else {
      let buffer = this.state.operation += ")"
      this.setState({ operation: buffer })
      this.setState({hasParent:false})
    }
  };

  handleClick = (e, value) => {
    if (this.state.result !== "") {
      this.setState({operation: this.state.result + e, result: ""})
      console.log(this.state.operation);
    }else {
      let buffer = this.state.operation += e
      this.setState({ operation: buffer })
    }
  };

  percent = (e, value) => {
    // copy of state operation
    let opt = this.state.operation
    // printing % for user
    let buffer2 = this.state.operation += e
    this.setState({ operation: buffer2 })
    // doin real operation
    let buffer = opt.split(/[+|/|*|-]/);
    let per = Number(buffer[0]) - ((Number(buffer[buffer.length - 1]) / Number(buffer[0])) * 100)
    this.setState({ result: per })
  }

  render() {
    return (
      <div className="App">
        <div className="Screen container">
          <textarea className="operation" value={this.state.operation} type="text" readOnly />
          <textarea className="result" value={this.state.result} type="number" readOnly />
        </div>

        <div className="Keyboard">
          <button className="Button" onClick={this.erase}>C</button>
          <button className="Button" onClick={this.parent}>()</button>
          <button className="Button" onClick={this.percent.bind(this, "%")}>%</button>
          <button className="Button" onClick={this.handleClick.bind(this, "/")}>/</button>

          <button className="Button" onClick={this.handleClick.bind(this, "7")}>7</button>
          <button className="Button" onClick={this.handleClick.bind(this, "8")}>8</button>
          <button className="Button" onClick={this.handleClick.bind(this, "9")}>9</button>
          <button className="Button" onClick={this.handleClick.bind(this, "*")}>x</button>

          <button className="Button" onClick={this.handleClick.bind(this, "4")}>4</button>
          <button className="Button" onClick={this.handleClick.bind(this, "5")}>5</button>
          <button className="Button" onClick={this.handleClick.bind(this, "6")}>6</button>
          <button className="Button" onClick={this.handleClick.bind(this, "+")}>+</button>

          <button className="Button" onClick={this.handleClick.bind(this, "1")}>1</button>
          <button className="Button" onClick={this.handleClick.bind(this, "2")}>2</button>
          <button className="Button" onClick={this.handleClick.bind(this, "3")}>3</button>
          <button className="Button" onClick={this.handleClick.bind(this, "-")}>-</button>

          <button className="Button" onClick={this.clean}>|</button>
          <button className="Button" onClick={this.handleClick.bind(this, "0")}>0</button>
          <button className="Button" onClick={this.handleClick.bind(this, ".")}>.</button>
          <button className="Button" onClick={this.eval}>=</button>

        </div>
      </div>
    );
  }
}

export default App;
