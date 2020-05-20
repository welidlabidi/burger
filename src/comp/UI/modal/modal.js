import React from "react";
import "../modal/modal.scss";
import Aux from "../../hoc/aux";
import Backdrop from "../backdrop/backdrop";

const Modal = (props) => (
  <Aux>
    <Backdrop show={props.show} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
      <button onClick={props.modalClosed}>Close</button>
    </div>
  </Aux>
);

export default Modal;
