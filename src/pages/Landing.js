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
      <div className="colorContainer">
      <article style={{textAlign:"center", marginTop:"2rem", paddingBlock:"3em"}}>
      
      <h1>Our mission</h1>
      <p>
        To help inspire and stimulate all students at the University of
        South Florida to achieve their full potential as an engineer or
        leader, improving the quality of life in biomedical engineering
        related aspects, and promote education and professional development.
      </p>
  </article>
  <article>
    {Features.map((feature, index)=>{
      return(
        <Feature feature={feature} index={index}/>
      )
    })}
  </article>
      </div>
      <Ranking />
      <Footer />
    </div>
  );
}
