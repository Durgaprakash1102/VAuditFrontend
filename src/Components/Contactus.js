import React from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"

const Contactus = () => {
  return (
    <div>
      <section className="banner">
        <div className="banner-content mb-4">
          <h2>Contact Us</h2>
          <p>We're here to help! Get in touch with us for any queries or concerns.</p>
        </div>
      </section>

      <div className="card-section">
        <div className="card-custom">
          <FaEnvelope size={30} />
          <h4 className='heading'>Email Us</h4>
          <p>info.vindus@gmail.com</p>
        </div>
        <div className="card-custom">
          <FaMapMarkerAlt size={30} />
          <h4 className='heading'>Location</h4>
          <p>Shanthi Nagar, Behind Sanjay Steel Bazar, Lalitha Nagar, Dilsukhnagar, Hyderabad, Telangana 500060</p>
        </div>
        <div className="card-custom">
          <FaPhone size={30} />
          <h4 className='heading'>Call Us</h4>
          <p>+1 (123) 456-7890</p>
        </div>
      </div>
      <section className="seo-tool-info">
          <div className="p-4">
            <h2 className='text-center'>Why Choose Our SEO Tool?</h2>
            <p>
              Our SEO tool provides comprehensive insights into your website’s performance, helping you optimize for better rankings and traffic. Here’s what you can expect:
            </p>
            <ul>
              <li><strong>Detailed SEO Analysis:</strong> Get a full breakdown of your site's on-page SEO, meta tags, headings, and more.</li>
              <li><strong>Security Checks:</strong> We scan your website for security issues and vulnerabilities to ensure it's safe for users and compliant with search engine guidelines.</li>
              <li><strong>External Links Monitoring:</strong> Stay on top of your external links to ensure you're building a strong and relevant backlink profile.</li>
              <li><strong>Performance Insights:</strong> Analyze page speed, mobile responsiveness, and other performance factors that impact your SEO.</li>
            </ul>
            <p>
              Whether you're a beginner or an expert, our SEO tool simplifies the process of improving your website’s search engine visibility. Leverage our insights to make data-driven decisions and achieve higher rankings.
            </p>
          </div>
      </section>
    </div>
  )
}

export default Contactus
