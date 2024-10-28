import support from '../assets/support.webp'
import servicesicon1 from '../assets/services-icon-1.png'
import servicesicon2 from '../assets/services-icon-2.png'
import servicesicon3 from '../assets/services-icon-3.png'
import seotool1 from '../assets/seo-tools-1.png'
import seotool2 from '../assets/seo-tools-2.png'
import seotool3 from '../assets/seo-tools-3.png'
import services2shape1 from '../assets/services-2shape-1.png'
import servicesicon4 from '../assets/services-icon-4.png'
import { Container, Row, Col, Card } from 'react-bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="home-container">
      <div className="container-fluid mb-4" style={{ backgroundColor: '#0235c3' }}>
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-md-12">
            <div className="col-md-8 text-center mx-auto">
              <h1 className="display-4 fw-bold text-white typing-effect">
                Thinking about Digital Marketing, get the prolific results with one tool.
              </h1>
              <button className="btn btn-danger btn-lg">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-4">
        <Container className="services-section" fluid>
          <Row>
            <Col className="service-col" style={{ backgroundColor: '#E2F1E3' }}>
              <h2 className='p-2 text-center'>Growing Your Business</h2>
              <Card.Text>
                We help scale your business with expert strategies and dedicated support.
              </Card.Text>
              <img src={seotool1} alt="Growing Your Business" className="service-img" />
            </Col>
            <Col className="service-col" style={{ backgroundColor: '#FDE2CC' }}>
              <h2 className='p-2 text-center'>Speed Optimization</h2>
              <Card.Text>
                We help scale your business with expert strategies and dedicated support.
              </Card.Text>
              <img src={seotool2} alt="Speed Optimization" className="service-img" />
            </Col>
            <Col className="service-col" style={{ backgroundColor: '#BFEFFD' }}>
              <h2 className='p-2 text-center'>Testing Capabilities</h2>
              <Card.Text>
                We help scale your business with expert strategies and dedicated support.
              </Card.Text>
              <img src={seotool3} alt="Testing Capabilities" className="service-img" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-fluid mb-4">
        <section className="pricing-section py-5">
          <div className="container">
            <h2 className="text-center mb-4">SEO Tool Pricing Plans</h2>
            <div className="row">
              {/* BASIC PLAN */}
              <div className="col-md-4 mb-4">
                <div className="card pricing-card basic h-100 p-4 text-center position-relative"
                    style={{ backgroundColor: '#f0f9ff', border: '1px solid #cccccc' }}>
                  <h3 className="fw-bold">BASIC</h3>
                  <p>Perfect for individuals and small businesses starting with SEO.</p>
                  <ul className="list-unstyled text-start">
                    <li><span className="checkmark">&#10003;</span> Basic Keyword Research</li>
                    <li><span className="checkmark">&#10003;</span> Site Audits</li>
                    <li><span className="checkmark">&#10003;</span> Rank Tracking (100 Keywords)</li>
                    <li><span className="checkmark">&#10003;</span> Technical SEO</li>
                    <li><span className="checkmark">&#10003;</span> Competitor Analysis</li>
                    <li><span className="checkmark">&#10003;</span> On-Page SEO Checks</li>
                    <li><span className="checkmark">&#10003;</span> Off-Page SEO Checks</li>
                    <li><span className="checkmark">&#10003;</span> Free Customer Support (Email)</li>
                  </ul>
                  <button className="btn btn-primary mt-auto">
                    <div className="arrow-icon"><span>Choose Plan </span>➔</div>
                  </button>
                </div>
              </div>

              {/* PREMIUM PLAN */}
              <div className="col-md-4 mb-4">
                <div className="card pricing-card premium h-100 p-4 text-center position-relative"
                    style={{ backgroundColor: '#e7ffe7', border: '1px solid #cccccc' }}>
                  <p className="best-tag position-absolute top-0 start-0 p-1 bg-danger text-white">MOST POPULAR</p>
                  <h3 className="fw-bold">PREMIUM</h3>
                  <p>Ideal for small to mid-sized businesses needing comprehensive SEO tools.</p>
                  <ul className="list-unstyled text-start">
                    <li><span className="checkmark">&#10003;</span> Advanced Keyword Research</li>
                    <li><span className="checkmark">&#10003;</span> Full Site Audits</li>
                    <li><span className="checkmark">&#10003;</span> Rank Tracking (500 Keywords)</li>
                    <li><span className="checkmark">&#10003;</span> Backlink Analysis</li>
                    <li><span className="checkmark">&#10003;</span> Competitor Monitoring</li>
                    <li><span className="checkmark">&#10003;</span> Custom SEO Reports</li>
                    <li><span className="checkmark">&#10003;</span> Historical Data</li>
                    <li><span className="checkmark">&#10003;</span> Advanced Site Crawling</li>
                    <li><span className="checkmark">&#10003;</span> Multi-User Support</li>
                    <li><span className="checkmark">&#10003;</span> Priority Customer Support</li>
                  </ul>
                  <button className="btn btn-success mt-auto">
                    <div className="arrow-icon"><span>Choose Plan </span>➔</div>
                  </button>
                </div>
              </div>

              {/* ADVANCED PLAN */}
              <div className="col-md-4 mb-4">
                <div className="card pricing-card advanced h-100 p-4 text-center"
                    style={{ backgroundColor: '#fff8e1', border: '1px solid #cccccc' }}>
                  <h3 className="fw-bold">ADVANCED</h3>
                  <p>Perfect for larger businesses with deep SEO needs and competitive analysis.</p>
                  <ul className="list-unstyled text-start">
                    <li><span className="checkmark">&#10003;</span> Unlimited Keyword Research</li>
                    <li><span className="checkmark">&#10003;</span> Full Technical SEO Audit</li>
                    <li><span className="checkmark">&#10003;</span> Rank Tracking (Unlimited Keywords)</li>
                    <li><span className="checkmark">&#10003;</span> AI-Powered Content Suggestions</li>
                    <li><span className="checkmark">&#10003;</span> Backlink Monitoring & Analysis</li>
                    <li><span className="checkmark">&#10003;</span> API Access for Data Integration</li>
                    <li><span className="checkmark">&#10003;</span> White-label Reports for Agencies</li>
                    <li><span className="checkmark">&#10003;</span> Competitor Analysis with Alerts</li>
                    <li><span className="checkmark">&#10003;</span> 24/7 Premium Support</li>
                    <li><span className="checkmark">&#10003;</span> Multi-Language Support</li>
                  </ul>
                  <button className="btn btn-warning mt-auto">
                    <div className="arrow-icon"><span>Choose Plan </span>➔</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid mb-4">
        <div className="container mb-2">
          <div className="row">
            <div className="col-md-6">
              <h2 className="font-large" style={{ fontSize: '30px', color: '#f36225' }}>24/7 Support</h2>
              <p className="text-black font-medium" style={{ fontSize: '20px' }}>
                We, At VAudit, are available 24/7 to help you out of any kind of tricky situations if you get stuck.
                Feel free to reach out to us at any given time to get the work done.
              </p>
              <p className="text-black font-medium" style={{ fontSize: '20px' }}>
                Personalized assistance is also available depending on the seriousness of the issue.
              </p>
              <button type="button" className="btn btn-dark">Get Help</button>
            </div>
            <div className="col-md-6">
              <img src={support} alt="Support" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-4 support-section">
        <div className="container slider-container">
          <div className="row">
            <h1 className="seo-text text-center">
              Learn more about VAudit
            </h1>
            <Slider {...settings} className="slider">
              <div className="slider-item">
                <img src={servicesicon1} alt="SEO Marketing" className="slider-img" />
                <h3>SEO Marketing</h3>
                <p>Maximize visibility and ranking.</p>
              </div>
              <div className="slider-item">
                <img src={servicesicon2} alt="Website Optimization" className="slider-img" />
                <h3>Website Optimization</h3>
                <p>Enhance website performance.</p>
              </div>
              <div className="slider-item">
                <img src={servicesicon3} alt="Content Marketing" className="slider-img" />
                <h3>Content Marketing</h3>
                <p>Engage and retain customers.</p>
              </div>
              <div className="slider-item">
                <img src={servicesicon4} alt="Email Marketing" className="slider-img" />
                <h3>Email Marketing</h3>
                <p>Reach customers directly.</p>
              </div>
              <div className="slider-item">
                <img src={services2shape1} alt="Social Media Marketing" className="slider-img" />
                <h3>Social Media Marketing</h3>
                <p>Build brand awareness.</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
