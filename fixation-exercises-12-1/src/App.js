import React from 'react';
import './App.css';

// Evento declarado fora da Classe, para declarar dentro da Classe usar o this e bind
/* function handleClick() {
  console.log('Clicou!');
} */

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    console.log('Componente sendo construído...');
  }
  
  handleClick() {
    console.log(this);
    console.log('Clicou!');
  }

  render() {
    console.log(this);
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;
