import React from "react";
import Logo from "../../logo/logo";
import Navigation from "../navigation/navigation";
import "../sidedraw/sidedraw.scss";
import Backdrop from "../../UI/backdrop/backdrop";
import Aux from "../../../hoc/aux";

const Sidedraw = (props) => {
  let attected = ["open", "close"];

  if (props.open) {
    attected = "open";
  } else {
    attected = "close";
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className="Sidedraw">
        <div className="Logo">
          <Logo height="35px" />
        </div>
        <nav>
          <Navigation />
        </nav>
      </div>
    </Aux>
  );
};

export default Sidedraw;
