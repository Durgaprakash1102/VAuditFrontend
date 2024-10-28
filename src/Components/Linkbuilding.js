import '../Css/Header.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import trust from '../assets/trust.png'
import traffic from '../assets/traffic.jpg'
import improve from '../assets/improve.jpg'

const Linkbuilding = () => {

  return (
    <div className="home-container">
      <div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>
        <div className="row justify-content-center align-items-center text-center mb-4">
          <div className="col-md-8 mt-5">
            <h3 className="text1 mb-4" style={{ color: 'white' }}>
              Understanding Link Building: A Key Component of SEO
            </h3>
            <button className="btn btn-danger btn-lg mb-4">Get Started</button>
          </div>
        </div>
      </div>

      <div className="blue-border p-4">
        <h1 className="text-center text-warning mb-3">Why Link Building Matters?</h1>
        <p>
          Link building is an essential component of search engine optimization (SEO). It entails obtaining links
          from various websites to your own. Search engines use these links to explore the web and assist people
          navigate between pages. Effective link building can improve a website's visibility, reputation, and
          search engine rankings.
        </p>
      </div>

      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
            <div className="card custom-card h-100">
              <img src={improve} className="img-fluid" alt="Line chart showing website ranking improvement" />
              <div className="card-body">
                <h5 className="card-title">Improves Search Engine Rankings</h5>
                <p className="card-text">Links act as votes, boosting your website's position in search results.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
            <div className="card custom-card h-100">
              <img src={traffic} className="img-fluid" alt="Icon depicting website traffic flow" />
              <div className="card-body">
                <h5 className="card-title">Increases Web Traffic</h5>
                <p className="card-text">Credible links drive visitors from trusted websites to your content.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
            <div className="card custom-card h-100">
              <img src={trust} className="img-fluid" alt="Handshake icon symbolizing trust" />
              <div className="card-body">
                <h5 className="card-title">Establishes Authority and Trust</h5>
                <p className="card-text">Links from reputable sources signal valuable and trustworthy content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Linkbuilding
