import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        alert("SignOut successful")
      })
      .catch(error => {
        console.error('error', error)
      })
  }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
        {
          user?.email ?
            <button onClick={handleSignOut} className="btn mr-4">Logout</button> :
            <Link to='/login' className="btn mr-4">Login</Link>
        }
        {
          user?.email && <p>{user.email}</p>
        }
      </div>
    </div>
  );
};

export default Header;