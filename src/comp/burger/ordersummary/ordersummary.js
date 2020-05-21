import React from "react";
import Aux from "../../hoc/auxs";
import Button from "../../UI/button/button";
import "../../UI/button/button.scss";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <p>
        <strong>Total Price:{props.price.toFixed(2)}€</strong>
      </p>
      <Button style={{ color: "green" }} clicked={props.Cancel}>
        CANCEL
      </Button>
      <Button className="Success" clicked={props.Continue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
