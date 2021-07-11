import React, { useState } from "react";

import "./LocationSelection.css";

import OnlineMenu from "../onlineMenu/OnlineMenu";

export default function LocationSelection() {
  const [menuID, setMenuID] = useState("2617");

  return (
    <div className="container" style={{ padding: "0" }}>
      <div classname="row">
        <div className="col-xl-12">
          <div className="locationSelection__title-container">
            <h1 className="locationSelection__title">
              {menuID === "2617"
                ? "Clearview"
                : menuID === "2618"
                ? "Cathcart"
                : menuID === "2620"
                ? "Lake Forest Park"
                : menuID === "2619"
                ? "Stanwood"
                : "The Kushery online ordering"}
            </h1>
          </div>
          <form>
            <label>
              Choose a location:
              <br />
              <select
                className="locationSelection__select"
                value={menuID}
                onChange={(e) => setMenuID(e.target.value)}
              >
                <option value="2617">Clearview</option>
                <option value="2618">Cathcart</option>
                <option value="2620">Lake Forest Park</option>
                <option value="2619">Stanwood</option>
              </select>
            </label>
          </form>
        </div>
        <OnlineMenu menuID={menuID} />
      </div>
    </div>
  );
}
