import { faPersonCircleMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import TarjetasPersonas from './components/TarjetasPersonas';

const Actual = () => {
    const personas = [
        {
            idPersona: 4,
            idEmpresa: "132890",
            nombre: "ACEVEDO GOMEZ KAREN ELVIRA",
            cedula: "1044911761",
            celular: "3154102733",
            proceso: "BOUQUET MANUFACTURA [SEDE 8 - 08]",
            estado: "Presente",
            observaciones: "Hola",
        },
        {
            idPersona: 14,
            idEmpresa: "18648",
            nombre: "ACEVEDO LOPEZ JOHNATAN",
            cedula: "1040036629",
            celular: "3005579639",
            proceso: "BOUQUET RECEPCION DE FLOR (SEDE 8)",
            estado: "Presente",
            observaciones: "Incapacitado",
        },
        {
            idPersona: 24,
            idEmpresa: "116743",
            nombre: "ACEVEDO SOLIS SANDRA MILENA",
            cedula: "43159267",
            celular: "3226046573",
            proceso: "BOUQUET SOPORTE OPERATIVO [SEDE 8 - 30]",
            estado: "Ausente",
            observaciones: null,
        },
        {
            idPersona: 34,
            idEmpresa: "138215",
            nombre: "ACEVEDO URUETA DAIBERLIN ELVIRA",
            cedula: "1049947398",
            celular: "3003191488",
            proceso: "BOUQUET MÁQUINAS [SEDE 8 - 09]",
            estado: "Ausente",
            observaciones: null,
        },
        {
            idPersona: 44,
            idEmpresa: "146735",
            nombre: "AGAMEZ HOYOS JUAN DIEGO",
            cedula: "1003504890",
            celular: "3106810224",
            proceso: "BOUQUET POSCOSECHA (SEDE 8 - 30)",
            estado: null,
            observaciones: null,
        },
        {
            idPersona: 54,
            idEmpresa: "143113",
            nombre: "AGAMEZ HOYOS WALTER JUNIOR",
            cedula: "1003504891",
            celular: "3128684865",
            proceso: "EMPAQUE POSCOSECHA [SEDE 8 - 30]",
            estado: null,
            observaciones: null,
        },
    ];

    const [total, setTotal] = useState();
    const [ausentes, setAusentes] = useState(0);
    const [presentes, setPresentes] = useState(0);
    const [pendientes, setPendientes] = useState(0);

    const obtenerTotales = async (personas) => {
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