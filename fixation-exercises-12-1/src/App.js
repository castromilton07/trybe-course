import React from 'react';
import './App.css';

// Evento declarado fora da Classe, para declarar dentro da Classe usar o this e bind
/* function handleClick() {
  console.log('Clicou!');
} */

class App extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numeroDeCliques: 0,
    }
    console.log('Componente sendo construído...');
  }
  
  handleClick(numClicks) {
    console.log(this);
    console.log('Clicou!');
    console.log(numClicks + 1);
    if ((numClicks + 1) % 2 === 0) console.log('verde');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }))
  }

  render() {
    return <button onClick={ () => this.handleClick(this.state.numeroDeCliques) }>Number of Clicks: {this.state.numeroDeCliques}</button>
  }
}

export default App;
