import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import PieChartComponent from '../Components/PieChartComponent';
import { Button} from '@mui/material';

const AnalyzeSEO = () => {
  const [url, setUrl] = useState('');
  const [analysisResults, setAnalysisResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.get(`http://localhost:8000/analyze-seotool/`, {
        params: { url },
      });
      setAnalysisResults(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setAnalysisResults([]); // Clear results if there's an error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="seo-report">
      <h4>Analyze SEO Tool</h4>
      <div className="input-section">
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Enter website URL"
          className="url-input"
        />
     

        <Button onClick={fetchData} variant="contained" color="primary" disabled={loading}>
    Fetch Data
  </Button>
        {loading && <CircularProgress />}
      




      </div>
      {error && <div className="error">Error: {error}</div>}
      {analysisResults.length > 0 && (
        <div className="results-section">
          <h2>Analysis Results</h2>
          {analysisResults.map((result, index) => (
            <div key={index} className="result">
              <h3>Page: {result.page}</h3>
              <p>Title: {result.title}</p>
              <p>Non-Canonical Links:</p>
              <ul>
                {result.non_canonical_links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <div className="container">
      <div className="row">
      <div className="col-md-5">


        <div className="chart-section">
          <PieChartComponent />
          <div className="total-ideas">
          <h2 style={{ color: '#FF8042' }}>243</h2>
<p style={{ color: '#8884d8' }}>for 24 pages</p>

          </div>
        </div>
        </div>
        <div className="col-md-7">

        <div className="ideas-section">
          <ul>
            <li>
              <span className="st">St</span> Strategy Ideas <span className="count">9</span>
            </li>
            <li>
              <span className="ba">Ba</span> Backlinks Ideas <span className="count">24</span>
            </li>
            <li>
              <span className="te">Te</span> Technical SEO Ideas <span className="count">39</span>
            </li>
            <li>
              <span className="ux">Ux</span> User Experience Ideas <span className="count">12</span>
            </li>
            <li>
              <span className="sf">Sf</span> SERP Features Ideas <span className="count">8</span>
            </li>
            <li>
              <span className="se">Se</span> Semantic Ideas <span className="count">21</span>
            </li>
            <li>
              <span className="co">Co</span> Content Ideas <span className="count">142</span>
            </li>
          </ul>
          
        </div>
        </div>
      </div>
    </div>
    <div className="row">
            <h3>Our ideas may help you increase your organic traffic</h3>
            <div className="traffic-data">
              <span>Current: 300K</span>
              <span>Potential: 720K</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div className="current-bar" style={{ width: '42%' }}></div>
              </div>
              <div className="progress-bar-labels">
                <span>42%</span>
                <span>Potential: 100%</span>
              </div>
            </div>
            <div className="percentage-increase">Over 240%</div>
          </div>
          </div>
  );
};

export default AnalyzeSEO;
