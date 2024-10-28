import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const DoFollowLink = () => {
  const [doFollowLink, setDoFollowLink] = useState([])
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const storedDoFollowLink = localStorage.getItem('data')
      if (storedDoFollowLink) {
        const parsedData = JSON.parse(storedDoFollowLink)
        setDoFollowLink(parsedData)

        const doFollowLinksCount = parsedData?.results?.dofollow_links?.list.length || 0
        const maxLinks = 100 // Set this to the total number of possible dofollow links for the percentage calculation
        const percentage = (doFollowLinksCount / maxLinks) * 100

        const data = {
          labels: ['Dofollow Links', 'Remaining'],
          datasets: [
            {
              label: 'Dofollow Links Data',
              data: [percentage, 100 - percentage],
              backgroundColor: ['#36A2EB', '#E0E0E0'], // Colors for the used and remaining dofollow links
              hoverBackgroundColor: ['#36A2EB', '#E0E0E0']
            }
          ]
        }

        setChartData(data)
      } else {
        setError('No Dofollow links stored.')
      }
    } catch (err) {
      setError('Failed to load Dofollow links.')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div>
      <h2>Dofollow Links Data</h2>
      {loading ? (
        <p>Loading Dofollow links...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : doFollowLink.results.dofollow_links ? (
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

          <h3>Dofollow Links URLs :</h3>
          <table className='table table-striped mt-4'>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Dofollow Links</th>
              </tr>
            </thead>
            <tbody>
              {doFollowLink.results.dofollow_links.list.map((link, index) => (
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
        <p>No Dofollow links found.</p>
      )}
    </div>
  )
}

export default DoFollowLink