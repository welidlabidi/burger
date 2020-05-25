import React from "react";

import "../menu/menu.scss";

const Menu = (props) => (
  <div className="DrawerToggle" onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default Menu;
