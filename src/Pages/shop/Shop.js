import React, { Component } from "react";
import Preview from "../../components/preview/Preview";
import SHOP_DATA from "./data";
import "./shop.scss";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    return (
      <div>
        {this.state.collection.map((item) => {
          return <Preview key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default Shop;
