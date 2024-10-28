import React, { useState } from 'react'
import { fetchWebStatus } from '../api'

function Status200Links() {
  const [url, setUrl] = useState('')
  const [links, setLinks] = useState([])
  const [error, setError] = useState('')

  const checkLinks = async () => {
    try {
      const links = await fetchWebStatus(url)
      setLinks(links)
      setError('')
    } catch (err) {
      setError('Failed to fetch links.')
      setLinks([])
    }
  }

  return (
    <div>
      <h1>Web Status Checker</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button className='btn btn-primary m-4' onClick={checkLinks}>Check Links</button>
      {error && <p>{error}</p>}
      {links.length > 0 && (
        <table className='table'>
          <thead>
            <th>Serial No.</th>
            <th>Links URLs</th>
          </thead>
          {links.map((link, i) => (
            <tbody>
              <td>{i + 1}</td>
              <td key={i}>{link}</td>
            </tbody>
          ))}
        </table>
      )}



          <div className="niche-expansion-container">
            <div className="left-column">
                <h2>Find a niche to expand to</h2>
                <div>
                    <p>Volatility comparison between categories, countries, keyword databases, etc.</p>
                    <p>SERP features occurrence trend for the top 20 search results</p>
                    <p>Deviations analysis showing the categories most impacted by a specific update</p>
                </div>
            </div>
            <div className="right-column">
                <h3>SERP Features Occurrence in top 20</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Featured snippet</td>
                            <td className="percent">2.51%</td>
                            <td className="change negative">-0.40</td>
                        </tr>
                        <tr>
                            <td>Local pack</td>
                            <td className="percent">17.09%</td>
                            <td className="change positive">+0.10</td>
                        </tr>
                        <tr>
                            <td>Shopping results</td>
                            <td className="percent">7.91%</td>
                            <td className="change negative">-0.59</td>
                        </tr>
                        <tr>
                            <td>Knowledge panel</td>
                            <td className="percent">14.32%</td>
                            <td className="change positive">+0.49</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

        <div className="alert-box">
        <div className="alert-icon">
          {/* SVG or Image icon can be used here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="white"
            className="bi bi-graph-up"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0zm11.293 5.5L8 8.793 6.207 7 1.5 11.707l-.707-.707 5-5L8 7.207 11.207 4l2.5 2.5H9.5V8h6V2h-1.5v3.5h-2.707z" />
          </svg>
        </div>
        <div className="alert-content">
          <h1 className="alert-score">7.5<span>/10</span></h1>
          <h2 className="alert-range">High range</h2>
          <p className="alert-description">
            Position changes for numerous sites! Google results are shaking up. This may be a sign of a possible algorithm change. Check if your site has been affected.
          </p>
        </div>
      </div>
    </div>

    
  )
}

export default Status200Links
