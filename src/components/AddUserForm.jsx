import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        //props.addUser(data);
       // e.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} />
            <label>Nombre</label>
            <input type="text" name="nombre" {...register("Campo Obligatorio", {
                required: "Required",
            })}
            />
            <div>
                {errors?.nombre?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" {...register("Campo Obligatorio", {
                required: "Required",
            })} />
            <div>
                {errors?.username?.message}
            </div>
            <label>Password</label>
            <input type="text" name="password" {...register("Campo Obligatorio", {
                required: "Required",
            })}
            />
            <div>
                {errors?.password?.message}
            </div>
            <button>Agregar nuevo usuario</button>
        </>
    );
}

export default AddUserForm;