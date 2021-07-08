import React from "react";

import { locationData } from "../components/locationCards/locationData";

//components
import LocationCards from "../components/locationCards/LocationCards";
import Banner from "../components/banner/Banner";

function Location(props) {
  return (
    <>
      {/* Banner */}
      <Banner
        directory="Store Directory"
        description="Recreational & Medical Dispensaries"
        welcome="We're here for you anytime"
      />

      {/* Card Component */}
      <div className="container-fuild d-flex justify-content-center cards-container">
        <div className="row cardRows">
          {locationData.map((location) => (
            <div className="col-xl-3 col-sm-6" key={location.id}>
              <LocationCards
                img={location.image}
                alt={location.alt}
                title={location.title}
                phone={location.phone}
                phoneLink={location.phoneLink}
                hours={location.hours}
                hours2={location.hours2}
                address={location.address}
                directions={location.directions}
                menu={location.menu}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Location;
