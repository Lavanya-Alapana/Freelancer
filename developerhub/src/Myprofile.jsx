import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export const Myprofile = () => {
    const [data, setData] = useState([]);
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/myprofile', {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        }).then(res => setData(res.data));

        axios.get('http://localhost:5000/myreview', {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        }).then(res => setReview(res.data));
    }, []);

    if (!localStorage.getItem('token')) {
        return <Navigate to='/login' />;
    }

    return (
        <>
            <div style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
                <a href="/myprofile" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>My Profile</a>
                <a href="/logout" style={{ color: 'white', textDecoration: 'none' }} onClick={() => localStorage.removeItem('token')}>Logout</a>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px'
            }}>
                <h1 style={{ color: '#1a73e8' }}>Developers Hub</h1>

                {data && (
                    <div style={{
                        backgroundColor: '#0078d7',
                        color: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        width: '300px'
                    }}>
                        <div style={{ fontSize: '100px', marginBottom: '10px' }}>
                            <i className="fa fa-user-circle"></i>
                        </div>
                        <h3>{data.fullname}</h3>
                        <p>{data.email}</p>
                        <p>India</p>

                        <button style={{
                            marginTop: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#1a73e8',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>View Profile</button>
                    </div>
                )}

                <div style={{
                    marginTop: '30px',
                    width: '100%',
                    maxWidth: '500px',
                    textAlign: 'center',
                    backgroundColor: '#f1f1f1',
                    padding: '20px',
                    borderRadius: '10px'
                }}>
                    <h2 style={{ color: '#0078d7' }}>Reviews and Ratings</h2>

                    {reviews && reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                margin: '10px 0',
                                padding: '10px',
                                borderRadius: '5px',
                                textAlign: 'left'
                            }}>
                                <h4>{review.taskprovider}</h4>
                                <p>Rating: {review.rating} / 5</p>
                            </div>
                        ))
                    ) : (
                        <p style={{ color: '#555' }}>No reviews added yet.</p>
                    )}
                </div>
            </div>
        </>
    );
};