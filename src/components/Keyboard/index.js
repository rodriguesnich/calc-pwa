import React from 'react';

import './style.css'


class Keyboard extends React.Component {
  constructor(props) {
  super(props);
  this.state = {operation: ""};
  this.handleClick = this.handleClick.bind(this);
}

  handleClick = (e, value) => {
    // value.preventDefault();
    // console.log("Hi there, user!");
    // console.log(value);
    let buffer = this.state.operation += e
    this.setState({operation: buffer})
    console.log(this.state.operation);
  };
  render(){
    return (
      <div className="Keyboard">
        <button className="Button">ac</button>
        <button className="Button">+-</button>
        <button className="Button">%</button>
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

        <button className="Button">r</button>
        <button className="Button" onClick={this.handleClick.bind(this, "0")}>0</button>
        <button className="Button" onClick={this.handleClick.bind(this, ".")}>.</button>
        <button className="Button">=</button>

      </div>
    );

  }
}

export default Keyboard;
