import '../Css/Header.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import aboutcard from '../assets/aboutcard.png'
import aboutcard2 from '../assets/aboutcard2.png'
import aboutcard3 from '../assets/aboutcard3.png'
import image from '../assets/image.png'

const About = () => {

  const tickSymbol = (
    <span className="tick-symbol">✔</span>
  )

  return (
    <div className="home-container">
      <div className="container-fluid mb-2" style={{ backgroundColor: '#0235c3' }}>
        <div className="row justify-content-center align-items-center py-5">
          <div className="text-center">
            <p className="display-4 fw-bold text-white typing-effect">
              Empowering businesses to reach their full potential online, one optimized keyword at a time
            </p>
            <button className="btn btn-danger btn-lg mt-3">Get Started</button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="orange-heading mb-4">Who We Are ?</h1>
            <p>
              We are a passionate team of seasoned SEO professionals, developers, and digital marketers with a proven track record in delivering exceptional results. With years of hands-on experience, we specialize in crafting innovative and user-friendly tools that streamline SEO processes, empowering businesses to improve their online visibility effortlessly. Our commitment to staying ahead of industry trends enables us to provide cutting-edge solutions tailored to meet the unique needs of every client.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
            <div className="card custom-card h-100">
              <img src={aboutcard} alt="Research" className="img-fluid" />
              <div className="card-body">
                <h5 className="card-title text-center">Research</h5>
                <p className="card-text text-center">
                  Migrating your rank Google Analytics to another solution.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
            <div className="card custom-card h-100">
              <img src={aboutcard2} alt="Customize" className="img-fluid" />
              <div className="card-body">
                <h5 className="card-title text-center">Customize</h5>
                <p className="card-text text-center">
                  Migrating your rank Google Analytics to another solution.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
            <div className="card custom-card h-100">
              <img src={aboutcard3} alt="Targeting" className="img-fluid" />
              <div className="card-body">
                <h5 className="card-title text-center">Targeting</h5>
                <p className="card-text text-center">
                  Migrating your rank Google Analytics to another solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="orange-heading">Who We Are</h1>
              <p>
                <span>S</span>EO strategies help you rank higher on the search engine’s results page (SERP). This means that when your target customers search for products and services your industry offers, they can find your website.
              </p>
              <ul className="list-unstyled">
                <li>{tickSymbol} User-Friendly Interface</li>
                <li>{tickSymbol} Advanced reporting and analytics</li>
                <li>{tickSymbol} Customizable branding options</li>
                <li>{tickSymbol} Start your journey to success</li>
              </ul>
              <button className="btn btn-primary mt-3">Explore More</button>
            </div>
            <div className="col-md-6">
              <img src={image} alt="SEO Strategies" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About