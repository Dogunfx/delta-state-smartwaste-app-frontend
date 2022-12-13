import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input, Button, Form } from "antd";
import Header from "./includes/header";
import LogoComponent from "./includes/logo-component";
import AppLayout from "./includes/app-layout";
import API_REQUEST from "../auth/api";
import { generateToastError } from "../func/func";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const gotoRoute = useNavigate();
  async function onFinish(values) {
    setIsLoading(true);
    try {
      const http_responds = await API_REQUEST.AXIOS_INSTANCE({
        method: "POST",
        url: API_REQUEST.REGISTER_END_POINT,
        data: {
          email: userInfo.email,
          password: userInfo.password,
          name: userInfo.name,
          phone: userInfo.phone,
          c_password: userInfo.c_password,
        },
      });
      const response = http_responds.data;
      toast.success(response.message);
      toast.info("You will be redirected shortly");
      setTimeout(() => {
        gotoRoute("/");
      }, 2000);
    } catch (error) {
      generateToastError(error);
    }
    setIsLoading(false);
  }

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
            onFinishFailed={onFinishFailed}
          >
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Name</label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    value={userInfo.name}
                    onChange={(evt) => {
                      setUserInfo({ ...userInfo, name: evt.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={userInfo.email}
                    onChange={(evt) => {
                      setUserInfo({ ...userInfo, email: evt.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Phone</label>
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Enter Your phone number (+234 )"
                    value={userInfo.phone}
                    onChange={(evt) => {
                      setUserInfo({ ...userInfo, phone: evt.target.value });
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
                    name="password"
                    placeholder="Input Password"
                    value={userInfo.password}
                    onChange={(evt) => {
                      setUserInfo({ ...userInfo, password: evt.target.value });
                    }}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label htmlFor="">Re-Enter Password</label>
                  <Input.Password
                    name="c_password"
                    placeholder="Confirm Password"
                    value={userInfo.c_password}
                    onChange={(evt) => {
                      setUserInfo({
                        ...userInfo,
                        c_password: evt.target.value,
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
                    onClick={onFinish}
                  >
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
