import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ListaPersonas from './ListaPersonas';
import NavBar from './NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TarjetasPersonas from './TarjetasPersonas';

function App() {
  const [personas, setPersonas,] = useState([]);
  let totalPersonas = personas.length;

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
        <Col md={6}>
          <ListaPersonas personas={personas} />     
        </Col>
        <Col md={6}>
          <TarjetasPersonas totalPersonas={totalPersonas}/>     
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
