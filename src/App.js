import React from "react";
import HomePage from "./Pages/homepage/HomePage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Header from "./components/header/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
