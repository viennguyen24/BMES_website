import {Container, Row, Col, Button, Card, Image} from "react-bootstrap";
import Illustration from "../assets/illustrator.svg"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Title>
              Welcome to USF Biomedical Engineering Society
            </Card.Title>
            <Card.Text>
              BMES is a community that is dedicated to serving the needs of
              biomedical engineering professionals. We are your connection to
              the latest research, bioengineering advances in technology, as
              well as the latest trends that impact academia and industry.
            </Card.Text>
            <Button>Learn more</Button>
          </Card>
        </Col>
        <Col>
          <Image
            src={Illustration}
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}
