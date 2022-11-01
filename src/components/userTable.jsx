import React from 'react';

const usersData = [
    {
        "idUsuario": 1,
        "username": "admin",
        "password": "$2a$10$1PV24Lq.KZzbK1deqYGz9ORh.7w0Lfm51vjiKtQ2FYsuEORDD4Ll6",
        "roles": [
            {
                "idRol": 4,
                "nombre": "ROLE_ADMIN"
            }
        ]
    },
    {
        "idUsuario": 14,
        "username": "user",
        "password": "$2a$10$cumVw47rOsyXgz8QlQVG4OHClaw9mye6sGpFolVKFq/vwBwndHY2K",
        "roles": [
            {
                "idRol": 14,
                "nombre": "ROLE_USER"
            }
        ]
    },
    {
        "idUsuario": 24,
        "username": "dguzmanl",
        "password": "$2a$10$jpPXLdW/s5K3y23O4Ctii.miBzoQkiSPFGNV8uedkw4uDYVTpqCEm",
        "roles": [
            {
                "idRol": 64,
                "nombre": "ROLE_ADMIN"
            }
        ]
    }
]


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
                            <button className='button muted-button'
                            >Editar</button>
                            <button className='button muted-button'>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
        </table>
    );
}

export default UserTable;