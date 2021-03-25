import React from 'react';
import "./CourseCard.css";
import { Container, Card, CardColumns, Button, Row, Col } from "react-bootstrap";

//// TODO: Convert this to a JSON file and find a way to parse JSON -> Easier to
//// communicate with
// FIXME: contenteditable is not really practical. Can we change change and save
// the text in front-end?
const cardInfo = [
  { courseName: "CS126", description: "Busy"},
  { courseName: "CS173", description: "Chill"},
  { courseName: "MATH241", description: "Sed"},
  { courseName: "MUS130", description: "Fun"}
]

// Card border can be customized using CSS.
// Work on CSS (.customCard), then add className="customCard" below
// Reference: https://react-bootstrap.github.io/getting-started/introduction/
// TODO: If you haven't, do npm install react-bootstrap bootstrap to run this!

const renderCard = (card, index) => {
  return (
    <Card className='card' border='dark' style={{ width: '16rem' }} key={index}>
      <Card.Body>
        <Card.Title as="h3" contenteditable="true"> {card.courseName} </Card.Title>
        <Card.Text>
          <Row>
            <Col xs="8">
              <Row> Course Home </Row>
              <Row> CampusWire </Row>
              <Row> PrairieLearn </Row>
            </Col>
            <Col> Zoom </Col>
          </Row>
          <hr/>
          <Row contenteditable="true">
            {card.description} (Editable)
          </Row>
        </Card.Text>
        <Button variant="light">Expand</Button>
      </Card.Body>
    </Card>
  );
};

class CourseCard extends React.Component {
  render() {
    return (
      <div className="grid">
        <Container>
          <CardColumns>
          {cardInfo.map(renderCard)}
          </CardColumns>
        </Container>
      </div>
    );
  }
}

export default CourseCard;
