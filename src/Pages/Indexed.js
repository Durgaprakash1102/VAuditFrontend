import React, { useState, useEffect } from 'react'

const IndexedUrls = () => {
  const [indexedUrls, setIndexedUrls] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem('data')
    if (storedData) {
      setIndexedUrls(JSON.parse(storedData))
    }
  }, [])

  return (
    <div className="container">
      <div className="bg-primary text-white text-center p-4 rounded mb-4">
        <h2>Indexed URLs</h2>
        <p>These URLs have been successfully indexed by search engines.</p>
      </div>

      <div className="row">
        {indexedUrls.results && indexedUrls.results.indexed_urls ?  (
          indexedUrls.results.indexed_urls.list.map((link, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 bg-primary text-white shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">URL {index + 1}</h5>
                  <p className="card-text" style={{ wordWrap: 'break-word' }}>
                    {link}
                  </p>
                </div>
                <div className="card-footer text-center">
                  <a
                    href={link}
                    className="btn btn-light text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
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
            <p className="text-center text-primary">No Indexed URLs found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default IndexedUrls
