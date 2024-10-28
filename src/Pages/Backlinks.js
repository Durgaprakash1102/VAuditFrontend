import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const BackLinks = () => {
  const [backLinks, setBackLinks] = useState([])
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('data')
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        const backLinksData = parsedData?.results?.backlinks || []
        setBackLinks(backLinksData)

        const backLinksCount = backLinksData.list.length
        const maxLinks = 100
        const percentage = (backLinksCount / maxLinks) * 100

        const data = {
          labels: ['Backlinks', 'Remaining'],
          datasets: [
            {
              label: 'Backlinks Data',
              data: [percentage, 100 - percentage],
              backgroundColor: ['#FF6384', '#E0E0E0'],
              hoverBackgroundColor: ['#FF6384', '#E0E0E0'],
              borderColor: ['#F00', '#CCC'],
              borderWidth: 2,
              hoverBorderWidth: 4,
              shadowOffsetX: 5,
              shadowOffsetY: 5,
              shadowBlur: 5,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          ]
        }

        setChartData(data)
      } else {
        setError('No backlinks stored.')
      }
    } catch (error) {
      setError('Failed to load backlinks.')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div className="back-links">
      <h3>Backlinks Data</h3>
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
              },
              layout: {
                padding: {
                  top: 10
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

      <div className="container mt-5">
        {loading ? (
          <p className="text-center">Loading backlinks...</p>
        ) : error ? (
          <p className="text-center text-danger">{error}</p>
        ) : backLinks && backLinks.list && backLinks.list.length > 0 ? (
          <div className="table-responsive">
            <h3>Backlinks URLs:</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Backlink URL</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {backLinks.list.map((link, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td style={{ wordWrap: 'break-word' }}>{link}</td>
                    <td>
                      <a
                        href={link}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Link
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center">No backlinks found.</p>
        )}
      </div>
    </div>
  )
}

export default BackLinks