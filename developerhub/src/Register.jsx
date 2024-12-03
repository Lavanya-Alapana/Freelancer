import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Register = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    skill: '',
    password: '',
    confirmpassword: '',
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-dark">
        <div className="container">
          <h1 className="text-white">
            <i className="fas fa-code"></i> Developers Hub
          </h1>
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <a href="/register" className="nav-link text-white">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link text-white">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sign Up Form */}
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="w-100" style={{ maxWidth: '500px' }}>
          <h1 className="text-primary text-center mb-3">Sign Up</h1>
          <p className="lead text-center mb-4">
            <i className="fas fa-user"></i> Create Your Account
          </p>
          <form onSubmit={submitHandler} className="form">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="fullname"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
                name="mobile"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Skill"
                name="skill"
                onChange={changeHandler}
                required
              />
              <small className="form-text text-muted">
                Please provide skills separated by commas (,)
              </small>
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmpassword"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Already have an account?{' '}
            <a href="/login" className="text-primary">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
