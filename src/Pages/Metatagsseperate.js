import React, { useEffect, useState } from 'react';

const MetaTags = () => {
  const [data, setData] = useState({ count: 0, tags: [] });

  useEffect(() => {
    const storedData = localStorage.getItem('metaTags');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h1>Meta Tags</h1>
      <p>Meta Tags Count: {data.count}</p>
      <h2>Tags:</h2>
      <ul>
        {data.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default MetaTags;
