import React from 'react';
import { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import UserTable from './components/UserTable';
import { v4 as uuid4 } from 'uuid';



const Users = () => {
    
    const usersData = [
        {
            "idUsuario": uuid4(),
            "username": "admin",
            "password": "$2a$10$1PV24Lq.KZzbK1deqYGz9ORh.7w0Lfm51vjiKtQ2FYsuEORDD4Ll6",
            "role": "ADMIN"
        },
        {
            "idUsuario": uuid4(),
            "username": "user",
            "password": "$2a$10$cumVw47rOsyXgz8QlQVG4OHClaw9mye6sGpFolVKFq/vwBwndHY2K",
            "role": "USER"
        },
        {
            "idUsuario": uuid4(),
            "username": "dguzmanl",
            "password": "$2a$10$jpPXLdW/s5K3y23O4Ctii.miBzoQkiSPFGNV8uedkw4uDYVTpqCEm",
            "role": "ADMIN"
        }
    ]
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
            <div className="container">
                <h1>Gestion de Usuarios</h1>
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
                                    <AddUserForm addUser={addUser}/>
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