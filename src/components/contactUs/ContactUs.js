import React from "react";
import emailjs from "emailjs-com";
import { Form, Button } from "react-bootstrap";

import "./ContactUs.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v9hywjc",
        "template_t89vvs7",
        e.target,
        "user_OcADP2ZtNbUvQnfGd1atQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="container-fluid contactUs__container">
      <div className="row contactUs__row">
        <div data-aos="fade-up" className="contctUs__title-container">
          <p id="contactUs__title">Contact us</p>
        </div>
        <div className="contactUs__form-container">
          <Form onSubmit={sendEmail}>
            <Form.Group>
              <Form.Control
                className="gp"
                type="name"
                placeholder="Name"
                name="name"
                maxLength={50}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                maxLength={100}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="tel"
                placeholder="Phone"
                name="phone"
                maxLength={30}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                maxLength={100}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                name="message"
                maxLength={1000}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="text-center">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
