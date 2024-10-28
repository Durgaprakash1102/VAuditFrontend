import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import {  Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { fetchInternalLinks } from '../api';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, Title);

function Internallinksseperate() {
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const data = await fetchInternalLinks(url);
      setDetails(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setDetails(null); // Clear details if there's an error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Sample data for charts
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sample Data',
        data: [30, 45, 28, 50, 60, 70],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Navigation Bar */}
      {/* <div style={{ marginBottom: '20px' }}>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <Button variant="outlined" href="#links">
            Links
          </Button>
          <Link to="internalissues">
            <Button variant="outlined">
              Issues
            </Button>
          </Link>
          <Button variant="outlined" href="#solution">
            Solution
          </Button>
        </nav>
      </div> */}
      <h3>Internal Links</h3>
      <input type="text" value={url} onChange={handleInputChange} />
      <button onClick={fetchData}>Fetch Details</button>
      {loading && <CircularProgress />}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {details && details.error && (
        <div style={{ color: 'red' }}>Error: {details.error}</div>
      )}
      {details && !details.error && (
        <ul>
          {details.internal_links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
      {/* Cards Section */}
      <Typography variant="h6" noWrap component="div" style={{ marginBottom: '20px' }}>
        Analytics Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader title="Organic Traffic" />
            <CardContent>
              <Line data={data} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader title="Domain Analysis" />
            <CardContent>
              <Line data={data} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader title="Paid Keywords" />
            <CardContent>
              <Line data={data} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader title="Organic Score" />
            <CardContent>
              <Line data={data} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Page Content */}
   
    </div>
  );
}

export default Internallinksseperate;
