import React from 'react';
import { useState } from 'react';

const UserTable = (props) => {

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
                {
                    props.users.length > 0 ?
                    props.users.map((user) => (
                        <tr key={user.idUsuario}>
                            <td>{user.username}</td>
                            <td>{user.roles.nombre}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className='button muted-button'
                                >Editar</button>
                                <button className='button muted-button'
                                >Eliminar</button>
                            </td>
                        </tr>
                    )) :(
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default UserTable;