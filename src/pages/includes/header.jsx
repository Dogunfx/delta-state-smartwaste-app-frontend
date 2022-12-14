import React from "react";
import { APP_NAME } from "../../constants";

export default function Header() {
  return (
    <div className="header">
      <p className="sm-text">* {APP_NAME}</p>
    </div>
  );
}
