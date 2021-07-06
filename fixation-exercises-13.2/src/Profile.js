import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { ship } = this.props.match.params;
    return (
      <div>
        <h1>Meu perfil: { this.props.name }, do navio { ship }</h1>
      </div>
    );
  }
}

export default Profile;