import React from "react";
import Accordion from "react-bootstrap/Accordion";

const ListaPersonas = ({ personas }) => {
  return (
    <>
      <h3 className="mb-3">Listado Personas</h3>

      {personas.map((persona) => (
        <Accordion key={persona.idPersona}>
          <Accordion.Item eventKey={persona.idPersona}>
            <Accordion.Header>{persona.nombre}</Accordion.Header>
            <Accordion.Body>
              {persona.proceso} <br />
              {persona.cedula} <br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}

      
        <form method="post" class="mx-5 my-5 mx-lg-0 my-lg-3">
          <div class="form-group">
            <select
              id="palabraClave"
              name="palabraClave"
              class="ressubtitle form-control"
            >
              <option disabled="disabled" selected="true">
                Selecciona tu equipo...
              </option>
              {personas.map((persona) => (
              <option>{persona.proceso}</option>
              ))}
            </select>
          </div>
        </form>
      
    </>
  );
};

export default ListaPersonas;
