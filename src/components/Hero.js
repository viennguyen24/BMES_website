import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import Illustration from "../assets/illus-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <Container fluid>
      <Row>
        <Col>
            <h1>Biomedical Engineering Society at University of South Florida</h1>
            <p>BMES is a community that is dedicated to serving the needs of
              biomedical engineering professionals. We are your connection to
              the latest research, bioengineering advances in technology, as
              well as the latest trends that impact academia and industry.</p>
        </Col>
        <Col>
          <Image src={Illustration} fluid rounded />
        </Col>
      </Row>
    </Container>
  );
}
