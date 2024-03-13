import { Card } from "react-bootstrap";

export default function Feature(props) {
  const { feature, index } = props;
  return (
    <Card key={index}>
      <Card.Img variant="top" src={feature.img} />
      <Card.Title>{feature.title}</Card.Title>
      <Card.Text>{feature.text}</Card.Text>
    </Card>
  );
}
