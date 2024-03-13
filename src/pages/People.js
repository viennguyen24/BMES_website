import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Officer from "../components/Officer";
import { Container, Row, Col } from "react-bootstrap";
import { Officers } from "../assets/Texts";

export default function People() {
  return (
    <div id="people">
      <Header />
      <main>
        <h1>Meet our officers</h1>
        <Container>
          <Row>
            {Officers.map((officer, index) =>
              officer["position"] === "Faculty Advisor" ? (
                <Col sm={12} key={index}>
                  <Officer
                    img={officer["img"]}
                    name={officer["name"]}
                    position={officer["position"]}
                    major={officer["major"]}
                    contact={officer["contact"]}
                  />
                </Col>
              ) : (
                <Col lg={4} key={index}>
                  <Officer
                    img={officer["img"]}
                    name={officer["name"]}
                    position={officer["position"]}
                    major={officer["major"]}
                    contact={officer["contact"]}
                  />
                </Col>
              )
            )}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
