import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input, Button, Form } from "antd";
import Header from "./includes/header";
import LogoComponent from "./includes/logo-component";
import AppLayout from "./includes/app-layout";

export default function Register() {
  function onFinish(values) {}

  function onFinishFailed(values) {}

  const rightComponent = (
    <div>
      <Header />

      <div className="login-container">
        <div className="title">
          <h3>Register for Smart Waste</h3>
          <p>
            You are few steps away from your one stop hub of waste management
          </p>
          <p className="text-center login-text">
            if you already have an account <a href="./">Login here</a>
          </p>
        </div>

        <div className="login-form">
          <Form
            action=""
            method="post"
            autoComplete="off"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Name</label>
                  <Input type="text" placeholder="Enter Your Name" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Email</label>
                  <Input type="email" placeholder="Enter Your Email" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Phone</label>
                  <Input
                    type="text"
                    placeholder="Enter Your phone number (+234 )"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Password</label>
                  <Input.Password placeholder="Input Password" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Re-Enter Password</label>
                  <Input.Password placeholder="Confirm Password" />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="form-control">
                  <Button type="primary" className="myButton">
                    Register Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );

  return (
    <AppLayout
      isReversed={true}
      rightComponent={rightComponent}
      leftComponent={<LogoComponent />}
    />
  );
}
