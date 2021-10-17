import React, { useState } from "react";
import { images } from "../assets/IMAGES";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import loveIcon from "../assets/icons/loveIcon.svg";
import trashIcon from "../assets/icons/trashIcon.svg";

function CardFooterContent() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <Row>
      <Col>
        <Button variant="light" onClick={() => setLikes(likes + 1)}>
          <Image src={loveIcon} thumbnail />
        </Button>
      </Col>
      <Col xs={2}>
        <h1>{likes}</h1>
      </Col>
      <Col xs={2}>
        <h1>{dislikes}</h1>
      </Col>
      <Col>
        <Button variant="light" onClick={() => setDislikes(dislikes + 1)}>
          <Image src={trashIcon} thumbnail />
        </Button>
      </Col>
    </Row>
  );
}

function CardContent(props) {
  const [cardInfo, setCardInfo] = useState(props.card);

  return (
    <Col>
      <Card style={{ width: "250px" }}>
        <Card.Img
          style={{ height: "200px", width: "200px" }}
          variant="top"
          src={cardInfo.source}
        />
        <Card.Body>
          <Card.Title>{cardInfo.description}</Card.Title>
        </Card.Body>
        <CardFooterContent></CardFooterContent>
      </Card>
    </Col>
  );
}

class TableContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableColums: 4,
      cards: images,
      rowNumber: 0,
    };
  }

  render() {
    return (
      <Row xs={2} md={4}>
        {this.state.cards.map((value, index) => {
          return <CardContent key={value.id} card={value} />;
        })}
      </Row>
    );
  }
}

function AxolotlPage() {
  return <TableContent />;
}

export default AxolotlPage;
