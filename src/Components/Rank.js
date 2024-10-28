import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import support from '../assets/support.webp'; // Adjust the file path and name accordingly

import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Rank from '../assets/Rank.png';
// import seo2 from '../assets/seo2.jpg'; 
import localseo from '../assets/localseo.webp'; 

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate(); // Correct use of useNavigate

  // Function to handle the navigation toggle
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleSigninClick = () => {
    // Navigate to the login page
    navigate('/login');
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
      
   
    


<div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>
<br></br>

    <div className="container-fluid"style={{ backgroundColor: '#0235c3' }}>
<div className="container"style={{ backgroundColor: '#0235c3' }}>
    <div className="row"style={{ backgroundColor: '#0235c3' }}>
    <div className="col-sm-12"style={{ backgroundColor: '#0235c3',display:'flex' }}>

  <div className="col-md-7"style={{ backgroundColor: '#0235c3' }}>
    <div className=" justify-content-center align-items-center">
      {/* Adjust column size and alignment */}
        <h3 className='textstyle'>Success is not just about where you are, but also how far you've come. Keep track of your progress with our rank tracker</h3><br></br>
        <button className="btn-custom">Get Started</button>

        <br></br>
     
    </div>
  </div>
  <div className="col-md-5">
      { <img src={Rank} alt="Description of your image" /> }
    </div>
</div>
</div>
</div></div></div><br></br>

<div className="container-fluid">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 class="orange-heading text-center">Get ranking updates for desktop and mobile</h2>
        <p class="text-center">Rank Tracker lets you monitor your Google rankings on desktop and mobile across 190 countries. Just input or import a list of keywords, add multiple countries per keyword, and tell us your competitors’ URLs. Ahrefs will start tracking data and will send you regular updates.</p>
      </div>
    </div>
  </div>
</div><br></br><br></br>


<div className="container-fluid">
  <div className="container">
    <div className="row justify-content-center">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/BjT-QOqsjz4?si=8pOePoG5r-H7yqce" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>


<div className="container-fluid mt-5"  style={{ backgroundColor: '#f36225' }}>  <div className="container" style={{ backgroundColor: '#f36225' }}>
    <div className="row justify-content-center" style={{ backgroundColor: '#f36225' }}>
      <div className="col-md-8" style={{ backgroundColor: '#f36225' }}>
        <h2 class="orange-heading text-center">What is Rank Tracker?</h2>
        <p class="text-white">Rank Tracker is all-in-one software designed to track keywords with freely customizable rank tracking dashboards and SEO reports. The original keyword rank checker tool by SEO PowerSuite serves around 20,000 monthly users, becoming part and parcel of daily SEO ranks checking..</p><br></br>


        <p class="text-white">Rank Tracker is the most powerful tracking software suitable for all types of professional SEO tasks. You can track ranks without any keyword limits, check positions in desktop and mobile SERPs, optimize for local search, do keyword research, analyze competitors' keywords and traffic — all in one ranking tool.

461 reviews
297 reviews
</p>
      </div>
    </div>
  </div>
</div><br></br><br></br>

<div class="container-fluid mt-3">
  <div class="container">
  <h2 class="orange-heading text-center">See if your website ranks in SERP features</h2>
    <div class="row">
  

      <div class="col-md-4">
        <ul class="custom-list">
          <li>Featured snippet</li>
          <li>Local pack</li>
          <li>Sitelinks</li>
          <li>Top stories</li>
          <li>Image pack</li>
        </ul>
      </div>

      <div class="col-md-4">
        <ul class="custom-list">
          <li>Thumbnails</li>
          <li>X (Twitter)</li>
          <li>Top ads</li>
          <li>Bottom ads</li>
          <li>Shopping results</li>
        </ul>
      </div>

      <div class="col-md-4">
        <ul class="custom-list">
          <li>Knowledge card</li>
          <li>Knowledge panel</li>
          <li>People also ask</li>
          <li>Videos</li>
          <li>Video preview</li>
        </ul>
      </div>

    </div>
  </div>
</div>
<br></br><br></br>



<div className="container-fluid">
<div className="container">
    <div className="row">
    
  <div className="col-md-7">
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-md-12 text-center"> <br></br><br></br><br></br>{/* Adjust column size and alignment */}
        <h3 className='textseo'>Local SEO rank tracker</h3>
        <p>Looking to track keyword rankings in a location different from your own? Or, perhaps, search engine rankings from multiple locations? You've come to the right place.

Rank Tracker is the only local rank tracking software that accurately checks positions for the exact location of your choice: country, state, city, or even an exact street address. Like everything else in this keyword position tracker, these locations are — you guessed it — unlimited.</p>
        <br></br>
      </div>
    </div>
  </div>
  <div className="col-md-5">
      <img src={localseo} alt="Description of your image" />
    </div>

</div>
</div></div><br></br>




















</div>

  
  );
};

export default Home;
