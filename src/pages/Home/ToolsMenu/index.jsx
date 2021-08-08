import React from "react";
import styles from "./styles.module.scss";
import AddTool from "./AddTool";

const ToolsMenu = () => {
  return (
    <div className={styles.toolsMenu}>
      <AddTool />
    </div>
  );
};

export default ToolsMenu;
