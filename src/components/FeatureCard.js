import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"

export default function FeatureCard(props){
    const {img, title, text,link} = props;
    return(
        <Card className="card_feature" style={{ borderRadius:"20px", width:"100%", marginBlock:"1em", height:"100%"}}>
            <Card.Img variant="top" src = {img} style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", borderRadius:"15px"}}/>
            <Card.Body>
                <Card.Title style={{color:"#6B74D4"}}>
                    {title}
                </Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Card.Link href={link}>
                    <Button variant="primary">Learn more</Button>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}
// box-shadow: ;