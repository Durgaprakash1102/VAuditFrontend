import meet from '../assets/meet.png';

const Pricing = () => {
  return (
    <div className="home-container">
      <div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>
        <div className="row">
          <div className="col-md-12 text-center py-5">
            <h3 className="text-white">Our Plans & Pricing</h3>
            <p className="text-white">
              Unlock the full potential of your SEO strategy with our tailored plans. Discover insights that drive results with comprehensive data and tools.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          {[
            {
              title: "Basic Plan",
              price: "Free",
              features: [
                { icon: "fas fa-project-diagram", text: "5 Projects" },
                { icon: "fas fa-history", text: "1 Year of Data" },
                { icon: "fas fa-chart-line", text: "Basic Dashboard Access" },
                { icon: "fas fa-globe", text: "Site Explorer Tool" },
                { icon: "fas fa-key", text: "Keyword Tracking (50 Keywords)" },
                { icon: "fas fa-search", text: "Page Audit (10 pages)" },
              ],
              description: "Ideal for startups and small businesses looking to begin their SEO journey."
            },
            {
              title: "Pro Plan",
              price: "$399",
              features: [
                { icon: "fas fa-project-diagram", text: "15 Projects" },
                { icon: "fas fa-calendar-alt", text: "3 Years of Data" },
                { icon: "fas fa-user-friends", text: "Advanced Dashboard Access" },
                { icon: "fas fa-plus", text: "Includes All Basic Features" },
                { icon: "fas fa-file-alt", text: "Content Optimization Tool" },
                { icon: "fas fa-clone", text: "Batch Analysis (up to 100 URLs)" },
                { icon: "fas fa-sync-alt", text: "SERP Comparison Tool" },
              ],
              description: "Perfect for growing businesses needing comprehensive data and tools."
            },
            {
              title: "Enterprise Plan",
              price: "$799",
              features: [
                { icon: "fas fa-project-diagram", text: "Unlimited Projects" },
                { icon: "fas fa-calendar-check", text: "Unlimited Data History" },
                { icon: "fas fa-user-friends", text: "Team Collaboration Features" },
                { icon: "fas fa-plus", text: "Includes All Pro Features" },
                { icon: "fas fa-chart-pie", text: "Custom Reporting Tool" },
                { icon: "fas fa-cogs", text: "API Access for Integrations" },
              ],
              description: "Designed for large organizations needing advanced features and customization."
            },
          ].map((plan, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="card text-center shadow-sm pricing-card">
                <div className="card-header text-primary">
                  <h5>{plan.title}</h5>
                </div>
                <div className="card-body">
                  <h1 className="display-4 text-primary">{plan.price}</h1>
                  <h5 className="text-muted"><small>per Month (Taxes included)</small></h5>
                  <p className="mt-3">{plan.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  {plan.features.map((feature, idx) => (
                    <li className="list-group-item" key={idx}>
                      <i className={`${feature.icon} text-primary mx-2`}></i> {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="text-orange">Custom Enterprise Plans</h2>
            <p>Tailored solutions for large enterprises and organizations with specific requirements.</p>
            <ul>
              <li style={{ color: 'orange', fontSize: '20px' }}><i className="fas fa-arrow-circle-right text-primary"></i> Customized Feature Set</li>
              <li style={{ color: 'orange', fontSize: '20px' }}><i className="fas fa-arrow-circle-right text-primary"></i> Priority Support</li>
              <li style={{ color: 'orange', fontSize: '20px' }}><i className="fas fa-arrow-circle-right text-primary"></i> Competitive Pricing</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={meet} alt="Meet" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
