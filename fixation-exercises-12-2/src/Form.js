import React from 'react';
import EstadoFavorito from './components/EstadoFavorito';
import Email from './components/Email';
import Nome from './components/Nome';
import Idade from './components/Idade';
import VaiComparecer from './components/VaiComparecer';
import PalavraChaveFavorita from './components/PalavraChaveFavorita'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    // this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handleTextChange = this.handleTextChange.bind(this);
    // this.handleNumberChange = this.handleNumberChange.bind(this);
    // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    // this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }
  
  /* handleTextAreaChange({ target }) {
    console.log(target.value);
    console.log(this);
    this.setState({ estadoFavorito: target.value });
  } */

  /* handleEmailChange({ target }) {
    console.log(target.value);
    this.setState({ email: target.value });
  } */

  /* handleTextChange({ target }) {
    console.log(target.value)
    this.setState({ nome: target.value });
  } */

  /* handleNumberChange({ target }) {
    console.log(target.value);
    this.setState({ idade: target.value });
  } */

  /* handleCheckboxChange({ target }) {
    console.log(target.value);
    this.setState({ vaiComparecer: target.checked });
  } */

  /* handleSelectChange({ target }) {
    console.log(target.value);
    this.setState({ palavraChaveFavorita: target.value });
  } */

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito 
            value={ this.state.estadoFavorito }
            handleChange={ this.handleChange }
          />

          <Email
            value={ this.state.email }
            handleChange={ this.handleChange }
          />

          <Nome
            value={ this.state.nome }
            handleChange={ this.handleChange }
          />

          <Idade
            value={ this.state.idade }
            handleChange={ this.handleChange }
          />

          <VaiComparecer
            value={ this.state.vaiComparecer }
            handleChange={ this.handleChange }
          />

          <PalavraChaveFavorita
            value={ this.state.palavraChaveFavorita }
            handleChange={ this.handleChange }
          />

        </form>
      </div>
    )
  }
}

export default Form;
