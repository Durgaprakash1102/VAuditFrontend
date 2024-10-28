import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { checkwebsite } from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'

Chart.register(ArcElement, Tooltip, Legend)

const CheckWebsite = () => {
  const [url, setUrl] = useState('')
  const [details, setDetails] = useState(null)
  const [messages, setMessages] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setUrl(e.target.value)
  }

  const fetchData = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = await checkwebsite(url)
      setDetails(data)
      setError(null)
    } catch (error) {
      setError(error.message)
      setDetails(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (details) {
      setMessages(details)
    }
  }, [details])

  const getPieChartData = (message) => {
    if (message === 'The webpage is accessible') {
      return [100, 0]
    } else {
      return [0, 100]
    }
  }

  const accessibilityData = getPieChartData(messages.accessibility)
  const dnsData = getPieChartData(messages.dns)

  const data = {
    labels: ['Accessible', 'Not Accessible'],
    datasets: [
      {
        label: 'Accessibility',
        data: accessibilityData,
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  }

  const dnsChartData = {
    labels: ['Accessible', 'Not Accessible'],
    datasets: [
      {
        label: 'DNS',
        data: dnsData,
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`
          },
        },
      },
    },
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Check Website</h1>
      <form onSubmit={fetchData} className="mb-4">
        <div className="form-row d-flex">
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={url}
              onChange={handleInputChange}
              placeholder="Enter website URL"
            />
          </div>
          <div className="col-md-3 d-flex">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              Check Website
            </button>
          </div>
        </div>
      </form>

      {loading && (
        <div className="text-center">
          <CircularProgress />
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          Error: {error}
        </div>
      )}

      {messages.accessibility && !error && (
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title text-left">Accessibility Message</h2>
            <p className="card-text">{messages.accessibility}</p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Pie style={{ maxWidth: '300px', height: 'auto' }} data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      )}

      {messages.dns && !error && (
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title text-left">DNS Message</h2>
            <p className="card-text">{messages.dns}</p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Pie style={{ maxWidth: '300px', height: 'auto' }} data={dnsChartData} options={options} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckWebsite
