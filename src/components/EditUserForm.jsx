import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm({
        defaultValues: props.currentUser
});

    const onSubmit = (data) => {
        console.log(data);
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
                {errors?.username?.message}
            </div>
            <button>Editar usuario</button>
        </>
    );
}

export default EditUserForm;