// src/components/AnalyzePage.js
import React, { useState } from 'react';
import axios from 'axios';

const AnalyzePage = () => {
  const [url, setUrl] = useState('');
  const [score, setScore] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8000/analyze/', { url });
    setScore(response.data.score);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Analyze</button>
      </form>
      {score && <p>SEO Score: {score}</p>}
    </div>
  );
};

export default AnalyzePage;
