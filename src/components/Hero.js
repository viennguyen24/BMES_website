import { Container, Row, Col, Image } from "react-bootstrap";
import Illustration from "../assets/illus-removebg-preview.png";
import {motion} from "framer-motion"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <Container fluid="lg">
      <Row className="justify-content-evenly">
        <Col className="d-flex flex-column justify-content-center align-items-center" lg={7}> 
            <motion.div  initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 0.7, ease:"easeInOut"}} viewport={{once:true}}>
            <h1>Biomedical Engineering Society at University of South Florida</h1>
            </motion.div>
            <p>BMES is a community that is dedicated to serving the needs of
              biomedical engineering professionals. We are your connection to
              the latest research, bioengineering advances in technology, as
              well as the latest trends that impact academia and industry.</p>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Image src={Illustration} fluid rounded />
        </Col>
      </Row>
    </Container>
  );
}
