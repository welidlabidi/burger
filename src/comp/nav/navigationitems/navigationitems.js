import React from "react";
import "../navigationitems/navigationitems.scss";

const Navigationitems = (props) => (
  <div className="Navigationitems">
    <li>
      <a href={props.link} className={props.active ? "active" : null}>
        {props.children}
      </a>
    </li>
  </div>
);

export default Navigationitems;
