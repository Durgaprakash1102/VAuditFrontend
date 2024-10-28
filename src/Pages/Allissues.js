// src/components/UrlAnalyzer.js
import React, { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const UrlAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8000/allissues/', {
        params: { url }
      });
      setResults(response.data);
    } catch (err) {
      setError('Error fetching data. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
  };

  const formStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  };

  const inputStyle = {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
  };

  const progressStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const errorStyle = {
    color: 'red',
    textAlign: 'center',
  };

  const resultsContainerStyle = {
    marginTop: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#f4f4f4',
  };

  const tdStyle = {
    padding: '10px',
    border: '1px solid #ddd',
  };

  const trEvenStyle = {
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={containerStyle}>
        <h3>Display issues</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Analyze URL
        </button>
      </form>

      {loading && <div style={progressStyle}><CircularProgress /></div>}
      {error && <p style={errorStyle}>{error}</p>}
      {results && (
        <div style={resultsContainerStyle}>
          <h2>Analysis Results</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>URL</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Recommendation</th>
                <th style={thStyle}>Issues</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(results).map(([url, analysis]) =>
                Object.entries(analysis).map(([type, details], index) => (
                  <tr key={`${url}-${type}`} style={index % 2 === 0 ? {} : trEvenStyle}>
                    <td style={tdStyle}>{url}</td>
                    <td style={tdStyle}>{type}</td>
                    <td style={tdStyle}>{details.recommendation}</td>
                    <td style={tdStyle}>{details.issues.join(', ')}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UrlAnalyzer;
