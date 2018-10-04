import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/assets/css/App.css";
import Header from "./components/Header";
import Index from "./components/Index";
import Footer from "./components/Footer";
import Products from "../src/components/Products";
import Error from "./components/Error";
import Contact from "./components/Contact";
import DataJSON from "./components/ProductsJSON";
import Admin from "./components/Admin";
class App extends Component {
  constructor() {
    super();
    this.state = {
      products: DataJSON.Products
  }}
   
  componentDidMount () {

  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Index} activeStyle={{color: ''}} exact />
            <Route path="/products" render={props => (
              <Products
                {...props}
                products={this.state.products}
              />
            )} 
            activeStyle={{color: ''}} exact />
            <Route path="/contact" component={Contact} activeStyle={{color: ''}} exact />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
