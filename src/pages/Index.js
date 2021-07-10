import React from "react";

//data
import { StoreTagsData } from "../components/storeTags/StoreTagsData";
import { vendorImages } from "../components/vendor/VendorData";

//components
import AgeVerificationModal from "../components/ageVerificationModal/AgeVerificationModal";
import Hero from "../components/hero/Hero";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Parallax from "../components/parallax/Parallax";
import StoreTags from "../components/storeTags/StoreTags";
import DailySpecials from "../components/dailySpecials/DailySpecials";
import ContactUs from "../components/contactUs/ContactUs";
import Vendor from "../components/vendor/Vendor";
import SocialMedia from "../components/socialMedia/SocialMedia";

import ParallaxImage from "../images/parallax_Image_home_Page.jpg";

function Index() {
  return (
    <div>
      {/* Age Verification Check */}
      <AgeVerificationModal />

      {/* Hero */}
      <Hero />

      {/* jumbotron */}
      <Jumbotron
        title=" PERSONALIZED SERVICE, EXPERIENCED STAFF, COMPETITIVE PRICES."
        intro="As the best recreational marijuana dispensary in Washington, we
            offer cannabis products with varying levels of THC. Whether you are
            looking for products with low THC or ones with high THC
            concentration, we've got something for you. The Kushery raises the
            bar by leading the retail dispensary experience in the State of
            Washington."
        button="View Locations"
        link="/Location"
      />

      {/* parallax/about section */}
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

      {/* store tags */}
      <div
        className="container-fluid center storeTags__container"
        style={{ width: "100%" }}
      >
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

      {/* dailey specials */}
      <DailySpecials />

      {/* contact us form */}
      <ContactUs />

      {/* parallax */}
      <Parallax backgroundImage={ParallaxImage}>
        <div className="parallax__aboutUs-container">
          <p className="parallax__aboutus">Order online for pickup</p>
          <a href={"/OrderOnline"} className="orderOnline__button">
            View Menus
          </a>
        </div>
      </Parallax>

      {/* Vendor Section */}
      <button
        className="vendor__toggle-button"
        data-toggle="collapse"
        data-target="#emoji"
      >
        Click to check out some of our vendors!
      </button>
      <div id="emoji" className="collapse">
        <div className="container-fluid padding">
          <div className="row text-center ">
            {vendorImages.map((item) => (
              <Vendor item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* social media */}
      <SocialMedia />
    </div>
  );
}
export default Index;
