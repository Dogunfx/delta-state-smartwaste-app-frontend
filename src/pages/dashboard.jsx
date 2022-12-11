import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Col, Container, Row, Badge } from "react-bootstrap";
import { UserOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { APP_NAME } from "../constants";
import logo from "../images/logo.png";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  function showDrawer() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }
  return (
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
                    <Badge pill bg="secondary" className="my-badge">
                      <UserOutlined />
                      <span> DogunFX</span>
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
              </div>
            </div>
          </div>
        </div>

        <Drawer
          title="Dashboard Menu"
          placement="left"
          headerStyle={{ backgroundColor: "#d3f7fb" }}
          bodyStyle={{ backgroundColor: "#d3f7fb" }}
          onClose={onClose}
          open={open}
        >
          <nav>
            <ul>
              <li>
                <a href="./dashboard">Home</a>
              </li>
              <li>
                <a href="./recycle">Recycle Waste</a>
              </li>
              <li>
                <a href="./dispose">DIspose Waste</a>
              </li>
              <li>
                <a href="./funding">Fund Wallet</a>
              </li>
              <li>
                <a href="./update-profile">Update Profile</a>
              </li>
              <li>
                <a href="./">Logout</a>
              </li>
            </ul>
          </nav>
        </Drawer>
      </Container>
    </div>
  );
}
