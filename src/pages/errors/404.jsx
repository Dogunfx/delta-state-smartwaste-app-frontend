import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
export default function Page404() {
  const navigator = useNavigate();

  function goHome() {
    navigator(-1);
  }

  return (
    <Result
      status="404"
      title="404 - Page Not found"
      subTitle="Sorry, This page is not available"
      extra={
        <Button type="primary" onClick={goHome}>
          Go Back
        </Button>
      }
    />
  );
}
