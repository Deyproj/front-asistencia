import { faMagnifyingGlassChart, faPersonChalkboard, faRefresh, faUser, faUserPen, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navBar' variant="dark">
      <Container>
        <Navbar.Brand>Flores Isabelita</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link eventKey={1} href="#deets">
            <FontAwesomeIcon icon={faPersonChalkboard}/>{" "}Asistencia
            </Nav.Link>
            <Nav.Link eventKey={2} href="#deets">
            <FontAwesomeIcon icon={faMagnifyingGlassChart}/>{" "}Actual
            </Nav.Link>
            <Nav.Link eventKey={3} href="#deets">
            <FontAwesomeIcon icon={faUserPen}/>{" "}Usuarios
            </Nav.Link>
            <Nav.Link eventKey={4}href="#deets">
            <FontAwesomeIcon icon={faRefresh}/>{" "}Actualizar
            </Nav.Link>
            <Nav.Link eventKey={5}href="#deets">
            <FontAwesomeIcon icon={faUserTimes}/>{" "}Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;