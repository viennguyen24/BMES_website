import { Nav, Navbar, NavDropdown, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/BMES_logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header() {
  return (
    <header>
      <Navbar expand="sm" role="navigation" fixed>
        <Container fluid="lg">
          <Navbar.Brand href="#home">
            <Image src={logo} roundedCircle style={{ maxWidth: "6.5rem" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" label="navigation" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="/research">
                R&D
              </Nav.Link>
              <Nav.Link as={Link} to="/people">
                Our People
              </Nav.Link>
              <NavDropdown title="Resources">
                <NavDropdown.Item href="https://www.bmes.org/">
                  National BMES Site
                </NavDropdown.Item>
                <NavDropdown.Item href="">Academic Resources</NavDropdown.Item>
                <NavDropdown.Item href="">Sponsors</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Contacts">
                <NavDropdown.Item href="https://www.instagram.com/bmesusf/">
                  Instagram
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://t.me/joinchat/LVJG4pcZr89hNzdh">
                  Telegram
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://discord.com/invite/dYsxmJTwjJ">
                  Discord
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://bullsconnect.usf.edu/BMES/club_signup">
                  BullsConnect
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
