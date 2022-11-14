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
import Trends from "./theme/Adverts";
import Reviews from "./theme/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Charecteristics />
      {/* <Deals /> */}
      <PopularCatg />
      <Banner2 />
      <NewArrival />
      <BestSeller />
      <Trends />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
