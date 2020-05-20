import React from "react";

import burgerLogo from "../../assets/images/original.png";
import "../logo/logo.scss";
const Logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="" />
  </div>
);

export default Logo;
