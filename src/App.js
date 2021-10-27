import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  return (
      <Router>
          <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/destination' component={Destination}/>
                <Route exact path='/crew' component={Crew}/>
                <Route exact path='/technology' component={Technology}/>
          </Switch>
      </Router>
  );
};

export default App;
