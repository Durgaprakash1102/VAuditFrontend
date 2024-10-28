import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { fetchSpamScore } from '../api';
import { Box, Typography } from '@mui/material';

function CrawledLinks() {
  const [url, setUrl] = useState('');
  const [spamScore, setSpamScore] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchSpamScoreData = async () => {
    setLoading(true); // Start loading
    try {
      const data = await fetchSpamScore(url);
      setSpamScore(data.spam_score);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setSpamScore(null); // Clear spam score if there's an error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <h3>Spam Score</h3>
      <input type="text" value={url} onChange={handleInputChange} />
      <button onClick={fetchSpamScoreData}>Fetch Spam Score</button>
      {loading && <CircularProgress />}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {spamScore !== null && (
        <Box mt={2} width="100%">
          <Typography variant="h6">Spam Score: {spamScore}</Typography>
          <LinearProgress
            variant="determinate"
            value={spamScore}
            sx={{
              height: 20,
              borderRadius: 5,
              bgcolor: 'lightgrey',
              '& .MuiLinearProgress-bar': {
                bgcolor: 'green',
              },
            }}
          />
        </Box>
      )}
    </div>
  );
}

export default CrawledLinks;
