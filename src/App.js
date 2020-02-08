import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/layout/Nav";
import Contact from "./components/layout/Contact";
import About from "./components/layout/About";
import { ContextProvider } from "./components/Context/Context";
import Users from "./components/GitHubUsers/Users";
import SingleUser from "./components/GitHubUsers/SingleUser";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Nav title='GitHub Lookup' />
        <Switch>
          <Route exact path='/'>
            <Users />
          </Route>
          <Route path='/user/:login'>
            <SingleUser />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
