import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Login from "./containers/forms/Login";
import Dashboard from "./components/layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
          </Switch>
        </React.Fragment>
      </Router>
    </AuthProvider>
  );
}

export default App;
