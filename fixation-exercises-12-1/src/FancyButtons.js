import React from 'react';
import './FancyButtons.css';

function clickButton1() {
  console.log('É genial festejar o sucesso, mas é mais importante aprender com as lições do fracasso.');
}

function clickButton2() {
  console.log('Você pode encarar um erro como uma besteira a ser esquecida ou como um resultado que aponta uma nova direção.');
}

function clickButton3() {
  console.log('As vezes é importante parar de sonhar, e acordar.');
}

class FancyButtons extends React.Component {
  render() {
    return (
      <>
        <button onClick={clickButton1}>Bill Gates</button>
        <button onClick={clickButton2}>Jeff Bezos</button>
        <button onClick={clickButton3}>Larry Page</button>
      </>
    );
  }
}

export default FancyButtons;
