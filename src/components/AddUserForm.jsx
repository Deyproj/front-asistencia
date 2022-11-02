import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        props.addUser(data);
        e.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} />
            <label>UserName</label>
            <input type="text" name="username" {...register("Campo Obligatorio", {
                required: "Required",
            })}
            />
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
            <label>Rol</label>
            <input type="text" name="rol" {...register("Campo Obligatorio", {
                required: "Required",
            })} />
            <div>
                {errors?.rol?.message}
            </div>
            <button>Agregar nuevo usuario</button>
        </>
    );
}

export default AddUserForm;