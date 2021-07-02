import React from "react";

import "./RewardsFAQ.css";

export default function RewardsFAQ() {
  return (
    <div className="col-lg-12 rewardfaq__container">
      <div className="rewardsfaq row ">
        <div className="rewardfaq__faq-container">
          <h1 className="rewardsfaq__title">FAQ's</h1>
          <hr />
          <h4 className="rewardfaq__question">
            Do I have to have a cellphone to be a member?
          </h4>
          <p className="rewardfaq__answer">
            No you do not. You can access your wallet from any computer, tablet,
            or smart phone. We will also be able to access your wallet to redeem
            rewards and inform you of your points balance whenever you stop by.
          </p>

          <h4 className="rewardfaq__question">Do points expire?</h4>
          <p className="rewardfaq__answer">
            No, your points will never expire at any of our locations.
          </p>

          <h4 className="rewardfaq__question">Do you sell my information?</h4>
          <p className="rewardfaq__answer">
            Here at The kushery we respect your privacy. We will never share or
            sell any of your personal information.
          </p>

          <h4 className="rewardfaq__question">
            Can I transfer my points to friends or family?
          </h4>
          <p className="rewardfaq__answer">
            At this time we are unable to transfer any points.
          </p>
        </div>
      </div>
    </div>
  );
}
