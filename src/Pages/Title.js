import React, { useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import 'bootstrap/dist/css/bootstrap.min.css'

const WebsiteCrawler = () => {
    const [url, setUrl] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleInputChange = (e) => {
        setUrl(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setResults([])

        try {
            const response = await axios.get('http://localhost:8000/get_title/', {
                params: { url }
            })

            if (response.data && Array.isArray(response.data)) {
                setResults(response.data)
            } else {
                setError('Unexpected data format from server')
            }
        } catch (err) {
            setError('Failed to fetch data. Please check the URL or server.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container">
            <h1 className="mb-4">Pages Title Crawler</h1>
            <form onSubmit={handleSubmit} className="d-flex mb-4">
                <input
                    type="text"
                    value={url}
                    onChange={handleInputChange}
                    placeholder="Enter website URL"
                    required
                    className="form-control w-50 me-2"
                />
                <button type="submit" className="btn btn-primary">Crawl</button>
            </form>

            {loading && <div className="text-center"><CircularProgress /></div>}
            {error && <p className="text-danger text-center">{error}</p>}

            {results.length > 0 && (
                <div className="table-responsive">
                    <h2 className="mb-4">Results</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">URL</th>
                                <th scope="col">Title</th>
                                <th scope="col">H1 Tag</th>
                                <th scope="col">Meta Description</th>
                                <th scope="col">Word Count</th>
                                <th scope="col">Issues</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td style={styles.wrapText}>
                                        <a href={result.url} target="_blank" rel="noopener noreferrer">
                                            {result.url}
                                        </a>
                                    </td>
                                    <td>{result.title || 'N/A'}</td>
                                    <td>{result.h1_tag || 'N/A'}</td>
                                    <td>{result.meta_description || 'N/A'}</td>
                                    <td>{result.words_count}</td>
                                    <td>
                                        {result.issues && typeof result.issues === 'object' && Object.keys(result.issues).length > 0 ? (
                                            <ul className="list-unstyled">
                                                {Object.entries(result.issues).map(([key, value]) => (
                                                    <li key={key}>{value}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No issues found</p>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

const styles = {
    wrapText: {
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        maxWidth: '200px'
    }
}

export default WebsiteCrawler
