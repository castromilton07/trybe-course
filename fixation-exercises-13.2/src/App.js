import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Route path="/about" component={ About }/> */}
        {/* <Route path="/howto" component={ HowTo }/> */}
        {/* <Route path="/profile/:ship" render={(props) => <Profile {...props} name="Barbaruiva, o bucaneiro da web"/>}/> */}
        {/* <Route path="/profile">Profile</Route> */}
        {/* <Route exact path="/" component={ Home }/> */}
        <Switch>
          <Route path="/about" component={ About }/>
          <Route path="/howto" component={ HowTo }/>
          <Route path="/profile/:ship" render={(props) => <Profile {...props} name="Barbaruiva, o bucaneiro da web"/>}/>
          <Route path="/" component={ Home }/>
        </Switch>  
      </BrowserRouter>
    );
  }
}

export default App;
