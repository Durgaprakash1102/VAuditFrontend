import React, { useEffect, useState } from 'react';

const CanonicalLinks = () => {
  const [canonicalLinks, setCanonicalLinks] = useState([]);

  useEffect(() => {
    const storedCanonicalLinks = localStorage.getItem('canonicalLinks');
    if (storedCanonicalLinks) {
      setCanonicalLinks(JSON.parse(storedCanonicalLinks));
    }
  }, []);

  return (
    <div>
      <h2>Canonical Links</h2>
      {canonicalLinks.length === 0 ? (
        <p>No canonical links available.</p>
      ) : (
        <ul>
          {canonicalLinks.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CanonicalLinks;
