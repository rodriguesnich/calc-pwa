import React from 'react';

import './style.css'

import Button from '../Button';

class Keyboard extends React.Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

  handleClick = (e) => {
    // e.preventDefault();
    console.log("Hi there, user!");
  };
  render(){
    return (
      <div className="Keyboard">
        <Button content="ac" />
        <Button content="+-" />
        <Button content="%" />
        <Button content="/" />

        <Button content="7" value="7"  onClick={this.handleClick} />
        <Button content="8" value="8" />
        <Button content="9" value="9" />
        <Button content="x" />

        <Button content="4" value="4" />
        <Button content="5" value="5" />
        <Button content="6" value="6" />
        <Button content="-" />

        <Button content="1" value="1" />
        <Button content="2" value="2" />
        <Button content="3" value="3" />
        <Button content="+" />

        <Button content="r" />
        <Button content="0" value="0" />
        <Button content="." />
        <Button content="=" />
      </div>
    );

  }
}

export default Keyboard;
