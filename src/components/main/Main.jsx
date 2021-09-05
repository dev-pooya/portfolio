import React from "react";
import { Route, Switch } from "react-router";
import Particle from "./Particle";
import Home from "./Home";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="main">
      <Particle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
