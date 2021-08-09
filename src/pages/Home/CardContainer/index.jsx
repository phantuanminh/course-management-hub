import React, { useState } from "react";
import Popup from "reactjs-popup";
import styles from "./styles.module.scss";
import MinimizedCard from "./MinimizedCard";
import ExtendedCard from "./ExtendedCard";
import { getResource } from "../../../utils/api";

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const resource = async () => {
    const response = await getResource();
    const data = await response.json();
    setCards(data.data);
    setIsLoading(false);
  };

  if (isLoading) {
    resource();
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
