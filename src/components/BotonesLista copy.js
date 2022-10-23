import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from 'react';


const BotonesLista = ({ persona }) => {
    const [radioValue, setRadioValue] = useState('');
    const radios = [
        { name: 'Ausente', value: '1' },
        { name: 'Presente', value: '2' },
    ];
    return (
        <>
            <ButtonGroup id={`${persona.idPersona}`} className="m-2">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={`${persona.idPersona}`}
                        id={`radio-${idx}${persona.idPersona}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-primary' : 'outline-secondary'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}

export default BotonesLista;
