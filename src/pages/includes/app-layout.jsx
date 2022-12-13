import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer } from "react-toastify";

export default function AppLayout({
  leftComponent,
  rightComponent,
  isReversed,
}) {
  return (
    <div>
      <Container fluid>
        <Row className="my-row">
          <Col
            sm={{ span: 6, order: "first" }}
            xs={{ order: "last" }}
            style={{ padding: "0px" }}
          >
            {leftComponent}
          </Col>

          <Col
            style={{ padding: "0px" }}
            xs={{ order: isReversed ? "last" : "first" }}
            sm={{ span: 6 }}
          >
            {rightComponent}
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}
