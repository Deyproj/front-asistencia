import { faPersonCircleMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../components/layout/Header';
import TarjetasPersonas from '../components/TarjetasPersonas';
import personas from '../api/colaboradores.json';

const Actual = () => {

    const [total, setTotal] = useState();
    const [ausentes, setAusentes] = useState(0);
    const [presentes, setPresentes] = useState(0);
    const [pendientes, setPendientes] = useState(0);

   

    const obtenerTotales = (personas) => {
        setTotal(personas.length)
        personas.map((persona) => {
            switch (persona.estado) {
                case "Ausente":
                    setAusentes(ausentes + 1)
                    break;
                case "Presente":
                    setPresentes(presentes + 1)
                    break;
                default:
                    setPendientes(pendientes + 1)
                    break;
            }
        })
    };

    useEffect (() => {
        obtenerTotales(personas)
    }, [])

    return (
        <>
            <Header titulo="Actual" />
            <TarjetasPersonas totalPersonas={total} titulo="Total Personas" background="bg-primary" icon={faPersonCircleMinus} />
            <TarjetasPersonas totalPersonas={presentes} titulo="Personas Presentes" background="bg-success" icon={faPersonCircleMinus} />
            <TarjetasPersonas totalPersonas={ausentes} titulo="Personas Ausentes" background="bg-danger" icon={faPersonCircleMinus} />
            <TarjetasPersonas totalPersonas={pendientes} titulo="Personas Pendientes por vallidar" background="bg-secondary" icon={faPersonCircleMinus} />
        </>
    );
}

export default Actual;