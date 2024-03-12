import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <h3>About Us</h3>
            <p>
              The USF BMES is a student run organization. We are funded by the
              USF Student Government and generous donations from our sponsors{" "}
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Get updated on our latest news!</h3>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                placeholder="Enter your email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col xs={12} md={4}>
            <h3>Follow us at</h3>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
