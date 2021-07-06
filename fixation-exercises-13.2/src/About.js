import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <p>Se meu navio de React é o de teseu e eu refatorei todos os seus componentes, ele ainda é o meu navio?</p>
        <Link to="/">Voltar à Home</Link>
      </div>
    );
  }
}

export default About;