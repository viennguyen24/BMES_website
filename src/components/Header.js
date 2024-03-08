import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/BMES_logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="BMES logo"></img>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#home">About us</Nav.Link>
            <Nav.Link href="#project">Our projects</Nav.Link>
            <Nav.Link href="#involve">Get involved</Nav.Link>
            <NavDropdown title="Contacts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
