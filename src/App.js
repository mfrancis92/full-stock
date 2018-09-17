import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../src/assets/css/App.css";
import Header from './components/Header';
import Index from './components/Index';
import Footer from './components/Footer';
import Products from './components/Products';
import Error from './components/Error';
import Contact from './components/Contact'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
            <Route path="/" Component={Index} exact />
            <Route path="/products" Component={Products} />
            <Route path="/contact" Component={Contact} />
            <Route component={Error} />
        </Switch>  
        <Footer />
      </div>  
      </BrowserRouter>  
      
    );
  }
}

export default App;
