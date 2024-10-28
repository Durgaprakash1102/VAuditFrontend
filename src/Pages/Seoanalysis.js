import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { seoanalysis } from '../api'

const SeoAnalysis = () => {
    const [url, setUrl] = useState('')
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async (e) => {
        e.preventDefault()
        setLoading(true) // Start loading
        try {
            const data = await seoanalysis(url)
            console.log(data, "Fetched Data")
            setDetails(data)
            setError(null) // Clear any previous errors
        } catch (error) {
            setError(error.message)
            setDetails(null) // Clear details if there's an error
        } finally {
            setLoading(false) // Stop loading
        }
    }

    const renderExternalLinks = () => {
        if (!details?.external_links) return null

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Link</th>
                        <th>Status Code</th>
                        <th>Source Page</th>
                    </tr>
                </thead>
                <tbody>
                    {details.external_links.map((link, index) => (
                        <tr key={index}>
                            <td><a href={link.link} target="_blank" rel="noopener noreferrer">{link.link}</a></td>
                            <td>{link.status_code}</td>
                            <td><a href={link.source_page} target="_blank" rel="noopener noreferrer">{link.source_page}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    const renderSecurityIssues = () => {
        if (!details?.security) return null

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Security Headers</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(details.security).map(([url, headers]) => (
                        <tr key={url}>
                            <td>{url}</td>
                            <td>{Object.entries(headers).map(([header, value]) => `${header}: ${value}`).join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    const renderInternalLinks = () => {
        if (!details?.internal_links) return null

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {details.internal_links.map((link, index) => (
                        <tr key={index}>
                            <td><a href={link.link} target="_blank" rel="noopener noreferrer">{link}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    const renderMetaIssues = () => {
        if (!details?.meta_issues) return null

        return (
            <div>
                <h5>Meta Issues:</h5>
                <ul>
                    {details.meta_issues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <h1 className='text-center'>SEO Analysis</h1>
            <div className="row justify-content-center mb-3">
                <div className="col-md-8">
                    <div className="input-group">
                        <input 
                            type="text" 
                            value={url} 
                            onChange={(e) => setUrl(e.target.value)} 
                            placeholder="Enter URL"
                            className="form-control"
                        />
                        <button 
                            className="btn btn-primary"
                            onClick={fetchData}
                        >
                            Analyze
                        </button>
                    </div>
                </div>
            </div>

            {loading && (
                <div className="d-flex justify-content-center my-4">
                    <CircularProgress />
                </div>
            )}
            {error && <p className="text-danger text-center">{error}</p>}
            {details && (
                <div className="mt-4">
                    <div className="border p-3 rounded bg-light">
                        <h4>Security Issues</h4>
                        {renderSecurityIssues()}

                        <h4>External Links</h4>
                        {renderExternalLinks()}

                        <h4>Internal Links</h4>
                        {renderInternalLinks()}

                        {/* <h4>Meta Issues</h4>
                        {renderMetaIssues()} */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SeoAnalysis
