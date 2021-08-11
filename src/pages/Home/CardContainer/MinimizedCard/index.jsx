import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const MinimizedCard = ({
  courseName,
  courseHome,
  courseForum,
  courseMeeting,
  courseToDo,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.courseTitle}>{courseName}</div>
      <div className={styles.courseInfo}>
        <div>
          <li>
            <i className={clsx("fas fa-home", styles.courseIcon)} />
            <a className={styles.courseLink} href={courseHome}>
              Course Home
            </a>
          </li>
          <br />
          <li>
            <i className={clsx("far fa-comments", styles.courseIcon)} />
            <a className={styles.courseLink} href={courseForum}>
              Forum
            </a>
          </li>
          <br />
          <li>
            <i className={clsx("fas fa-ellipsis-h", styles.courseIcon)} />
            <a className={styles.courseLink} href="#">
              Other Resources
            </a>
          </li>
          <br />
        </div>
        <div className={styles.courseMeeting}>
          <a href={courseMeeting} style={{ color: "#309bb2" }}>
            <i className="fas fa-video" />
          </a>
        </div>
      </div>
      <hr />
      <div className={styles.courseToDo}>
        <h4>To do:</h4>
        {courseToDo}
      </div>
    </div>
  );
};

export default MinimizedCard;
