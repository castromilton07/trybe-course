import React from 'react';
import Component from './Component';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <span>Hello Word!</span>
        <Component />
        <Greeting name="Milton" lastName="Castro" />
      </div>
    );
  };
}

export default App;
