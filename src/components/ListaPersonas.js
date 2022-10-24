import React from "react";
import { Accordion, Form } from "react-bootstrap";




const ListaPersonas = ({ personas, onUpdate}) => {
  const procesosTodos = [];
  personas.forEach(persona => {
    procesosTodos.push(persona.proceso)
  });
  const procesos = [... new Set(procesosTodos)];

  return (
    <>
      <div className="mt-3">
        <Accordion>
          {personas.map((persona) => (
            <>
              <Accordion.Item key={persona.idPersona} className="mb-2 shadow-lg rounded" eventKey={persona.idPersona}>
                <Accordion.Header >{persona.nombre}</Accordion.Header>
                <Accordion.Body className="bodyCard">
                  <b>Id:</b><br />
                  {persona.idEmpresa}<br />
                  <b>Cedula:</b><br />
                  {persona.cedula} <br />
                  <b>Celular:</b><br />
                  {persona.celular}
                  <a href={`${"https://api.whatsapp.com/send?phone=57"}${persona.celular}`}
                    className="btn  pt-0 pb-0  rounded-circle" target="blank">
                    <img src="/images/whatsapp.png" width="21" />
                  </a> <br /><br />
                  <Form.Control  name="observaciones" placeholder="Observaciones" onBlur={() => onUpdate(persona)}/>
                </Accordion.Body>
                <div className="mb-2 mx-2">
                  <Form.Check
                    className="mx-4"
                    type="switch"
                    id={`${persona.idpersona}`}
                    //onBlur={enviarObservaciones}
                    />
                    <text className="mx-2">Presente</text>
                    </div>
              </Accordion.Item>
            </>
          ))}
        </Accordion>
        <form method="post" className="mb-3">
          <div className="form-group">
            <select
              id="palabraClave"
              name="palabraClave"
              className="form-control"
            >
              <option disabled="disabled" selected={true}>
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
