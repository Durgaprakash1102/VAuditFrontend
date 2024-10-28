import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Card, CardContent, Grid } from '@mui/material'
import { fetchInternalLinks } from '../api'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, Title)

function Internallinksseperate() {
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
      const data = await fetchInternalLinks(url)
      setDetails(data)
      setError(null)
      setUrl('')
    } catch (error) {
      setError(error.message)
      setDetails(null)
    } finally {
      setLoading(false)
    }
  }


  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sample Data',
        data: [30, 45, 28, 50, 60, 70],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  return (
    <div style={{marginBottom: '40px' }}>
      <div className="container-fluid" style={{ backgroundColor: '#0235c3' }}>
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-md-12">
            <div className="col-md-8 text-center mx-auto">
              <h1 className="display-4 fw-bold text-white">Get Free Link Data...</h1>
              <div className="input-group my-3">
                <input
                  type="text"
                  value={url}
                  onChange={handleInputChange}
                  placeholder="Enter website URL"
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <button onClick={fetchData} className="btn btn-danger btn-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {details && details.error && <div style={{ color: 'red' }}>Error: {details.error}</div>}

      {details && !details.error && (
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          {details.internal_links.map((link, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={() => window.open(link, '_blank')}
                style={{
                  backgroundColor: '#f07f3a',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f07f3a')}
              >
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {link}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default Internallinksseperate