import React from "react"
import "../Styles/Rewards.css"


import Banner from "../Banner"
// import springBigRewardsPg from "../../images/springBigRewardsPg.png"
import highEnd from "../../images/highEnd.jpeg"

function Rewards() {
  return (
    <>
      {/* Banner */}
      <Banner
        directory="We Appreciate your Business"
        description="The Kushery Loyalty Program"
      />

      {/* col-1 */}
      <div style={{ backgroundColor: "white" }} className="container-fluid rewards-container">
        <div className="row text-center">
          <div  className="col-lg-6 col-1-rewards">
            <h2 className="main-text">The Kushery loyalty program.</h2>
            <h3 className="main-sub-text">We're here for you anytime</h3>
            <img className="main-img" src={highEnd} alt="SpringBig Logo"/>
            <br />
            <a className="rewards-btn" href="https://enrollnow.vip/join/2617">Join Rewards</a>
            <a className="rewards-btn" href="https://join.mywallet.deals/?id=c183800f-c7a0-4c9e-b101-fcab053b3e63&location=/#/login">View Rewards</a>
          </div>

          {/* col-2 */}
          <div className="col-lg-6 rewardQuestions">
            <div className="row text-center">
              <div className="aboutContainer">
                <h2 className="aboutHeading">About our Loyalty Program</h2>
                <p className="about-text">After every purchase you'll earn 1 point for every dollar that you've spent.
                These points can be redeemed for great rewards and discounts on your future purchases.
                In addition to earning points, you'll get access to exclusive offers on your favorite products
            and notifications of our flash deals. Points never expire and you can use them at any of The Kushery locations.</p>
              </div>
              
              <hr className="about-text-hr"></hr>
        
              <div className="FAQs-container">
                <h4 className="FAQs-subHeading">Do I have to have a cellphone to be a member?</h4>
                <p className="FAQs-text">No you do not. You can access your wallet from any computer, tablet, or smart phone.
                  We will also be able to access your wallet to redeem rewards and inform you of your points balance whenever you stop by.
                </p>

                <h4 className="FAQs-subHeading"> Do points expire?</h4>
                <p className="FAQs-text">No, your points will never expire at any of our locations.</p>

                <h4 className="FAQs-subHeading">Do you sell my information?</h4>
                <p className="FAQs-text">Here at The kushery we respect your privacy. We will never share or sell any of your personal information.</p>

                <h4 className="FAQs-subHeading">Are you going to text me everyday?</h4>
                <p className="FAQs-text">You will receive text messages about our daily specials each day, plus any flash sales, upcoming holiday specials etc.</p>

                <h4 className="FAQs-subHeading">Can I transfer my points to friends or family?</h4>
                <p className="FAQs-text">At this time we are unable to transfer any points.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Rewards