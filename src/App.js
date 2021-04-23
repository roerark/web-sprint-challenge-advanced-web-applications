import "./styles.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import React from "react";

const NoMatch = () => <h1 style={{ margin: "100px auto" }}>404 Not found</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/bubble" component={BubblePage} />
          <Route exact path="/" component={Login} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
