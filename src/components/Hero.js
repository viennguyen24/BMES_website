import Button from "react-bootstrap/Button";
import Illustration from "../assets/illustrator.svg";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Hero() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <Card
            className="d-flex align-items-center"
            border="none"
            style={{ border: "none" }}
          >
            <Card.Title className="fw-bolder text-center">
              Welcome to USF Biomedical Engineering Society
            </Card.Title>
            <Card.Text className="text-center">
              BMES is a community that is dedicated to serving the needs of
              biomedical engineering professionals. We are your connection to
              the latest research, bioengineering advances in technology, as
              well as the latest trends that impact academia and industry.
            </Card.Text>
            <Button>Learn more</Button>
          </Card>
        </Col>
        <Col className="d-none d-md-block">
          <Image
            src={Illustration}
            fluid
            rounded
            className="hero-image shadow-sm"
          />
        </Col>
      </Row>
    </Container>
  );
}
