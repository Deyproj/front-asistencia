import { Container, Row, Col } from "reactstrap";
import ListaPersonas from "./components/ListaPersonas";
import TarjetasPersonas from "./components/TarjetasPersonas";
import axios from "axios";
import Header from "./components/layout/Header";
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import personas from "./api/colaboradores.json";



const Asistencia = () => {
    
      //const [personas, setPersonas,] = useState([]);
      let totalPersonas = personas.length;
    
      /*
      useEffect(cargarPersonas, []);
      const cargarPersonas = () => {
        axios.get('http://localhost:9090/personas')
          .then(({data}) => setPersonas(data))
      }
      let procesos = new Set([]);
      {personas.map((persona) => (
        procesos.add(persona.proceso)
        ))}
    */
      const actulizarObservaciones = (persona, observaciones) => {
        if (persona) {
          persona.observaciones = observaciones.undefined;
          axios
            .post(`http://localhost:9090/personas`, persona)
            .then(console.log("Observacion enviada"));
        } else {
          console.log("La observacion no se pudo enviar");
        }
      };
    /*
      const addUser = async (user) => {
       const data = await fetch(`http://localhost:9090/personas`, user)
        const users = await data.json()
        console.log(users)
      };
   */
      return (
        <>
            <Header titulo="Asistencia" />
            <Container>
              <Row>
                <Col md={8}>
                  <ListaPersonas
                    personas={personas}
                    onUpdate={actulizarObservaciones}
                  />
                </Col>
                <Col md={4}>
                  <TarjetasPersonas
                    totalPersonas={totalPersonas}
                    titulo="Total Personas"
                    background="bg-primary"
                    icon={faUsers}
                  />
                </Col>
              </Row>
            </Container>
        </>
      );
    }
 
export default Asistencia;