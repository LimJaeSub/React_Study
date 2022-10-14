import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  const context = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={context.onLogout}>LogOut</button>
    </Card>
  );
};

export default Home;
