import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input, Button, Checkbox, Form } from "antd";
import google_logo from "../images/google-logo.png";
import Header from "./includes/header";
import AppLayout from "./includes/app-layout";
import LogoComponent from "./includes/logo-component";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigator = useNavigate();
  function onFinish(values) {}

  function onFinishFailed(values) {}

  const leftComponent = (
    <div>
      <Header />
      <div className="login-container">
        <div className="title">
          <h3>Get Started</h3>
          <p>Start Managing waste smartly</p>
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
                  <label htmlFor="">Email</label>
                  <Input placeholder="Enter Your Email" />
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
            <div className="extra-row">
              <Row>
                <Col className="extra-left">
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Col>
                <Col className="extra-right">
                  <Form.Item name="forgot">
                    <a href="forgotten-password">Forget Password?</a>
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <Row>
              <Col>
                <div className="form-control">
                  <Button
                    onClick={() => {
                      navigator("./dashboard");
                    }}
                    type="primary"
                    className="myButton"
                  >
                    Login
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <Button type="primary" className="myButton transparent">
                    <img
                      src={google_logo}
                      alt="google logo"
                      className="img-fluid"
                    />
                    Sign in with Google
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
          <div className="text-center">
            <p>
              Don't Have an account? <a href="./sign-up">sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AppLayout
      isReversed={false}
      leftComponent={leftComponent}
      rightComponent={<LogoComponent />}
    />
  );
}
