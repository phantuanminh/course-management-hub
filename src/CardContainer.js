import React from 'react';
import Draggable from 'react-draggable';
import Popup from 'reactjs-popup';

import './App.css';
import 'reactjs-popup/dist/index.css'
import cardInfo from "./course_info";

//// TODO: Break this file into even smaller files:
//// including each course card, the pop-up whenever we want to edit anything.
// TODO: Continue making things modular
// TODO: Decide the structure of the json file

class CardContainer extends React.Component {
    render() {
        return (
          <div className="cardFlexContainer">
              {cardInfo.map(renderCard)}
          </div>
        );
    }
}

class FeaturedLink extends React.Component {
    render() {
        return (
            <div className="featuredLink">
                <h3>Zoom</h3>
                <a href="/">
                  <img  src="resources/zoom.png" alt="zoom"/>
                </a>
                <p>MWF 3:00</p>
            </div>
        );
    }
}

class LinkRow extends React.Component {
    render() {
        return (
            <div className="linkRow">
              <img src="resources/favicon.png" alt="logo"/>
              <p>
                <a href="/"> Campuswire </a>
                &nbsp;
                <button class="chevronButton">
                  <i class='fas fa-edit'></i>
                </button>
              </p>
            </div>
        );
    }
}

const renderCard = (card, index) => {
  return (
    <Draggable>
    <div className="courseCard">
        <h2>{card.courseName}</h2>
        <hr/>

        <div className="linksWrapper">
            <div className="linksGroup">
                <LinkRow/>
                <hr/>
                <LinkRow/>
                <hr/>
                <LinkRow/>
            </div>
            <FeaturedLink/>
        </div>

        <div className="infoText">
          <form>
            <input type="checkbox" id= {card.courseName} name= {card.courseName} value= {card.courseName} />
            <label for={card.courseName}> 	&nbsp;	&nbsp; {card.toDo} </label><br/>
          </form>
        </div>

        <Popup modal trigger={<button className="chevronButton"><img id="chevron" src="resources/chevron.png" alt="Chevron"/></button>}>
          {renderExtendCard(card)}
        </Popup>

    </div>
    </Draggable>
  );
};

const renderExtendCard = (card) => {
  return (
    <div className="extendedCourseCard">
        <h2>{card.courseName}</h2>
        <hr/>
        <p>{card.toDo}</p>
    </div>
  );
};

export default CardContainer;
