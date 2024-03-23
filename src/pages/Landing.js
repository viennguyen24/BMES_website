import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Ranking from "../components/Ranking";
import { Features, Featured_Events } from "../assets/Texts";
import { Container, Row, Col } from "react-bootstrap";
import FeatureCard from "../components/FeatureCard";
import {motion} from "framer-motion"
import "bootstrap/dist/css/bootstrap.min.css";


export default function Landing() {
  // 10
  
  return (
    <div id="landing">
      <Header />
      <Hero />
    
      <article className="colorContainer" style={{paddingBlock:"4rem"}}>
      
      <h1 className="text-center">Our mission</h1>
      <p className="text-center">
        To help inspire and stimulate all students at the University of
        South Florida to achieve their full potential as an engineer or
        leader, improving the quality of life in biomedical engineering
        related aspects, and promote education and professional development.
      </p>

    {Features.map((feature, index)=>{
      return(     
           <Feature feature={feature} index={index}/>
      )
    })}
  </article>
   
      <Ranking />
      <article>
      <motion.div initial={{opacity:0, y:200}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, ease:"easeInOut"}}>
      <h1 className="text-center">
          Get involved with BMES!
        </h1>
        <p className="text-center">
        From engaging workshops to exciting socials, BMES provides an inclusive platform for students and enthusiasts alike to explore the multifaceted world of biomedical engineering. Our events are designed to inspire, educate, and empower individuals to make a meaningful impact in healthcare technology and beyond.
        </p>
      </motion.div>
      <Container fluid className="d-flex flex-column align-items-center">
        <Row className="justify-content-evenly align-items-start">
          {Featured_Events.map((feature_event, index)=>{
            return(
              <Col sm={12} lg={4} style={{height:"100%"}} >
                <motion.div initial={{opacity:0, x:-200}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:index*0.5, ease:"easeInOut"}}>
                <FeatureCard img={feature_event.img} title = {feature_event.title} text={feature_event.text} link = {feature_event.link}/>
                </motion.div>
              </Col>
            )
          })}
        </Row>
      </Container>
      </article>
      <Footer />
    </div>
  );
}
