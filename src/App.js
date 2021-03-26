import React from 'react'
import './App.css';
import CourseCard from './CourseCard';

function App() {

  return (
    <div className="App">

      {/* Header */}
      <div className="header">
        <h1>Course LMS Manager</h1>
      </div>

      <div className="cardFlexContainer">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
      </div> 
    </div>
  );
}

export default App;
