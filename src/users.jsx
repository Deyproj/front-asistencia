import React from 'react';
import { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import UserTable from './components/UserTable';



const Users = () => {


    const [editing, setEditing] = useState(false);


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
                                    <AddUserForm />
                                </div>
                            )
                        }
                    </div>
                    <div className="flex-large">
                        <h2>Usuarios Actuales</h2>
                        <UserTable /*users={users} deleteUser={deleteUser} setEditing={setEditing}*/ />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;