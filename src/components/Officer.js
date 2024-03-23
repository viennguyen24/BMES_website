import Card from "react-bootstrap/Card";

export default function Officer(props) {
  const { img, name, position, major, contact, key } = props;
  return (
    <Card key={key} className="officer d-flex flex-column mx-4 px-3 py-1">
      <Card.Img src={img} alt={name} style={{maxWidth:"20em", marginBlock:"2rem"}} className="align-self-center"/>
      <Card.Body>
        <Card.Title>{name ? name : "Member"}</Card.Title>
        <Card.Text>{position ? position : "Officer"}</Card.Text>
        <Card.Text>{major ? major : "USF student"}</Card.Text>
        <Card.Text>{contact ? contact : "Unavailable for contact"}</Card.Text>
      </Card.Body>
    </Card>
  );
}
