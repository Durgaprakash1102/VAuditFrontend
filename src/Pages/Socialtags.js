import React, { useState } from 'react'
import { fetchSocialTags } from '../api'
import { ThreeDots } from 'react-loader-spinner'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'

const SocialTags = () => {
  const [url, setUrl] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFetch = async () => {
    setLoading(true)
    setError(null)
    setData(null)

    try {
      const fetchedData = await fetchSocialTags(url)
      setData(fetchedData)
      setLoading(false)
    } catch (err) {
      setError(err.response ? err.response.data : 'Error fetching data')
      setLoading(false)
    }
  }

  const getPieChartData = () => {
    if (!data) return null

    return {
      labels: ['Pages with Social Tags', 'Pages without Social Tags'],
      datasets: [
        {
          label: 'Social Tag Status',
          data: [data.pages_with_social_tags.length, data.pages_without_social_tags.length],
          backgroundColor: ['#36A2EB', '#FF6384'],
          hoverBackgroundColor: ['#36A2EB', '#FF6384'],
        },
      ],
    }
  }

  const getSocialLinksPieChartData = () => {
    if (!data || !data.social_tag_links) return null

    const platformCounts = Object.keys(data.social_tag_links).map(platform => data.social_tag_links[platform].length)
    const platformNames = Object.keys(data.social_tag_links)

    return {
      labels: platformNames.map(name => name.charAt(0).toUpperCase() + name.slice(1)),
      datasets: [
        {
          label: 'Social Media Links',
          data: platformCounts,
          backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#9966FF'], // Assign colors as needed
          hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#9966FF'],
        },
      ],
    }
  }

  return (
    <div className="container">
      <h1 className="text-center mb-4">Social Tags Analyzer</h1>

      <div className="row mb-4">
        <div className="col-md-8 offset-md-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
            />
            <button className="btn btn-primary" onClick={handleFetch}>
              Fetch Social Tags
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="d-flex justify-content-center my-4">
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </div>
      )}

      {error && <div className="text-danger text-center">{error}</div>}

      {data && (
        <>        
        <div className="col-md-12">
          <h5>Pages with and without Social Tags</h5>
          <div style={{ maxWidth: '300px', margin: '0 auto' }}>
            <Pie data={getPieChartData()} />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 mb-4">
            <div style={{ border: '1px solid #ddd', padding: '10px' }}>
              <h5>Pages with Social Tags ({data.pages_with_social_tags.length})</h5>
              <div>
                {data.pages_with_social_tags.map((page, index) => (
                  <div key={index} style={{ marginBottom: '5px' }}>
                    <a href={page} target="_blank" rel="noopener noreferrer">
                      {page}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div style={{ border: '1px solid #ddd', padding: '10px' }}>
              <h5>Pages without Social Tags ({data.pages_without_social_tags.length})</h5>
              <div>
                {data.pages_without_social_tags.length === 0 ? (
                  <div>No pages without social tags.</div>
                ) : (
                  data.pages_without_social_tags.map((page, index) => (
                    <div key={index} style={{ marginBottom: '5px' }}>
                      <a href={page} target="_blank" rel="noopener noreferrer">
                        {page}
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          
          {data.social_tag_links && (
            <div className="col-md-12">
              <h5>Social Media Links Distribution</h5>
              <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                <Pie data={getSocialLinksPieChartData()} />
              </div>
            </div>
          )}

          {data.social_tag_links && (
            <div className="col-md-12">
              <h5>Social Media Links</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(data.social_tag_links).map((platform, index) => (
                    <tr key={index}>
                      <td>{platform.charAt(0).toUpperCase() + platform.slice(1)}</td>
                      <td>
                        <a
                          href={data.social_tag_links[platform][0]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.social_tag_links[platform][0]}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        </>
      )}
    </div>
  )
}

export default SocialTags