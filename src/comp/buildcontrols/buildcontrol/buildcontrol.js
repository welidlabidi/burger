import React from "react";
import "../buildcontrol/buildcontrol.scss";

const Buildcontrol = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button disabled={props.disabled} onClick={props.remove} className="Less">
      Less
    </button>
    <button onClick={props.add} className="More">
      More
    </button>
  </div>
);

export default Buildcontrol;
