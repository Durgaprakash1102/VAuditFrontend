import React, { useState } from 'react'
import { fetchPageAnalysis } from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'

function URLAnalyzer() {
  const [url, setUrl] = useState('')
  const [pageAnalysis, setPageAnalysis] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (url.trim() !== '') {
      try {
        const data = await fetchPageAnalysis(url)
        setPageAnalysis(data)
        setError('')
      } catch (err) {
        setError('Failed to fetch page analysis data.')
        setPageAnalysis(null)
      }
    } else {
      setError('Please enter a valid URL.')
    }
  }

  // Prepare data for the pie chart based on page analysis results
  const getChartData = () => {
    if (!pageAnalysis) return null

    const duplicateCount = Object.values(pageAnalysis).filter(item => item.duplicate_content).length
    const orphanCount = Object.values(pageAnalysis).filter(item => item.orphan_page).length
    const redirectCount = Object.values(pageAnalysis).filter(item => item.redirect_url).length
    const statusCount = Object.values(pageAnalysis).filter(item => item.status_code_200).length

    return {
      labels: ['Duplicate Content', 'Orphan Pages', 'Redirect URLs', 'Status Code 200'],
      datasets: [
        {
          label: 'Page Analysis Results',
          data: [duplicateCount, orphanCount, redirectCount, statusCount],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        },
      ],
    }
  }

  return (
    <div className="container">
      <h1 className="mb-4">URL Analyzer</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            <input
              type="text"
              className="form-control mb-3"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
              required
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <button type="submit" className="btn btn-primary w-100">
              Analyze URL
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        </div>
      )}

      {pageAnalysis && (
        <div className="row justify-content-center">
          <div className="col-md-12 mt-4">
            <h2>Page Analysis Results</h2>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <Pie data={getChartData()} />
            </div>
          </div>
          <div className="col-md-12">
            <h2 className="mb-4">Page Analysis</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Page Title</th>
                  <th>Duplicate Content</th>
                  <th>Orphan Page</th>
                  <th>Redirect URL</th>
                  <th>Status Code 200</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(pageAnalysis).map((title, index) => (
                  <tr key={index}>
                    <td>{title}</td>
                    <td>{pageAnalysis[title].duplicate_content ? 'Yes' : 'No'}</td>
                    <td>{pageAnalysis[title].orphan_page ? 'Yes' : 'No'}</td>
                    <td>{pageAnalysis[title].redirect_url ? 'Yes' : 'No'}</td>
                    <td>{pageAnalysis[title].status_code_200 ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default URLAnalyzer