import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const[auth,setAuth]=useState(false);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler =  (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login',data).then(
      res=>{localStorage.setItem('token',res.data.token);setAuth(true)}
    )
  };

  if (auth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-dark w-100">
        <div className="container">
          <h1 className="text-white">
            <Link to="/" className="text-decoration-none text-white">
              <i className="fas fa-code"></i> Developers Hub
            </Link>
          </h1>
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link to="/register" className="nav-link text-white">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Login Section */}
      <div
        className="d-flex justify-content-center align-items-center mt-5"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <h1 className="text-primary text-center mb-3">Sign In</h1>
          <p className="lead text-center mb-4">
            <i className="fas fa-user"></i> Sign into Your Account
          </p>
          <form onSubmit={submitHandler} className="form">
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={data.email}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
