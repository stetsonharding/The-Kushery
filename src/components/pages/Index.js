import React, {useState} from "react"
import { Link } from "react-router-dom"

import AgeVerificationModal from "../AgeVerificationModal";

import weedImage1 from "../../images/WeedImageFilter.jpg"
import weedImage2 from "../../images/WeedImageFilter2.jpg"
import springBig from "../../images/springBig.jpg"
import Vendor1 from "../../images/Logos/Vendor1.jpg"
import Vendor2 from "../../images/Logos/Vendor2.png"
import Vendor3 from "../../images/Logos/Vendor3.jpg"
import Vendor4 from "../../images/Logos/Vendor4.png"
import doctorCrook from "../../images/Logos/doctorCrook.PNG"
import EGH from "../../images/Logos/EGH.png"
import Fleek from "../../images/Logos/Fleek.png"
import GTP from "../../images/Logos/GTP.png"
import HEF from "../../images/Logos/HEF.png"
import Millenium from "../../images/Logos/Millenium.PNG"
import MM from "../../images/Logos/MM.PNG"
import Optimum from "../../images/Logos/Optimum.png"

import "../Styles/Index.css"


function Index() {
  // Age Verification btn state
  const [modalShow, setModalShow] =  useState(true);


  return (
    <div>
      {/* Age Verification Check */}
      <AgeVerificationModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      backdrop={'static'}
      keyboard={false}
      />




      {/* Carousel */}
      <div id="slides" className="carouselSlide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ height: "900px", width: "100%", objectFit: "cover" }} src={weedImage1} alt="weed" />
            <div className="carousel-caption">
              <h1 className="display-2">The Kushery Cannabis Dispensary</h1>
              
              <h3 className="carousel-subtitle">Top quality and customer service is our number one goal.</h3>
              <Link to="/Location"><button type="button" className="btn btn-outline-light btn-lg">Locations</button></Link>
            </div>
          </div>
          <div className="carousel-item ">
            <img style={{ height: "900px", width: "100%", objectFit: "cover" }} src={weedImage2} alt="weed" />
            <div className="carousel-caption">
              <h1 className="display-2">The Kushery Cannabis Dispensary</h1>
             
              <h3 className="carousel-subtitle">Top quality and customer service is our number one goal.</h3>
              <Link to="/Location"><button type="button" className="btn btn-outline-light btn-lg">Locations</button></Link>
            </div>
          </div>
        </div>
      </div>




      {/* JumboTron */}
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead">As the best recreational marijuana dispensary in Washington,
            we offer cannabis products with varying levels of THC. Whether you are looking
            for products with low THC or ones with high THC concentration, we've got something for you.
            The Kushery raises the bar by leading the retail dispensary experience in the State of Washington.</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <Link to="/Location"><button type="button" className="btn btn-outline-secondary btn-lg">Order Online!</button></Link>
          </div>
        </div>
      </div>




      {/* Welcome section */}
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12 about-section">
            <h1 className="display-4">The Kushery</h1>
            <p id="about-us">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet 
              ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet 
              </p>
          </div>
          <hr />
          <div className="col-12 companyPriorities">
            <p className="lead">PERSONALIZED SERVICE, EXPERIENCED STAFF, COMPETITIVE PRICES.</p>
          </div>
        </div>
      </div>




      {/* Three column images */}
      <div className="container-fluid padding threeColumnImages">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-4 fas-fa-img">
            <i className="fas fa-dog "></i>
            <h3 className="fasFaHeading">Dog Frendly</h3>
            <p className="FasfaText">Bring your pup while you stock up!</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 fas-fa-img">
            <i className="fas fa-wheelchair "></i>
            <h3 className="fasFaHeading">ADA Accessible</h3>
            <p className="FasfaText">All locations are ADA Accessible</p>
          </div>
          <div className="col-sm-12 col-md-4 fas-fa-img">
            <i className="fas fa-money-bill-alt "></i>
            <h3 className="fasFaHeading">On-Site ATM</h3>
            <p className="FasfaText">All locations are provided with ATM's</p>
          </div>
        </div>
      </div>




        {/* Daily Specials */}
        <div>
        <h1 id="Dailey-specials-title">Dailey Specials</h1>
        </div>
        <div style={{backgroundColor: "black", border: "none"}}className="card text-center cards card-specials">
          <div className="card-specials">  
          <div className="card-body text-dark single-card-everyday">
                    <h4 className="title-card">Everyday Special</h4>
                    <p className="text-card">Happy Hour: First 2 hours upon opening and last two hours upon closing, everyday.
                    10% off for Birthdays, Seniors/Veterans, and Medical everyday!</p>
                </div>

                <div className="card-body text-dark single-card">
                    <h4 className="title-card">Monday Madness</h4>
                    <p className="text-card">All Edibles, CBD and Topicals 15% off!</p>
                </div>
               
                <div className="card-body text-dark single-card">
                    <h4 className="title-card">Infused Joint Tuesday</h4>
                    <p className="text-card">Infused Joints, buy 3+ 15% off</p>
                </div>
               
                <div className="card-body text-dark single-card">
                    <h4 className="title-card">Wax Wednesday</h4>
                    <p className="text-card">Waxes, Shatters and Oils 15% off!
                      Excluding vape carts.</p>
                </div>
              
                <div className="card-body text-dark single-card">
                    <h4 className="title-card">High End Thursday</h4>
                    <p className="text-card">High End Flower 15% off</p>
                </div>
              
                <div className="card-body text-dark friday-special single-card">
                    <h4 className="title-card">Saver Friday</h4>
                    <ul className="text-card">
                      <li>Buy 3 items: 15% off!</li>
                      <li>Buy 5 items: 20% off!</li>
                      <li>Buy 7 items: 25% off!</li>
                  </ul>
                </div>
           
                <div className="card-body text-dark saturday-special single-card">
                  <h4 className="title-card">Vape Cart Saurdaze</h4>
                  <p className="text-card">All Vape Carts 15% off!</p>
                </div>
          
                <div className="card-body text-dark sunday-special single-card">
                    <h4 className="title-card">Customer's Choice</h4>
                    <p className="text-card">Pick any daily special! It's your choice.
                      Up to 20% off with 7 items*.</p>
                </div>
           </div>
        </div>




      {/* Two column section */}
      <div className="container-fluid padding springBigContainer">
        <div className="row text-center padding">
          <div id="springBigText" className="col-lg-6">
            <h2 id="springBigHeading">SpringBig Loyalty Program</h2>
            <p>After every purchase you'll earn one point for every dollar that you've spent.</p>
            <p>These points can be redeemed for great rewards and discounts on your future purchases.</p>
            <br />
            <Link to="/Rewards"><button type="button" className="btn btn-primary">Learn More</button></Link>
          </div>
          <div className="col-lg-6 springBigLogo">
            <Link to="/Rewards"><img style={{ height: "100px" }} src={springBig} alt="SpringBig Logo" className="img-fluid"></img></Link>
            <p  id="springBigtext">The more you spend, the more you save.</p>
          </div>
        </div>
      </div>
     





      {/* Vendor Section */}
      <button className="vendor" data-toggle="collapse" data-target="#emoji">Click to check out our vendors!</button>
      <div id="emoji" className="collapse">
        <div className="container-fluid padding">
          <div className="row text-center ">
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={Vendor1} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={Vendor2} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={Vendor3} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={Vendor4} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={doctorCrook} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={EGH} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={Fleek} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={GTP} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={HEF} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "190px" }} src={Millenium} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={MM} alt="Top Vendor"></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img className="vendor-logo-img" style={{ height: "100px", width: "200px" }} src={Optimum} alt="Top Vendor"></img>
            </div>
          </div>
        </div>
        <hr className="my-7"/>
      </div>




      {/* Connect */}
      <div className="container-fluid padding">
        <div id="connectBackground" className="row text-center padding">
          <div className="col-12">
            <h2 id="connectText">Stay Connected!</h2>
          </div>
          <div className="col-12 social padding">
            <Link to="#"><i className="fab fa-facebook fa-3x"></i></Link>
            <a href="https://www.instagram.com/thekusheryclearview0/"><i className="fab fa-instagram fa-3x"></i></a>
          </div>
        </div>
      </div>
</div>



  )
}
export default Index