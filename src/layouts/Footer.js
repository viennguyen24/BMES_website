import {Container, Row, Col, InputGroup, Form} from "react-bootstrap";

export default function Footer() {
  return (
    <footer style={{height:"30dvh", marginTop:"10rem"}}>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <h3>About Us</h3>
            <p>
              The USF BMES is a student run organization. We are funded by the
              USF Student Government and generous donations from our sponsors{" "}.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h3>Get updated on our latest news!</h3>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                placeholder="Enter your email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <h3>Follow us at</h3>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}
