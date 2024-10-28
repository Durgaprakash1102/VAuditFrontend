import React, { useState } from 'react';

function ResourceAnalyzer() {
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = async () => {
    try {
        const response = await fetch(`http://localhost:8000/imagesone?url=${encodeURIComponent(url)}`);      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      setDetails(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setDetails(null); // Clear details if there's an error
    }
  };

  return (
    <div>
      <input type="text" value={url} onChange={handleInputChange} />
      <button onClick={fetchData}>Analyze Resources</button>
      {error && <div>Error: {error}</div>}
      {details && details.error && (
        <div>Error: {details.error}</div>
      )}
      {details && !details.error && (
        <div>
          <p>Total Images: {details.total_images}</p>
          <p>Broken Images Count: {details.broken_images_count}</p>
          <p>Redirecting Images Count: {details.redirecting_images_count}</p>
          <p>Pages with Broken Images: {details.pages_with_broken_images.join(', ')}</p>
          <p>Pages with Redirecting Images: {details.pages_with_redirecting_images.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default ResourceAnalyzer;
