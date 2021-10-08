import React from "react";
import { Route } from "react-router-dom";
import Overview from "../../components/collection-overview/Overview";
import Collection from "./collection/collection";

import "./shop.scss";

const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={Overview} />
      <Route path={`${match.path}/:id`} component={Collection} />
    </div>
  );
};

export default Shop;
