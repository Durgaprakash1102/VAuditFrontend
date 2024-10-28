import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import support from '../assets/support.webp'; // Adjust the file path and name accordingly
import { styled } from '@mui/system';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '../Css/Header.css'; // Importing CSS file for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'; // Import Slider component from react-slick
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Importing images from assets directory
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';
import about from '../assets/about.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'; // Ensure you have this import
import digital from '../assets/digital.png'; // Adjust the file path and name accordingly
import digital2 from '../assets/digital2.png';
import seologo from '../assets/seologo.png';


import { useNavigate } from 'react-router-dom';

const About = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate(); // Correct use of useNavigate

  // Function to handle the navigation toggle
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  
  const handleSignupClick = () => {
    navigate('/signup');
  };



    const [activeAccordion, setActiveAccordion] = useState('');
  
    const handleAccordionClick = (accordionId) => {
        setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
      };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Number of cards to show at once
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768, // Adjust number of cards shown for different screen sizes
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }

    
  return (
    <div className="home-container">
      
      <div className="container-fluid" style={{ backgroundColor: '#fff' }}>


      

</div>


<div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>


    <div className="row  justify-content-center align-items-center text-center">
  <div className="col-md-8">
   
      <div className="text-center"> {/* Adjust column size and alignment */}
        <h3 className='text1'>Empowering businesses to reach their full potential online, one optimized keyword at a time</h3>
        <br></br>
        <button className="btn-custom">Get Started</button>
      </div>
  

      <div className="col-md-7">

        </div>
  </div>
</div>

</div><br></br>
<div className="row">
  
  <div className="col-md-4 custom-style">
    <h1 className="orange-heading">Features Loved Our Digital Marketing Services!</h1>
    <p>
      {/* Add your description or content here */}
    </p>
    <br />
    <img src={digital2} alt="Description of the image" />
  </div>

  <div className="col-md-8">
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card custom-card">

          <div className="card-body">
            <h5 className="card-title">Seo Marketing</h5>
            <p className="card-text">SEO (Search Engine Optimization) marketing is a strategy focused on improving a website's visibility in search engine results pages (SERPs). The primary goal is to increase organic (non-paid) traffic to the website by ranking higher for relevant search queries.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card custom-card">
          <div className="card-body">
            <h5 className="card-title">Content Marketing</h5>
            <p className="card-text">Content marketing is a strategic marketing approach focused on creating, publishing, and distributing valuable, relevant, and consistent content to attract and engage a clearly defined audience.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card custom-card">
          <div className="card-body">
            <h5 className="card-title">Digital Marketing</h5>
            <p className="card-text">Digital marketing is the use of digital channels, platforms, and technologies to promote and market products, services, or brands to a target audience. </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card custom-card">
          <div className="card-body">
            <h5 className="card-title">Email Marketing</h5>
            <p className="card-text">Email marketing is a digital marketing strategy that involves sending targeted emails to a group of recipients to promote products, services, or content, nurture relationships, and achieve marketing goals. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</div>

  
  );
};

export default About;
