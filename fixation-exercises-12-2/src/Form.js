import React from 'react';
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
          <label>
            Digite qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea
              name="estadoFavorito"
              value={ this.state.estadoFavorito }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Email
            <input 
              name="email"
              type="email"
              value={ this.state.email }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Nome
            <input
              name="nome"
              type="text"
              value={ this.state.nome }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Idade
            <input
              name="idade"
              type="number"
              value={ this.state.idade }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Vai comparecer à conferência?
            <input
              name="vaiComparecer"
              type="checkbox"
              value={ this.state.vaiComparecer }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select 
              name="palavraChaveFavorita"
              value={ this.state.palavraChaveFavorita }
              onChange={ this.handleChange }
            >
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
