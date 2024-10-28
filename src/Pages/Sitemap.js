import React, { useState } from 'react'
import { fetchSitemaps } from '../api'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

function SitemapsAnalyzer() {
  const [url, setUrl] = useState('')
  const [sitemapData, setSitemapData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchSitemapsData = async () => {
    try {
      setLoading(true)
      const data = await fetchSitemaps(url)
      setSitemapData(data)
      setError('')
    } catch (err) {
      setError('Failed to fetch sitemaps data.')
      setSitemapData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (url.trim() !== '') {
      fetchSitemapsData()
    } else {
      setError('Please enter a valid URL.')
    }
  }

  // Function to prepare data for the pie chart
  const prepareChartData = () => {
    if (!sitemapData) return null

    const numSitemaps = sitemapData.num_sitemaps || 0
    const notIndexableCount = sitemapData.not_indexable_pages_in_sitemaps.count || 0
    const indexableNotInSitemapsCount = sitemapData.indexable_pages_not_in_sitemaps.count || 0

    return {
      labels: ['Total URLs', 'Not Indexable', 'Indexable Not in Sitemaps'],
      datasets: [
        {
          data: [numSitemaps, notIndexableCount, indexableNotInSitemapsCount],
          backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
        }
      ]
    }
  }

  const chartData = prepareChartData()

  return (
    <div className="container">
      <h1 className="text-center mb-4">Sitemaps Analyzer</h1>
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
            />
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={loading}
              style={{ whiteSpace: 'nowrap' }}
            >
              Analyze Sitemaps
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="text-center my-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <p className="text-danger text-center">{error}</p>}

      {sitemapData && (
        <div className="mt-4">
          {chartData && (
            <div style={{ maxWidth: '300px', height: '400px', margin: '0 auto' }}>
              <Pie
                data={chartData}
                options={{
                  plugins: {
                    tooltip: {
                      enabled: true
                    },
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  },
                  animation: {
                    animateScale: true,
                    animateRotate: true
                  }
                }}
              />
            </div>
          )}

          <p><strong>Number of Sitemaps found:</strong> {sitemapData.num_sitemaps || 'No data available'}</p>

          <p><strong>Pages in Sitemaps (count):</strong> {sitemapData.pages_in_sitemaps.count || 'No data available'}</p>
          <h5>Pages in Sitemaps (URLs):</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table">
                <tr>
                  <th>Page URL</th>
                </tr>
              </thead>
              <tbody>
                {sitemapData.pages_in_sitemaps.urls.length > 0 ? (
                  sitemapData.pages_in_sitemaps.urls.map((page, index) => (
                    <tr key={index}>
                      <td>{page}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center">No URLs available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <h5><strong>Not Indexable Pages in Sitemaps :</strong> <b>{sitemapData.not_indexable_pages_in_sitemaps.count || 'No data available'}</b></h5>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>URLs</th>
                </tr>
              </thead>
              <tbody>
                {sitemapData.not_indexable_pages_in_sitemaps.urls.length > 0 ? (
                  sitemapData.not_indexable_pages_in_sitemaps.urls.map((page, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{page}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center">No URLs available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p><strong>Indexable Pages not in Sitemaps (count):</strong> {sitemapData.indexable_pages_not_in_sitemaps.count || 'No data available'}</p>
          <h5>Indexable Pages not in Sitemaps (URLs):</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table">
                <tr>
                  <th>Page URL</th>
                </tr>
              </thead>
              <tbody>
                {sitemapData.indexable_pages_not_in_sitemaps.urls.length > 0 ? (
                  sitemapData.indexable_pages_not_in_sitemaps.urls.map((page, index) => (
                    <tr key={index}>
                      <td>{page}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center">No URLs available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <h5>Pages in Multiple Sitemaps:</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table">
                <tr>
                  <th>Page URL</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {sitemapData.pages_in_multiple_sitemaps && Object.keys(sitemapData.pages_in_multiple_sitemaps).length > 0 ? (
                  Object.entries(sitemapData.pages_in_multiple_sitemaps).map(([page, count]) => (
                    <tr key={page}>
                      <td>{page}</td>
                      <td>{count} times</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center">No URLs available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <h5>Pages Removed from Sitemaps:</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table">
                <tr>
                  <th>Page URL</th>
                </tr>
              </thead>
              <tbody>
                {sitemapData.pages_removed_from_sitemaps && sitemapData.pages_removed_from_sitemaps.length > 0 ? (
                  sitemapData.pages_removed_from_sitemaps.map((page, index) => (
                    <tr key={index}>
                      <td>{page}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center">No URLs available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <h5>Broken Sitemaps:</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table">
                <tr>
                  <th>Sitemap</th>
                </tr>
              </thead>
              <tbody>
                {sitemapData.broken_sitemaps && sitemapData.broken_sitemaps.length > 0 ? (
                  sitemapData.broken_sitemaps.map((sitemap, index) => (
                    <tr key={index}>
                      <td>{sitemap}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center">No broken sitemaps</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default SitemapsAnalyzer
