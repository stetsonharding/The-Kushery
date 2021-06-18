import React, { useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

import { StoreTagsData } from "../components/storeTags/StoreTagsData";

//components
import AgeVerificationModal from "../components/ageVerificationModal/AgeVerificationModal";
import MainCarousel from "../components/carousel/MainCarousel";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Parallax from "../components/parallax/Parallax";
import StoreTags from "../components/storeTags/StoreTags";
import DailySpecials from "../components/dailySpecials/DailySpecials";
import ContactUs from "../components/contactUs/ContactUs";

import ParallaxImage from "../images/parallaxImg.jpg";

import mamba from "../images/mamba.jpeg";
import swamp from "../images/Swamp.jpeg";
import budda from "../images/budda.jpeg";
import Vendor1 from "../images/Logos/Vendor1.jpg";
import Vendor2 from "../images/Logos/Vendor2.png";
import Vendor3 from "../images/Logos/Vendor3.jpg";
import Vendor4 from "../images/Logos/Vendor4.png";
import doctorCrook from "../images/Logos/doctorCrook.PNG";
import EGH from "../images/Logos/EGH.png";
import Fleek from "../images/Logos/Fleek.png";
import GTP from "../images/Logos/GTP.png";
import HEF from "../images/Logos/HEF.png";
import Millenium from "../images/Logos/Millenium.PNG";
import MM from "../images/Logos/MM.PNG";
import Optimum from "../images/Logos/Optimum.png";

import mg from "../images/weedImage_2.jpg";

import "../Styles/Index.css";

function Index() {
  // Age Verification btn state
  const [modalShow, setModalShow] = useState(true);

  return (
    <div>
      {/* Age Verification Check */}
      <AgeVerificationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        backdrop={"static"}
        keyboard={false}
      />

      <MainCarousel />
      <Jumbotron />

      {/* JumboTron */}
      {/* <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead">
              As the best recreational marijuana dispensary in Washington, we
              offer cannabis products with varying levels of THC. Whether you
              are looking for products with low THC or ones with high THC
              concentration, we've got something for you. The Kushery raises the
              bar by leading the retail dispensary experience in the State of
              Washington.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="/Location" className="location-btn">
              Order Online!
            </a>
          </div>
        </div>
      </div> */}

      {/* Welcome section */}
      <Parallax backgroundImage={ParallaxImage}>
        <div className="parallax__aboutUs-container">
          <p className="parallax__aboutus">
            The Kushery has 4 locations located in Clearview, East Everett, Lake
            Forest Park, and Stanwood. Our number one goal is to provide quality
            customer service. All of our shops provide the highest quality,
            selection, and price when it comes to marijuana and glass. Whether
            you're looking for flower, vape, edibles, pre-rolls, tinctures or
            topicals, our experienced knowledgeable budtenders will find
            something that suites your needs.
          </p>
        </div>
      </Parallax>

      {/* <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12 about-section">
            <h1 className="display-4">A Little About Us</h1>
            <p id="about-us">
              The Kushery has 4 locations located in Clearview, East Everett,
              Lake Forest Park, and Stanwood. Our number one goal is to provide
              quality customer service. All of our shops provide the highest
              quality, selection, and price when it comes to marijuana and
              glass. Whether you're looking for flower, vape, edibles,
              pre-rolls, tinctures or topicals, our experienced knowledgeable
              budtenders will find something that suites your needs.
            </p>
          </div>
          <hr />
          <div className="col-12 companyPriorities">
            <p className="lead">
              PERSONALIZED SERVICE, EXPERIENCED STAFF, COMPETITIVE PRICES.
            </p>
          </div>
        </div>
      </div> */}

      <div className="container-fluid center storeTags__container">
        <div data-aos="fade-right" className="row text-center z">
          {StoreTagsData.map((item) => (
            <StoreTags
              key={item.id}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </div>

      <DailySpecials />

      <ContactUs />

      <Parallax backgroundImage={ParallaxImage}></Parallax>

      {/* Three column images */}
      {/* <div className="container-fluid padding threeColumnImages">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-4 fas-fa-img">
            <i className="fas fa-dog "></i>
            <h3 className="fasFaHeading">Dog Friendly</h3>
            <p className="FasfaText">Bring your pup while you stock up!</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 fas-fa-img">
            <i className="fas fa-wheelchair "></i>
            <h3 className="fasFaHeading">ADA Accessible</h3>
            <p className="FasfaText">All locations are ADA Accessible</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 fas-fa-img">
            <i className="fas fa-money-bill-alt "></i>
            <h3 className="fasFaHeading">On-Site ATM</h3>
            <p className="FasfaText">All locations are provided with ATM's</p>
          </div>
        </div>
      </div> */}

      {/* Daily Specials */}
      {/* <div>
        <h1 id="Dailey-specials-title">Daily Specials</h1>
      </div>
      <div
        style={{ backgroundColor: "black", border: "none" }}
        className="card text-center cards card-specials"
      >
        <div className="card-specials">
          <div className="card-body text-dark single-card-everyday">
            <h4 className="title-card">Everyday Special</h4>
            <p className="text-card">
              Happy Hour: First 2 hours upon opening and last two hours upon
              closing, everyday. 10% off for Birthdays, Seniors/Veterans, and
              Medical everyday!
            </p>
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
            <p className="text-card">
              Waxes, Shatters and Oils 15% off! Excluding vape carts.
            </p>
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
            <h4 className="title-card">Vape Cart Saturdaze</h4>
            <p className="text-card">All Vape Carts 15% off!</p>
          </div>

          <div className="card-body text-dark sunday-special single-card">
            <h4 className="title-card">Customer's Choice</h4>
            <p className="text-card">
              Pick any daily special! It's your choice. Up to 20% off with 7
              items*.
            </p>
          </div>
        </div>
      </div> */}

      {/* Two column section */}
      {/* <div className="container-fluid padding springBigContainer">
        <div className="row text-center padding">
          <div id="springBigText" className="col-lg-6">
            <h2 id="springBigHeading">The Kushery Loyalty Program</h2>
            <p>
              After every purchase you'll earn one point for every dollar that
              you've spent.
            </p>
            <p>
              These points can be redeemed for great rewards and discounts on
              your future purchases.
            </p>
            <br />
            <a href="/Rewards" className="learn-more-btn">
              Learn More
            </a>
          </div>
          <div className="col-lg-6 springBigLogo">
            <img
              style={{ height: "200px", margin: "0 .5em" }}
              src={mamba}
              alt=""
              className="img-fluid"
            ></img>
            <img
              style={{ height: "200px" }}
              src={swamp}
              alt=""
              className="img-fluid"
            ></img>
            <img
              style={{ height: "200px", margin: ".2em .5em" }}
              src={budda}
              alt=""
              className="img-fluid"
            ></img>
            <p id="springBigLogo-subtext">
              Highest quality and selection, matched with the best prices!
            </p>
          </div>
        </div>
      </div> */}

      {/* Vendor Section */}
      <button className="vendor" data-toggle="collapse" data-target="#emoji">
        Click to checkout some of our vendors!
      </button>
      <div id="emoji" className="collapse">
        <div className="container-fluid padding">
          <div className="row text-center ">
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={Vendor1}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={Vendor2}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={Vendor3}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={Vendor4}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={doctorCrook}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={EGH}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={Fleek}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={GTP}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={HEF}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "190px" }}
                src={Millenium}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={MM}
                alt="Top Vendor"
              ></img>
            </div>
            <div className="col-sm-6 col-md-3 vendor-logo">
              <img
                className="vendor-logo-img"
                style={{ height: "100px", width: "200px" }}
                src={Optimum}
                alt="Top Vendor"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* Connect */}
      <div className="container-fluid padding">
        <div id="connectBackground" className="row text-center padding">
          <div className="col-12">
            <h2 id="connectText">Stay Connected!</h2>
          </div>
          <div className="col-12 social padding">
            <a href="https://www.facebook.com/thekusheryeverett">
              <i className="fab fa-facebook fa-2x media-icon"></i>
            </a>
            <a href="https://www.instagram.com/thekusheryclearview0/">
              <i className="fab fa-instagram fa-2x media-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
