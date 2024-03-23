
import {Container, Col, Row, Image} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
export default function Feature(props) {
  const { feature, index } = props;
  return (
    // <Card key={index}>
    //   <Card.Img variant="top" src={feature.img} />
    //   <Card.Title>{feature.title}</Card.Title>
    //   <Card.Text>{feature.text}</Card.Text>
    // </Card>
    <Container key={index} fluid>
      <Row>
        <Col md={4}>
        <Image src={feature.img} style={{marginBlock:"5rem", border:"1px solid black", width:"100%"}} alt="Feature Image"/>
        </Col>
        <Col>
        <h1>{feature.title}</h1>
        <p>{feature.text}</p>
        </Col>
      </Row>
    </Container>
  );
}
// boxShadow:" -10px -10px 30px #ffffff, 10px 10px 30px 0 #AEAEC0"