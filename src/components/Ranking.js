import { Col, Row, Container } from "react-bootstrap";

export default function Ranking() {
  return (
    <div id="ranking">
      <Container>
        <Row>
          <Col md={6}>
            <h1>Bringing USF To the Forefront of BME</h1>
            <p>
              The University of South Florida (USF) boasts a robust Biomedical
              Engineering program, evident through compelling statistics that
              underscore its strength and reputation. With a high retention rate
              among enrolled students and a notable graduation rate, USF
              demonstrates its commitment to fostering academic success and
              student advancement within the field of Biomedical Engineering.
            </p>
            <p>
              All statistics came from{" "}
              <a href="https://www.collegefactual.com/colleges/university-of-south-florida-main-campus/academic-life/academic-majors/engineering/biomedical-engineering/">
                College Factual
              </a>
            </p>
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <h3>22nd</h3>
                <p>Best valued college for Biomedical Engineering</p>
                <h3>11th</h3>
                <p>
                  Best Value Doctor’s Degree Colleges for Biomedical Engineering
                </p>
              </Col>
              <Col>
                <h3>10</h3>
                <p>Bachelor's Degrees</p>
                <h3>15</h3>
                <p>Master's Degrees</p>
                <h3>3</h3>
                <p>Doctor’s Degrees</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
