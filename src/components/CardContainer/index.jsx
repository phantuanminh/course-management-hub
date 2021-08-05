import React from "react";
import styles from './styles.module.scss';

import CourseCard from "./CourseCard";
import cardInfo from "./course_info";

const CardContainer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
         {cardInfo.map((card) => (
           <div className={styles.card}>
              <CourseCard
                key={card.courseName}
                courseName={card.courseName}
                courseHome={card.courseHome}
                courseForum={card.courseForum}
                courseMeeting={card.courseMeeting}
                courseToDo={card.courseToDo}
              />
            </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
