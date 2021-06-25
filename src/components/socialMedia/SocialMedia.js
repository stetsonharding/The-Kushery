import React from "react";

import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div className="socialMedia__container container-fluid">
      <div className="socialMeda row text-center padding">
        <div className="socialMedia__title-container col-12">
          <h2 id="socialMedia__title">Stay Connected!</h2>
        </div>
        <div className="col-12 social padding">
          <a href="https://www.facebook.com/thekusheryeverett">
            <i className="fab fa-facebook fa-2x media-icon"></i>
          </a>
          <a href="https://www.instagram.com/thekusheryclearview0/">
            <i className="fab fa-instagram fa-2x media-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
