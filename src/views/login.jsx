import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
      console.log(data)
      e.target.reset();
  }


    return ( 
        <>

<br/>
<br/>
<div className='login'>

<div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-group mb-0">
          <div className="card p-4">
            <div className="card-body">
              <h1>Login</h1>
              <p className="text-muted">Sign In to your account</p>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                <input type="text" className="form-control"  placeholder="Username" name="username" {...register("username", {
                            required: "Campo Obligatorio",
                        })}
                />
                 <div className='text-danger'>
                            {errors?.username?.message}
                </div>
              </div>
              <div className="input-group mb-4">
                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                <input type="password" className="form-control" placeholder="Password" name="password" {...register("password", {
                            required: "Campo Obligatorio",
                        })}
                />
                <div className='text-danger'>
                            {errors?.password?.message}
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button type="button" className="btn btn-primary px-4">Login</button>
                </div>
           
              </div>
              </form>
            </div>
          </div>
          <div className="card text-white bg-primary py-5 d-md-down-none" >
            <div className="card-body text-center">
              <div>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="button" className="btn btn-primary active mt-3">Register Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
     );
}
 
export default Login;
