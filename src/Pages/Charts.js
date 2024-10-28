// src/components/Charts.js
import React, { useRef } from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Card, CardContent, Grid } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Charts = ({ brokenLinksData, htmlPagesData, redirectsData, protocolData, canonicalData, barData, lineData }) => {
  const brokenLinksChartRef = useRef(null);
  const htmlPagesChartRef = useRef(null);
  const redirectsChartRef = useRef(null);
  const protocolChartRef = useRef(null);
  const canonicalChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  return (
    <div className="chart-container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <h3>Broken Links Chart</h3>
              <div ref={brokenLinksChartRef}>
                <Pie data={brokenLinksData} />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <h3>HTML Pages Chart</h3>
              <div ref={htmlPagesChartRef}>
                <Pie data={htmlPagesData} />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <h3>Redirects Chart</h3>
              <div ref={redirectsChartRef}>
                <Pie data={redirectsData} />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <h3>Protocol Chart</h3>
              <div ref={protocolChartRef}>
                <Pie data={protocolData} />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <h3>Canonical Chart</h3>
              <div ref={canonicalChartRef}>
                <Pie data={canonicalData} />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={10}>
          <Card>
            <CardContent>
              <h3>Line Chart</h3>
              <div ref={lineChartRef}>
                <Line data={lineData} />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={10}>
          <Card>
            <CardContent>
              <h3>Bar Chart</h3>
              <div ref={barChartRef}>
                <Bar data={barData} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Charts;
