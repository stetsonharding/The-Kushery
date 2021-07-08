import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer";
import Index from "./pages/Index";
import Location from "./pages/Location";
import Rewards from "./pages/Rewards";
import KnowYourFacts from "./pages/KnowYourFacts";
import ReturnPolicy from "./pages/ReturnPolicy";
import OrderOnline from "./pages/OrderOnline";

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
          <Route path="/OrderOnline" component={OrderOnline} />
          <Route path="/KnowYourFacts" component={KnowYourFacts} />
          <Route path="/ReturnPolicy" component={ReturnPolicy} />
        </Switch>
        {window.location.pathname !== "/OrderOnline" ? <Footer /> : null}
      </div>
    </Router>
  );
}

export default App;
