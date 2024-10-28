import React, { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const AnalyzeOptimization = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchAnalysis = async () => {
    if (!url || !/^https?:\/\/.+\..+/.test(url)) {
      setError('Please enter a valid URL.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8000/analyze_optimization/', {
        params: { url }
      });
      setResults(response.data);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.error || 'Error fetching analysis. Please try again.');
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Indexibility</h2>

      <div className="row mb-3">
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
            />
            <button className="btn btn-primary" onClick={handleFetchAnalysis}>
              Fetch Analysis
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

      {results && (
        <div className="row mt-4">
          <div className="col-12 mb-4">
            <div className="border p-3">
              <h5>Indexability</h5>
              <p>{results.indexability}</p>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="border p-3">
              <h5>Website Load Time</h5>
              <p>{results.page_load_time}</p>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="border p-3">
              <h5>Mobile Friendly</h5>
              <p>{results.mobile_friendly}</p>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="border p-3">
              <h5>Secure Connection</h5>
              <p>{results.secure_connection}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyzeOptimization;