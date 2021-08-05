import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@material-ui/core";
import CourseCard from "./CourseCard";
import cardInfo from "./course_info";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(1, 3, 0),
  },
}));

const CardContainer = () => {
  const classes = useStyles();

  return (
    <div style={{ height: "auto", maxWidth: "70vw", margin: "0 auto" }}>
      <Grid container className={classes.container} justify="space-between">
        {cardInfo.map((card) => (
          <CourseCard
            key={card.courseName}
            courseName={card.courseName}
            toDo={card.toDo}
          />
        ))}
      </Grid>
    </div>
  );
};

export default CardContainer;
