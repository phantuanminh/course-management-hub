import React, { useState } from "react";
import Popup from "reactjs-popup";
import styles from "./styles.module.scss";

import MinimizedCard from "./MinimizedCard";
import ExtendedCard from "./ExtendedCard";

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

  const overlayStyle = { background: "rgba(0,0,0,0.9)" };

  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <Popup
            modal
            trigger={
              <div className={styles.card}>
                <MinimizedCard
                  key={card.course_name}
                  courseName={card.course_name}
                  courseHome={card.course_home}
                  courseForum={card.course_forum}
                  courseMeeting={card.course_meeting}
                  courseToDo={card.course_todo}
                />
              </div>
            }
            {...{ overlayStyle }}
          >
            <ExtendedCard
              key={card.course_name}
              courseName={card.course_name}
              courseHome={card.course_home}
              courseForum={card.course_forum}
              courseMeeting={card.course_meeting}
              courseToDo={card.course_todo}
            />
          </Popup>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
