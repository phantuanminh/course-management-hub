import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navTitle}>
        <h1 className={styles.navText}>Course Management Hub</h1>
      </div>
      <Link className={styles.navItem} to="/logout">
        <i className="far fa-user-circle" />
      </Link>
      <Link className={styles.navItem} to="/logout">
        <i className="far fa-calendar-alt" />
      </Link>
    </nav>
  );
};

export default NavBar;
