import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Officer from "../components/Officer";
import { Container, Row, Col } from "react-bootstrap";
import { Officers } from "../assets/Texts";
import {motion} from "framer-motion"
import "bootstrap/dist/css/bootstrap.min.css";
export default function People() {
  return (
    <div id="people">
      <Header />
      <main>
        <h1 className="text-center mb-5">Meet our officers</h1>
        <Container fluid>
          <Row className="align-items-start">
            {Officers.map((officer, index) =>
              officer["position"] === "Faculty Advisor" ? (
                <Col sm={12} key={index} className="d-flex justify-content-center text-center">
                  <motion.div initial={{opacity:0, x:-200}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.5, ease:"easeInOut"}}>
                  <Officer
                    img={officer["img"]}
                    name={officer["name"]}
                    position={officer["position"]}
                    major={officer["major"]}
                    contact={officer["contact"]}
                  />
                  </motion.div>
                </Col>
              ) : (
                <Col lg={4} key={index}>
                  <motion.div initial={{opacity:0, x:-200}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:index*0.1, ease:"easeInOut"}}>
                  <Officer
                    img={officer["img"]}
                    name={officer["name"]}
                    position={officer["position"]}
                    major={officer["major"]}
                    contact={officer["contact"]}
                  />
                  </motion.div>
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
