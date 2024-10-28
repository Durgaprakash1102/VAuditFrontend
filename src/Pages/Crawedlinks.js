import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const CrawedLinks = () => {
  const [crawedLinks, setCrawedLinks] = useState([])
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const storedCrawedLinks = localStorage.getItem('data')
      if (storedCrawedLinks) {
        const parsedData = JSON.parse(storedCrawedLinks)
        setCrawedLinks(parsedData)

        const crawledLinksCount = parsedData?.results?.crawled_links?.list.length || 0
        const maxLinks = 100
        const percentage = (crawledLinksCount / maxLinks) * 100

        const data = {
          labels: ['Crawled Links', 'Remaining'],
          datasets: [
            {
              label: 'Crawled Links Data',
              data: [percentage, 100 - percentage],
              backgroundColor: ['#36A2EB', '#E0E0E0'],
              hoverBackgroundColor: ['#36A2EB', '#E0E0E0']
            }
          ]
        }

        setChartData(data)
      } else {
        setError('No crawled links stored.')
      }
    } catch (err) {
      setError('Failed to load crawled links.')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div>
      <h2>Crawled Links Data</h2>
      {loading ? (
        <p>Loading crawled links...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : crawedLinks && crawedLinks.results && crawedLinks.results.crawled_links ? (
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
          <h3>Crawled Links URLs :</h3>
          <table className='table table-striped mt-4'>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Crawled Links</th>
              </tr>
            </thead>
            <tbody>
              {crawedLinks.results.crawled_links.list.map((link, index) => (
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
        <p>No crawled links found.</p>
      )}
    </div>
  )
}

export default CrawedLinks