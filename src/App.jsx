import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';

import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
