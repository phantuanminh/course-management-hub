import React from "react";
import styles from "./styles.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navTitle}>
        <h1 className={styles.navText}>Course Management Hub</h1>
      </div>
      <a className={styles.navItem} href="/logout">
        <i className="far fa-user-circle" />
      </a>
      <a className={styles.navItem} href="/logout">
        <i className="far fa-calendar-alt" />
      </a>
    </nav>
  );
};

export default NavBar;
