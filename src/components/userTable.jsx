import React from 'react';

const UserTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>UserName</th>
                    <th>Contraseña</th>
                    <th>Acciones</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>NNNN</td>
                        <td>UUUU</td>
                        <td>PPPP</td>
                        <td>
                            <button className='button muted-button'>Editaer</button>
                            <button className='button muted-button'>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
        </table>
    );
}

export default UserTable;