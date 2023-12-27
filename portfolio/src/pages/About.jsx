import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container id="about">
      <Row>
        <Col>
          <p>
            Hi! I'm Justin, a university student studying Computing.
            In the past few years, I've been taking up photography as a hobby.
          </p>
          <p>
            This website is an attempt to link both these passions and will
            hopefully motivate me to improve on both these skills.
          </p>
        </Col>
      </Row>
      <Row>
        <p>This is the gear that I use:</p>
        <p className="list-header">Camera</p>
        <ul>
          <li>Lumix GX9</li>
        </ul>
        <p className="list-header">Lenses</p>
        <ul>
          <li>Lumix 25mm f1.7</li>
          <li>Lumix 14-140mm f3.5-5.6</li>
        </ul>
      </Row>
    </Container>
  );
}

export default About;
