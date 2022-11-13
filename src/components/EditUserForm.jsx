import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
        defaultValues: props.currenUser
    });

    setValue('nombre', props.currenUser.nombre)
    setValue('username', props.currenUser.username)
    setValue('password', props.currenUser.password)
    setValue('roles', props.currenUser.roles)

    const onSubmit = (data, e) => {
        data.id = props.currenUser.id
        props.updateProducts(props.currenUser.id, data)
        e.target.reset();
    }

    return (
        <>
            <div>
                <div className="container">
                    <h1>Editar Usuario</h1>
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-label">Nombre</label>
                        <input className="form-control" type="text" name="nombre" {...register("nombre", {
                            required: "Campo Obligatorio",
                        })}
                        />
                        <div className='text-danger'>
                            {errors?.nombre?.message}
                        </div>
                        <label className="form-label">Username</label>
                        <input className="form-control" type="text" name="username" {...register("username", {
                            required: "Campo Obligatorio",
                        })} />
                        <div className='text-danger'>
                            {errors?.username?.message}
                        </div>
                        <label className="form-label">Password</label>
                        <input className="form-control" type="text" name="password" {...register("password", {
                            required: "Campo Obligatorio",
                        })}
                        />
                        <div className='text-danger'>
                            {errors?.password?.message}
                        </div>
                        <label className="form-label">Rol</label>
                        <input className="form-control" type="text" name="roles" {...register("roles", {
                            required: "Campo Obligatorio",
                        })}
                        />
                        <div className='text-danger'>
                            {errors?.roles?.message}
                        </div>
                        <button className='btn btn-primary'>Editar usuario</button>
                    </form>
                </div>
            </div >
        </>
    );
}

export default EditUserForm;