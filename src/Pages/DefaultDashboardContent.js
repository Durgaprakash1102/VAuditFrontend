import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts'
import { FaChartLine, FaCog, FaRocket } from 'react-icons/fa'
import { CanvasJSChart } from 'canvasjs-react-charts'
import { Box, Typography, Grid, Card, CardContent } from '@mui/material'
import { Bar as BarChartJS } from 'react-chartjs-2'

const seoData = [
  { name: 'Jan', keywordRank: 20, traffic: 400 },
  { name: 'Feb', keywordRank: 25, traffic: 500 },
  { name: 'Mar', keywordRank: 15, traffic: 600 },
  { name: 'Apr', keywordRank: 30, traffic: 700 },
  { name: 'May', keywordRank: 10, traffic: 800 },
  { name: 'June', keywordRank: 25, traffic: 500 },
  { name: 'july', keywordRank: 15, traffic: 600 },
  { name: 'Aug', keywordRank: 30, traffic: 700 },
  { name: 'Sept', keywordRank: 10, traffic: 800 },
  { name: 'Oct', keywordRank: 10, traffic: 800 },
  { name: 'Nov', keywordRank: 10, traffic: 800 },
  { name: 'Dec', keywordRank: 10, traffic: 800 },
  
]

const cardsData = [
  { icon: <FaChartLine size={50} color="#4caf50" />, heading: 'Analytics', text: '75.5%' },
  { icon: <FaCog size={50} color="#ff9800" />, heading: 'Optimization', text: '82.6%' },
  { icon: <FaRocket size={50} color="#2196f3" />, heading: 'Performance', text: '92.3%' },
]

const pieOptions = {
  exportEnabled: true,
  animationEnabled: true,
  title: {
    text: 'Website Traffic Sources',
  },
  data: [{
    type: 'pie',
    startAngle: 75,
    toolTipContent: '<b>{label}</b>: {y}%',
    showInLegend: true,
    legendText: '{label}',
    indexLabelFontSize: 16,
    indexLabel: '{label} - {y}%',
    dataPoints: [
      { y: 18, label: 'Direct' },
      { y: 49, label: 'Organic Search' },
      { y: 9, label: 'Paid Search' },
      { y: 5, label: 'Referral' },
      { y: 19, label: 'Social' },
    ],
  }],

  options3D: {
    enabled: true,
    alpha: 45,
    beta: 0,
  },
}

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Word',
      data: [20000, 15000, 10000, 15000, 25000, 10000, 15000, 5000, 15000, 40000, 10000, 20000],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      borderRadius: 5,
    },
    {
      label: 'Image',
      data: [10000, 20000, 15000, 10000, 20000, 15000, 10000, 5000, 10000, 25000, 5000, 15000],
      backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange color
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
      borderRadius: 5,
    },
  ],
}

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
}

const SEOStats = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    setUsername(storedUsername)
  }, [])

  return (
    <div style={{ padding: '20px', color: '#333' }}>
      <h2> SEO Metrics Dashboard</h2>
      
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {card.icon}
                </div>
                <Typography variant="h6" align="center">{card.heading}</Typography>
                <Typography variant="body1" align="center">{card.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} marginTop={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Keyword Rankings</Typography>
          <LineChart
            width={500}
            height={300}
            data={seoData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="keywordRank" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6">Traffic Trends</Typography>
          <LineChart
            width={500}
            height={300}
            data={seoData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="traffic" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </Grid>
      </Grid>

      <Grid container spacing={3} marginTop={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">SEO Bar Chart</Typography>
          <BarChart
            width={500}
            height={300}
            data={seoData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="keywordRank" fill="#8884d8" />
            <Bar dataKey="traffic" fill="#82ca9d" />
          </BarChart>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6">Website Traffic Sources</Typography>
          <CanvasJSChart options={pieOptions} />
        </Grid>
      </Grid>

      <Box p={2} width="100%" height="400px" marginTop={4}>
        <Typography variant="h6" gutterBottom>
          Generated Content Insights
        </Typography>
        <BarChartJS data={data} options={options} />
      </Box>
    </div>
  )
}

export default SEOStats
