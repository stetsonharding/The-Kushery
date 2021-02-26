import React from "react"
import "./Styles/OrderingProcess.css"


function OrderingProcess(props){
    return(
        <div className="orderProcess container">
            <div className="imgContainer">
            <i className={props.img}></i>
            </div>
            <h2 className="orderProcess_title">{props.processTitle}</h2>
            <h4 className="orderProcess_description">{props.description}</h4>
            <i id="arrows" className={props.arrow}></i>
            <i id="smiley" className={props.smiley}></i>
           
        </div>
    )
}

export default OrderingProcess