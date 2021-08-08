import React from "react";
import styles from "./styles.module.scss";

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
            <a className={styles.courseLink} href={courseHome}>
              <i className="fas fa-home" />
              &nbsp;&nbsp;Course Home
            </a>
          </li>
          <br />
          <li>
            <a className={styles.courseLink} href={courseForum}>
              <i className="far fa-comments" />
              &nbsp;&nbsp;Forum
            </a>
          </li>
          <br />
          <li>
            <a className={styles.courseLink} href="#">
              <i className="fas fa-ellipsis-h" />
              &nbsp;&nbsp;Other Resources
            </a>
          </li>
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
