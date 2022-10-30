import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} />
            <label>Nombre</label>
            <input type="text" name="nombre" ref={
                register({
                    required: { value: true, message: 'Campo obligatorio' }
                })
            } />
            <div>
                {errors?.nombre?.message}
                </div>
            <label>Username</label>
            <input type="text" name="username" ref={
                register({
                    required: { value: true, message: 'Campo obligatorio' }
                })
            } />
            <div>
                {errors?.username?.message}
            </div>
            <label>Password</label>
            <input type="text" name="password" ref={
                register({
                    required: { value: true, message: 'Campo obligatorio' }
                })
            } />
            <div>
                {errors?.username?.message}
            </div>
            <button>Agregar nuevo usuario</button>
        </>
    );
}

export default AddUserForm;