import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const InternalLinks = () => {
  const [internalLinks, setInternalLinks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    try {
      const storedInternalLinks = localStorage.getItem('data')
      if (storedInternalLinks) {
        const parsedLinks = JSON.parse(storedInternalLinks)
        setInternalLinks(parsedLinks)

        const internalUrlsCount = parsedLinks.results.internal_urls.list.length
        const maxUrls = 100
        const percentage = (internalUrlsCount / maxUrls) * 100

        const data = {
          labels: ['Internal Links'],
          datasets: [
            {
              label: '# of Links',
              data: [percentage, 100 - percentage],
              backgroundColor: ['#36A2EB', '#E0E0E0'],
              hoverBackgroundColor: ['#36A2EB', '#E0E0E0']
            }
          ]
        }
        setChartData(data)
      } else {
        setError('No internal links stored.')
      }
    } catch (err) {
      setError('Failed to load internal links.')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div>
    <h3>Internal Links Usage</h3>
    {chartData && (
      <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
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
              },
              datalabels: {
                formatter: (value, ctx) => {
                  let sum = ctx.chart._metasets[0].total
                  let percentage = (value * 100 / sum).toFixed(2) + '%'
                  return percentage
                },
                color: '#fff'
              }
            }
          }}
        />
      </div>
    )}
      <h2>Internal Links</h2>
      {loading ? (
        <p>Loading internal links...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : internalLinks.results && internalLinks.results.internal_urls ? (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Internal Links</th>
              </tr>
            </thead>
            <tbody>
              {internalLinks.results.internal_urls.list.map((link, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </>
      ) : (
        <p>No internal links found.</p>
      )}
    </div>
  )
}

export default InternalLinks