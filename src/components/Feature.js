
import {Container, Col, Row, Image} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from "framer-motion"
export default function Feature(props) {
  const { feature, index } = props;
  return (
   
      <Container key={index} fluid className="card">
      <Row className="justify-content-evenly">
        <Col md={4} >
          <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{ duration: 0.7, ease: "easeInOut" }}>
          <Image src={feature.img} style={{marginBlock:"1rem", border:"1px solid black", width:"100%"}} alt="Feature Image"/>
          </motion.div>
        </Col>
        <Col > 
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}  transition={{ duration: 0.7, ease: "easeInOut" }}>
          <h1>{feature.title}</h1>
          <p>{feature.text}</p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  
  );
}
// boxShadow:" -10px -10px 30px #ffffff, 10px 10px 30px 0 #AEAEC0"