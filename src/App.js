import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Info from "./Components/Info";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Info/>
        </Switch>
      </main>
    </>
  );
}
export default App;
