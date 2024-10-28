import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const BrokenLinks = () => {
  const [brokenLinks, setBrokenLinks] = useState([])
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('data')
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        const brokenLinksData = parsedData?.results?.broken_links?.list || []

        setBrokenLinks(brokenLinksData)

        const brokenLinksCount = brokenLinksData.length
        const maxLinks = 100 
        const percentage = (brokenLinksCount / maxLinks) * 100

        const data = {
          labels: ['Broken Links', 'Working Links'],
          datasets: [
            {
              label: 'Links Data',
              data: [percentage, 100 - percentage],
              backgroundColor: ['#FF6384', '#007BFF'],
              hoverBackgroundColor: ['#FF6384', '#007BFF']
            }
          ]
        }

        setChartData(data)
      } else {
        setError('No broken links stored.')
      }
    } catch (err) {
      setError('Failed to load broken links.')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div>
      <div className="bg-primary text-white text-center p-2 rounded mb-4">
        <h1>Broken Links</h1>
        <p>
          Broken links can negatively impact user experience and SEO. Fix them to maintain a healthy website.
        </p>
      </div>
      {loading ? (
        <p>Loading broken links...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : brokenLinks.length > 0 ? (
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

          <h3>Broken Links URLs :</h3>
          <table className='table table-striped mt-4'>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Broken Links</th>
              </tr>
            </thead>
            <tbody>
              {brokenLinks.map((link, index) => (
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
        <p>No broken links found.</p>
      )}
    </div>
  )
}

export default BrokenLinks