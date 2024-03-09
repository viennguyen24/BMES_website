import Card from "react-bootstrap/Card";

export default function Feature(props) {
  const { title, text, img } = props;
  return (
    <Card>
      <Card.Img variant="top" src={img} fluid rounded />
      <Card.Body>
        <Card.Title className="fw-bolder">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
