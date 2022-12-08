import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input, Button, Form } from "antd";
import Header from "./includes/header";
import AppLayout from "./includes/app-layout";
import logo from "../images/Delta-Logo.png";
export default function ResetPassword() {
  function onFinish(values) {}

  function onFinishFailed(values) {}

  const rightComponent = (
    <div>
      <Header />
      <div className="login-container">
        <div className="title">
          <div className="text-center">
            <img src={logo} alt="Delta State Logo" width={70} />
            <h3>Reset Password</h3>
            <p>Provide your email address to reset your password</p>
          </div>
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
                  <Button type="primary" className="myButton">
                    Reset Password
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
          <div className="text-center">
            <p>
              Login if you already have an account
              <a href="./"> Login </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  return <AppLayout leftComponent={rightComponent} />;
}
