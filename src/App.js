import { Container, Row, Col } from 'reactstrap';
import NavBar from './components/NavBar';
import ListaPersonas from './components/ListaPersonas';
import TarjetasPersonas from './components/TarjetasPersonas';
import Footer from './components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {


  const personas = [
    {
      "idPersona": 4,
      "idEmpresa": "132890",
      "nombre": "ACEVEDO GOMEZ KAREN ELVIRA",
      "cedula": "1044911761",
      "celular": "3154102733",
      "proceso": "BOUQUET MANUFACTURA [SEDE 8 - 08]",
      "estado": null,
      "observaciones": "Hola"
      },
      {
      "idPersona": 14,
      "idEmpresa": "18648",
      "nombre": "ACEVEDO LOPEZ JOHNATAN",
      "cedula": "1040036629",
      "celular": "3005579639",
      "proceso": "BOUQUET RECEPCION DE FLOR (SEDE 8)",
      "estado": null,
      "observaciones": "Incapacitado"
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
      {
      "idPersona": 34,
      "idEmpresa": "138215",
      "nombre": "ACEVEDO URUETA DAIBERLIN ELVIRA",
      "cedula": "1049947398",
      "celular": "3003191488",
      "proceso": "BOUQUET MÁQUINAS [SEDE 8 - 09]",
      "estado": null,
      "observaciones": null
      },
      {
      "idPersona": 44,
      "idEmpresa": "146735",
      "nombre": "AGAMEZ HOYOS JUAN DIEGO",
      "cedula": "1003504890",
      "celular": "3106810224",
      "proceso": "BOUQUET POSCOSECHA (SEDE 8 - 30)",
      "estado": null,
      "observaciones": null
      },
      {
      "idPersona": 54,
      "idEmpresa": "143113",
      "nombre": "AGAMEZ HOYOS WALTER JUNIOR",
      "cedula": "1003504891",
      "celular": "3128684865",
      "proceso": "EMPAQUE POSCOSECHA [SEDE 8 - 30]",
      "estado": null,
      "observaciones": null
      }
  ]

  //const [personas, setPersonas,] = useState([]);
  let totalPersonas = personas.length;

  /*
  useEffect(cargarPersonas, []);
  let procesos = new Set([]);
  {personas.map((persona) => (
    procesos.add(persona.proceso)
    ))}
  const cargarPersonas = () => {
    axios.get('http://localhost:9090/personas')
      .then(({data}) => setPersonas(data))
  }
*/
    const actulizarObservaciones = (persona, observaciones)  => {
      if (persona) {
        persona.observaciones = observaciones.undefined;
        axios.post(`http://localhost:9090/personas`, persona)
        .then(console.log("Observacion enviada"))
      }else{console.log("La observacion no se pudo enviar")}
    }

    const addUser = (user) => {
      axios.post(`http://localhost:9090/personas`, user)
      .then(console.log("Siiiiii"))
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
            <TarjetasPersonas totalPersonas={totalPersonas} titulo="Total Personas" background="bg-primary" />
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
