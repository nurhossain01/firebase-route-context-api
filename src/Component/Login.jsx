import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Login = () => {
 const {userLoginWithemail, resetPassword} = useContext(AuthContext)
 const [email, setEmail] = useState("");
 const navigate = useNavigate();
  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userLoginWithemail(email, password)
    .then(result =>{
      const user = result.user;
      alert("Login successful");
      navigate('/home');
      console.log(user)
    })
    .catch(error =>{
      console.error("error", error)
      alert("invalid passord")
    })
  }

  const handleReset = event =>{
    const email = event.target.value;
    setEmail(email);
  }

  const resetuser = () =>{
    resetPassword(email)
    .then( () =>{
      alert("Reset password send your email.please check your email")
    })
    .catch(error =>{
      console.error("error", error)
    })
  }



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onBlur={handleReset} type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <button onClick={resetuser} className="label-text-alt link link-hover">Forgot password?</button>
                </label>
              </div>
              <span>Don't account yet? Please<Link className='pl-2 text-pink-400 hover:text-pink-700' to='/register'>Register</Link></span>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;