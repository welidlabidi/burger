import React, { Component } from "react";
import Aux from "../hoc/auxs";
import "./layout.scss";
import Toolbar from "../nav/toolbar/toolbar";
import Sidedraw from "../nav/sidedraw/sidedraw";

class Layout extends Component {
  state = {
    showSide: true,
  };

  CloseSide = () => {
    this.setState({ showSide: false });
  };

  toggle = () => {
    this.setState((prevState) => {
      return { showSide: !prevState.showSide };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.toggle} />
        <Sidedraw open={this.state.showSide} closed={this.CloseSide} />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
