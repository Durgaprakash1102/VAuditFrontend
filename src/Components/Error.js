import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = () => {
  const [url, setUrl] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setAnalysisResults(null);

    try {
      const response = await axios.get('http://localhost:8000/errorinfoissue/', {
        params: { url: encodeURIComponent(url) },
      });

      // Assuming response.data is an object with URL keys
      const resultData = response.data;
      console.log(resultData, "kkkkkkkkkkkkkkkkkk")

      // Handle cases where the result may be duplicated or malformed
      const cleanedResults = {};
      Object.keys(resultData).forEach(key => {
        if (!cleanedResults[key]) {
          cleanedResults[key] = resultData[key];
        }
      });

      setAnalysisResults(cleanedResults);
    } catch (err) {
      console.error('API call error:', err);
      setError('Error fetching data. Please make sure the URL is correct.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4 text-center">SEO Analyzer</h1>
      
      
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Analyzing...' : 'Analyze'}
              </button>
            </div>
          </div>
        </div>
      </form>

      {error && (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        </div>
      )}

      {analysisResults && (
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="text-center mb-4">Analysis Results</h2>
            {Object.keys(analysisResults).map((key) => (
              <div key={key} className="mb-4">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">{key}</h3>
                  </div>
                  <div className="card-body">
                    <div>
                      <h4>Indexability</h4>
                      <pre>{JSON.stringify(analysisResults[key].analyze_indexability, null, 2)}</pre>
                    </div>
                    <div>
                      <h4>Crawlability</h4>
                      <pre>{JSON.stringify(analysisResults[key].analyze_crawlability, null, 2)}</pre>
                    </div>
                    <div>
                      <h4>Redirects</h4>
                      <pre>{JSON.stringify(analysisResults[key].analyze_redirects, null, 2)}</pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Error;
