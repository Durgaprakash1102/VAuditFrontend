import React, { useState } from 'react';
import { fetchExternalLinks } from '../api';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress from Material-UI

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const data = await fetchExternalLinks(url);
      setResult(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Something went wrong');
      setResult(null);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="container">
        <h3>External Links</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Submit</button>
      </form>
      {loading && (
        <div className="spinner-container">
          <CircularProgress color="primary" /> {/* Spinner */}
        </div>
      )}
      {error && <p>Error: {error}</p>}
      {result && (
        <div className="results">
          <p>Total External Links: {result.external_links.length}</p>
          <p>External Links:</p>
          <ul>
            {result.external_links.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
