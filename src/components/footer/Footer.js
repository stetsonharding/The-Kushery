import React from "react";

import Logo from "../../images/TheKusheryLogo.jpg";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-lg-6">
              <img style={{ width: "130px" }} src={Logo} alt="Kushery Logo" />
              <hr className="light" />
              <a href="/" className="linkColor">
                Home
              </a>
              <br />
              <a href="/KnowYourFacts" className="linkColor">
                Know Your Facts
              </a>
              <br />
              <a href="/OrderOnline" className="linkColor">
                Order Online
              </a>
              <br />
              <a
                href="https://www.termsfeed.com/live/785f2d4b-df4e-438e-ad93-795b83535ac8"
                className="linkColor"
              >
                Privacy Policy
              </a>

              <br />
            </div>
            <div className="col-lg-6 info-links">
              <hr className="light"></hr>
              <hr className="light" />
              <a href="/Location" className="linkColor">
                Locations
              </a>
              <br />
              <a href="/Rewards" className="linkColor">
                Rewards
              </a>
              <br />
              <a href="/ReturnPolicy" className="linkColor">
                Return Policy
              </a>
              <br />
            </div>
          </div>
          <div className="col-12 text-center padding">
            <hr style={{ color: "orange" }}></hr>
            <p id="rightReserved">©2021 All Rights The Kushery</p>
            <p>
              Disclaimer: Cannabis can impair concentration, coordination, and
              judgment. Do not operate a vehicle or machinery under the
              influence of this drug. This product has intoxicating effects and
              may be habit forming. There may be health risks associated with
              consumption of this product. For use only by adults twenty-one and
              older. Keep out of the reach of children.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
