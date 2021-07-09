import React from "react";
import Banner from "../components/banner/Banner";

const containerStyle = {
  // borderLeft: "2px solid green",
  // borderRight: "2px solid green",
  padding: "4em",
  margin: "0 auto",
  backgroundColor: "black",
  color: "white",
  borderBottom: "2px solid orange",
};

const returnPolicyInfo = {
  letterSpacing: "1px",
};

function ReturnPolicy(props) {
  return (
    <>
      <Banner directory="The Kushery's Return Policy" />
      <div style={containerStyle} className="returnContainer">
        <div className="row">
          <div className="md-col">
            <h4 style={returnPolicyInfo} className="return-policy">
              The States policy is to only allow mechanical returns and
              exchanges.
            </h4>
            <ul>
              <li className="lead">
                Must be returned within the period of 7 days.
              </li>
              <li className="lead">
                Must retain its original packaging and original receipt
              </li>
              <li className="lead">All other sales are final.</li>
            </ul>
            <p style={returnPolicyInfo} className="lead">
              **We will process your exchange for a diffrent product. Cash
              refunds are not accepted.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReturnPolicy;
