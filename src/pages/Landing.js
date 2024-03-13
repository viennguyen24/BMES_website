import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Ranking from "../components/Ranking";
import { Features } from "../assets/Texts";
import { Container, Row, Col } from "react-bootstrap";

export default function Landing() {
  return (
    <div id="landing">
      <Header />
      <Hero />
      <article>
        <Container>
          <h1>Our mission</h1>
          <p>
            To help inspire and stimulate all students at the University of
            South Florida to achieve their full potential as an engineer or
            leader, improving the quality of life in biomedical engineering
            related aspects, and promote education and professional development.
          </p>
          <Row md={3}>
            {Features.map((feature, index) => {
              return (
                <Col>
                  <Feature feature={feature} key={index} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </article>
      <Ranking />
      <Footer />
    </div>
  );
}