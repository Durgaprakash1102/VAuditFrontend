import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const SummaryComponent = () => {
  const [internalLinksCount, setInternalLinksCount] = useState(0); // Example state
  const [internalLinks, setInternalLinks] = useState([]); // Example state

  const handleFetchData = () => {
    // Simulate fetching data
    const fetchedInternalLinks = ['link1', 'link2', 'link3']; // Example data
    setInternalLinks(fetchedInternalLinks);
    setInternalLinksCount(fetchedInternalLinks.length);
    localStorage.setItem('internalLinks', JSON.stringify(fetchedInternalLinks)); // Store data
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 275, marginBottom: 2 }}>
                <CardContent>
                  <Typography variant="body1" color="textSecondary">
                    Internal Links:
                  </Typography>
                  <Typography variant="h6" component="div">
                    {internalLinksCount}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Button variant="contained" onClick={handleFetchData}>
            Fetch Data
          </Button>
          <Link to="/internallinks">
            <Button variant="outlined">
              View Internal Links
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryComponent;
