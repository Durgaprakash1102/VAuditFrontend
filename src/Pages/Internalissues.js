import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent, CardHeader, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { fetchInternalLinks } from '../api';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title } from 'chart.js';
import axios from 'axios';

// Register necessary components for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, Title);

function CrawledLinks() {
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('links'); // Default section

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

  const fetchIssuesData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get('http://localhost:8000/internalissues/', {
        params: { base_url: url }
      });
      setDetails(response.data); // Update state with fetched data
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
      <div style={{ marginBottom: '20px' }}>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <Button
            variant="outlined"
            onClick={() => setActiveSection('links')}
            disabled={activeSection === 'links'}
          >
            Links
          </Button>
          <Button
            variant="outlined"
            onClick={() => setActiveSection('issues')}
            disabled={activeSection === 'issues'}
          >
            Issues
          </Button>
          <Button
            variant="outlined"
            onClick={() => setActiveSection('solution')}
            disabled={activeSection === 'solution'}
          >
            Solution
          </Button>
        </nav>
      </div>

      {activeSection === 'links' && (
        <div>
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
        </div>
      )}

      {activeSection === 'issues' && (
        <div>
          <h3>Internal Links Status</h3>
          <input
            type="text"
            value={url}
            onChange={handleInputChange}
            placeholder="Enter base URL"
            style={{ marginBottom: '10px' }}
          />
          <Button variant="contained" onClick={fetchIssuesData} disabled={loading}>
            Fetch Status
          </Button>
          {loading && <CircularProgress style={{ marginLeft: '10px' }} />}
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {details && details.internal_links_status && (
            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>URL</TableCell>
                    <TableCell>Status Code</TableCell>
                    <TableCell>Issues</TableCell>
                    <TableCell>Fixes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {details.internal_links_status.map((linkStatus, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <a href={linkStatus.url} target="_blank" rel="noopener noreferrer">
                          {linkStatus.url}
                        </a>
                      </TableCell>
                      <TableCell>{linkStatus.status_code}</TableCell>
                      <TableCell>
                        <ul>
                          {linkStatus.issues.map((issue, i) => (
                            <li key={i}>{issue}</li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell>
                        <ul>
                          {linkStatus.fixes.map((fix, i) => (
                            <li key={i}>{fix}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      )}

      {activeSection === 'solution' && (
        <div>
          <h3>Solution</h3>
          <p>This is the solution section.</p>
        </div>
      )}
    </div>
  );
}

export default CrawledLinks;
