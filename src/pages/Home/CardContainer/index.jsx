import React, { useState } from "react";
import styles from "./styles.module.scss";

import CourseCard from "./CourseCard";

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = sessionStorage.getItem("access_token");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  };

  // Get user's cards
  const getCards = async () => {
    const response = await fetch(
      "http://localhost:5000/api/resource",
      requestOptions
    );

    if (response.status === 201) {
      const data = await response.json();
      setCards(data.data);
      setIsLoading(false);
      console.log(cards);
    }
  };

  if (isLoading) {
    getCards();
  }

  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <div className={styles.card}>
            <CourseCard
              key={card.course_name}
              courseName={card.course_name}
              courseHome={card.course_home}
              courseForum={card.course_forum}
              courseMeeting={card.course_meeting}
              courseToDo={card.course_todo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
