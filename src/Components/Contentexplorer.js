import '../Css/Header.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import S from '../assets/S.png'
import v from '../assets/v.png'
import B from '../assets/B.png'
import LM from '../assets/LM.png'
import KO from '../assets/KO.png'

const Contentexplorer = () => {
  return (
    <div className="home-container">
      <div className="container-fluid mb-5" style={{ backgroundColor: '#0235c3', padding: '80px 0' }}>
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-md-8">
            <h1 className="display-4 fw-bold text-white mb-4">
              Discover the ultimate toolkit for effortless website creation.
            </h1>
            <button className="btn btn-danger btn-lg">Get Started</button>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <p className="seo-paragraph-text mb-4">
              SEO tools are essential in today's dynamic digital marketing environment because they help websites
              become more visible, rank higher in searches, and generate organic traffic.
            </p>

            <h2 className="mb-4 text-primary">Tools for Analyzing and Managing Backlinks</h2>

            <div className="mb-3">
              <h5 className="fw-bold">Backlink Analytics</h5>
              <p>
                This tool offers in-depth analysis of the backlink profile of a website. It helps monitor backlink
                quality and quantity, identify referring websites, and analyze anchor text for strong link-building
                strategies.
              </p>
            </div>

            <div className="mb-3">
              <h5 className="fw-bold">Backlink Gap</h5>
              <p>
                This tool compares your backlink profile with competitors, identifying opportunities for valuable
                backlinks you might be missing.
              </p>
            </div>

            <div className="mb-3">
              <h5 className="fw-bold">Bulk Analysis</h5>
              <p>
                Analyze multiple URLs at once, providing key metrics like backlink count, domain authority, and
                referring domains for a comprehensive SEO audit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card custom-card shadow-sm mx-auto" style={{ padding: '20px' }}>
              <img src={S} alt="SEO tool S" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card custom-card shadow-sm mx-auto" style={{ padding: '20px' }}>
              <img src={v} alt="SEO tool v" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card custom-card shadow-sm mx-auto" style={{ padding: '20px' }}>
              <img src={B} alt="SEO tool B" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <h2 className="mb-4 text-primary">Tools for Keyword Research and Optimization</h2>

        <div className="mb-3">
          <h5 className="fw-bold">Keyword Gap</h5>
          <p>
            Compare keyword performance with competitors to identify opportunities to improve rankings in areas where
            your rivals are strong.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Keyword Magic</h5>
          <p>
            A powerful tool to discover keyword ideas based on search volume, difficulty, and related phrases to
            enhance your SEO strategy.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Keyword Overviews</h5>
          <p>
            Quickly assess key parameters like search traffic and competition density to evaluate the potential of
            targeting a particular keyword.
          </p>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h2 className="mb-4 text-primary">Tools for Managing Listings and Building Links</h2>

            <div className="mb-3">
              <h5 className="fw-bold">Link Building Tool</h5>
              <p>
                Discover link-building opportunities, track outreach, and manage your backlinks efficiently for an
                optimized SEO strategy.
              </p>
            </div>

            <div className="mb-3">
              <h5 className="fw-bold">Listing Management</h5>
              <p>
                Manage your business listings across various platforms to ensure accurate and up-to-date information
                everywhere.
              </p>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="image-box mx-2 mb-3">
                <img src={LM} alt="Link Building" className="img-fluid" />
                <div className="image-text">Link Building</div>
              </div>
              <div className="image-box mx-2 mb-3">
                <img src={KO} alt="Keyword Overviews" className="img-fluid" />
                <div className="image-text">Keyword Overviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <h2 className="mb-4 text-primary">Additional Tools for SEO</h2>

        <div className="mb-3">
          <h5 className="fw-bold">Site Audit</h5>
          <p>
            Conduct a comprehensive technical audit of your website to identify errors and optimization opportunities
            that could improve your search engine ranking.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">On Page SEO Checker</h5>
          <p>
            Analyze individual pages for SEO improvements in meta data, keyword density, and content relevancy to
            ensure better rankings.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Log File Analyzer</h5>
          <p>
            Understand how search engines crawl your site, identify crawling issues, and ensure important pages are
            properly indexed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contentexplorer