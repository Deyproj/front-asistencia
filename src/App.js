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
  const [persona, setPersona,] = useState();


  const cargarPersonas = () => {
    axios.get('http://localhost:9090/personas')
      .then(({data}) => setPersonas(data))
  }

  useEffect(cargarPersonas, []);

  /*
  const personas =
    [
      {
        "idPersona": 7,
        "idEmpresa": "132890",
        "nombre": "ACEVEDO GOMEZ KAREN ELVIRA",
        "cedula": "1044911761",
        "celular": "3154102733",
        "proceso": "BOUQUET MANUFACTURA [SEDE 8 - 08]",
        "estado": null,
        "observaciones": null
      },
      {
        "idPersona": 6,
        "idEmpresa": "132890",
        "nombre": "ACEVEDO GOMEZ KAREN ELVIRA",
        "cedula": "1044911761",
        "celular": "3154102733",
        "proceso": "BOUQUET MANUFACTURA [SEDE 8 - 08]",
        "estado": null,
        "observaciones": null
      },
      {
        "idPersona": 5,
        "idEmpresa": "132890",
        "nombre": "ACEVEDO GOMEZ KAREN ELVIRA",
        "cedula": "1044911761",
        "celular": "3154102733",
        "proceso": "BOUQUET MANUFACTURA [SEDE 8 - 08]",
        "estado": null,
        "observaciones": null
      },
      {
        "idPersona": 4,
        "idEmpresa": "132890",
        "nombre": "ACEVEDO GOMEZ KAREN ELVIRA",
        "cedula": "1044911761",
        "celular": "3154102733",
        "proceso": "BOUQUET MANUFACTURA [SEDE 8 - 08]",
        "estado": null,
        "observaciones": null
      },
      {
        "idPersona": 14,
        "idEmpresa": "18648",
        "nombre": "ACEVEDO LOPEZ JOHNATAN",
        "cedula": "1040036629",
        "celular": "3005579639",
        "proceso": "BOUQUET RECEPCION DE FLOR (SEDE 8)",
        "estado": null,
        "observaciones": null
      },
      {
        "idPersona": 24,
        "idEmpresa": "116743",
        "nombre": "ACEVEDO SOLIS SANDRA MILENA",
        "cedula": "43159267",
        "celular": "3226046573",
        "proceso": "BOUQUET SOPORTE OPERATIVO [SEDE 8 - 30]",
        "estado": null,
        "observaciones": null
      },
    ];
    let totalPersonas = personas.length;
    */  
  let procesos = new Set([]);
  {personas.map((persona) => (
    procesos.add(persona.proceso)
    ))}

    const actulizarObservaciones = (observaciones)  => {
      if (persona) {
        persona.observaciones = observaciones.undefined;
        console.log(`${persona.observaciones}`)
        axios.get(`http://localhost:9090/personas/${persona.idPersona}`, observaciones.undefined)
        .then(setPersona())
      }else{console.log("Nooooooooooo")}

    }


  return (
    <>
      <NavBar  />
      <Header titulo="Control Personas"/>
      <Container>
        <Row>
          <Col md={8}>
            <ListaPersonas personas={personas} onUpdate={actulizarObservaciones}/>
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
