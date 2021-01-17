import React from "react"
import {Modal, Button} from "react-bootstrap";


function AgeVerificationModal(props) {
    // const [show, setShow] = useState(true);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    function ToYoung(){
      const modalBody = document.getElementById("modal_body");
      modalBody.innerHTML = "Sorry! This webpage requires visitors 21 years or older to enter!"
      const ageVerificationBtn = document.getElementById("ageVerificationBtn");
      ageVerificationBtn.style.display = "none"
    }

    return (

      
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           The Kushery Age Verification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 id="modal_body">You Must be 21+ years old to enter this website!</h4>
        </Modal.Body>
        <Modal.Footer>
        <Button  id="ageVerificationBtn"variant="success" onClick={props.onHide}>I am 21 or older</Button>
        <Button  id="under21Btn"variant="danger" onClick={ToYoung}>I am under the age of 21</Button>
  
        </Modal.Footer>
      </Modal>
    );
  }
  
export default AgeVerificationModal