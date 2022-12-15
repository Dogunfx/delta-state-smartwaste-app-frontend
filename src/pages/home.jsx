import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input, Button, Checkbox, Form, Alert } from "antd";
import google_logo from "../images/google-logo.png";
import Header from "./includes/header";
import AppLayout from "./includes/app-layout";
import LogoComponent from "./includes/logo-component";
import { toast } from "react-toastify";
import API_REQUEST, { storeToken } from "../auth/api";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateToastError } from "../func/func";

export default function Home({ flashMessage }) {
  const [isMakingRequest, setMakingRequest] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const location = useLocation();
  const gotoRoute = useNavigate();

  async function onFinish(values) {
    setMakingRequest(true);
    try {
      const http_responds = await API_REQUEST.AXIOS_INSTANCE({
        url: API_REQUEST.LOGIN_END_POINT,
        method: "post",
        data: {
          email: userEmail,
          password: userPassword,
        },
      });
      const response = http_responds.data;
      toast.success(response.message);
      toast.info("You will be redirected shortly");
      storeToken(response.token);
      setTimeout(() => {
        if (location.pathname === "/dashboard") {
          gotoRoute(0);
        } else {
          gotoRoute("/dashboard");
          gotoRoute(0);
        }
      }, 4000);
    } catch (error) {
      generateToastError(error);
    }
    setMakingRequest(false);
  }

  function nullFeature() {
    toast.info("Sorry!! this feature is not available yet");
  }
  function onFinishFailed(values) {}

  const leftComponent = (
    <div>
      <Header />
      <div className="login-container">
        <div className="title">
          <h3>Login</h3>
          <p>Start Managing waste smartly</p>
          {flashMessage && (
            <Alert
              message={flashMessage.message}
              description={flashMessage.description}
              type={flashMessage.type}
              showIcon
              closable
            />
          )}
        </div>

        <div className="login-form">
          <Form
            action=""
            method="post"
            autoComplete="off"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Email</label>
                  <Input
                    placeholder="Enter Your Email"
                    type="email"
                    value={userEmail}
                    onChange={(evt) => {
                      setUserEmail(evt.target.value);
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Password</label>
                  <Input.Password
                    placeholder="Input Password"
                    value={userPassword}
                    onChange={(evt) => {
                      setUserPassword(evt.target.value);
                    }}
                  />
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
                    type="primary"
                    className="myButton"
                    onClick={onFinish}
                    loading={isMakingRequest}
                  >
                    Login
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <Button
                    type="primary"
                    className="myButton transparent"
                    onClick={nullFeature}
                  >
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
