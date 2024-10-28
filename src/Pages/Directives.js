import React, { useState } from 'react';
import axios from 'axios';

function DirectivesChecker() {
  const [url, setUrl] = useState('');
  const [directivesData, setDirectivesData] = useState(null);
  const [error, setError] = useState('');

  const fetchDirectives = async () => {
    try {
      const response = await axios.get('http://localhost:8000/directives/', {
        params: { url: url }
      });
      setDirectivesData(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch directives.');
      setDirectivesData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() !== '') {
      fetchDirectives();
    } else {
      setError('Please enter a valid URL.');
    }
  };

  return (
    <div>
      <h1>Directives Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Check Directives</button>
      </form>

      {error && <p>{error}</p>}

      {directivesData && (
        <div>
          <h2>No Index Pages:</h2>
          {directivesData.no_index_pages.length > 0 ? (
            <ul>
              {directivesData.no_index_pages.map((page, index) => (
                <li key={index}>{page}</li>
              ))}
            </ul>
          ) : (
            <p>No pages found without index directives.</p>
          )}
          
          <h2>No Follow Pages:</h2>
          {directivesData.no_follow_pages.length > 0 ? (
            <ul>
              {directivesData.no_follow_pages.map((page, index) => (
                <li key={index}>{page}</li>
              ))}
            </ul>
          ) : (
            <p>No pages found without follow directives.</p>
          )}

          <h2>No Snippet Pages:</h2>
          {directivesData.no_snippet_pages.length > 0 ? (
            <ul>
              {directivesData.no_snippet_pages.map((page, index) => (
                <li key={index}>{page}</li>
              ))}
            </ul>
          ) : (
            <p>No pages found without snippet directives.</p>
          )}

          <h2>No Index Follow Pages:</h2>
          {directivesData.no_index_follow_pages.length > 0 ? (
            <ul>
              {directivesData.no_index_follow_pages.map((page, index) => (
                <li key={index}>{page}</li>
              ))}
            </ul>
          ) : (
            <p>No pages found without index follow directives.</p>
          )}

          <h2>No Index No Follow Pages:</h2>
          {directivesData.no_index_no_follow_pages.length > 0 ? (
            <ul>
              {directivesData.no_index_no_follow_pages.map((page, index) => (
                <li key={index}>{page}</li>
              ))}
            </ul>
          ) : (
            <p>No pages found without index no-follow directives.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DirectivesChecker;
