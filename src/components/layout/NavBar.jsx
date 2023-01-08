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
            <Link to="/asistencia" className="link m-2">
              <FontAwesomeIcon icon={faPersonChalkboard} /> Asistencia
            </Link>
              <Link to="/actual" className="link m-2">
                <FontAwesomeIcon icon={faMagnifyingGlassChart} /> Actual
              </Link>
              <Link to="users" className="link m-2">
                <FontAwesomeIcon icon={faUserPen} /> Usuarios
              </Link>
              <Link to="/" className="link m-2">
              <FontAwesomeIcon icon={faRefresh} /> Actualizar
              </Link>
              <Link to="/" className="link m-2">
              <FontAwesomeIcon icon={faUserTimes} /> Salir
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
