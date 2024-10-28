import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function PageLoadingSpeed() {
  const [url, setUrl] = useState('')
  const [details, setDetails] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setUrl(e.target.value)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:8000/page_loading_speed/', {
        params: { base_url: url },
      })
      setDetails(response.data)
      setError(null)
    } catch (error) {
      setError(error.response?.data?.error || error.message)
      setDetails(null)
    } finally {
      setLoading(false)
    }
  }

  const formatSpeedValue = (speedStr) => {
    const numericValue = parseFloat(speedStr.replace(' seconds', ''))
    return isNaN(numericValue) ? 0 : numericValue
  }

  const formattedData = details
    ? Object.entries(details).map(([page, speed]) => ({
        name: page,       
        speed: formatSpeedValue(speed),
      }))
    : []

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Page Loading Speed</h3>
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <input
              type="text"
              value={url}
              onChange={handleInputChange}
              placeholder="Enter website URL"
              className="form-control"
            />
            <button
              onClick={fetchData}
              className="btn btn-primary"
            >
              Check Speed
            </button>
          </div>

          <div className="text-center my-3">
            {loading && <CircularProgress />}
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              Error: {error}
            </div>
          )}
          

          {/* Bar Chart for displaying loading speeds */}
          {details && (
          <div className="mt-4" style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 3]} />
                <Tooltip />
                <Bar dataKey="speed" fill="#007bff" animationDuration={1000} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          )}

          {details && (
            <div className="mt-4">
              {Object.keys(details).length === 0 ? (
                <p>No pages found or error occurred.</p>
              ) : (
                <>
                  {/* Table to display the details */}
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead className="table-light">
                        <tr>
                          <th scope='col'>Serial No.</th>
                          <th scope="col">Page URL</th>
                          <th scope="col">Loading Speed (seconds)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(details).map(([page, speed], index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{page}</td>
                            <td>{formatSpeedValue(speed) + 'sec'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageLoadingSpeed
