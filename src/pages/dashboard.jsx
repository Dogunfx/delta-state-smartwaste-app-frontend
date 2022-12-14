import React, { useState, useEffect } from "react";
import { Drawer, Button, Card, Skeleton } from "antd";
import { Col, Container, Row, Badge, Alert } from "react-bootstrap";
import {
  UserOutlined,
  SearchOutlined,
  MenuOutlined,
  HomeOutlined,
  WalletOutlined,
  LogoutOutlined,
  DeleteOutlined,
  UserAddOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { APP_NAME } from "../constants";
import logo from "../images/logo.png";
import { useAuth } from "../auth/authContext";
import API_REQUEST, { logout } from "../auth/api";
import { generateToastError } from "../func/func";
import Home from "./home";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const { isAuth, setIsAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const https_response = await API_REQUEST.AXIOS_AUTH_INSTANCE({
          method: "GET",
          url: API_REQUEST.PROFILE_END_POINT,
        });
        setIsAuth(https_response.data);
      } catch (error) {
        setIsAuth(null);
        generateToastError(error);
      }
      setIsLoading(false);
    }
    checkAuth();
  }, [setIsAuth, isLoading]);

  function showDrawer() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }

  const Title = (
    <div className="drawer-title">
      <h3 className="mp-x">Dashboard Menu</h3>
      <p className="mp-x">{APP_NAME}</p>
    </div>
  );

  const DashboardArea = (
    <div className="dashboard-container">
      <Container fluid>
        <div className="dashboard">
          <div className="dashboard-header">
            <Row className="align-items-center">
              <Col sm={{ span: 7 }} className="dashboard-header-brand">
                <img src={logo} alt={APP_NAME} />
              </Col>
              <Col sm={{ span: 5 }} className="">
                <div className="dashboard-header-group ">
                  <div className="drawer-icon">
                    <Button
                      size="large"
                      shape="circle"
                      className="fixButton"
                      onClick={showDrawer}
                      icon={<MenuOutlined />}
                    />
                  </div>
                  <div className="user-name-badge">
                    <Badge pill bg="primary" className="my-badge">
                      <UserOutlined />
                      <span> {isAuth != null ? isAuth.name : ""}</span>
                    </Badge>
                  </div>
                  <div className="dashboard-search">
                    <input type="text" placeholder="Search...." />
                    <SearchOutlined className="my-icon" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="dashboard-main-content">
            <div className="title">
              <div className="title-drawer-opener">
                <Button
                  //   size="large"
                  //   shape="circle"
                  className="fixButton"
                  onClick={showDrawer}
                  icon={<MenuOutlined />}
                />
              </div>
              <div className="title-content">
                <h2 className="mp-x">Dashboard</h2>
                <p className="mp-x">
                  {APP_NAME} your easy approach for smart waste management{" "}
                </p>
                {show ? (
                  <Alert
                    variant="danger"
                    onClose={() => setShow(false)}
                    dismissible
                  >
                    <Alert.Heading>Email Not verified yet</Alert.Heading>
                    <p>
                      Hello{" "}
                      <strong>
                        {isAuth != null ? isAuth.name : ""}
                        {"  "}
                      </strong>
                      we noticed your email address has not been verified,
                      please verified your email to enjoy using
                      {APP_NAME}
                    </p>
                  </Alert>
                ) : null}
              </div>
            </div>
            <div className="body ">
              <div className="card-row ">
                <Row>
                  <Col sm={{ span: 4 }} className="card-container">
                    <Card bordered={false} title="Waste News 1">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellat nobis temporibus porro quae qui quas
                        sequi exercitationem eveniet nemo vitae amet illum
                      </p>
                    </Card>
                  </Col>
                  <Col sm={{ span: 4 }} className="card-container">
                    <Card bordered={false} title="Waste News 2">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem molestias consequatur explicabo eum minima voluptate
                        recusandae modi, asperiores voluptas quasi labore facere
                      </p>
                    </Card>
                  </Col>
                  <Col sm={{ span: 4 }} className="card-container">
                    <Card bordered={false} title="Waste News 3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequuntur incidunt, ullam ex, modi illum ipsa
                        aliquam alias quisquam quo quidem voluptas nemo
                      </p>
                    </Card>
                  </Col>
                </Row>
                <Button className="fixButton v-text">See All</Button>
              </div>
              <div className="wallet-row normal-space">
                <Row>
                  <Col sm={{ span: 7 }}>
                    <div className="balance-col">
                      <div className="balance-header">
                        <p className="mp-x">Your Wallet Balance</p>
                        <Button type="primary" size="small">
                          <DeleteOutlined />
                          Dispose waste
                        </Button>
                      </div>
                      <h1>NGN {isAuth !== null ? isAuth.wallet : "0.0"} </h1>
                    </div>
                  </Col>
                  <Col sm={{ span: 5 }}>
                    <div className="balance-col">
                      <div className="balance-header">
                        <p className="mp-x">Your Recycled Waste Commission</p>
                        <Button
                          type="primary"
                          size="small"
                          className=""
                          icon={<SyncOutlined />}
                        >
                          Recycle
                        </Button>
                      </div>
                      <h1>NGN {isAuth !== null ? isAuth.wallet : "0.0"} </h1>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        <Drawer
          title={Title}
          placement="left"
          headerStyle={{ backgroundColor: "#d3f7fb" }}
          bodyStyle={{ backgroundColor: "#d3f7fb" }}
          onClose={onClose}
          open={open}
        >
          <nav>
            <ul>
              <li>
                <div className="menu-item">
                  <HomeOutlined />
                  <a href="./dashboard">Home</a>
                </div>
              </li>
              <li>
                <div className="menu-item">
                  <SyncOutlined />
                  <a href="./recycle">Recycle Waste</a>
                </div>
              </li>
              <li>
                <div className="menu-item">
                  <DeleteOutlined />
                  <a href="./dispose">DIspose Waste</a>
                </div>
              </li>
              <li>
                <div className="menu-item">
                  <WalletOutlined />
                  <a href="./funding">Fund Wallet</a>
                </div>
              </li>
              <li>
                <div className="menu-item">
                  <UserAddOutlined />
                  <a href="./update-profile">Update Profile</a>
                </div>
              </li>
              <li
                onClick={() => {
                  setIsAuth(null);
                  logout();
                }}
              >
                <div className="menu-item">
                  <LogoutOutlined />
                  <span className="item">Logout</span>
                </div>
              </li>
            </ul>
          </nav>
        </Drawer>
      </Container>
    </div>
  );

  return (
    <Skeleton loading={isLoading}>
      {isAuth != null ? (
        DashboardArea
      ) : (
        <Home
          flashMessage={{
            type: "error",
            message: "Please login ",
            description: "Your Session has expired, please login to continue ",
          }}
        />
      )}
    </Skeleton>
  );
}
