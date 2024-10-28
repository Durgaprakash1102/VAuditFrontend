import React, { useState } from 'react';

import '../Css/Header.css'; // Importing CSS file for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import aboutline from '../assets/aboutline.png';
import social from '../assets/social.jpg';
import social1 from '../assets/social1.jpg';
import social2 from '../assets/social2.png';




import { useNavigate } from 'react-router-dom';

const About = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate(); // Correct use of useNavigate

  // Function to handle the navigation toggle
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };
  const tickSymbol = (
    <span className="tick-symbol">✔</span>
  );

  const handleSignupClick = () => {
    navigate('/signup');
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

    const containerStyle = {
      backgroundImage: `url(${aboutline})`,
      backgroundSize: 'cover',
      width: '100%', // Adjust width as needed
      height: '100px', // Adjust height as needed
      overflow: 'hidden', // Hide overflowing content
      position: 'relative',
    };
  return (
    <div className="home-container">
      
      <div className="container-fluid" style={{ backgroundColor: '#fff' }}>


    


</div>


<div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>

     <br></br>


    <div className="row">
  <div className="col-md-12">
    <div className="row">
      <div className="col-md-8 text-center">
        <h1 className='text'>Social Media Marketing</h1>
        <p style={{color:"white", textAlign:"justify"}}>
          Social media marketing has become a crucial tactic for companies looking to improve their online visibility and interact with their target audience in the current digital era. Social media sites like TikTok, Facebook, Instagram, Twitter, LinkedIn, and Facebook present exceptional chances to connect and engage with millions of individuals worldwide. This article examines the principles, tactics, and potential developments in the ever-evolving field of social media marketing.
        </p>
        <br></br>
      </div>
      <div className="col-md-4 text-center">
      {<img src={social} alt="Social Media Marketing" style={{width: "100%", height: "90%"}} />}
      </div>
    </div>
  </div>
</div>
</div>
<br></br>
<div class="outer-container">
<div className="col-md-4 text-center">
      {<img src={social1} alt="Social Media Marketing" style={{width: "100%", height: "auto"}} />}
      </div>
        <div class="container1">
            <h1 style={{color:"orange"}}>What is Social Media Marketing?</h1>
            <p>
                Using social media platforms to advertise goods, services, or brands is known as social media marketing. 
                It includes a range of tasks like creating material, updating, running ads, and interacting with followers. 
                Increasing brand recognition, increasing website traffic, and increasing sales are the main objectives.
            </p>
        </div>
        
    </div>

<br></br><br></br>
    <div class="container2">
        <div class="card" style={{backgroundColor:"white",padding:"20px",borderRadius:"10px"}}>
            <h2><i class="fas fa-chart-line"></i> Future Trends in Social Media Marketing</h2>
            <p> <strong style={{color:"orange"}}>Influencer Promotion: </strong> Working together with influencers that have a large fan base can increase the reach and reputation of a business. Particularly micro-influencers are becoming more well-known because of their specialized audiences and excellent engagement rates.</p>
            <p>  <strong style={{color:"orange"}}>Video Content: </strong>Social media is still dominated by videos. Live streaming and short-form videos on websites like TikTok and Instagram Reels are growing in popularity.</p>
            <p>  <strong style={{color:"orange"}}>Social Commerce:</strong> Users may now make purchases straight from social media apps by adding shopping functionality. We expect this frictionless shopping experience to continue expanding.</p>
            <p>  <strong style={{color:"orange"}}>Augmented Reality (AR):</strong>AR is improving social media user interaction with brands. Users are engaged by features like interactive filters and virtual try-ons, which offer immersive experiences.</p>
            <p>  <strong style={{color:"orange"}}>User-Generated Content (UGC):</strong> Fostering a community where people are inspired to produce and distribute brand-related material increases credibility and trust. Consumer perceptions are significantly shaped by user-generated content.</p>
        </div>
        <div class="card" style={{backgroundColor:"white",padding:"20px",borderRadius:"10px"}}>
            <h2><i class="fas fa-thumbs-up"></i> Benefits of Social Media Marketing</h2>
            <p>  <strong style={{color:"orange"}}>Enhanced Brand Awareness: </strong>There are billions of active consumers on social media platforms. Businesses can greatly boost their visibility and reach a larger audience by keeping an active presence.</p>
            <p>  <strong style={{color:"orange"}}>Cost-Effective: </strong>Social media marketing is comparatively less expensive than traditional marketing techniques. The majority of platforms make it possible for businesses of all sizes to create accounts for free and provide reasonably priced advertising alternatives.</p>
            <p>  <strong style={{color:"orange"}}>Enhanced Customer Engagement:</strong> Social media makes it possible to communicate directly with consumers, which cultivates bonds and increases brand loyalty. Companies may receive insightful feedback, handle concerns, and reply to inquiries instantly.</p>
            <p>  <strong style={{color:"orange"}}>Improved Targeting Options:</strong> Businesses may reach particular demographics, interests, and behaviours by utilizing the advanced targeting options that social media networks offer. This guarantees that marketing initiatives are focused on the most pertinent target market.</p>
            <p>  <strong style={{color:"orange"}}>Measurable Outcomes: </strong>Social media networks provide in-depth insights on campaign performance through integrated analytics tools. Metrics like conversion rates, click-through rates, and engagement rates assist firms in gauging the success of their tactics.</p>
        </div>
    </div>
<br></br>

<div class="container3">
        <h1>Effective Social Media Marketing Strategies</h1>
        <div class="strategy">
            <h2><i class="fas fa-bullseye"></i> Establish Specific Objectives</h2>
            <p>Decide what you want your social media marketing campaigns to accomplish. Increasing brand exposure, improving sales, generating leads, and increasing website traffic are common objectives.</p>
        </div>
        <div class="strategy">
            <h2><i class="fas fa-users"></i> Know Your Audience</h2>
            <p>It's critical to comprehend who your target audience is. To properly customize your content and marketing, investigate their online behaviours, interests, and demographics.</p>
        </div>
        <div class="strategy">
            <h2><i class="fas fa-paint-brush"></i> Produce Interesting Content</h2>
            <p>Social media marketing relies heavily on content. Create a compelling blend of educational, entertaining, and promotional content for your target audience. Make advantage of images, videos, infographics, and information created by users to keep your feed interesting.</p>
        </div>
        <div class="strategy">
            <h2><i class="fas fa-clock"></i> The Secret Is Consistency</h2>
            <p>Consistently publishing content guarantees that your brand stays in the forefront of your audience's attention. Create a content calendar to help you organize and plan your posts ahead of time.</p>
        </div>
        <div class="strategy">
            <h2><i class="fas fa-ad"></i> Utilize Paid Advertising</h2>
            <p>Social media organic reach may be constrained. Invest in paid advertising to expand your audience and successfully target particular demographics. Make use of many ad types, including sponsored articles, video advertisements, and carousel ads.</p>
        </div>
        <div class="strategy">
            <h2><i class="fas fa-comments"></i> Interact with Your Audience</h2>
            <p>Social media provides a two-way avenue for connection. Participate in conversations, answer comments, and express gratitude to your followers. This encourages loyalty and creates a sense of community.</p>
        </div>
        <div class="strategy">
            <h2><i class="fas fa-chart-line"></i> Analyze and Modify</h2>
            <p>Keep a close eye on your performance indicators and modify your plans in response to the information. Determine what works and what doesn't, then improve your strategy to get better outcomes.</p>
        </div>
    </div>
<br></br><br></br>
    <div class="container4">
        <div class="margin-line"></div>
        <div class="margin-line right"></div>
        <div class="content">
        {<img src={social2} alt="Social Media Marketing" style={{float:"left",width:"100px",marginRight:"10px",borderRadius:"10px"}}  />}
        <p>Social media marketing is an effective tool that can change how companies interact with their target market. Through strategic implementation and optimal use, enterprises can augment their digital footprint, cultivate clientele, and propel expansion. In order to succeed over the long term in this fast-paced industry, one must keep up with the most recent trends and make constant adjustments to the social media.</p>
        </div>
    </div>







</div>

  
  );
};

export default About;
