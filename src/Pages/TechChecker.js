// src/components/TechChecker.js
import React, { useState } from 'react';
import axios from 'axios';

function TechChecker() {
  const [url, setUrl] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:8000/get-technologies/', {
        params: { url }
      });
      setTechnologies(response.data.technologies);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'An error occurred');
      setTechnologies([]);
    }
  };

  return (
    <div>
      <h1>Technology Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
        />
        <button type="submit">Check Technologies</button>
      </form>
      {error && <p>Error: {error}</p>}
      {technologies.length > 0 && (
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TechChecker;
