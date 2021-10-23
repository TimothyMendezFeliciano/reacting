import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import React from "react";

function ItemPreview(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.cardInfo.image} />
      <Card.Body>
        <Card.Title>{props.cardInfo.title}</Card.Title>
        <Card.Subtitle>{props.cardInfo.category}</Card.Subtitle>
        <Card.Subtitle>{props.cardInfo.price}</Card.Subtitle>
        <Card.Text>{props.cardInfo.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function ItemForm(props) {
  const titleInputRef = useRef(props.titleInputRef);
  const priceInputRef = useRef(props.priceInputRef);
  const descriptionInputRef = useRef(props.descriptionInputRef);
  const imageInputRef = useRef(props.imageInputRef);
  const categoryInputRef = useRef(props.categoryInputRef);

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredImage = imageInputRef.current.files[0];
    const enteredCategory = categoryInputRef.current.value;
    const Item = {
      title: enteredTitle,
      price: enteredPrice,
      description: enteredDescription,
      image: URL.createObjectURL(enteredImage),
      category: enteredCategory,
    };

    props.parentCallback(Item);
  }

  function resetHandler(event) {
    event.preventDefault();

    titleInputRef.current.value = null;
    priceInputRef.current.value = null;
    descriptionInputRef.current.value = null;
    imageInputRef.current.value = null;
    categoryInputRef.current.value = null;

    props.parentCallback(null);
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label> Title </Form.Label>
        <Form.Control type="text" placeholder=". . . " ref={titleInputRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label> Price </Form.Label>
        <Form.Control
          type="number"
          step=".01"
          placeholder="0.00"
          ref={priceInputRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label> Description </Form.Label>
        <Form.Control as="textarea" rows={3} ref={descriptionInputRef} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Insert image JPEG or PNG</Form.Label>
        <Form.Control type="file" ref={imageInputRef} />
      </Form.Group>
      <Form.Group controlId="categorySelect" className="mb-3">
        <Form.Label> Select Category </Form.Label>
        <Form.Select aria-label="Default select example" ref={categoryInputRef}>
          <option> </option>
          <option value="Animal">Animal</option>
          <option value="Human">Human</option>
          <option value="Machine">Machine</option>
        </Form.Select>
      </Form.Group>
      <Row>
        <Col>
          <Button
            style={{ marginRight: "4px" }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Col>
        <Col>
          <Button variant="danger" type="reset" onClick={resetHandler}>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

function HomeForm() {
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();
  const imageInputRef = useRef();
  const categoryInputRef = useRef();
  const [previewReady, setPreviewReady] = useState(false);
  const [previewData, setPreviewData] = useState();

  function handleCallback(childFormData) {
    setPreviewReady(!!childFormData);
    setPreviewData(childFormData);
  }

  return (
    <Container fluid>
      <Row>
        {previewReady && (
          <Col>
            <ItemPreview cardInfo={previewData} />
          </Col>
        )}

        <Col>
          <ItemForm
            titleInputRef={titleInputRef}
            priceInputRef={priceInputRef}
            descriptionInputRef={descriptionInputRef}
            imageInputRef={imageInputRef}
            categoryInputRef={categoryInputRef}
            parentCallback={handleCallback}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeForm;
