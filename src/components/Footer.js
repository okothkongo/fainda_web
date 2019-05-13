import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/">
            <h2>About Us</h2>
          </Link>
          <p>Got Question? Call</p>
          <p>O700000000</p>
          <p>Lorem ispsum Kisumu</p>
        </Col>
        <Col>
          <h2>Find it fast</h2>
          <p>Electronics</p>
          <p>Farm Tools</p>
          <p>Hook ups</p>
        </Col>
        <Col>
          <h2>Contact Us</h2>
          <i className="fab fa-facebook" />
          <i className="fab fa-twitter-square" />
        </Col>
      </Row>
      <Row />
    </Container>
  );
}
export default Footer;
