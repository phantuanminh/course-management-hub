import React from 'react';
import './App.css';
import cardInfo from "./course_info";

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


const renderCard = (card, index) => {
  return (
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
            <ul>
                <li>{ card.toDo }</li>
            </ul>
        </div>
        <img id="chevron" src="resources/chevron.png" alt="Chevron"/>
    </div>
  );
};

class FeaturedLink extends React.Component {
    render() {
        return (
            <div className="featuredLink">
                <h3>Zoom</h3>
                <img src="resources/zoom.png" alt="zoom"/>
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
                <a href="youtube.com"><p>Campuswire</p></a>
            </div>
        );
    }
}

export default CardContainer;
