import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

// Register chart elements
Chart.register(ArcElement, Tooltip, Legend)

const NonHtmlLinks = () => {
  const [nonHtmlLinks, setNonHtmlLinks] = useState([])

  useEffect(() => {
    const storedNonHtmlLinks = localStorage.getItem('data')
    if (storedNonHtmlLinks) {
      setNonHtmlLinks(JSON.parse(storedNonHtmlLinks))
    }
  }, [])


  const totalLinks = 100
  const nonHtmlLinksCount = nonHtmlLinks.results ? nonHtmlLinks.results.non_html_files.list.length : 0
  const othersCount = totalLinks - nonHtmlLinksCount


  const pieData = {
    labels: ['Non-HTML Links', 'Total'],
    datasets: [
      {
        data: [nonHtmlLinksCount, othersCount],
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
            const total = tooltipItem.dataset.data.reduce((acc, val) => acc + val, 0)
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
        <h2>Non-HTML Files</h2>
        <p>
          External links are hyperlinks that point from one website to another, helping to establish credibility, drive traffic, and enhance the user experience.
          They are also a critical component of SEO, contributing to a website's authority and relevance in search engine rankings.
        </p>
      </div>

      <h4>Non-HTML Links Graph</h4>
      <div className="mb-4" style={{ maxWidth: '300px', margin: 'auto' }}>
        <Pie data={pieData} options={pieOptions} />
      </div>

      <div className="mb-4">
        {nonHtmlLinks.results && nonHtmlLinks.results.non_html_files ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>No.</th>
                <th>Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {nonHtmlLinks.results.non_html_files.list.map((link, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ wordWrap: 'break-word' }}>{link}</td>
                  <td>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Open Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="col-12">
            <p className="text-center text-muted">No non-HTML links found.</p>
          </div>
        )}
      </div>

      <h6 className="text-danger mt-4">Optimize Your Non-HTML Pages for Better Web Performance</h6>

      <div className="row">
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Ensure Your Non-HTML Assets Are Properly Managed for SEO and User Experience</h6>
              <p className="card-text">
                Non-HTML pages refer to web assets and content that are not written in HTML. These include files like PDFs, images, videos, JavaScript files, CSS files, and other multimedia or document types that are crucial to your website’s functionality and user experience.
              </p>
              <h6 className="card-title">Why Non-HTML Pages Matter</h6>
              <p className="card-text">
                1. Search Engine Indexing: Non-HTML pages can be indexed by search engines.<br />
                2. Content Accessibility: Optimized non-HTML content ensures accessibility.<br />
                3. Load Times and Performance: Large files can slow down your website.<br />
                4. Security and Compliance: Files must be secured and optimized.<br />
                5. File Optimization: Compressing files reduces bandwidth usage.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Key Metrics to Analyze Non-HTML Pages</h6>
              <p className="card-text">
                1. File Size and Compression: Monitor and optimize file sizes.<br />
                2. Metadata and Alt Text: Ensure proper metadata for SEO.<br />
                3. Crawlability: Ensure accessibility to search engine crawlers.<br />
                4. Security Settings: Secure sensitive documents.<br />
                5. Mobile Optimization: Optimize for mobile devices.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Best Practices for Optimizing Non-HTML Pages</h6>
              <p className="card-text">
                1. Optimize File Sizes: Compress files for faster load times.<br />
                2. Use Descriptive Metadata: Improve SEO with proper metadata.<br />
                3. Manage Crawlability: Control indexing with robots.txt.<br />
                4. Enhance Security: Secure files to prevent unauthorized access.<br />
                5. Mobile Optimization: Ensure a seamless experience on mobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NonHtmlLinks
