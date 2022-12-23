import {
  faMagnifyingGlassChart,
  faPersonChalkboard,
  faRefresh,
  faUserPen,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navBar " variant="dark">
      <Container>
        <Navbar.Brand>Flores Isabelita</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={1}>
            <Link to="/asistencia" className="link">
              <FontAwesomeIcon icon={faPersonChalkboard} /> Asistencia
            </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/actual" className="link">
                <FontAwesomeIcon icon={faMagnifyingGlassChart} /> Actual
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={3}>
              <Link to="/users" className="link">
                <FontAwesomeIcon icon={faUserPen} /> Usuarios
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={4} href="#deets">
              <FontAwesomeIcon icon={faRefresh} /> Actualizar
            </Nav.Link>
            <Nav.Link eventKey={5} href="#deets">
              <FontAwesomeIcon icon={faUserTimes} /> Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
