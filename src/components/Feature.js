import Card from "react-bootstrap/Card";

export default function Feature(props) {
  const { title, text, img } = props;
  return (
    <Card
      style={{
        boxShadow: "2.5px 2px 6.5px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Card.Img variant="top" src={img} fluid rounded />
      <Card.Body>
        <Card.Title className="fw-bolder">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
