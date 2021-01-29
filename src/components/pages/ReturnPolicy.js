import React from "react"
import Banner from "../Banner"


const containerStyle={
 borderLeft: "2px solid green",
 borderRight: "2px solid green",
 padding: "3em",
 margin: "0 auto",
 color: "white"
}

const returnPolicyInfo={
    letterSpacing: "1px"
    
}

const par ={
   
    marginBottom: ".5em"
}

function ReturnPolicy(props){
    return(
        <>
        <Banner 
       directory="The Kushery's Return Policy"
        />
<div style={containerStyle} className="container returnContainer">
    <div className="row">
        <div className="md-col">
            <h4 style={returnPolicyInfo} className="return-policy">The States policy is to only allow mechanical returns and exchanges.</h4>
            <ul>
                <li className="lead">Must be returned within the period of 7 days.</li>
                <li className="lead">Must retain its original packaging and original receipt</li>
                <li className="lead">All other sales are final.</li>
            </ul>
           <p style={returnPolicyInfo} className="lead">**We will process your exchange for a diffrent product. Cash refunds are not aloud.</p>
          
        </div>
    </div>
</div>


        </>
    )
}

export default ReturnPolicy