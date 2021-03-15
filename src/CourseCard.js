import React from 'react';

class CourseCard extends React.Component {
    render() {
      const cardStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        width: "100px",
        height: "100px",
        padding: "10px",
        margin: "auto",
        fontFamily: "Arial"
      };
      return (
        <div>
        <h1 style={cardStyle}>Test</h1>
        </div>
      );
    }
  }

export default CourseCard;