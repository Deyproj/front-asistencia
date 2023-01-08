import React, { useState } from "react";
import { Accordion, Form } from "react-bootstrap";


const ListaPersonas = ({ personas, onUpdate, cargarPersonas}) => {

  const [observaciones, setObservaciones] = useState()
  const [search, setSearch] = useState("");

  
  const onProceso = (event) => {
    setSearch(event.target.value);
  }
  
  const onObserv = (event) => {
    setObservaciones({
      ...observaciones,
      [event.target.observaciones] : event.target.value,
    })
  }

  const dataArr = [];
  personas.forEach(persona => {
    dataArr.push(persona.proceso)
  });
  const result = new Set(dataArr);
  let procesos = [...result];
  
  let results = [];
  if(search !== ""){
    results = personas.filter(personas => personas.proceso === search);
  }

    
  return (
    <>
      <div className="mt-3">
      <Accordion> 
          {results.map((persona) => (
              <Accordion.Item key={persona.idPersona} className="mb-2 shadow-lg rounded" eventKey={persona.idPersona}>
                <Accordion.Header>{persona.nombre}</Accordion.Header>
                <Accordion.Body className="bodyCard">
                  <b>Id:</b><br />
                  {persona.idEmpresa}<br />
                  <b>Proceso:</b><br />
                  {persona.proceso}<br />
                  <br />
                  <Form>
                  <Form.Control  name="observaciones" placeholder="Observaciones" onChange={onObserv} onBlur={() => onUpdate(persona, observaciones)}/>
                  </Form>
                </Accordion.Body>
                <div className="mb-2 mx-2">
                  <Form.Check
                    className="mx-4"
                    type="switch"
                    id={`${persona.idpersona}`}
                    //onBlur={enviarObservaciones}
                    />
                    <p className="mx-2">Presente</p>
                    </div>
              </Accordion.Item>
          ))}
        </Accordion>
        <form className="mb-3">
          <div className="form-group">
            <select
              id="palabraClave"
              name="palabraClave"
              className="form-control"
              value={search}
              onChange={onProceso}
            >
              <option value={false}>
                Selecciona tu equipo...
              </option>
              {procesos.map((proceso) => (
                <option key={proceso}>{proceso}</option>
              ))}
            </select>
          </div>
        </form>
      </div>

    </>
  );
};

export default ListaPersonas;
