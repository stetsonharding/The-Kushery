import React from "react";
import { Modal, Button } from "react-bootstrap";

import GoingAllCityBackground from "../images/GoingAllCityBackground.webp";

function GoingAllCityModal({
  showGoingAllCity,
  setShowGoingAllCity,
  ...props
}) {
  function CloseModal() {
    setShowGoingAllCity(false);
  }

  const modalStyle = {
    backgroundImage: `url(${GoingAllCityBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    backgroundSize: "180px",
    height: "320px",
    backgroundColor: "black",
  };

  const text = {
    color: "white",
    fontFamily: "cursive",
    padding: ".2em",
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showGoingAllCity}
    >
      <Modal.Header closeButton style={modalStyle}>
        <Modal.Title
          id="contained-modal-title-v center"
          style={{
            textAlign: "center",

            width: "100%",
          }}
        >
          <h2
            style={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "cursive",
              padding: ".2em",
            }}
          >
            GOING ALL CITY{" "}
            <span
              style={{ color: "purple", fontWeight: "bold", fontSize: "39px" }}
            >
              EVENT!
            </span>{" "}
          </h2>
          {/* <h3 style={text}>Hosted By The Kushery</h3> */}
          <h3 style={{ textAlign: "center", color: "white" }}>
            @ The Kushery Evergreen Way!
            <br />
            All Ages Welcome!
          </h3>
          <h3 style={text}>
            {" "}
            08/06/2022 <br /> 11:00am - 3:00pm
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ textAlign: "center" }} id="modal_body">
          <span style={{ color: "blue", fontWeight: "bold" }}>FOOD!</span> |
          <span style={{ color: "PURPLE", fontWeight: "bold" }}> MUSIC! </span>{" "}
          |<span style={{ color: "RED", fontWeight: "bold" }}> PAINT! </span> |{" "}
          <span style={{ color: "GREEN", fontWeight: "bold" }}>
            {" "}
            LIVE MURALS!{" "}
          </span>
        </h4>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "black", border: "" }}>
        <Button
          id="ageVerificationBtn"
          variant="success"
          onClick={() => CloseModal()}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GoingAllCityModal;
