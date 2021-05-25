import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer";
import Index from "./components/pages/Index";
import Location from "./components/pages/Location";
import Contact from "./components/pages/Contact";
import Rewards from "./components/pages/Rewards";
import KnowYourFacts from "./components/pages/KnowYourFacts";
import ReturnPolicy from "./components/pages/ReturnPolicy";
import OrderOnline from "./components/pages/OrderOnline";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/Location" component={Location} />
          <Route path="/Rewards" component={Rewards} />
          <Route path="/Contact" component={Contact} />
          <Route path="/OrderOnline" component={OrderOnline} />
          <Route path="/KnowYourFacts" component={KnowYourFacts} />
          <Route path="/ReturnPolicy" component={ReturnPolicy} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
