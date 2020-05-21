import React from "react";
import "../backdrop/backdrop.scss";

const Backdrop = (props) =>
  props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null;

export default Backdrop;
