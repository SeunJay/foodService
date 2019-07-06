import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Login from "./containers/forms/Login";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={props => <Home {...props} />} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
