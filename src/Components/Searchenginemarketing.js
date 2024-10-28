import '../Css/Header.css'
import engine from '../assets/engine.jpg'
import engine1 from '../assets/engine1.jpg'
import sem from '../assets/sem.webp'
import sem1 from '../assets/sem1.webp'

const SearchEngineMarketing = () => {
  return (
    <div className="home-container">
      
      <div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>
        <div className="row py-5">
          <div className="col-md-12 text-center">
            <h1 className="text-white display-4">Search Engine Marketing</h1>
            <div className="card-body">
              <p className="lead text-white p-2">
                Search engine marketing (SEM) is a critical aspect of digital marketing. It focuses on increasing a website's visibility on search engine results pages (SERPs) through paid advertising. Businesses leverage SEM to drive traffic, convert leads into customers, and ultimately grow. This guide delves into the intricacies of SEM, exploring strategies, best practices, and its overall significance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="card shadow-lg border-0">
          <div className="row g-0">
            <h1 className="bg-warning text-white text-center py-3 w-100">What is Search Engine Marketing?</h1>
            <div className="col-md-6">
              <img src={engine} alt="Description of SEM" className="img-fluid w-100" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="card-body">
                <p className="lead">
                  SEM encompasses all efforts to enhance a website's exposure on search engines like Google, Bing, and Yahoo. Unlike Search Engine Optimization (SEO) that targets organic results, SEM primarily utilizes paid tactics. These include advertising models like Cost-Per-Thousand Impressions (CPM), Cost-Per-Acquisition (CPA), and Pay-Per-Click (PPC).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="text-warning">Importance of SEM</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="fas fa-eye text-primary" style={{ fontSize: '24px' }}></i> Instant Visibility: SEM ensures your advertisements show up on the first page of search results, providing immediate visibility.
                </li>
                <li className="list-group-item">
                  <i className="fas fa-bullseye text-success" style={{ fontSize: '24px' }}></i> Targeted Advertising: Advertisers can target specific audiences based on keywords, location, demographics, and time of day.
                </li>
                <li className="list-group-item">
                  <i className="fas fa-chart-line text-warning" style={{ fontSize: '24px' }}></i> Measurable Outcomes: SEM offers detailed metrics to track ad effectiveness and make real-time adjustments.
                </li>
                <li className="list-group-item">
                  <i className="fas fa-expand-arrows-alt text-danger" style={{ fontSize: '24px' }}></i> Scalability: SEM campaigns can be scaled based on budget and performance, providing flexibility.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img src={engine1} alt="A visual representation of SEM" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h1 className="text-center display-4 text-warning py-3">Key Components of SEM</h1>
        <div className="row g-4">
          <div className="col-md-6">
            <img src={sem} alt="SEM Component" className="img-fluid w-100" />
            <img src={sem1} alt="SEM Component" className="img-fluid w-100 mt-3" />
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm border-info mb-4">
              <div className="card-header bg-info text-white">
                <h3>Keyword Research</h3>
              </div>
              <div className="card-body">
                <p>
                  <i className="fas fa-search text-primary"></i> <span className="h5">Unlocking the Secrets:</span> Keyword research is the foundation of successful SEM. Tools like Ahrefs, SEMrush, and Google Keyword Planner help you find the keywords your target audience uses.
                </p>
              </div>
            </div>
            <div className="card shadow-sm border-warning mb-4">
              <div className="card-header bg-warning text-white">
                <h3>Ad Creation</h3>
              </div>
              <div className="card-body">
                <p>
                  <i className="fas fa-magnet text-warning"></i> <span className="h5">Crafting Captivating Ads:</span> Compelling headlines, informative descriptions, and clear CTAs are key. Enhance performance with sitelinks, call buttons, and ad extensions.
                </p>
              </div>
            </div>
            <div className="card shadow-sm border-success mb-4">
              <div className="card-header bg-success text-white">
                <h3>Landing Pages</h3>
              </div>
              <div className="card-body">
                <p>
                  <i className="fas fa-sign-in-alt text-success"></i> <span className="h5">Conversion Champions:</span> Landing pages need to be optimized for conversions and relevant to your ads. Provide a seamless user experience and persuasive content with clear CTAs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card shadow-sm border-primary text-center">
              <div className="card-header bg-primary text-white">
                <h3>Bid Management & Ad Auction</h3>
              </div>
              <div className="card-body">
                <p>
                  <i className="fas fa-gavel text-primary"></i> <span className="h5">Bidding for Visibility:</span> Platforms like Google Ads offer automated bidding strategies to optimize bids for clicks, conversions, or return on ad spend (ROAS). Your bid and ad Quality Score determine placement in the ad auction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm border-danger text-center">
              <div className="card-header bg-danger text-white">
                <h3>Tracking & Analytics</h3>
              </div>
              <div className="card-body">
                <p>
                  <i className="fas fa-chart-pie text-danger"></i> <span className="h5">Data-Driven Decisions:</span> Utilize tools like Google Analytics and ad platform insights to measure campaign performance. Track metrics such as CTR, CPA, and overall ROI to refine your strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchEngineMarketing