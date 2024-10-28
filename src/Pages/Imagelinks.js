import React, { useState, useEffect } from 'react';
import { fetchImagesData } from '../api';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import CircularProgress from '@mui/material/CircularProgress';

Chart.register(ArcElement, Tooltip, Legend);

const ImageChecker = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [chartDataLinks, setChartDataLinks] = useState(null);
  const [chartDataImages, setChartDataImages] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await fetchImagesData(url);
      setData(result);
      setError(null);

      // Calculate percentage for broken and valid links
      const totalLinks = result.total_links;
      const brokenLinks = result.broken_links;
      const validLinks = totalLinks - brokenLinks;
      const linkPercentage = (brokenLinks / totalLinks) * 100;

      // Calculate percentage for broken and valid images
      const totalImages = result.total_images;
      const brokenImages = result.broken_images;
      const validImages = totalImages - brokenImages;
      const imagePercentage = (brokenImages / totalImages) * 100;

      // Data for links pie chart
      const linksData = {
        labels: ['Broken Links', 'Valid Links'],
        datasets: [
          {
            label: 'Link Data',
            data: [brokenLinks, validLinks],
            backgroundColor: ['#FF6384', '#36A2EB'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB']
          }
        ]
      };
      setChartDataLinks(linksData);

      // Data for images pie chart
      const imagesData = {
        labels: ['Broken Images', 'Valid Images'],
        datasets: [
          {
            label: 'Image Data',
            data: [brokenImages, validImages],
            backgroundColor: ['#FFCE56', '#4BC0C0'],
            hoverBackgroundColor: ['#FFCE56', '#4BC0C0']
          }
        ]
      };
      setChartDataImages(imagesData);

    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Image and URLs Checker</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group mb-3">
          <input
            type="text"
            value={url}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter URL"
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      {loading && (
        <div className="d-flex justify-content-center my-4">
          <CircularProgress />
        </div>
      )}

      {error && <div className="text-danger text-center">{error}</div>}

      {data && !loading && (
        <div>
          <h4 className="mb-3">Image and URLs Checker Results</h4>
          <div className="card mb-4 p-2">
            <p><strong>Total Images:</strong> {data.total_images}</p>
            <p><strong>Broken Images:</strong> {data.broken_images}</p>
            <p><strong>Total Links:</strong> {data.total_links}</p>
            <p><strong>Broken Links:</strong> {data.broken_links}</p>
          </div>

          {/* Display Two Pie Charts Side by Side */}
          <div className="row">
            <div className="col-md-6">
              <h5>Links Data</h5>
              {chartDataLinks && (
                <div style={{ width: '300px', margin: '0 auto' }}>
                  <Pie
                    data={chartDataLinks}
                    options={{
                      plugins: {
                        tooltip: { enabled: true },
                        legend: { display: true, position: 'top' }
                      },
                      animation: { animateScale: true, animateRotate: true }
                    }}
                  />
                </div>
              )}
            </div>
            <div className="col-md-6">
              <h5>Images Data</h5>
              {chartDataImages && (
                <div style={{ width: '300px', margin: '0 auto' }}>
                  <Pie
                    data={chartDataImages}
                    options={{
                      plugins: {
                        tooltip: { enabled: true },
                        legend: { display: true, position: 'top' }
                      },
                      animation: { animateScale: true, animateRotate: true }
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Table for Broken and Valid Image Links */}
          <h5>Broken Image Links</h5>
          <table className="table table-bordered mb-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Broken Image Link</th>
              </tr>
            </thead>
            <tbody>
              {data.broken_image_links.length ? data.broken_image_links.map((link, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="2" className="text-center">No broken image links found</td>
                </tr>
              )}
            </tbody>
          </table>

          <h5>Valid Image Links</h5>
          <table className="table table-bordered mb-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Valid Image Link</th>
              </tr>
            </thead>
            <tbody>
              {data.valid_image_links.length ? data.valid_image_links.map((link, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="2" className="text-center">No valid image links found</td>
                </tr>
              )}
            </tbody>
          </table>

          <h5>Broken Link URLs</h5>
          <table className="table table-bordered mb-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Broken Link URL</th>
              </tr>
            </thead>
            <tbody>
              {data.broken_link_urls.length ? data.broken_link_urls.map((link, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="2" className="text-center">No broken links found</td>
                </tr>
              )}
            </tbody>
          </table>

          <h5>Valid Link URLs</h5>
          <table className="table table-bordered mb-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Valid Link URL</th>
              </tr>
            </thead>
            <tbody>
              {data.valid_link_urls.length ? data.valid_link_urls.map((link, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="2" className="text-center">No valid links found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ImageChecker;
