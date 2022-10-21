import React from 'react';

const ListaPersonas = ({personas}) => {
    return ( 
        <>
        <h3>Listado Personas</h3>

        {
            personas.map(persona =>
                <div className='mb-3 border rounded p-3' key={persona.id}>
                    persona.nombre
                </div>
                )
        }

        </>
    );
}

export default ListaPersonas;