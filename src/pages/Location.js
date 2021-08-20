import React from "react";

//components
import LocationCards from "../components/locationCards/LocationCards";
import Banner from "../components/banner/Banner";
import { locationData } from "../components/locationCards/locationData";

function Location() {
  return (
    <>
      {/* Banner */}
      <Banner
        directory="Store Directory"
        description="Recreational & Medical Dispensaries"
        welcome="We're here for you anytime"
      />

      {/* Card Component */}
      <div className="container mt-5 mb-5">
        {locationData.map((location) => (
          <LocationCards
            img={location.image}
            alt={location.alt}
            title={location.title}
            phone={location.phone}
            phoneLink={location.phoneLink}
            hours={location.hours}
            hours2={location.hours2}
            address={location.address}
            stateAndZip={location.stateAndZip}
            directions={location.directions}
            menu={location.menu}
          />
        ))}
      </div>
    </>
  );
}

export default Location;
