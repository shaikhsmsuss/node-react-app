import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Dashboard from "./components/Dashboard";
import store from "./store";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/addproduct" component={AddProduct} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
