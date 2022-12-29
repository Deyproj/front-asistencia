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
    const [currenUser, setCurrenUser] = useState({
        idUsuario: null,
        nombre: "",
        username: "",
        password: "",
        roles: ""
    })
    
    const addUser = (user) => {
        user.idUsuario = uuid4()
        setUsers([
            ...users,
            user
        ])
    }

    const updateUser = (id, updateUser) => {
        setEditing(false)
        //editamos en Api
    }

    const deleteUser = (id) => {
        //eliminamos en Api
    }

    const editUser = (user) => {
        setEditing(true)
        setCurrenUser({
            idUsuario: user.idUsuario,
            nombre: user.nombre,
            username: user.username,
            password: user.password,
            roles: user.roles,
        })
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
                                    <EditUserForm currenUser={currenUser} updateUser={updateUser} />
                                </div>
                            ) : (
                                <div>
                                    <AddUserForm addUser={addUser} />
                                </div>
                            )
                        }
                    </div>
                    <br />
                    <div className="flex-large">
                        <h2>Usuarios Actuales</h2>
                        <UserTable users={users} deleteProducts={deleteUser} editUser={editUser}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;