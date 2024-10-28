import React, { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const CheckSnippets = () => {
    const [url, setUrl] = useState('');
    const [snippets, setSnippets] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleFetchSnippets = async () => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get(`http://localhost:8000/check_snippets/`, {
                params: { url }
            });
            setSnippets(response.data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setSnippets(null);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const renderRegularSnippets = () => {
        if (!snippets?.["Regular Snippets"]) return null;

        const { "Title Tag": titleTag, "Meta Description": metaDescription } = snippets["Regular Snippets"];

        return (
            <table className="table table-bordered mt-3">
                <thead className="table-light">
                    <tr>
                        <th>Snippet Type</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Title Tag</td>
                        <td>{titleTag}</td>
                    </tr>
                    <tr>
                        <td>Meta Description</td>
                        <td>{metaDescription}</td>
                    </tr>
                </tbody>
            </table>
        );
    };

    const renderFeaturedSnippets = () => {
        if (!snippets?.["Featured Snippets"]) return null;

        return (
            <table className="table table-bordered mt-3">
                <thead className="table-light">
                    <tr>
                        <th>Featured Snippet Type</th>
                    </tr>
                </thead>
                <tbody>
                    {snippets["Featured Snippets"].map((snippetType, index) => (
                        <tr key={index}>
                            <td>{snippetType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="container mt-4">
            <h1 className='text-center'>Check Snippets</h1>
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
                            onClick={handleFetchSnippets}
                        >
                            Fetch Snippets
                        </button>
                    </div>
                </div>
            </div>

            {loading && <div className="d-flex justify-content-center my-4"><CircularProgress /></div>}
            {error && <p className="text-danger text-center">Error: {error}</p>}

            {snippets && (
                <div>
                    <h2>Regular Snippets</h2>
                    {renderRegularSnippets()}

                    <h2>Featured Snippets</h2>
                    {renderFeaturedSnippets()}
                </div>
            )}
        </div>
    );
};

export default CheckSnippets;
