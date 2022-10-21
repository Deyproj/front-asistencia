import React from "react";
import Accordion from "react-bootstrap/Accordion";

const ListaPersonas = ({ personas }) => {
  return (
    <>
      <h3 className="mb-3">Listado Personas</h3>

      {personas.map((persona) => (
        <Accordion>
          <Accordion.Item eventKey={persona.idPersona}>
            <Accordion.Header>{persona.nombre}</Accordion.Header>
            <Accordion.Body>
              {persona.proceso} <br />
              {persona.cedula} <br />
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      ))}
    </>
  );
};

export default ListaPersonas;
