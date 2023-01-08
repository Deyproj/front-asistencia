import React from 'react';
import { useForm } from 'react-hook-form';
const URL_LOGIN = "";


const enviarLogin = async (url, data)=>{

  const resp = await fetch (url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type' :  'application/json'
    }
  });

  console.log(resp);
  const json = await resp.json();
  console.log(json);
}


const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
      console.log(data);
      enviarLogin(URL_LOGIN, data);
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
                        <br />
                        <button className='btn btn-primary'>Login</button>
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
