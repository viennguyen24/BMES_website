import {Container, Row, Col, InputGroup, Form} from "react-bootstrap";
import { FaInstagram, FaDiscord, FaTelegramPlane , FaAlignJustify     } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="align-items-start">
          <Col xs={12} md={4}>
            <h3>About Us</h3>
            <p>
              The USF BMES is a student run organization. We are funded by the
              USF Student Government and generous donations from our sponsors{" "}.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Get updated on our latest news!</h3>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                placeholder="Enter your email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column align-items-center">
            <h3>Follow us at</h3>
            <div className="footer-link d-flex flex-column" >
              <a href="https://www.instagram.com/bmesusf/"> 
                <FaInstagram size={32} style={{ marginRight: '10px' }} />
                <span>Instagram</span>
              </a>
              <a href="https://t.me/joinchat/LVJG4pcZr89hNzdh">
                <FaTelegramPlane  size={32} style={{ marginRight: '10px' }} />
                <span>Telegram</span>
              </a>
              <a href="https://discord.com/invite/dYsxmJTwjJ">
                <FaDiscord size={32}  style={{ marginRight: '10px' }}/>
                <span>Discord</span>
              </a>
              <a href="https://bullsconnect.usf.edu/BMES/club_signup">
                <FaAlignJustify size={32}   style={{ marginRight: '10px' }}/>
                <span>BullsConnect</span>
              </a>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}
