import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/BMES_logo.jpg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header() {
  return (
    <header>
      <Navbar expand="sm" role="navigation">
        <Container fluid="lg">
          <Navbar.Brand href="#home">
            <Image src={logo} roundedCircle style={{ maxWidth: "6.5rem" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" label="navigation" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">About us</Nav.Link>
              <Nav.Link href="#project">Our projects</Nav.Link>
              <Nav.Link href="#officers">Officers</Nav.Link>
              <Nav.Link href="#resource">Resources</Nav.Link>
              <NavDropdown title="Contacts">
                <NavDropdown.Item>Instagram</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>LinkedIn</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Discord</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>BullsConnect</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
