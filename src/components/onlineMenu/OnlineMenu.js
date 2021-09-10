import React from "react";

import "./OnlineMenu.css";
export default function OnlineMenu({ menuID }) {
  return (
    <div className="row">
      <div
        className="orderOnline__menu-container col"
        style={{ padding: "0 1em 0 1em" }}
      >
        <iframe
          className="orderonline__menu"
          src={`https://www.iheartjane.com/embed/stores/${menuID}`}
          title="description"
        ></iframe>
      </div>
    </div>
  );
}
