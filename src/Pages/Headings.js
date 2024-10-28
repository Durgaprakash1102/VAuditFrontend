import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Headings = () => {
  const [url, setUrl] = useState('')
  const [headingData, setHeadingData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleHeadingData = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.get('http://localhost:8000/analyseinfo/', {
        params: {
          base_url: url,
        }
      })
      setHeadingData(response.data)
    } catch (err) {
      setError('An error occurred while fetching data.')
    } finally {
      setLoading(false)
    }
  }

  // Safely determine the status based on the data
  const getStatus = (value) => {
    if (typeof value === 'undefined' || value === null) return 'error' // Undefined or null as error
    if (value === 'ok') return 'ok'
    if (value.includes('error')) return 'error'
    if (value.includes('warning')) return 'warning'
    return 'unknown' // Default case
  }

  // Prepare chart data
  // const getChartData = () => {
  //   if (!headingData) return {}

  //   const labels = Object.keys(headingData) // URLs as labels

  //   const okCounts = Object.values(headingData).map(data => (
  //     (getStatus(data.title_tag) === 'ok' ? 1 : 0) +
  //     (getStatus(data.meta_description) === 'ok' ? 1 : 0) +
  //     (getStatus(data.heading_h1) === 'ok' ? 1 : 0)
  //   )) // Count ok status

  //   const warningCounts = Object.values(headingData).map(data => (
  //     (getStatus(data.title_length) === 'warning' ? 1 : 0) +
  //     (getStatus(data.meta_description_length) === 'warning' ? 1 : 0)
  //   )) // Count warning status

  //   const errorCounts = Object.values(headingData).map(data => (
  //     (getStatus(data.title_length) === 'error' ? 1 : 0) +
  //     (getStatus(data.heading_h1) === 'error' ? 1 : 0) +
  //     (getStatus(data.meta_description) === 'error' ? 1 : 0)
  //   )) // Count error status

  //   return {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: 'OK Status Count',
  //         data: okCounts,
  //         borderColor: 'rgba(75, 192, 192, 1)', // Green for "ok"
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         fill: true,
  //       },
  //       {
  //         label: 'Warning Status Count',
  //         data: warningCounts,
  //         borderColor: 'rgba(255, 165, 0, 1)', // Orange for "warnings"
  //         backgroundColor: 'rgba(255, 165, 0, 0.2)',
  //         fill: true,
  //       },
  //       {
  //         label: 'Error Status Count',
  //         data: errorCounts,
  //         borderColor: 'rgba(255, 99, 132, 1)', // Red for "errors"
  //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //         fill: true,
  //       }
  //     ]
  //   }
  // }

  return (
    <div className="container">
      <h1 className="mb-4 text-center">Analyze Heading</h1>
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control flex-grow-1"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
            />
            <button
              className="btn btn-primary"
              onClick={handleHeadingData}
              disabled={loading}
              style={{ whiteSpace: 'nowrap' }}
            >
              Fetch Data
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="row justify-content-center mt-4">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="row justify-content-center mt-4">
          <p className="text-danger">{error}</p>
        </div>
      )}

      {headingData && (
        <div>
          <h2 className="mb-4">Crawled Data</h2>

          {/* Table */}
          <div className="mb-4">
            <table className="table table-bordered" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>URL</th>
                  <th>Title Tag</th>
                  <th>Title Length</th>
                  <th>Meta Description</th>
                  <th>Meta Description Length</th>
                  <th>H1 Heading</th>
                  <th>H1 Heading Length</th>
                </tr>
              </thead>
              {Object.entries(headingData).map(([Pageurl, data], index) => (
                <tbody key={index}>
                  <tr>
                    <td style={{ wordWrap: 'break-word', maxWidth: '300px' }}>
                      <a href={Pageurl} target="_blank" rel="noopener noreferrer">
                        {Pageurl}
                      </a>
                    </td>
                    <td>{data.title_tag}</td>
                    <td>{data.title_length}</td>
                    <td>{data.meta_description}</td>
                    <td>{data.meta_description_length}</td>
                    <td>{data.heading_h1}</td>
                    <td>{data.heading_h1_length}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          {/* Line Chart */}
          {/* <div className="mb-4">
            <h3>Status Chart</h3>
            <Line
              data={getChartData()}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Status Counts by URL',
                  },
                },
              }}
            />
          </div> */}
        </div>
      )}
    </div>
  )
}

export default Headings
