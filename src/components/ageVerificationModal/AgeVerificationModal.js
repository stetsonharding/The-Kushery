import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function AgeVerificationModal(props) {
  const [modalShow, setModalShow] = useState(true);
  const [isToYoung, setIsToYoung] = useState(false);
  const [toYoung, setToYoung] = useState("");

  useEffect(() => {
    let visited = sessionStorage["alreadyVisited"];
    if (visited) {
      setModalShow(false);
      //do not view modal
    } else {
      //this is the first time
      sessionStorage["alreadyVisited"] = true;
      setModalShow(true);
    }
  }, []);

  const underAge = () => {
    setIsToYoung(true);
    setToYoung(
      "Sorry! This web page requires visitors 21 years or older to enter!"
    );
  };

  const onHideModal = () => {
    setModalShow(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          The Kushery Age Verification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 id="modal_body">
          {isToYoung
            ? toYoung
            : " You must be 21+ years old to enter this website!"}
        </h4>
      </Modal.Body>
      <Modal.Footer>
        {isToYoung ? null : (
          <Button
            id="ageVerificationBtn"
            variant="success"
            onClick={() => onHideModal()}
          >
            I'm age 21+
          </Button>
        )}

        <Button id="under21Btn" variant="danger" onClick={() => underAge()}>
          I'm under 21
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AgeVerificationModal;
