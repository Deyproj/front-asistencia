import React from 'react';
import { useState } from 'react';
import AddUserForm from '../components/AddUserForm';
import EditUserForm from '../components/EditUserForm';
import UserTable from '../components/UserTable';
import { v4 as uuid4 } from 'uuid';
import Header from '../components/layout/Header';
import usersData from '../api/usuarios.json';



const Users = () => {

    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);

    const addUser = (user) => {
        user.id = uuid4()
        setUsers([
            ...users,
            user
        ])
    }

    return (
        <>
        <Header titulo="Gestion de Usuarios"/>
        
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        {
                            editing ? (
                                <div>
                                    <h2>Editar Usuario</h2>
                                    <EditUserForm />
                                </div>
                            ) : (
                                <div>
                                    <h2>Agregar Usuario</h2>
                                    <AddUserForm addUser={addUser} />
                                </div>
                            )
                        }
                    </div>
                    <div className="flex-large">
                        <h2>Usuarios Actuales</h2>
                        <UserTable users={users} /*deleteUser={deleteUser} setEditing={setEditing}*/ />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;