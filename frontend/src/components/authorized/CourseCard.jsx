import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import zoom from "../../assets/zoom.png";

const useStyles = makeStyles({
  container: {
    // boxSizing: "border-box",
    border: "2px solid black",
    borderRadius: "20px",
    display: "block",
    height: "200px",
    minWidth: "220px",
    maxWidth: "27%",
    overflow: "hidden",

    flexWrap: "wrap",
    margin: "20px auto",
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  name: {
    fontSize: 30,
    fontWeight: "800",
    alignContent: "center",
    justifyContent: "center",
  },
  links: {
    height: "45%",
  },
  pos: {
    marginBottom: 12,
  },
  zoomLogo: {
    width: "100%",
    height: "auto",
    margin: "auto",
  },
});

const CourseCard = ({ courseName, toDo }) => {
  const classes = useStyles();

  return (
    <Grid item xs={4} className={classes.container}>
      <Typography className={classes.name}>
        {" "}
        {/* gutterBottom */}
        {courseName}
      </Typography>
      <Grid container spacing={1} className={classes.links}>
        <Grid item xs={8}>
          <ul style={{ textAlign: "left", paddingLeft: 10 }}>
            <li>
              <a href="">Course Home</a>
            </li>
            <li>
              <a href="">Forum</a>
            </li>
            <li>
              <a href="">Other Resources</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <img className={classes.zoomLogo} src={zoom} alt="zoom" />
        </Grid>
      </Grid>
      <hr />
    </Grid>
  );
};

export default CourseCard;
