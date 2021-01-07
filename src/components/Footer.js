import React from "react"

import { Link } from "react-router-dom"
import Logo from "../images/TheKusheryLogo.jpg"

import "./Styles/Footer.css"

function Footer() {
    return (
        <div>
            <footer>
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-lg-6">
                            <img style={{ width: "130px" }} src={Logo} alt="Kushery Logo" />
                            <hr className="light" />
                            <Link className="linkColor" to="/">Home</Link><br />
                            <Link className="linkColor" to="/Contact">Contact</Link><br />
                            <Link className="linkColor" to="/KnowYourFacts">Know your Facts</Link>
                        </div>
                        <div className="col-lg-6 info-links">
                            <hr className="light"></hr>
                            <hr className="light" />
                            <Link className="linkColor" to="/Location">Location</Link><br />
                            <Link className="linkColor" to="/Rewards">Rewards</Link><br />
                            <Link className="linkColor" to="">Return Policy</Link>
                        </div>
                    </div>
                    <div className="col-12 text-center padding">
                        <hr style={{color: "orange"}}></hr>
                        <p id="rightReserved">©2021 All Rights The Kushery</p>
                        <p>Disclaimer: Cannabis can impair concentration, coordination, and judgment. Do not operate a vehicle or machinery under the influence of this drug.
                        This product has intoxicating effects and may be habit forming. There may be health risks associated with consumption of this product.
                        For use only by adults twenty-one and older. Keep out of the reach of children.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer