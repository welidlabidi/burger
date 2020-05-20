import React from "react";
import "../navigation/navigation.scss";
import Navigationitems from "../navigationitems/navigationitems";

const Navigation = () => (
  <ul className="Navigation">
    <Navigationitems link="/" active>
      Burger
    </Navigationitems>
    <Navigationitems link="/">Checkout</Navigationitems>
  </ul>
);

export default Navigation;
