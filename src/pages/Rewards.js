import React from "react";

//components
import RewardsFAQ from "../components/rewardsFAQ/RewardsFAQ";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Parallax from "../components/parallax/Parallax";
import Banner from "../components/banner/Banner";
import StoreTags from "../components/storeTags/StoreTags";

// images
import ParallaxeImage from "../images/parallax_Image_home_Page.jpg";

//data
import { rewardsData } from "../components/rewardsProcess/RewardsProcessData";

function Rewards() {
  return (
    <>
      {/* Banner */}
      <Banner
        directory="We Appreciate your Business"
        description="The Kushery Loyalty Program"
      />

      {/* about loyalty */}
      <Jumbotron
        title="Our Loyalty Program."
        intro="  
            After every purchase you'll earn 1 point for every dollar that
            you've spent. These points can be redeemed for great rewards and
            discounts on your future purchases. In addition to earning points,
            you'll get access to exclusive offers on your favorite products.
            Points never expire, and you can use them at any of The Kushery
            locations."
        button="View Rewards"
        link="https://join.mywallet.deals/?id=c183800f-c7a0-4c9e-b101-fcab053b3e63&location=/#/login"
      />

      {/* parallax */}
      <Parallax backgroundImage={ParallaxeImage}>
        <div className="parallax__aboutUs-container">
          <p className="parallax__aboutus">Shop. Save. Enjoy.</p>
        </div>
      </Parallax>

      {/* tags */}
      <div
        className="container-fluid center storeTags__container"
        style={{
          width: "100%",
          border: "1px solid black",
        }}
      >
        <div data-aos="fade-right" className="row text-center z">
          {rewardsData.map((item) => (
            <StoreTags
              key={item.id}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </div>

      {/* FAQ */}
      <RewardsFAQ />
    </>
  );
}

export default Rewards;
