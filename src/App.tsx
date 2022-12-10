import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./theme/Header";
import Footer from "./theme/Footer";
import Banner from "./theme/Banner";
import Charecteristics from "./theme/Charecteristics";
import Deals from "./theme/Deals";
import PopularCatg from "./theme/PopularCatg";
import Banner2 from "./theme/Banner2";
import NewArrival from "./theme/NewArrival";
import BestSeller from "./theme/BestSeller";
import Adverts from "./theme/Adverts";
import "bootstrap/dist/css/bootstrap.min.css";

import Trends from "./theme/Adverts";
import Reviews from "./theme/Reviews";
import Home from "./home/home";
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./menu/menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
