import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.scss";

import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Logout from "./pages/Auth/Logout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
