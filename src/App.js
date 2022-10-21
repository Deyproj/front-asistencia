import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ListaPersonas from './ListaPersonas';
import NavBar from './NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [personas, setPersonas] = useState([]);

  const cargarPersonas = () => {
    axios.get('http://localhost:9090/personas')
      .then(({data}) => setPersonas(data));
  }

  useEffect(cargarPersonas, []);

  return (
    <>
    <NavBar/> 
    <Container>
      <Row>
        <Col>
          <ListaPersonas personas={personas} />     
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
