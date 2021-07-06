import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about" component={ About }/>
        <Route path="/howto" component={ HowTo }/>
        <Route path="/profile" component={ Profile }/>
        {/* <Route path="/profile">Profile</Route> */}
        <Route exact path="/" component={ Home }/>
      </BrowserRouter>
    );
  }
}

export default App;
