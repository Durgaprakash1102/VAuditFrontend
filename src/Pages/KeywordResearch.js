import React, { useState } from 'react';
import { keywordResearch } from '../api';

const KeywordExtractor = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [keywords, setKeywords] = useState(null);
  const [error, setError] = useState(null);
  const [mostPrimaryKeyword, setMostPrimaryKeyword] = useState(null);

  const handleExtractKeywords = async () => {
    try {
      const response = await keywordResearch(websiteUrl);
      const { word_count, most_primary_keyword } = response;
      setKeywords(word_count);
      setMostPrimaryKeyword(most_primary_keyword);
      setError(null);
    } catch (error) {
      setKeywords(null);
      setMostPrimaryKeyword(null);
      setError(error.response ? error.response.data.error : 'Failed to fetch data');
    }
  };

  return (
    <div>
      <h3>keyword Research</h3>
      <input
        type="text"
        value={websiteUrl}
        onChange={(e) => setWebsiteUrl(e.target.value)}
        placeholder="Enter website URL"
      />
      <button onClick={handleExtractKeywords}>Extract Keywords</button>
      {error && <p>Error: {error}</p>}
      {keywords && (
        <div>
          <h2>Keywords Count:</h2>
          <ul>
            {Object.entries(keywords).map(([word, count]) => (
              <li key={word}>
                {word}: {count}
              </li>
            ))}
          </ul>
          {mostPrimaryKeyword && (
            <p>
              Most Primary Keyword: {mostPrimaryKeyword}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default KeywordExtractor;
