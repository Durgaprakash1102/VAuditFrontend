import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const CanonicalLink = () => {
  const [canonicalLinks, setCanonicalLinks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const storedCanonicalLinks = localStorage.getItem('data')
      if (storedCanonicalLinks) {
        setCanonicalLinks(JSON.parse(storedCanonicalLinks))
      } else {
        setError('No internal links stored.')
      }
    } catch (err) {
      setError('Failed to load internal links.')
    } finally {
      setLoading(false)
    }
  }, [])

  const totalLinks = 100
  const canonicalLinksCount = canonicalLinks.results ? canonicalLinks.results.canonical_urls.list.length : 0

  const pieData = {
    labels: [`${((canonicalLinksCount / totalLinks) * 100).toFixed(2)}% Canonical Links`],
    datasets: [
      {
        data: [canonicalLinksCount, totalLinks - canonicalLinksCount],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  }


  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const total = tooltipItem.dataset.data[0] + tooltipItem.dataset.data[1]
            const percentage = ((tooltipItem.raw / total) * 100).toFixed(2) + '%'
            return percentage
          },
        },
      },
    },
  }

  return (
    <div>
      {loading ? (
        <p>Loading Canonical links...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : canonicalLinks.results.canonical_urls ? (
        <>
          <h2 className="mt-4">Canonical Links Graph</h2>
          <div className="mb-4" style={{ maxWidth: '300px', margin: 'auto' }}>
            <Pie data={pieData} options={pieOptions} />
          </div>
          <h2>Canonical Links</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Canonical Links</th>
              </tr>
            </thead>
            <tbody>
              {canonicalLinks.results.canonical_urls.list.map((link, index) => (
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
        <p className="text-center m-4">No internal links found.</p>
      )}
    </div>
  )
}

export default CanonicalLink
