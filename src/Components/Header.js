import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

import '../Css/Header.css'

const Header = () => {
  const [username, setUsername] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignupClick = () => {
    setExpanded(false)
    navigate('/login')
  }

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
    })

    if (result.isConfirmed) {
      localStorage.removeItem('username')
      localStorage.removeItem('token')
      localStorage.removeItem('authToken')
      localStorage.removeItem('userId')
      localStorage.removeItem('is_superuser')
      setExpanded(false)
      navigate('/login')
    }
  }

  const handleVaudit = () => {
    setExpanded(false)
    navigate("/admin")
  }

  const handleNavItemSelect = () => {
    setExpanded(false)
  }

  return (
    <div className={`home-container ${scrolled ? 'scrolled' : ''}`} style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Navbar expand="lg" className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`} expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavItemSelect}>V-Audit</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" id='toggleicon' />
          <Navbar.Collapse id="navbarNav">
            <Nav className="m-2" onSelect={handleNavItemSelect}>
              <Nav.Link as={Link} to="/" onClick={handleNavItemSelect}>Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutus" onClick={handleNavItemSelect}>About Us</Nav.Link>
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} to="/linkbuilding" onClick={handleNavItemSelect}>Link Building</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contentexplorer" onClick={handleNavItemSelect}>Content Explorer</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/keywordexplorer" onClick={handleNavItemSelect}>Keyword Explorer</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/linkExplorer" onClick={handleNavItemSelect}>Link Explorer</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/searchenginemarketing" onClick={handleNavItemSelect}>Search Engine Marketing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/searchengineoptimisation" onClick={handleNavItemSelect}>Search Engine Optimisation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/competitoranalysis" onClick={handleNavItemSelect}>Competitor Analysis</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/blogs" onClick={handleNavItemSelect}>Blog</Nav.Link>
              <Nav.Link as={Link} to="/contactus" onClick={handleNavItemSelect}>Contact</Nav.Link>
              <Nav.Link as={Link} to="/faq" onClick={handleNavItemSelect}>FAQ</Nav.Link>
              <Nav.Link as={Link} to="/pricing" onClick={handleNavItemSelect}>Pricing</Nav.Link>
              <div className="auth-buttons">
                {!username ? (
                  <button className='btnpink' onClick={handleSignupClick}>Free Trial</button>
                ) : (
                  <>
                    <button className='btnpink' onClick={handleLogout}>Logout</button>
                    <button className='btnpink' onClick={handleVaudit}>Vaudit</button>
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
