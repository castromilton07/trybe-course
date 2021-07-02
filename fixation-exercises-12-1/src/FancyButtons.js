import React from 'react';
import './FancyButtons.css';

class FancyButtons extends React.Component {
  constructor(props) {
    super();
    
    this.clickButton1 = this.clickButton1.bind(this);
    this.clickButton2 = this.clickButton2.bind(this);
    this.clickButton3 = this.clickButton3.bind(this);

    this.state = {
      numClicksButn1: 0,
      numClicksButn2: 0,
      numClicksButn3: 0,
    }
  };

  clickButton1() {
    this.setState((prevState, _props) => ({
      numClicksButn1: prevState.numClicksButn1 + 1,
    }))
  };

  clickButton2() {
    this.setState((prevState, _props) => ({
      numClicksButn2: prevState.numClicksButn2 + 2,
    }))
  };

  clickButton3() {
    this.setState((prevState, _props) => ({
      numClicksButn3: prevState.numClicksButn3 + 3,
    }))
  };
  
  render() {
    return (
      <>
        <button onClick={this.clickButton1}>Bill Gates: {this.state.numClicksButn1}</button>
        <button onClick={this.clickButton2}>Jeff Bezos: {this.state.numClicksButn2}</button>
        <button onClick={this.clickButton3}>Larry Page: {this.state.numClicksButn3}</button>
      </>
    );
  }
}

export default FancyButtons;
