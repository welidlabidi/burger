import React from "react";
import Layout from "./comp/layout/layout";
import "./App.css";
import Builderburger from "./comp/container/burgerbuilder/burgerbuilder";

function App() {
  return (
    <div>
      <Layout>
        <Builderburger />
      </Layout>
    </div>
  );
}

export default App;
