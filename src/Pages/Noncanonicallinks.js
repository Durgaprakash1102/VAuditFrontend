import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const NonCanonicallinks = () => {
  const [nonCanonicalLinks, setNonCanonicalLinks] = useState([])

  useEffect(() => {
    const storedNonCanonicalLinks = localStorage.getItem('data')
    if (storedNonCanonicalLinks) {
      setNonCanonicalLinks(JSON.parse(storedNonCanonicalLinks))
    }
  }, [])


  const totalLinks = 100
  const nonCanonicalLinksCount = nonCanonicalLinks.results
    ? nonCanonicalLinks.results.non_canonical_urls.list.length
    : 0


  const pieData = {
    labels: [`${((nonCanonicalLinksCount / totalLinks) * 100).toFixed(2)}% Non-Canonical Links`],
    datasets: [
      {
        data: [nonCanonicalLinksCount, totalLinks - nonCanonicalLinksCount],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
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
    <div className="non-canonical-links">
      <div className="container">
        <div className="bg-primary text-white text-center p-4 rounded mb-4">
          <h2>Non-canonical Links</h2>
          <p>
            Non-canonical links are hyperlinks that do not follow the standard or preferred URL structure.
            Proper management of these links can help in maintaining site integrity and improving SEO performance.
          </p>
        </div>
{/* 
        <div className="text-center mb-4">
          <nav style={{ display: 'inline-flex', gap: '10px' }}>
            <a href="#links" className="btn btn-outline-primary">Links</a>
            <Link to="/admin/fullcontent/externallinks" className="btn btn-outline-primary">External Links</Link>
            <a href="#solution" className="btn btn-outline-primary">Solution</a>
          </nav>
        </div> */}

        {nonCanonicalLinks.results && nonCanonicalLinks.results.non_canonical_urls ? (
          <>

          <h4 >Visualization of Non-Canonical Links</h4>
          <div className="mb-4" style={{ maxWidth: '300px', margin: 'auto' }}>
            <Pie data={pieData} options={pieOptions} />
          </div>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>No.</th>
                    <th>Non-Canonical Link</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {nonCanonicalLinks.results.non_canonical_urls.list.map((link, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td style={{ wordWrap: 'break-word' }}>{link}</td>
                      <td className="text-center">
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
            <p>No non-canonical links found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NonCanonicallinks
