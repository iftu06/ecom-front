import React, { useEffect } from "react";

import BestSeller from "../theme/BestSeller";
import NewArrival from "../theme/NewArrival";
import Banner2 from "../theme/Banner2";
import Banner from "../theme/Banner";
import Charecteristics from "../theme/Charecteristics";
import PopularCatg from "../theme/PopularCatg";
import Trends from "../theme/Trends";
import Reviews from "../theme/Reviews";
import { useDispatch } from "react-redux";
import AuthService from "../common/service/auth-service";
import { Account } from "../auth/account";
import { authActions } from "../auth/auth-reducer";

const Home = (props: any) => {
  const authSerive: AuthService = new AuthService();
  const dispatch = useDispatch();

  useEffect(() => {
    authSerive.getUser().then((response: any) => {
      localStorage.setItem("response", JSON.stringify(response));
      let account: Account = {
        name: response["data"]["name"],
        authorities: response["data"]["authorities"],
        activated: true,
        email: "",
      };

      localStorage.setItem("account", JSON.stringify(account));
      dispatch(authActions.login(account));
    });
  }, []);

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
