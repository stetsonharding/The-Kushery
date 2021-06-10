import React from "react";


import "./Parallax.css"

export default function Parallax(props) {
  return <div className="parallax_background"  style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>;
}
