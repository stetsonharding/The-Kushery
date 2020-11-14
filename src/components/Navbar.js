import React from "react"
import Logo from "../images/TheKusheryLogo.jpg"



import { Link } from "react-router-dom"

import "./Styles/Navbar.css"


function Navbar() {
   return (
      <nav class="navbar navbar-expand-md navbar-dark bg-light sticky-top">
         <div style={{backgroundColor:"black"}} class="container-fluid">
            <Link to="/" class="navbar-brand"><img id="logo" style={{width:"190px"}} src={Logo} alt="The Kushery Logo"></img></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
               <ul class="navbar-nav ml-auto">
                  <Link  to="/Location" class="nav-link">
                     <li class="nav-item">Location</li>
                  </Link>
                  <Link to="/Rewards" class="nav-link">
                     <li class="nav-item">Rewards</li>
                  </Link>
                  <Link to="/Contact"class="nav-link">
                     <li class="nav-item">Contact</li>
                  </Link>
                  <Link to="/OrderOnline" class="nav-link">
                     <li class="nav-item">Order Online</li>
                  </Link>
               </ul>
            </div>
         </div>
      </nav>
   )

}

export default Navbar