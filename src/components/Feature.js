import { Container, Row, Col, Card } from "react-bootstrap";
export default function Feature(props) {
  const { information } = props;
  console.log(information);
  return (
    <div id="feature" style={{ marginBlock: "4rem" }}>
      <div
        className="feature__text"
        style={{ maxWidth: "70%", textAlign: "center", margin: "0 auto" }}
      >
        <h1>Our mission</h1>
        <p>
          To help inspire and stimulate all students at the University of South
          Florida to achieve their full potential as an engineer or leader,
          improving the quality of life in biomedical engineering related
          aspects, and promote education and professional development.
        </p>
      </div>
      <Container>
        <Row>
          {information.map((feature, index) => {
            return (
              <Col lg style={{ marginBlock: "1rem" }} key={index}>
                <Card>
                  <Card.Img variant="top" src={feature.img} />
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
