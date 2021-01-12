import React from "react"
import Logo from "../images/TheKusheryLogo.jpg"



import { Link } from "react-router-dom"

import "./Styles/Navbar.css"


function Navbar() {
   return (
      <nav className="navbar navbar-expand-md navbar-dark bg-light sticky-top">
         <div style={{backgroundColor:"black"}} className="container-fluid">
            <Link to="/" className="navbar-brand"><img id="logo" style={{width:"190px"}} src={Logo} alt="The Kushery Logo"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
               <ul className="navbar-nav ml-auto">
               <Link to="/"className="nav-link">
                     <li className="nav-item">Home</li>
                  </Link>
                  <Link  to="/Location" className="nav-link">
                     <li className="nav-item">Location</li>
                  </Link>
                  <Link to="/Rewards" className="nav-link">
                     <li className="nav-item">Rewards</li>
                  </Link>
                  <Link to="/OrderOnline" className="nav-link">
                     <li className="nav-item">Order Online</li>
                  </Link>
               </ul>
            </div>
         </div>
      </nav>
   )

}

export default Navbar