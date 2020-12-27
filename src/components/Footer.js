import React from "react"

import { Link } from "react-router-dom"
import Logo from "../images/TheKusheryLogo.jpg"

import "./Styles/Footer.css"

function Footer() {
    return (
        <div>
            <footer>
                <div class="container-fluid padding">
                    <div class="row text-center">
                        <div class="col-lg-6">
                            <img style={{ width: "130px" }} src={Logo} alt="Kushery Logo" />
                            <hr class="light" />
                            <Link class="linkColor" to="/">Home</Link><br />
                            <Link class="linkColor" to="/Contact">Contact</Link><br />
                            <Link class="linkColor" to="/KnowYourFacts">Know your Facts</Link>
                        </div>
                        <div class="col-lg-6 info-links">
                            <hr class="light"></hr>
                            <hr class="light" />
                            <Link class="linkColor" to="/Location">Location</Link><br />
                            <Link class="linkColor" to="/Rewards">Rewards</Link><br />
                            <Link class="linkColor" to="">Return Policy</Link>
                        </div>
                    </div>
                    <div class="col-12 text-center padding">
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