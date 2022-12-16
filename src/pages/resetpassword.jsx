import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input, Button, Form } from "antd";
import Header from "./includes/header";
import AppLayout from "./includes/app-layout";
import logo from "../images/Delta-Logo.png";
import API_REQUEST from "../auth/api";
import { generateToastError, showSuccessToast } from "../func/func";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function ResetPassword() {
  const [verificationInfo, setVerificationInfo] = useState({});
  const [hasSent, setHasSentCode] = useState(false);
  const [isLoading, updateIsLoading] = useState(false);
  const gotoRoute = useNavigate();
  function onFinish(values) {}

  async function sendCode() {
    updateIsLoading(true);
    try {
      const https_response = await API_REQUEST.AXIOS_INSTANCE({
        method: "POST",
        url: API_REQUEST.GENERATE_OTP_END_POINT,
        data: verificationInfo,
      });
      showSuccessToast(https_response.data);
      setHasSentCode(true);
    } catch (error) {
      generateToastError(error);
    }
    updateIsLoading(false);
  }

  function onFinishFailed(values) {}
  async function updatePassword() {
    updateIsLoading(true);
    try {
      const https_response = await API_REQUEST.AXIOS_INSTANCE({
        method: "POST",
        url: API_REQUEST.UPDATE_PASSWORD_END_POINT,
        data: verificationInfo,
      });
      showSuccessToast(https_response.data);
      toast.info("You will be redirected shortly");
      setTimeout(() => {
        gotoRoute("/");
        gotoRoute(0);
      }, 4000);
    } catch (error) {
      generateToastError(error);
    }
    updateIsLoading(false);
  }

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
          {hasSent ? (
            <Form action="" method="post" autoComplete="off">
              <Row>
                <Col>
                  <div className="form-control">
                    <label htmlFor="">Enter Code</label>
                    <Input
                      placeholder="Enter Code"
                      type="text"
                      name="otp"
                      value={verificationInfo.otp}
                      onChange={(evt) => {
                        setVerificationInfo({
                          ...verificationInfo,
                          otp: evt.target.value,
                        });
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-control">
                    <label htmlFor="">Enter New Password</label>
                    <Input.Password
                      placeholder="New Password"
                      name="password"
                      value={verificationInfo.password}
                      onChange={(evt) => {
                        setVerificationInfo({
                          ...verificationInfo,
                          password: evt.target.value,
                        });
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-control">
                    <Button
                      type="link"
                      className="myButton"
                      onClick={sendCode}
                      loading={isLoading}
                    >
                      Resend Code
                    </Button>
                  </div>
                </Col>
                <Col>
                  <div className="form-control">
                    <Button
                      type="primary"
                      className="myButton"
                      loading={isLoading}
                      onClick={updatePassword}
                    >
                      Update Password
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          ) : (
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
                    <Input
                      placeholder="Enter Your Email"
                      type="email"
                      value={verificationInfo.email}
                      onChange={(evt) => {
                        setVerificationInfo({
                          ...verificationInfo,
                          email: evt.target.value,
                        });
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-control">
                    <Button
                      loading={isLoading}
                      type="primary"
                      className="myButton"
                      onClick={sendCode}
                    >
                      Reset Password
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          )}

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
