import React, { useState } from 'react';
import axios from 'axios';
import social3 from '../assets/forgot.avif';
import '../Css/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateOtp = () => {
    if (otp.join('').length !== 6) {
      setOtpError('OTP should be 6 digits.');
      return false;
    }
    setOtpError('');
    return true;
  };

  const validatePasswords = () => {
    if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters.');
      return false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return false;
    }
    setPasswordError('');
    setConfirmPasswordError('');
    return true;
  };

  const handleEmailSubmit = async () => {
    if (validateEmail()) {
      try {
        const response = await axios.post('http://localhost:8000/request-password-reset/', { email });
        if (response.data.status === 'success') {
          setStep(2);
        } else {
          setEmailError(response.data.message);
        }
      } catch (error) {
        setEmailError('An error occurred while sending the reset email.');
      }
    }
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleOtpSubmit = async () => {
    if (validateOtp()) {
      setStep(3);
    }
  };

  const handlePasswordSubmit = async () => {
    if (validatePasswords()) {
      try {
        const response = await axios.post('http://localhost:8000/reset-password/', {
          email: email,
          otp: otp.join(''),
          new_password: password
        });

        if (response.data.status === 'success') {
          alert('Password has been reset successfully!');
          setPassword('');
          setConfirmPassword('');
        } else {
          setPasswordError(response.data.message);
        }
      } catch (error) {
        setPasswordError('An error occurred while resetting the password.');
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100">
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
          <img src={social3} alt="Forgot Password" className="img-fluid" style={{ maxWidth: '80%' }} />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center p-4">
          {step === 1 && (
            <div className="form-step">
              <h3 className="text-center mb-4 ">Forgot Password</h3>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                {emailError && <p className="text-danger">{emailError}</p>}
              </div>
              <button className="btn btn-primary w-100" onClick={handleEmailSubmit}>
                Submit
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="form-step">
              <h3 className="text-center mb-4">Enter OTP</h3>
              <div className="form-group mb-3">
                <label>OTP</label>
                <div className="d-flex justify-content-center">
                  {otp.map((data, index) => (
                    <input
                      className="form-control text-center mx-1"
                      style={{ width: '40px' }}
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  ))}
                </div>
                {otpError && <p className="text-danger text-center">{otpError}</p>}
              </div>
              <button className="btn btn-primary w-100" onClick={handleOtpSubmit}>
                Submit
              </button>
            </div>
          )}
          {step === 3 && (
            <div className="form-step">
              <h3 className="text-center mb-4">Reset Password</h3>
              <div className="form-group mb-3">
                <label>New Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                  <span
                    className="input-group-text cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                  </span>
                </div>
                {passwordError && <p className="text-danger">{passwordError}</p>}
              </div>
              <div className="form-group mb-3">
                <label>Confirm Password</label>
                <div className="input-group">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                  />
                  <span
                    className="input-group-text cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i className={`fa ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                  </span>
                </div>
                {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
              </div>
              <button className="btn btn-primary w-100" onClick={handlePasswordSubmit}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;