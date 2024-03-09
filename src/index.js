import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Feature_Content } from "./FeatureText";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <div className="feature" style={{ marginBlock: "4rem" }}>
      <div
        className="feature__text"
        style={{ maxWidth: "70%", textAlign: "center", margin: "0 auto" }}
      >
        <h1>Our mission</h1>
        <p>
          To help inspire and stimulate all students at the University of South
          Florida to achieve their full potential as an engineer or leader,
          improving the quality of life in biomedical engineering related
          aspects, and promote education and professional development.
        </p>
      </div>
      <Container>
        <Row>
          {Feature_Content.map((feature) => {
            return (
              <Col lg style={{ marginBlock: "1rem" }}>
                <Feature
                  title={feature.title}
                  text={feature.text}
                  img={feature.img}
                ></Feature>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  </React.StrictMode>
);
