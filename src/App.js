import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/assets/css/App.css";
import Header from "./components/Header";
import Index from "./components/Index";
import Footer from "./components/Footer";
import Products from "../src/components/Products";
import Error from "./components/Error";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/contact" component={Contact} exact />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
