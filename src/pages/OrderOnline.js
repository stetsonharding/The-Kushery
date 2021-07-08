import React from "react";

// components
import Banner from "../components/banner/Banner";
import LocationSelection from "../components/locationSelection/LocationSelection";

function OrderOnline() {
  return (
    <>
      <Banner directory="Order Online" description="skip the line" />
      <LocationSelection />
    </>
  );
}

export default OrderOnline;
