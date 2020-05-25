import React, { Component } from "react";
import Aux from "../../hoc/auxs";
import Burger from "../../burger/burger";
import BuildControls from "../../buildcontrols/buildcontrols";
import Modal from "../../UI/modal/modal";
import OrderSummary from "../../../comp/burger/ordersummary/ordersummary";
import axios from "../../../axiosApi";
const INGREDIENT_PRICES = {
  Salad: 0.5,
  Bacon: 1,
  Cheese: 0.4,
  Meat: 1.7,
};

class Builderburger extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
    totalPrice: 2,
    purchaseble: false,
    purschase: false,
  };

  updatePurchaseble = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseble: sum > 0 });
  };

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseble(updatedIngredients);
  };

  deleteIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const pricedudation = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - pricedudation;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseble(updatedIngredients);
  };

  ordered = () => {
    this.setState({ purschase: true });
  };

  orderedCancel = () => {
    this.setState({ purschase: false });
  };

  Continue = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "welid labidi",
        address: {
          street: "wild wild west",
          country: "belgium",
        },
        email: "wela@gmail.com",
      },
    };

    axios
      .post("orders.json", order)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  Cancel = () => {
    alert("Cancelled");
  };

  render() {
    let disabled = {
      ...this.state.ingredients,
    };

    for (let key in disabled) {
      disabled[key] = disabled[key] === 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purschase} modalClosed={this.orderedCancel}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            Continue={this.Continue}
            Cancel={this.Cancel}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredient}
          remove={this.deleteIngredient}
          disabled={disabled}
          price={this.state.totalPrice}
          purchaseble={this.state.purchaseble}
          order={this.ordered}
        />
      </Aux>
    );
  }
}

export default Builderburger;
