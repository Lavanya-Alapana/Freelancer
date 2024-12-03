import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/allprofiles', {
        headers: {
          'x-token': localStorage.getItem('token'),
        },
      })
      .then((res) => setData(res.data));
  }, []);

  if (!localStorage.getItem('token')) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <div style={{ backgroundColor: '#343a40', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ color: '#fff' }}>Developers Hub</h2>
        <div>
          <a href="/myprofile" style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}>
            My Profile
          </a>
          <a
            href="/Logout"
            onClick={() => localStorage.removeItem('token')}
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Logout
          </a>
        </div>
      </div>

      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Developers</h1>

      {data.length >= 1 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
          {data.map((profile, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f8f9fa',
                color: '#212529',
                padding: '15px',
                borderRadius: '5px',
                textAlign: 'center',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  margin: '0 auto 15px',
                  backgroundColor: '#dee2e6',
                }}
              ></div>
              <h3>{profile.fullname}</h3>
              <p>{profile.email}</p>
              <p>India</p>
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#6c757d' }}>No profiles available</p>
      )}
    </>
  );
};