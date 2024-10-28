import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Uncrawled = () => {
  const [uncrawledLinks, setUncrawledLinks] = useState([])

  useEffect(() => {
    const storedUncrawledLinks = localStorage.getItem('data')

    if (storedUncrawledLinks) {
      try {
        const parsedLinks = JSON.parse(storedUncrawledLinks)
        setUncrawledLinks(parsedLinks)
      } catch (error) {
        console.error('Error parsing uncrawled links from localStorage:', error)
      }
    }
  }, [])

  const handleCardClick = (link) => {
    console.log('Clicked link:', link)
  }

  return (
    <div className="container mt-5">

      <div className="bg-primary text-white text-center p-4 rounded mb-4">
        <h1>Optimize Your SEO Strategy with Comprehensive Uncrawled Link Analysis</h1>
        <p>Discover, Analyze, and Improve Your Website’s Uncrawled Links to Enhance Your SEO Efforts.</p>
      </div>
  
      <div className="bg-light p-3 rounded mb-4 text-center">
        <Link to="#links" className="btn btn-outline-primary mx-2">Links</Link>
        <Link to="/admin/fullcontent/canonicallinks" className="btn btn-outline-primary mx-2">Crawled Links</Link>
        <Link to="#solution" className="btn btn-outline-primary mx-2">Solution</Link>
      </div>

      <hr className="mb-4" />
      <div className="text-center mb-4">
        <h5 className="text-primary font-weight-bold">Total Uncrawled Links Count: {uncrawledLinks.results && uncrawledLinks.results.uncrawled_links.count}</h5>
      </div>

      <div className="row">
        {uncrawledLinks.results && uncrawledLinks.results.uncrawled_links ? (
          uncrawledLinks.results.uncrawled_links.list.map((link, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 bg-primary text-white shadow-sm">
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-uppercase">Link {index + 1}</h5>
                  <p className="card-text" style={{ wordWrap: 'break-word' }}>{link}</p>
                </div>
                <div className="card-footer text-center">
                  <a
                    href={link}
                    className="btn btn-light text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCardClick(link)}
                    style={{ fontWeight: 'bold' }}
                  >
                    Open Link
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center text-primary font-italic">No uncrawled links found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Uncrawled
