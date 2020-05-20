import React from "react";
import "../toolbar/toolbar.scss";
import Logo from "../../logo/logo";
import Navigation from "../navigation/navigation";

const Toolbar = () => (
  <header className="Toolbar">
    <div>MENU</div>
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <Navigation />
    </nav>
  </header>
);

export default Toolbar;
