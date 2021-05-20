import React from 'react';
import './App.css';
import CardContainer from './CardContainer';

function App() {

  return (
    <div className="App">

      {/* Header */}
      <div className="header">
        <h1>Course LMS Manager</h1>
      </div>

      {/* Body */}
      <div>
        <CardContainer />
      </div>
      
    </div>
  );
}

export default App;
