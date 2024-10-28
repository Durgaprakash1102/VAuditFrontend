import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'
import { Pie, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const useStyles = makeStyles((theme) => ({
  spinner: {
    color: '#36A2EB',
    marginTop: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
  card: {
    padding: '24px 8px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 10px 6px 2px rgb(5 93 255 / 41%)',
    marginBottom: '16px',
    textAlign: 'center',
    border: '1px solid #ccc',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
      height: 'auto',
    },
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '20px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  barContainer: {
    marginTop: '20px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '400px',
    },
  },
}))

const pieColors = {
  dofollowVsNofollow: ['#36A2EB', '#FF6384'],
  htmlVsNonHtml: ['#FFCE56', '#4BC0C0'],
  canonicalVsNonCanonical: ['#FF9F40', '#9966FF'],
}


const FullContent = () => {
  const { user } = useContext(UserContext)
  const classes = useStyles()
  const [url, setUrl] = useState(localStorage.getItem('url') || '')
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || null) 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    if (url && !data) {
      handleSearch(url)
    }
  }, [url])

  const handleSearch = (searchUrl = url) => {
    const token = user.token
    if (!searchUrl) return

    setLoading(true)
    setError(null)
    axios.get(`http://localhost:8000/full-content-links/?url=${encodeURIComponent(searchUrl)}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })      
    .then((response) => {
      const { aggregate_counts, results } = response.data
      const fetchedData = {
        aggregateCounts: aggregate_counts,
        results: results,
      }

      localStorage.setItem('url', searchUrl)
      localStorage.setItem('data', JSON.stringify(fetchedData))
      setData(fetchedData)
    })
    .catch((err) => {
      setError(err.response ? err.response.data.error : 'An error occurred')
      setData(null)
      localStorage.removeItem('url')
      localStorage.removeItem('data')
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const prepareChartData = (labels, values, colors) => ({
    labels,
    datasets: [{
      data: values,
      backgroundColor: colors,
    }],
  })

  const renderPieChart = (title, labels, values, colors) => (
    <div style={{ flex: '1', minWidth: '280px', margin: '10px' }}>
      <h4>{title}</h4>
      <Pie data={prepareChartData(labels, values, colors)} />
    </div>
  )

  const renderBarChart = (title, labels, values) => (
    <div className={classes.barContainer}>
      <h4>{title}</h4>
      <Bar
        data={{
          labels,
          datasets: [{
            label: 'Count',
            data: values,
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#FF9F40', '#9966FF', '#FF4500', '#32CD32'],
          }],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: title,
            },
          },
        }}
      />
    </div>
  )

  return (
    <div>
      <input
        id="urlInput"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button className='btn btn-primary m-2' onClick={() => handleSearch()}>Fetch Data</button>

      <div>{loading && <CircularProgress className={classes.spinner} />}</div>
      {error && <div className={classes.error}>Error: {error}</div>}
      {!loading && data && data.aggregateCounts && (
        <div>
          <h3>Overview</h3>
          <div className={classes.cardContainer}>
            {[{
              title: 'Total Internal Links',
              value: data.aggregateCounts.total_internal_links,
              to: '/admin/fullcontent/internallinks',
            }, {
              title: 'Total External Links',
              value: data.aggregateCounts.total_external_links,
              to: '/admin/fullcontent/externallinks',
            }, {
              title: 'Total Broken Links',
              value: data.aggregateCounts.total_broken_links,
              to: '/admin/fullcontent/brokenlinks',
            }, {
              title: 'Total Canonical URLs',
              value: data.aggregateCounts.total_canonical_urls,
              to: '/admin/fullcontent/canonicallinks',
            }, {
              title: 'Total Non-Canonical URLs',
              value: data.aggregateCounts.total_non_canonical_urls,
              to: '/admin/fullcontent/noncanonicallinks',
            }, {
              title: 'Total Crawled Links',
              value: data.aggregateCounts.total_crawled_links,
              to: '/admin/fullcontent/crawledlinks',
            }, {
              title: 'Total Non Crawled Links',
              value: data.aggregateCounts.total_uncrawled_links,
              to: '/admin/fullcontent/uncrawledLinks',
            }, {
              title: 'Total DoFollow Links',
              value: data.aggregateCounts.total_dofollow_links,
              to: '/admin/fullcontent/dofollow',
            }, {
              title: 'Total NoFollow Links',
              value: data.aggregateCounts.total_nofollow_links,
              to: '/admin/fullcontent/nofollow',
            }, {
              title: 'Indexed Links',
              value: data.aggregateCounts.total_indexed_urls,
              to: '/admin/fullcontent/indexed',
            }, {
              title: 'Non Indexed Links',
              value: data.aggregateCounts.total_non_indexed_urls,
              to: '/admin/fullcontent/nonindexed',
            }, {
              title: 'Total HTML Pages',
              value: data.aggregateCounts.total_html_pages,
              to: '/admin/fullcontent/totalhtmlpages',
            }, {
              title: 'Non HTML Links',
              value: data.aggregateCounts.total_non_html_files,
              to: '/admin/fullcontent/nonhtmlfiles',
            }].map((card, index) => (
              <Link
                to={card.to}
                key={index}
                style={{ textDecoration: 'none', color: 'inherit', flex: '1 1 calc(25% - 16px)' }}
              >
                <div className={classes.card}>
                  <h6>{card.title}</h6>
                  <p><b>{card.value}</b></p>
                </div>
              </Link>
            ))}
          </div>
          <div className={classes.pieContainer}>
            {renderPieChart('Dofollow vs Nofollow', ['Dofollow', 'Nofollow'], [data.aggregateCounts.total_dofollow_links, data.aggregateCounts.total_nofollow_links], pieColors.dofollowVsNofollow)}
            {renderPieChart('HTML vs Non-HTML', ['HTML', 'Non-HTML'], [data.aggregateCounts.total_html_pages, data.aggregateCounts.total_non_html_files], pieColors.htmlVsNonHtml)}
            {renderPieChart('Canonical vs Non-Canonical', ['Canonical', 'Non-Canonical'], [data.aggregateCounts.total_canonical_urls, data.aggregateCounts.total_non_canonical_urls], pieColors.canonicalVsNonCanonical)}
          </div>

          {renderBarChart('All Link Counts', [
            'Total Internal Links',
            'Total External Links',
            'Total Broken Links',
            'Total Canonical URLs',
            'Total Non-Canonical URLs',
            'Total Crawled Links',
            'Total Non Crawled Links',
            'Total DoFollow Links',
            'Total NoFollow Links',
            'Indexed Links',
            'Non Indexed Links',
            'Total HTML Pages',
            'Non HTML Links',
          ], [
            data.aggregateCounts.total_internal_links,
            data.aggregateCounts.total_external_links,
            data.aggregateCounts.total_broken_links,
            data.aggregateCounts.total_canonical_urls,
            data.aggregateCounts.total_non_canonical_urls,
            data.aggregateCounts.total_crawled_links,
            data.aggregateCounts.total_uncrawled_links,
            data.aggregateCounts.total_dofollow_links,
            data.aggregateCounts.total_nofollow_links,
            data.aggregateCounts.total_indexed_urls,
            data.aggregateCounts.total_non_indexed_urls,
            data.aggregateCounts.total_html_pages,
            data.aggregateCounts.total_non_html_files,
          ])}
        </div>
      )}
    </div>
  )
}

export default FullContent