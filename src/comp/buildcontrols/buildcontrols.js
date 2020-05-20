import React from "react";

import "../buildcontrols/buildcontrols.scss";
import Buildcontrol from "../buildcontrols/buildcontrol/buildcontrol";

const controls = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "Meat" },
];

const BuildControls = (props) => (
  <div className="buildcontrols">
    <p>
      Current price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <Buildcontrol
        key={ctrl.label}
        label={ctrl.label}
        add={() => props.add(ctrl.type)}
        remove={() => props.remove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className="OrderButton"
      disabled={!props.purchaseble}
      onClick={props.order}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
