import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const ExternalLinks = () => {
  const [externalLinks, setExternalLinks] = useState([])
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const storedExternalLinks = localStorage.getItem('data')
      if (storedExternalLinks) {
        const parsedData = JSON.parse(storedExternalLinks)
        setExternalLinks(parsedData)

        const externalLinksCount = parsedData?.results?.external_urls?.list.length || 0
        const maxLinks = 100
        const percentage = (externalLinksCount / maxLinks) * 100

        const data = {
          labels: ['External Links', 'Remaining'],
          datasets: [
            {
              label: 'External Links Data',
              data: [percentage, 100 - percentage],
              backgroundColor: ['#FFCE56', '#E0E0E0'],
              hoverBackgroundColor: ['#FFCE56', '#E0E0E0']
            }
          ]
        }

        setChartData(data)
      } else {
        setError('No external links stored.')
      }
    } catch (err) {
      setError('Failed to load external links.')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div>
      <h2>External Links Data</h2>
      {loading ? (
        <p>Loading external links...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : externalLinks.results.external_urls ? (
        <>
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
          <h3>External Links URLs :</h3>
          <table className='table table-striped mt-4'>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>External Links</th>
              </tr>
            </thead>
            <tbody>
              {externalLinks.results.external_urls.list.map((link, index) => (
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
        <p>No external links found.</p>
      )}
    </div>
  )
}

export default ExternalLinks
