import { sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Register = () => {
const {createUser, auth} = useContext(AuthContext);
const [name, setName] = useState("");
  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
   createUser(email, password)
   .then(result =>{
    const user = result.user;
    update();
    varify()
    console.log(user);
   })
   .catch(error =>{
    console.error('error', error);
   })
  }

  const getProfileName = event =>{
    const name = event.target.value;
    setName(name);
    console.log(name)
  }

  const varify = () =>{
    sendEmailVerification(auth.currentUser)
  .then(() => {
    alert("Email verification sent!. please check email")
    // ...
  });
  }

  const update = () =>{
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
    //  alert("profile updated")
    }).catch((error) => {
     console.error("error", error)
    });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input onBlur={getProfileName} type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <Link className='btn' to='/login'>Allready have an account?</Link>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;