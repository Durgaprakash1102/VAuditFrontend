import React, { useState } from 'react';

function Otp() {
    const [otp, setOTP] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp }),
            });
            if (response.ok) {
                // Redirect to login page upon successful OTP verification
                window.location.href = '/login/';
            } else {
                setError('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setError('An error occurred while verifying OTP.');
        }
    };

    const handleChange = (e) => {
        setOTP(e.target.value);
    };

    return (
        <div>
            <h2>Enter OTP</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="otp">OTP:</label>
                <input type="text" id="otp" name="otp" value={otp} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Otp;
