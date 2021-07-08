import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";

import { DaileySpecials } from "./DailySpecialsData";
import { DailySpecials2 } from "./DailySpecialsData";
import "./DaileySpecials.css";

const cardSyles = {
  color: "green",
  fontSize: "1.9rem",
};

export default function DailySpecials() {
  const dileySpecials = DaileySpecials.map((special) => {
    return (
      <Col className="col-md-6 col-lg-6 col-xl-3" key={special.id}>
        <Card className="dailySpecial__card">
          <Card.Body>
            <Card.Title style={cardSyles}>{special.day}</Card.Title>
            <Card.Text>{special.special}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  const dileySpecials2 = DailySpecials2.map((special) => {
    return (
      <Col className="col-md-6 col-lg-6 col-xl-3" key={special.id}>
        <Card className="dailySpecial__card">
          <Card.Body>
            <Card.Title style={cardSyles}>{special.day}</Card.Title>
            <Card.Text>{special.special}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Container fluid className="dailySpecials__container">
      <div className="dailySpecials__card-container">
        <h1 className="dailySpecials__main-title">Daily Specials</h1>
        <hr style={{ color: "black", width: "10px" }} />
        <Row data-aos="fade-right">{dileySpecials}</Row>
        <Row data-aos="fade-right">{dileySpecials2}</Row>
      </div>
    </Container>
  );
}
