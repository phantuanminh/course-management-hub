import React from 'react'
import './App.css';

// TODO: Make everything modular (pass info to component by props rather than hard-coding everything)
class CourseCard extends React.Component {
    render() {
        return (
            <div className="courseCard">
                <h2>Course Title</h2>
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
                        <li>Here's one sample TODO item</li>
                        <li>Here's another TODO item</li>
                        <li>And a third!</li>
                    </ul>
                </div>
                <img id="chevron" src="resources/chevron.png" alt="Chevron"/>
            </div>
        );
    }
}

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

export default CourseCard;