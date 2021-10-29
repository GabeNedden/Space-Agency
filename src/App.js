import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import './App.css';

import { Home, Destination, Crew, Technology } from './pages';

function App() {
  return (
      <Router>
          <Switch>
                <Route path={ROUTES.DESTINATION}>
                    <Destination/>
                </Route>
                <Route path={ROUTES.CREW}>
                    <Crew />
                </Route>
                <Route path={ROUTES.TECHNOLOGY}>
                    <Technology />
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home />
                </Route>
          </Switch>
      </Router>
  );
};

export default App;
