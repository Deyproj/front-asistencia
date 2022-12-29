import React from 'react';

const UserTable = (props) => {

    return (
        <table className='text-center table table-striped'>
            <thead className='text-white navBar'>
                <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>UserName</th>
                    <th scope='col'>Rol</th>
                    <th scope='col'>Contraseña</th>
                    <th scope='col'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map((user) => (
                        <tr key={user.idUsuario}>
                            <td>{user.nombre}</td>
                            <td>{user.username}</td>
                            <td>{user.roles}</td>
                            <td>{user.password}</td>
                            <td>
                            <button className='btn btn-warning mx-1' onClick={() => {props.editUser(user)}}>Editar</button>
                            <button className='btn btn-danger' onClick={() => {props.deleteUser(user.id)}}>Borrar</button>
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