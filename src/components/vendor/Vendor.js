import React from "react";

import "./Vendor.css";

export default function Vendor({ item }) {
  return (
    <div key={item.id} className="col-sm-6 col-md-3 vendor__logo">
      <img
        style={{ height: "100px", width: "200px" }}
        src={item.image}
        alt="Vendor"
      ></img>
    </div>
  );
}
