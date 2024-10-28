import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'

const AnalyzeSEO = () => {
  const [url, setUrl] = useState('')
  const [analysisResults, setAnalysisResults] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setUrl(e.target.value)
  }

  const handleAnalyzeSEO = async () => {
    setLoading(true)
    setError(null)
    setAnalysisResults([])
    try {
      const response = await axios.get(`http://localhost:8000/analyze-seo/`, {
        params: { url }
      })
      setAnalysisResults(response.data)
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred')
    }
    setLoading(false)
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Analyze SEO</h1>
      <div className="row mb-3">
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={url}
              onChange={handleInputChange}
              placeholder="Enter website URL"
            />
            <button className="btn btn-primary" onClick={handleAnalyzeSEO} disabled={loading}>
              Analyze
            </button>
          </div>
        </div>
      </div>
      {loading && <div className="d-flex justify-content-center my-4"><CircularProgress /></div>}
      {error && <div className="text-danger text-center">{error}</div>}
      {analysisResults.length > 0 && (
        <div className="mt-4">
          <h2 className="text-center">Analysis Results</h2>
          {analysisResults.map((result, index) => (
            <div key={index} className="border p-3 mb-4">
              <h3>Page: {result.page}</h3>
              <p><strong>Title:</strong> {result.title}</p>
              <p><strong>Broken Links:</strong> {result.broken_links.join(', ') || 'None'}</p>
              <p><strong>No Outgoing Links:</strong> {result.no_outgoing_links ? 'Yes' : 'No'}</p>
              <p><strong>Incoming Links to Canonical URL:</strong> {result.incoming_links_to_canonical.join(', ') || 'None'}</p>
              <p><strong>Internal HTTP Links on HTTPS Page:</strong> {result.internal_http_links_on_https_page.join(', ') || 'None'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AnalyzeSEO