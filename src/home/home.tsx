import React from "react";

import BestSeller from "../theme/BestSeller";
import NewArrival from "../theme/NewArrival";
import Banner2 from "../theme/Banner2";
import Banner from "../theme/Banner";
import Charecteristics from "../theme/Charecteristics";
import PopularCatg from "../theme/PopularCatg";
import Trends from "../theme/Trends";
import Reviews from "../theme/Reviews";

const Home = (props: any) => {
  return (
    <React.Fragment>
      <Banner />
      <Charecteristics />
      <PopularCatg />
      <Banner2 />
      <NewArrival />
      <BestSeller />
      <Trends />
      <Reviews />
    </React.Fragment>
  );
};

export default Home;
