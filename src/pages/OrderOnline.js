import React from "react";
import LocationCards from "../components/locationCards/LocationCards";
import Banner from "../components/banner/Banner";
// import OrderProcess from "../components/onlineOrderingSteps/OrderingProcess";

import Clearview from "../images/Clearview.PNG";
import Cathcart from "../images/Cathcart.PNG";
import LakeForestPark from "../images/LakeForestPark.PNG";
import Stanwood from "../images/Stanwood.PNG";

function OrderOnline() {
  // const containerSyle = {
  //   backgroundColor: "#181817",
  //   marginTop: "1.7em",

  return (
    <div>
      <Banner directory="Order Online" description="skip the line" />

      {/* Order Processing */}
      {/* <div
        style={containerSyle}
        className="container-fluid order_proccess_container"
      >
        <div className="row text-center">
          <div className="col-xs-12 col-sm-6 col-md-4 fas-fa-img">
            <OrderProcess
              processTitle="step 1"
              img="fas fa-shopping-cart fa-5x"
              description="Place order from desired location"
              arrow="fas fa-arrow-right fa-3x"
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 fas-fa-img">
            <OrderProcess
              processTitle="step 2"
              img="fas fa-mobile-alt fa-5x"
              description="Receive order confirmation"
              arrow="fas fa-arrow-right fa-3x"
            />
          </div>

          <div className="col-sm-12 col-md-4 fas-fa-img">
            <OrderProcess
              processTitle="step 3"
              img="far fa-check-square fa-5x"
              description="Pick up order and enjoy!"
              smiley="fas fa-smile-beam fa-3x"
            />
          </div>
        </div>
      </div> */}

      {/* Card Component */}
      <div className="container-fuild d-flex justify-content-center cards-container">
        <div className="row cardRows">
          <div className="col-xl-3 col-sm-6">
            <LocationCards
              img={Clearview}
              orderOnline="Order Online Now!"
              alt="Clearview Building"
              title="Clearview"
              phone="(360) 863-3256"
              hours="Monday - Sunday 8am - 12am"
              address="18026 WA-9 B, Snohomish, WA 98296"
              directions="https://www.google.com/maps/dir//kushery+clearview/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x5490088cbde3e777:0x2bcec041a50b8fcb?sa=X&ved=2ahUKEwjbqoKq6ObsAhWCFzQIHaobCBgQ9RcwC3oECBQQBA"
              menu="https://www.iheartjane.com/embed/stores/2617"
            />
          </div>
          <div className="col-xl-3 col-sm-6">
            <LocationCards
              img={Cathcart}
              orderOnline="Order Online Now!"
              alt="Clearview Building"
              title="Cathcart"
              phone="(425) 337-5145"
              hours="Sunday - Thursday 8am - 10pm Friday & Saturday 8am - 12am"
              address="5626 134th Pl SE B, Everett, WA 98208"
              directions="https://www.google.com/maps/dir//the+kushery+cathcart/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x549007b1c9bbc243:0xa9d8ad49b63f28d4?sa=X&ved=2ahUKEwiSt8OrnunsAhXzIDQIHROqA4YQ9RcwAHoECAMQBA"
              menu="https://www.iheartjane.com/embed/stores/2618"
            />
          </div>
          <div className="col-xl-3 col-sm-6">
            <LocationCards
              img={LakeForestPark}
              orderOnline="Order Online Now!"
              alt="Clearview Building"
              title="Lake Forest Park"
              phone="(206) 403-1106"
              hours="Sunday - Thursday 8am - 10pm Friday & Saturday 8am - 12am"
              address="19258 15th Ave NE #B, Lake Forest Park, WA 98155"
              directions="https://www.google.com/maps/dir//kushery+lfp/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x54901043c7444211:0x2dc611155f2ba4da?sa=X&ved=2ahUKEwjowPyKn-nsAhWhIzQIHW8vDGgQ9RcwC3oECBAQBA"
              menu="https://www.iheartjane.com/embed/stores/2620"
            />
          </div>
          <div className="col-xl-3 col-sm-6">
            <LocationCards
              img={Stanwood}
              orderOnline="Order Online Now!"
              alt="Clearview Building"
              title="Stanwood"
              phone="(360) 939-0400"
              hours="Monday - Sunday 8am - 10pm"
              address="27206 88th Ave NW, Stanwood, WA 98292"
              directions="https://www.google.com/maps/dir//stanwood+kushery/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x54855d87b08c86fd:0x4cce6e428a0c2d25?sa=X&ved=2ahUKEwjz3OWyoOnsAhW_CTQIHSMMBAwQ9RcwC3oECBMQBA"
              menu="https://www.iheartjane.com/embed/stores/2619"
            />
          </div>
        </div>
      </div>
      {/* <===========> */}
    </div>
  );
}

export default OrderOnline;
