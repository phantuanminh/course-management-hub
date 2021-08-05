import React from 'react';
import styles from './styles.module.scss'

// import zoom from "../../assets/zoom.png";

// const useStyles = makeStyles({
//   container: {
//     // boxSizing: "border-box",
//     border: "2px solid black",
//     borderRadius: "20px",
//     display: "block",
//     height: "200px",
//     minWidth: "220px",
//     maxWidth: "27%",
//     overflow: "hidden",

//     flexWrap: "wrap",
//     margin: "20px auto",
//   },
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   name: {
//     fontSize: 30,
//     fontWeight: "800",
//     alignContent: "center",
//     justifyContent: "center",
//   },
//   links: {
//     height: "45%",
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   zoomLogo: {
//     width: "100%",
//     height: "auto",
//     margin: "auto",
//   },
// });

const CourseCard = ({ courseName, courseHome, courseForum, courseMeeting, courseToDo }) => {

  return (
    <div className={styles.container}>
      <div className={styles.courseTitle}>
          {courseName}
      </div>
      <div className={styles.courseInfo}>
          <div>
            <li>
              <a className={styles.courseLink} href={courseHome}>
                <i className="fas fa-home" />&nbsp;&nbsp;Course Home
              </a>
            </li>
            <br />
            <li>
              <a className={styles.courseLink} href={courseForum}>
                <i className="far fa-comments" />&nbsp;&nbsp;Forum
                </a>
            </li>
            <br />
            <li>
              <a className={styles.courseLink} href="#">
                <i className="fas fa-ellipsis-h" />&nbsp;&nbsp;Other Resources
              </a>
            </li>
          </div>
        <div className={styles.courseMeeting}>
          <a href={courseMeeting} style={{color: '#309bb2'}}>
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
    // <Grid item xs={4} className={classes.container}>
    //   <Typography className={classes.name}>
    //     {" "}
    //     {/* gutterBottom */}
    //     {courseName}
    //   </Typography>
    //   <Grid container spacing={1} className={classes.links}>
    //     <Grid item xs={8}>
    //       <ul style={{ textAlign: "left", paddingLeft: 10 }}>
    //         <li>
    //           <a href="">Course Home</a>
    //         </li>
    //         <li>
    //           <a href="">Forum</a>
    //         </li>
    //         <li>
    //           <a href="">Other Resources</a>
    //         </li>
    //       </ul>
    //     </Grid>
    //     <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
    //       <img className={classes.zoomLogo} src={zoom} alt="zoom" />
    //     </Grid>
    //   </Grid>
    //   <hr />
    // </Grid>
  );
};

export default CourseCard;
