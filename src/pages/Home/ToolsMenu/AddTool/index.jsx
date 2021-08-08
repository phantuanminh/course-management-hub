import React, { useState } from "react";
import styles from "./styles.module.scss";
import Popup from "reactjs-popup";

const AddForm = ({ close }) => {
  const [course_name, setName] = useState("");
  const [course_home, setHome] = useState("");
  const [course_forum, setForum] = useState("");
  const [course_meeting, setMeeting] = useState("");
  const [course_todo, setTodo] = useState("");
  const token = sessionStorage.getItem("access_token");

  const onSubmitClick = async (e) => {
    e.preventDefault();

    // Configure request options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        course_name,
        course_home,
        course_forum,
        course_meeting,
        course_todo,
      }),
    };

    const response = await fetch(
      "http://localhost:5000/api/new_card",
      requestOptions
    );

    // If register success, console log the username and request access token
    if (response.ok) {
      console.log(response.status);
      window.location.reload();
    }
  };

  return (
    <div className={styles.modal}>
      <a className={styles.close} onClick={close}>
        &times;
      </a>
      <div className={styles.header}> New card </div>
      <form className={styles.content}>
        <label>
          Course Name:
          <br />
          <input
            name="course_name"
            value={course_name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Course Home:
          <br />
          <input
            name="course_home"
            value={course_home}
            onChange={(e) => setHome(e.target.value)}
          />
        </label>
        <br />
        <label>
          Course Forum:
          <br />
          <input
            name="course_forum"
            value={course_forum}
            onChange={(e) => setForum(e.target.value)}
          />
        </label>
        <br />
        <label>
          Course Meeting:
          <br />
          <input
            name="course_meeting"
            value={course_meeting}
            onChange={(e) => setMeeting(e.target.value)}
          />
        </label>
        <br />
        <label>
          Course To Do:
          <br />
          <input
            name="course_todo"
            value={course_todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit" onClick={onSubmitClick}>
          Save
        </button>
      </form>
    </div>
  );
};

const AddTool = () => {
  const overlayStyle = { background: "rgba(0,0,0,0.9)" };

  return (
    <div>
      <Popup modal trigger={<button>+</button>} {...{ overlayStyle }}>
        {(close) => <AddForm close={close} />}
      </Popup>
    </div>
  );
};

export default AddTool;
