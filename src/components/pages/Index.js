import React from "react"
import { Link } from "react-router-dom"


import weedImage1 from "../../images/weedImage1.jpg"
import weedImage2 from "../../images/weedImage_2.jpg"
import weedImage3 from "../../images/weedImage3.jpg"
import springBig from "../../images/springBig.jpg"
import Vendor1 from "../../images/Vendor1.jpg"
import Vendor2 from "../../images/Vendor2.png"
import Vendor3 from "../../images/Vendor3.jpg"
import Vendor4 from "../../images/Vendor4.png"

import "../Styles/Index.css"


function Index() {

  return (
    <div>
      {/* Carousel */}
      <div id="slides" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" class="active"></li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{ height: "900px", width: "100%" }} src={weedImage1} alt="weed" />
            <div class="carousel-caption">
              <h1 class="display-2">The Kushery Cannabis Dispensary</h1>
              <h3>The Kushery has 4 shops located in Cathcart,<br />
              Clearview, Lake Forest park, and Standwood.
        </h3>
              <h4>Top quality and customer service is our number one goal.</h4>
              <Link to="/Location"><button type="button" class="btn btn-outline-light btn-lg">Locations</button></Link>
            </div>
          </div>
          <div class="carousel-item ">
            <img style={{ height: "900px", width: "100%" }} src={weedImage3} alt="weed" />
            <div class="carousel-caption">
              <h1 class="display-2">The Kushery Cannabis Dispensary</h1>
              <h3>The Kushery has 4 shops located in Cathcart,<br />
              Clearview, Lake Forest park, and Standwood.
        </h3>
              <h4>Top quality and customer service is our number one goal.</h4>
              <Link to="/Location"><button type="button" class="btn btn-outline-light btn-lg">Locations</button></Link>
            </div>
          </div>
          <div class="carousel-item ">
            <img style={{ height: "900px", width: "100%" }} src={weedImage2} alt="weed" />
            <div class="carousel-caption">
              <h1 class="display-2">The Kushery Cannabis Dispensary</h1>
              <h3>The Kushery has 4 shops located in Cathcart,<br />
              Clearview, Lake Forest park, and Standwood.
        </h3>
              <h4>Top quality and customer service is our number one goal.</h4>
              <Link to="/Location"><button type="button" class="btn btn-outline-light btn-lg">Locations</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* JumboTron */}
      <div class="container-fluid">
        <div class="row jumbotron">
          <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p class="lead">As the best recreational marijuana dispensary in Washington,
            we offer cannabis products with varying levels of THC. Whether you are looking
            for products with low THC or ones with high THC concentration, we've got something for you.
            The Kushery raises the bar by leading the retail dispensary experience in the State of Washington.</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <Link to="/Location"><button type="button" class="btn btn-outline-secondary btn-lg">Order Online!</button></Link>
          </div>
        </div>
      </div>

      {/* Welcome section */}
      <div class="container-fluid padding">
        <div class="row welcome text-center">
          <div class="col-12">
            <h1 class="display-4">The Kushery</h1>
            <i class="fas fa-cannabis fa-10x"></i>
          </div>
          <hr />
          <div class="col-12">
            <p class="lead">PERSONALIZED SERVICE, EXPERIENCED STAFF, COMPETITIVE PRICES.</p>
          </div>
        </div>
      </div>

      {/* Three column images */}
      <div class="container-fluid padding threeColumnImages">
        <div class="row text-center padding">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <i class="fas fa-dog "></i>
            <h3 class="fasFaHeading">Dog Frendly</h3>
            <p class="FasfaText">Bring your pup while you stock up!</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <i class="fas fa-wheelchair "></i>
            <h3 class="fasFaHeading">ADA Accessible</h3>
            <p class="FasfaText">All locations are ADA Accessible</p>
          </div>
          <div class="col-sm-12 col-md-4">
            <i class="fas fa-money-bill-alt "></i>
            <h3 class="fasFaHeading">On-Site ATM</h3>
            <p class="FasfaText">All locations are provided with ATM's</p>
          </div>
        </div>
        <hr class="my-4" />
      </div>

      {/* Two column section */}
      <div class="container-fluid padding springBigContainer">
        <div class="row text-center padding">
          <div id="springBigText" class="col-lg-6">
            <h2 id="springBigHeading">SpringBig Loyalty Program</h2>
            <p>After every purchase you'll earn one point for every dollar that you've spent.</p>
            <p>These points can be redeemed for great rewards and discounts on your future purchases.</p>
            <br />
            <Link to="/Rewards"><button type="button" class="btn btn-primary">Learn More</button></Link>
          </div>
          <div class="col-lg-6 springBigLogo">
            <Link to="/Rewards"><img style={{ height: "100px" }} src={springBig} alt="SpringBig Logo" class="img-fluid"></img></Link>
            <p  id="springBigtext">The more you spend, the more you save.</p>
          </div>
        </div>
      </div>
      <hr class="my-4"></hr>


      {/* Vendor Section */}
      <button class="vendor" data-toggle="collapse" data-target="#emoji">Click To See Our Top Vendors
    </button>
      <div id="emoji" class="collapse">
        <div class="container-fluid padding">
          <div class="row text-center">
            <div class="col-sm-6 col-md-3">
              <img style={{ height: "100px", width: "200px" }} src={Vendor1} alt="Top Vendor"></img>
            </div>
            <div class="col-sm-6 col-md-3">
              <img style={{ height: "100px", width: "200px" }} src={Vendor2} alt="Top Vendor"></img>
            </div>
            <div class="col-sm-6 col-md-3">
              <img style={{ height: "100px", width: "200px" }} src={Vendor3} alt="Top Vendor"></img>
            </div>
            <div class="col-sm-6 col-md-3">
              <img style={{ height: "100px", width: "200px" }} src={Vendor4} alt="Top Vendor"></img>
            </div>
          </div>
        </div>
        <hr class="my-7"/>
      </div>

      {/* Connect */}
      <div class="container-fluid padding">
        <div id="connectBackground" class="row text-center padding">
          <div class="col-12">
            <h2 id="connectText">Connect</h2>
          </div>
          <div class="col-12 social padding">
            <Link><i class="fab fa-facebook fa-3x"></i></Link>
            <Link><i class="fab fa-instagram fa-3x"></i></Link>
            <Link><i class="fab fa-youtube fa-3x"></i></Link>
           
          </div>
        </div>
      </div>









    </div>




  )
}

export default Index