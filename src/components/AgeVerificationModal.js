import React from "react"
import {Modal, Button} from "react-bootstrap";


function AgeVerificationModal(props) {
    // const [show, setShow] = useState(true);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
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
          <h4>You Must be 21 Years of age or older to enter this website.</h4>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>I am 21 and older</Button>
        <Button variant="danger" onClick={props.onHide}>I am under the age of 21</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default AgeVerificationModal