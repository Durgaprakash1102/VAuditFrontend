import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../Css/Login.css'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData, {
        headers: { 'Content-Type': 'application/json' },
      })
      const { token, username, is_superuser, id } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('username', username)
      localStorage.setItem('is_superuser', is_superuser)
      localStorage.setItem('userId', id)

      setUsername(username)
      setUserId(id)

      Swal.fire({
        title: 'Login Successful',
        text: `Welcome ${username}!`,
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        if (is_superuser) {
          navigate('/admin')
        } else {
          navigate('/')
        }
      })
    } catch (error) {
      setError('Login failed. Please check your credentials.')
    }
  }

  const handleSignUpClick = () => {
    navigate('/signupform')
  }

  const handleForgotPasswordClick = () => {
    navigate('/forgotpassword')
  }

  return (
    <div className="container-fluid login-wrapper">
      <div className="login-image d-none d-md-block">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          alt="Login illustration"
          className="img-fluid"
        />
      </div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="p-4">
          <h3 className="text-center mb-4">Login</h3>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe" className="ms-1">Remember me</label>
            </div>
            <button className="forgatebtn" type="button" onClick={handleForgotPasswordClick}>
              Forgot password?
            </button>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">Sign in</button>
          <button type="button" className="btn btn-secondary w-100 mb-2" onClick={handleSignUpClick}>
            Sign up
          </button>
          {error && <p className="text-danger text-center">{error}</p>}
        </form>
        {username && <p className="text-center">Welcome, {username} (ID: {userId})!</p>}
      </div>
    </div>
  )
}

export default Login