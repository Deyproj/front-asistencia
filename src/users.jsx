import React from 'react';
import UserTable from './components/userTable';

const Users = () => {
    return (
        <>
            <div className="container">
                <h1>Gestion de Usuarios</h1>
                <div  className="flex-row">
                    <div className="flex-large">
                        <h2>Agregar Usuario</h2>
                    </div>
                    <div className="flex-large">
                        <h2>Usuarios Actuales</h2>
                        <UserTable />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;