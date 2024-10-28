import React from 'react'

export const Footer = (props) => {
  return (
  

<div className="container-fluid" style={{ background: '#173fd4' }} >
<div className="container"  style={{ background: '#173fd4' }}>
     <div class="row">                       
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="single_footer"><br></br>
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact US</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">For investors</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address"><br></br>
                            <h4>More Tools</h4>
                            <ul>
                                <li><a href="#">Enterprice Seo</a></li>
                                <li><a href="#">Back link checker</a></li>
                                <li><a href="#">Keyword Generator,Explorer</a></li>
                                <li><a href="#">Rank Tracker</a></li>
                                <li><a href="#">Site Audit</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address"><br></br>
                            <h4>Follow US</h4>
                            <div class="signup_form">                           
                                <form action="#" class="subscribe">
                                    {/* <input type="text" class="subscribe__input" placeholder="Enter Email Address"> */}
                                    <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="social_profile">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>                          
                    </div>      
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                        <p class="copyright">Copyright © 2022 <a href="#">Vindus</a>.</p>
                    </div>              
                </div>               
            </div>
        </div>




  )
}

export default Footer;
