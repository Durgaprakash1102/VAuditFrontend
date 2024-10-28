import React, { useState } from 'react'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    company_name: '',
    company_size: '',
    seo_proficiency: '',
    otp: '',
    subscribe: false
  })
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!otpSent) {
      // Send OTP request
      try {
        const response = await axios.post(
          'http://localhost:8000/api/otp/',
          qs.stringify({
            email: formData.email,
            company_name: formData.company_name,
            company_size: formData.company_size,
            seo_proficiency: formData.seo_proficiency
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )

        if (response.data.status === 'success') {
          setOtpSent(true)
          Swal.fire({
            title: 'OTP Sent!',
            text: 'Please check your email for the OTP.',
            icon: 'info',
            confirmButtonText: 'OK'
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to send OTP. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while sending OTP. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    } else if (otpSent && !otpVerified) {
      // Verify OTP request
      try {
        const otpResponse = await axios.post(
          'http://localhost:8000/api/verify-otp/',
          qs.stringify({
            email: formData.email,
            otp: formData.otp
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )

        if (otpResponse.data.status === 'success') {
          setOtpVerified(true)
          Swal.fire({
            title: 'OTP Verified!',
            text: 'You can now proceed to sign up.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Invalid or expired OTP. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred during OTP verification. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    } else if (otpVerified) {
      // Handle sign up after OTP is verified
      handleSignup()
    }
  }

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/signup/',
        qs.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          company_name: formData.company_name,
          company_size: formData.company_size,
          seo_proficiency: formData.seo_proficiency
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      localStorage.setItem('token', response.data.token)

      if (response.status === 200) { // Changed to 200 for successful response
        Swal.fire({
          title: 'Sign Up Successful!',
          text: 'You have successfully signed up.',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        navigate('/login')
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Signup failed. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    } catch (error) {
      console.error('Error during signup:', error)
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred during signup. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }

  return (
    <div className='container-fluid p-4 background-radial-gradient'>
      <div className='row'>
        <div className='col-md-6 text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            The best offer <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
          </h1>
          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>
        <div className='col-md-6 position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <div className='card my-5 bg-glass'>
            <div className='p-5'>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <input
                    className="form-control"
                    id='username'
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    id='email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    id='password'
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    id='company_name'
                    type='text'
                    name='company_name'
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    id='company_size'
                    type='text'
                    name='company_size'
                    value={formData.company_size}
                    onChange={handleChange}
                    placeholder="Enter your company size"
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    id='seo_proficiency'
                    type='text'
                    name='seo_proficiency'
                    value={formData.seo_proficiency}
                    onChange={handleChange}
                    placeholder="Enter your SEO proficiency"
                  />
                </div>
                {otpSent && (
                  <div className="mb-2">
                    <input
                      className="form-control"
                      id='otp'
                      type='text'
                      name='otp'
                      value={formData.otp}
                      onChange={handleChange}
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                )}
                <div className="mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                  <label className="form-check-label ps-1" htmlFor="subscribe">Subscribe to our newsletter</label>
                </div>
                <div className="button-container d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-primary w-50 mb-2">
                    {otpSent ? (otpVerified ? 'Sign Up' : 'Verify OTP') : 'Send OTP'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup