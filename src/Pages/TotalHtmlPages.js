import React, { useEffect, useState } from 'react'

const TotalHtmlPages = () => {
  const [data, setData] = useState({ count: 0, links: [] })

  useEffect(() => {
    const storedData = localStorage.getItem('data')
    if (storedData) {
      setData(JSON.parse(storedData))
    }
  }, [])

  return (
    <div className="container my-5">
      <h1>Total HTML Pages</h1>
      <p>Total HTML Pages Count: <b>{data.results && data.results.html_pages.count}</b></p>
      <h2>Links:</h2>
      {data.results && data.results.html_pages && data.results.html_pages.list.length > 0 ? (
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Serial No.</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data.results.html_pages.list.map((link, index) => (
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
      ) : (
        <p>No HTML pages found.</p>
      )}
    </div>
  )
}

export default TotalHtmlPages