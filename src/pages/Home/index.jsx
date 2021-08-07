import React from "react";
import styles from "./styles.module.scss";

import NavBar from "../../components/NavBar";
import CardContainer from "../../components/CardContainer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CardContainer />
    </div>
  );
};

export default Home;
