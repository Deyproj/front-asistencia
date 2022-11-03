import { faPersonCircleMinus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Header from './components/layout/Header';
import TarjetasPersonas from './components/TarjetasPersonas';

const Actual = () => {
    return (
        <>
        <Header titulo="Actual" />
            <TarjetasPersonas totalPersonas={34} titulo="Prueba personas" background="bg-danger" icon={faPersonCircleMinus}/>
        </>
    );
}

export default Actual;