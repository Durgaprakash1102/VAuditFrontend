import '../Css/Header.css';

const SearchEngineOptimisation = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-md-8 text-center mx-auto">
            <h1 className="display-4 fw-bold text-white typing-effect">
              Search Engine Optimization - An Essential Guide
            </h1>
            <button className="btn btn-danger btn-lg mt-3">Get Started</button>
          </div>
        </div>
      </div>

      {/* SEO Overview Section */}
      <div className="container-fluid bg-light seo-overview py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <p className="lead">
                The process of making a website or web page more visible and highly ranked in a search engine's organic (non-paid) results is known as search engine optimization, or SEO. SEO is an essential component of digital marketing that includes a range of tactics and approaches meant to raise a website's search engine rankings, increase traffic, and ultimately boost conversion rates.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12">
              <h3 className="text-center importance-heading text-primary">The Importance of SEO</h3>
              <p className="text-center">
                The primary goal of SEO is to attract more visitors to a website by ensuring it appears higher on search engine results pages (SERPs) for relevant queries. Higher visibility in search results typically leads to increased traffic and more opportunities to convert prospects into customers. SEO is crucial because:
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Can Do Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#f0f4f7' }}>
        <div className="container">
          <div className="row text-center mb-4">
            <h4 className="ppc-text text-dark">What We Can Do For You</h4>
          </div>
          <div className="row">
            {[{
              icon: 'fas fa-chess',
              title: 'PPC Strategy',
              description: 'Maximize your ROI with a data-driven PPC strategy that targets the right audience, optimizes ad performance, and continuously adapts to market trends.'
            }, {
              icon: 'fas fa-shopping-cart',
              title: 'Shopping Ads',
              description: 'Shopping ads provide a highly visual and engaging way to showcase your products directly in search results, driving higher click-through rates and increasing sales by reaching customers actively searching for what you offer.'
            }, {
              icon: 'fas fa-chart-line',
              title: 'Tracking',
              description: 'Accurate tracking and analytics are essential in PPC campaigns to monitor performance, optimize ad spend, and measure ROI, ensuring every click contributes to your business goals.'
            }, {
              icon: 'fas fa-pen',
              title: 'Ad Copywriting',
              description: 'Effective ad copywriting is key to capturing attention and driving conversions by crafting persuasive messages that resonate with your target audience.'
            }, {
              icon: 'fas fa-key',
              title: 'Keywords',
              description: 'Effective keyword research and selection are crucial for a successful PPC campaign, ensuring your ads reach the most relevant audience and achieve higher conversion rates.'
            }, {
              icon: 'fas fa-wrench',
              title: 'PPC Optimization',
              description: 'Continuous PPC optimization is vital for improving campaign performance by refining keywords, adjusting bids, testing ad copy, and analyzing data.'
            }].map((feature, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="feature-icon mb-3">
                      <i className={`${feature.icon} fa-3x text-primary`}></i>
                    </div>
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="card-text">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PPC Services Section */}
      <div className="container-fluid ppc-container py-5" style={{ backgroundColor: '#e6f2ff' }}>
        <h2 className="text-center mb-4 text-dark">PPC Management Services</h2>
        <div className="container">
          <div className="row text-center">
            {[
              'Google Ads Management',
              'Facebook & Instagram Ads',
              'LinkedIn PPC Advertising',
              'Amazon PPC Management',
              'Microsoft Advertising (Bing)',
              'Advanced Remarketing',
              'Landing Page Design',
              'PPC Campaign Optimization',
              'Conversion Tracking Reporting',
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card h-100 w-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{service}</h5>
                    <p className="card-text">
                      Brief description of {service} services can go here.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary btn-lg">Schedule A Consultation ➔</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEngineOptimisation;