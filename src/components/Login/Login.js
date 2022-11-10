import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import image from '../SignUp/login.jpg'
import { FaGooglePlus } from "react-icons/fa";

const Login = () => {
    const {login,googleLogin}=useContext(authContext);
    const [error,setError]=useState(null)
    const navigate = useNavigate()
    const location =useLocation()
    const from = location.state?.from?.pathname || '/';
    const HandleLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset();
            setError('')
            
        })
        .catch(err=>{
            console.log(err)
            setError(err.message)
        })
    }
    const HandleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true});
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200 pt-20">
  <div className="hero-content flex-col gap-32 lg:flex-row">
    <div className="text-center lg:text-left">

      <img src={image} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={HandleLogin} className="card-body">
      <h1 className="text-5xl font-bold mb-12">LogIn!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
            <p className='text-red-800'>{error}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='mt-5'>Don't have an account?<Link to='/signup' className='font-bold'>Register</Link></p>
        
      </form>
      <div>
        <button onClick={HandleGoogleLogin} className="btn btn-wide mb-5 ml-14"><FaGooglePlus size={20} className='mr-3'></FaGooglePlus> Sign In with Google</button>
        </div>
    </div>
  </div>
</div>
    );
};

export default Login;