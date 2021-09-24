import React from "react";
import HomePage from "./Pages/homepage/HomePage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./Pages/shop/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;