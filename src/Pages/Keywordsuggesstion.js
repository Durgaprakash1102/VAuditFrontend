import React, { useState } from 'react';
import { keywordSuggesstion } from '../api';

const KeywordSuggestion = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [seedKeyword, setSeedKeyword] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  const fetchSuggestions = async () => {
    try {
      const response = await keywordSuggesstion(websiteUrl);
      setSuggestions(response.data[1]);
      setError('');
    } catch (error) {
      setError('Failed to fetch suggestions');
      setSuggestions([]);
    }
  };
  
  return (
    <div>
      <h3>Keyword suggesstions</h3>
      <input
        type="text"
        value={seedKeyword}
        onChange={(e) => setSeedKeyword(e.target.value)}
        placeholder="Enter seed keyword"
      />
      <button onClick={fetchSuggestions}>Get Suggestions</button>
      {error && <p>{error}</p>}
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordSuggestion;
