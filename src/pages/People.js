import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Officer from "../components/Officer";
import { Container, Row, Col } from "react-bootstrap"

export default function People(props) {
    const { officers } = props;
    return (
        <div id="people">
            <Header />
            <main>
                <h1>Meet our officers</h1>
                <Container>
                    <Row md={3}>
                        {officers.map(officer => {
                            return (
                                <Col>
                                    <Officer img={officer["img"]} name={officer["name"]}
                                        position={officer["position"]} major={officer["major"]}
                                        contact={officer["contact"]} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </main>
            <Footer />
        </div>
    )
}