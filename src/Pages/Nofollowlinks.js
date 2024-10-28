import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const NofollowLinks = () => {
  const [nofollowLinks, setNofollowLinks] = useState([])

  useEffect(() => {
    const storedNofollowLinks = localStorage.getItem('data')
    if (storedNofollowLinks) {
      try {
        setNofollowLinks(JSON.parse(storedNofollowLinks))
      } catch (error) {
        console.error('Error parsing nofollow links:', error)
      }
    }
  }, [])

  const totalLinks = 100 
  const nofollowLinksCount = nofollowLinks.results ? nofollowLinks.results.nofollow_links.list.length : 0

  const pieData = {
    labels: [`${((nofollowLinksCount / totalLinks) * 100).toFixed(2)}% Nofollow Links`],
    datasets: [
      {
        data: [nofollowLinksCount, totalLinks - nofollowLinksCount],
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
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
    <div className="container">
      <div className="bg-primary text-white text-center p-4 rounded mb-4">
        <h2>Nofollow Links</h2>
        <p>
          Nofollow links are hyperlinks with a `rel="nofollow"` attribute, instructing search engines not to follow
          these links. They do not pass on SEO benefits but are still valuable in certain contexts.
        </p>
      </div>

      {nofollowLinks && nofollowLinks.results && nofollowLinks.results.nofollow_links ? (
        <>
          <h4>Nofollow Links Graph</h4>
          <div className="mb-4" style={{ maxWidth: '300px', margin: 'auto' }}>
            <Pie data={pieData} options={pieOptions} />
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Link</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {nofollowLinks.results.nofollow_links.list.map((link, index) => (
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
        </>
      ) : (
        <div className="text-center text-primary">
          <p>No Nofollow links found.</p>
        </div>
      )}
    </div>
  )
}

export default NofollowLinks