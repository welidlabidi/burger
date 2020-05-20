import React from "react";

import "../button/button.scss";

const Button = (props) => (
  <button className="Button" onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
