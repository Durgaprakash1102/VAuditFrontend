import React, { useState } from 'react';
import { fetchWebsiteDetails } from '../api'; // Adjust the path as needed

function WebsiteDetails() {
  const [url, setUrl] = useState('');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = async () => {
    try {
      const data = await fetchWebsiteDetails(url);
      setDetails(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setDetails(null);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">Fetch Website Details</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="urlInput">Website URL</label>
            <input
              type="text"
              className="form-control"
              id="urlInput"
              placeholder="Enter website URL"
              value={url}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary btn-block mt-3" onClick={fetchData}>
            Fetch Details
          </button>

          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              Error: {error}
            </div>
          )}

          {details && details.error && (
            <div className="alert alert-danger mt-3" role="alert">
              Error: {details.error}
            </div>
          )}

          {details && details.success && (
            <div className="mt-4">
              <h5>Website Details</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Title:</strong> {details.title}
                </li>
                <li className="list-group-item">
                  <strong>H1 Tag:</strong> {details.h1}
                </li>
                <li className="list-group-item">
                  <strong>Meta Description:</strong> {details.meta_description}
                </li>
                {/* Add more details as needed */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WebsiteDetails;
