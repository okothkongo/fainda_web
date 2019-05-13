import React from "react";
import { Container, Row } from "reactstrap";
import Adverstiments from "./Adverstiments";

function Homepage(props) {
  return (
    <Container>
      <h1 className="text-center">Welcome to Fainda</h1>
      <p className="text-center">
        We provide platform to seller and buy your desire
      </p>
      <Row>
        <Adverstiments />
      </Row>
    </Container>
  );
}

export default Homepage;
