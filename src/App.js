import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './components/NavBar';
import ListaPersonas from './components/ListaPersonas';
import TarjetasPersonas from './components/TarjetasPersonas';
import Footer from './components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  const [personas, setPersonas,] = useState([]);
  let totalPersonas = personas.length;

  useEffect(cargarPersonas, []);
  let procesos = new Set([]);
  {personas.map((persona) => (
    procesos.add(persona.proceso)
    ))}

  const cargarPersonas = () => {
    axios.get('http://localhost:9090/personas')
      .then(({data}) => setPersonas(data))
  }

    const actulizarObservaciones = (persona, observaciones)  => {
      if (persona) {
        persona.observaciones = observaciones.undefined;
        axios.post(`http://localhost:9090/personas`, persona)
        .then(console.log("Siiiiii"))
      }else{console.log("Nooooooooooo")}
    }

  return (
    <>
      <NavBar  />
      <Header titulo="Control Personas"/>
      <Container>
        <Row>
          <Col md={8}>
            <ListaPersonas personas={personas} onUpdate={(actulizarObservaciones)} />
          </Col>
          <Col md={4}>
            <TarjetasPersonas totalPersonas={totalPersonas} />
          </Col>
        </Row>
      </Container>
      <Row >
          <Footer/>
      </Row>
    </>
  );
}

export default App;
