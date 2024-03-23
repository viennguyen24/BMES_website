import { Col, Row, Container } from "react-bootstrap";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";

export default function Ranking() {
  //10
  
  const [bachelorDeg, setbachelorDeg] = useState(0)
  const [masterDeg, setMasterDeg] = useState(0);
  const [doctorDeg, setDoctorDeg] = useState(0);
  const [valueCol, setvalueCol] = useState(0);
  const [valueDeg, setvalueDeg] = useState(0);
  const [visible, setIsVisible] = useState(false)
  useEffect(()=>{
    const options = {
      root: null, //chose viewport to be intersection
      rootMargin: "0px", //This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections
      threshold: 1.0, // Intersection observer triggers when 50% of the element is visible
    };
    const observer = new IntersectionObserver((entries) => {
      //Each entry describes an intersection change for one observed
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(document.getElementById("bachelordeg")); //let Insersection Observer observe the element

    return () => observer.disconnect();
  },[])
  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setbachelorDeg((prevBachelorDeg) => {
          if (prevBachelorDeg < 10) {
            return prevBachelorDeg + 1;
          } else {
            return 10;
          }
        });
        setDoctorDeg((prevdoctorDeg) => {
          if (prevdoctorDeg < 3) {
            return prevdoctorDeg + 1;
          } else {
            return 3;
          }
        });
        setMasterDeg((prevmasterDeg) => {
          if (prevmasterDeg < 15) {
            return prevmasterDeg + 1;
          } else {
            return 15;
          }
        });
        setvalueCol((prevvalueCol) => {
          if (prevvalueCol < 22) {
            return prevvalueCol + 1;
          } else {
            return 22;
          }
        });
        setvalueDeg((prevvalueDeg) => {
          if (prevvalueDeg < 11) {
            return prevvalueDeg + 1;
          } else {
            return 11;
          }
        });
      }, 80);

      return () => clearInterval(interval);
    }
  }, [visible]);
  return (

      <Container fluid="lg" style={{marginBlock:"15rem"}}>
        <Row>
          <Col md={6} style={{marginLeft: "auto"}}>
            <motion.div initial={{opacity:0, x:-200}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.5, ease:"easeOut"}}>
            <h1>USF stands at the vanguard of Biomedical Engineering</h1>
            <p>
              The University of South Florida (USF) boasts a robust Biomedical
              Engineering program, evident through compelling statistics that
              underscore its strength and reputation. With a high retention rate
              among enrolled students and a notable graduation rate, USF
              demonstrates its commitment to fostering academic success and
              student advancement within the field of Biomedical Engineering.
            </p>
            <p>
              <i>
              All statistics came from{" "}
              <a href="https://www.collegefactual.com/colleges/university-of-south-florida-main-campus/academic-life/academic-majors/engineering/biomedical-engineering/">
                College Factual
              </a>
              </i>
            </p>
            </motion.div>
          </Col>
          <Col md={6}>
            <Row>
              <Col style={{borderRight:"1px solid black"}}>
              <h3><motion.span transition={{duration:0.2}} animate={{opacity : visible ? 1 : 0}}>{valueCol}nd</motion.span></h3>
                <p>Best Valued college for Biomedical Engineering</p>
                <h3><motion.span transition={{duration:0.2}} animate={{opacity : visible ? 1 : 0}}>{valueDeg}th</motion.span></h3>
                <p>
                  Best Value Doctor’s Degree Colleges for Biomedical Engineering
                </p>
              </Col>
              <Col>
                <h3 id="bachelordeg"><motion.span transition={{duration:0.2}} animate={{opacity : visible ? 1 : 0}}>{bachelorDeg}</motion.span></h3>
                <p>Bachelor's Degrees</p>
                <h3><motion.span transition={{duration:0.2}} animate={{opacity : visible ? 1 : 0}}>{masterDeg}</motion.span></h3>
                <p>Master's Degrees</p>
                <h3><motion.span transition={{duration:0.2}} animate={{opacity : visible ? 1 : 0}}>{doctorDeg}</motion.span></h3>
                <p>Doctor’s Degrees</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  
  );
}
