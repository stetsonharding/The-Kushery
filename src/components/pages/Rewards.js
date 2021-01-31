import React from "react"
import "../Styles/Rewards.css"


import Banner from "../Banner"
// import springBigRewardsPg from "../../images/springBigRewardsPg.png"
import highEnd from "../../images/highEnd.jpeg"

function Rewards(){
    return(
        <>
          {/* Banner */}
      <Banner 
      directory="We Appreciate your Business"
      description="The Kushery Loyalty Program" 
      />

         {/* col-1 */}
      <div className="container-fluid rewards-container">
        <div className="row text-center">
          <div id="col1-springBig" className="col-lg-6">
            <h1 className="main-text">The Kushery Loyalty Program.<br/> We're Here For You Anytime.</h1>
           <img className="main-img" src={highEnd} alt="SpringBig Logo"/>
           <br/>
           <a className="rewards-btn" href="https://enrollnow.vip/join/2617">Join Rewards</a>
           <a className="rewards-btn" href="https://join.mywallet.deals/?id=c183800f-c7a0-4c9e-b101-fcab053b3e63&location=/#/login">View My Rewards</a>
          </div>

          {/* col-2 */}
          <div className="col-lg-6 rewardQuestions">
          <div className="row text-center">
            <div className="aboutContainer">
            <h2 className="aboutHeading">About Our Loyalty Program</h2>
            <p className="about-text lead">After every purchase you'll earn 1 point for every dollar that you've spent. 
            These points can be redeemed for great rewards and discounts on your future purchases.</p>
            <p className="about-text lead">In addition to earning points, you'll get access to exclusive offers on your favorite products 
            and notifications of our flash deals.</p>
            <p className="about-text lead">Points never expire and you can use them at any of The Kushery locations.</p>
            </div>
          <div className="FAQs-container">
            <h2 className="FAQs-heading">FAQ's</h2>
            <h4 className="FAQs-subHeading">Do I Have To Have a Cellphone To Be a Member?</h4>
              <p className="FAQs-text">No you do not. You can access your wallet from any computer, tablet, or smart phone. 
              We will also be able to access your wallet to redeem rewards and inform you of your points balance whenever you stop by.</p>
            <h4 className="FAQs-subHeading"> Do Points Expire?</h4>
              <p className="FAQs-text">No, your points will never expire at any of our locations.</p>
            <h4 className="FAQs-subHeading">Do You Sell My Information?</h4>
              <p className="FAQs-text">Here at The kushery we respect your privacy. We will never share or sell any of your personal information.</p>
            <h4 className="FAQs-subHeading">Are You Going To Text Me Everyday?</h4>
              <p className="FAQs-text">You will receive text messages about our daily specials each day, plus any flash sales, upcoming holiday specials etc.</p>
            <h4 className="FAQs-subHeading">Can I Transfer My Points To Friends or Family?</h4>
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