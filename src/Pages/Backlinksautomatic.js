import React, { useEffect, useState } from 'react';

const Backlinks = () => {
  const [data, setData] = useState({ count: 0, links: [] });

  useEffect(() => {
    const storedData = localStorage.getItem('backlinks');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h1>Backlinks</h1>
      <p>Backlinks Count: {data.count}</p>
      <h2>Links:</h2>
      <ul>
        {data.links.map((link, index) => (
          <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Backlinks;
