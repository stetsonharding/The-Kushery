import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Index from "./components/pages/Index"
import Location from "./components/pages/Location"
import Contact from "./components/pages/Contact"
import Rewards from "./components/pages/Rewards"
import KnowYourFacts from "./components/pages/KnowYourFacts"


import "./App.css"


function App() {
 return(
    <Router>
      <div className="app">
         <NavBar />
         <Switch>
         <Route exact path="/" component={Index}/>
         <Route path="/Location" component={Location}/>
         <Route path="/Rewards" component={Rewards}/>
         <Route path="/Contact" component={Contact}/>
         <Route path="/OrderOnline" component={Location}/>
         <Route path="/KnowYourFacts" component={KnowYourFacts}/>
         </Switch>
         <Footer />
      </div>
    </Router>



 )
}

export default App;
