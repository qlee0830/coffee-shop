import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./shared/components/Home/Home";
import AboutUs from "./shared/components/AboutUs/AboutUs";
import Menu from "./shared/components/Menu/Menu";
import Contact from "./shared/components/Contact/Contact";
import NavBar from "./shared/components/Navbar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
