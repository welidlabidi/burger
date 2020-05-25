import React from "react";
import "../toolbar/toolbar.scss";
import Logo from "../../logo/logo";
import Navigation from "../navigation/navigation";
import Menu from "../menu/menu";

const Toolbar = (props) => (
  <header className="Toolbar">
    <Menu clicked={props.toggle} />
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <Navigation />
    </nav>
  </header>
);

export default Toolbar;
