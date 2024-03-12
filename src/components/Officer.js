import Card from "react-bootstrap/Card"

export default function Officer(props) {
    const { img, name, position, major, contact } = props;
    return (
        <Card>
            <Card.Img src={img} />
            <Card.Body>
                <Card.Title>{name ? name : "Member"}</Card.Title>
                <Card.Text>{position ? position : "Officer"}</Card.Text>
                <Card.Text>{major ? major : "USF student"}</Card.Text>
                <Card.Text>{contact ? contact : "Unavailable for contact"}</Card.Text>
            </Card.Body>
        </Card>
    )
}