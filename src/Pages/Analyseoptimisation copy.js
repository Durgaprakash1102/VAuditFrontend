import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';

const GeneratedContentChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Word',
        data: [20000, 15000, 10000, 15000, 25000, 10000, 15000, 5000, 15000, 40000, 10000, 20000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: [10000, 20000, 15000, 10000, 20000, 15000, 10000, 5000, 10000, 25000, 5000, 15000],
        backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange color
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10000,
        },
      },
    },
  };

  return (
    <Box p={2} width="100%" height="400px">
      <Typography variant="h6" mb={2}>
        Generated Content
      </Typography>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default GeneratedContentChart;
