import React from "react";
import styles from "./styles.module.scss";

import NavBar from "../../components/NavBar";
import CardContainer from "./CardContainer";
import ToolsMenu from "./ToolsMenu";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CardContainer />
      <ToolsMenu />
    </div>
  );
};

export default Home;
