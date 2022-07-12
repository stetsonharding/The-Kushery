import React from "react";

import useScript from "../../hooks/useScript";

import "./OnlineMenu.css";
export default function OnlineMenu({ menuID }) {
  const dutchieMenu = useScript(
    `https://dutchie.com/api/v2/embedded-menu/${menuID}`
  );
  return (
    <div className="row">
      {dutchieMenu ? (
        <div>
          <script async="" id="dutchie--embed__script"></script>
        </div>
      ) : (
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
      )}
    </div>
  );
}
