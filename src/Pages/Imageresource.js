import React, { useState } from 'react'
import { fetchAnalyzedResources } from '../api'
import CircularProgress from '@mui/material/CircularProgress'

function ImageResources() {
  const [url, setUrl] = useState('')
  const [details, setDetails] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setUrl(e.target.value)
  }

  const fetchData = async () => {
    if (!url || !/^https?:\/\/.+\..+/.test(url)) {
      setError('Please enter a valid URL.')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const data = await fetchAnalyzedResources(url)
      setDetails({
        total_images: data.total_images || 0,
        image_links: data.image_links || [],
        too_large_images: data.too_large_images || [],
        broken_images: data.broken_images || [],
        pages_with_broken_images: data.pages_with_broken_images || [],
        redirecting_images: data.redirecting_images || [],
        pages_with_redirecting_images: data.pages_with_redirecting_images || [],
        alternative_text_missing_pages: data.alternative_text_missing_pages || [],
      })
    } catch (error) {
      setError(error.message)
      setDetails(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">All Resources</h3>
      <div className="input-group mb-4">
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Enter URL"
          className="form-control"
        />
        <button onClick={fetchData} className="btn btn-primary ms-2">
          Fetch Details
        </button>
      </div>

      {loading && (
        <div className="d-flex justify-content-center my-4">
          <CircularProgress />
        </div>
      )}

      {error && <div className="alert alert-danger text-center">{error}</div>}

      {details && !loading && (
        <div className="mt-5">
          <h4 className="mb-4 text-center">Analysis Results</h4>
          <div className="mb-3">
            <strong>Total Images & Links: &nbsp;<span>{details.total_images}</span></strong>
            {details.image_links.length > 0 ? (
              details.image_links.map((link, index) => (
                <div key={index} className="alert alert-info  mt-2">
                  {link}
                </div>
              ))
            ) : (
              <div className="alert alert-warning mt-2">No image links found.</div>
            )}
          </div>

          <div className="mb-3">
            <strong>Too Large Images:</strong>
            {details.too_large_images.length > 0 ? (
              details.too_large_images.map((link, index) => (
                <div key={index} className="alert alert-info  mt-2">
                  {link}
                </div>
              ))
            ) : (
              <div className="alert alert-warning mt-2">No too large images found.</div>
            )}
          </div>

          <div className="mb-3">
            <strong>Broken Images:</strong>
            {details.broken_images.length > 0 ? (
              details.broken_images.map((link, index) => (
                <div key={index} className="alert alert-info  mt-2">
                  {link}
                </div>
              ))
            ) : (
              <div className="alert alert-warning mt-2">No broken images found.</div>
            )}
          </div>

          <div className="mb-3">
            <strong>Pages with Broken Images:</strong>
            {details.pages_with_broken_images.length > 0 ? (
              details.pages_with_broken_images.map((page, index) => (
                <div key={index} className="alert alert-info  mt-2">
                  {page}
                </div>
              ))
            ) : (
              <div className="alert alert-warning mt-2">No pages with broken images found.</div>
            )}
          </div>

          <div className="mb-3">
            <strong>Redirecting Images:</strong>
            {details.redirecting_images.length > 0 ? (
              details.redirecting_images.map((link, index) => (
                <div key={index} className="alert alert-info  mt-2">
                  {link}
                </div>
              ))
            ) : (
              <div className="alert alert-warning mt-2">No redirecting images found.</div>
            )}
          </div>

          <div className="mb-3">
            <strong>Pages with Redirecting Images:</strong>
            {details.pages_with_redirecting_images.length > 0 ? (
              details.pages_with_redirecting_images.map((page, index) => (
                <div key={index} className="alert alert-info  mt-2">
                  {page}
                </div>
              ))
            ) : (
              <div className="alert alert-warning mt-2">No pages with redirecting images found.</div>
            )}
          </div>

          <div className="mb-3">
            <strong>Alternative Text Missing Pages:</strong>
            {details.alternative_text_missing_pages.length > 0 ? (
              details.alternative_text_missing_pages.map((page, index) => (
                <div key={index} className="alert alert-info  mt-2">
                  {page}
                </div>
              ))
            ) : (
              <div className="alert alert-warning mt-2">No pages with missing alternative text found.</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageResources
