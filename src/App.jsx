import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';

import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';

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
          <Route path="/sign_in" exact>
            <div>signin</div>
          </Route>
          <Route path="/sign_up" exact>
            <div>signup</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
