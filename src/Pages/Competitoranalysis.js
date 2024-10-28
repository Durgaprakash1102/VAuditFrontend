// src/components/CompetitorAnalysis.js
import React, { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { jsPDF } from 'jspdf';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(Tooltip, Legend, ArcElement, CategoryScale);

const CompetitorAnalysis = () => {
    const [userUrl, setUserUrl] = useState('');
    const [competitorUrl, setCompetitorUrl] = useState('');
    const [analysisResult, setAnalysisResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFetchAnalysis = async () => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get('http://localhost:8000/competitor_analysis/', {
                params: { user_url: userUrl, competitor_url: competitorUrl }
            });
            setAnalysisResult(response.data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setAnalysisResult(null);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text('Competitor Analysis Result', 10, 10);
        doc.text(JSON.stringify(analysisResult, null, 2), 10, 20);
        doc.save('analysisResult.pdf');
    };

    // Pie chart data for keyword density comparison
    const pieChartDataDensity = {
        labels: ['User Keyword Density', 'Competitor Keyword Density'],
        datasets: [
            {
                data: [
                    analysisResult?.keyword_density_comparison.user_keyword_density || 0,
                    analysisResult?.keyword_density_comparison.competitor_keyword_density || 0,
                ],
                backgroundColor: ['#36A2EB', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    // Pie chart data for readability comparison
    const pieChartDataReadability = {
        labels: ['User Readability Score', 'Competitor Readability Score'],
        datasets: [
            {
                data: [
                    analysisResult?.readability_comparison.user_readability_scores.flesch_kincaid || 0,
                    analysisResult?.readability_comparison.competitor_readability_scores.flesch_kincaid || 0,
                ],
                backgroundColor: ['#FFCE56', '#FF6384'],
                hoverBackgroundColor: ['#FFCE56', '#FF6384'],
            },
        ],
    };

    // Pie chart data for page load time comparison
    const pieChartDataLoadTime = {
        labels: ['User Page Load Time', 'Competitor Page Load Time'],
        datasets: [
            {
                data: [
                    analysisResult?.page_load_time_comparison.user_page_load_time || 0,
                    analysisResult?.page_load_time_comparison.competitor_page_load_time || 0,
                ],
                backgroundColor: ['#4BC0C0', '#FF6384'],
                hoverBackgroundColor: ['#4BC0C0', '#FF6384'],
            },
        ],
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Competitor Analysis</h1>
            <div className="row mb-3">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            value={userUrl}
                            onChange={(e) => setUserUrl(e.target.value)}
                            placeholder="Enter User URL"
                            className="form-control"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            value={competitorUrl}
                            onChange={(e) => setCompetitorUrl(e.target.value)}
                            placeholder="Enter Competitor URL"
                            className="form-control"
                        />
                    </div>
                    <button
                        onClick={handleFetchAnalysis}
                        className="btn btn-primary mb-3"
                    >
                        Fetch Analysis
                    </button>
                    {loading && <CircularProgress style={{ margin: '20px 0' }} />}
                    {error && <div className="alert alert-danger" role="alert">Error: {error}</div>}
                    
                    {analysisResult && (
                        <>
                            <h3 className="mt-4">Analysis Results</h3>
                            
                            {/* Content Comparison */}
                            <h5>Content Comparison</h5>
                            <table className="table table-bordered mb-4">
                                <thead>
                                    <tr>
                                        <th>User Content Length</th>
                                        <th>Competitor Content Length</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{analysisResult.content_comparison.user_content_length}</td>
                                        <td>{analysisResult.content_comparison.competitor_content_length}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Backlink Comparison */}
                            <h5>Backlink Comparison</h5>
                            <table className="table table-bordered mb-4">
                                <thead>
                                    <tr>
                                        <th>User Backlinks</th>
                                        <th>Competitor Backlinks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ul>
                                                {analysisResult.backlink_comparison.user_backlinks.map((link, index) => (
                                                    <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                {analysisResult.backlink_comparison.competitor_backlinks.map((link, index) => (
                                                    <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Keyword Overlap</h5>
                            <table className="table table-bordered mb-4">
                                <thead>
                                    <tr>
                                        <th>Keywords</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {analysisResult.keyword_overlap.map((keyword, index) => (
                                        <tr key={index}>
                                            <td>{keyword}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Meta Description Comparison */}
                            <h5>Meta Description Comparison</h5>
                            <table className="table table-bordered mb-4">
                                <thead>
                                    <tr>
                                        <th>User Meta Description</th>
                                        <th>Competitor Meta Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{analysisResult.meta_description_comparison.user_meta_description}</td>
                                        <td>{analysisResult.meta_description_comparison.competitor_meta_description}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Readability Comparison</h5>
                            <div style={{ maxWidth: '300px', margin: '20px auto' }}>
                                <Pie data={pieChartDataReadability} />
                            </div>
                            <table className="table table-bordered mb-4">
                                <thead>
                                    <tr>
                                        <th>User Readability Score</th>
                                        <th>Competitor Readability Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{analysisResult.readability_comparison.user_readability_scores.flesch_kincaid}</td>
                                        <td>{analysisResult.readability_comparison.competitor_readability_scores.flesch_kincaid}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Keyword Density Comparison</h5>
                            <div style={{ maxWidth: '300px', margin: '20px auto' }}>
                                <Pie data={pieChartDataDensity} />
                            </div>
                            <table className="table table-bordered mb-4">
                                <thead>
                                    <tr>
                                        <th>User Keyword Density (%)</th>
                                        <th>Competitor Keyword Density (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{analysisResult.keyword_density_comparison.user_keyword_density}</td>
                                        <td>{analysisResult.keyword_density_comparison.competitor_keyword_density}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Page Load Time Comparison</h5>
                            <div style={{ maxWidth: '300px', margin: '20px auto' }}>
                                <Pie data={pieChartDataLoadTime} />
                            </div>
                            <table className="table table-bordered mb-4">
                                <thead>
                                    <tr>
                                        <th>User Page Load Time (ms)</th>
                                        <th>Competitor Page Load Time (ms)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{analysisResult.page_load_time_comparison.user_page_load_time}</td>
                                        <td>{analysisResult.page_load_time_comparison.competitor_page_load_time}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* <button
                                onClick={handleDownload}
                                className="btn btn-secondary mt-3"
                            >
                                Download Analysis
                            </button> */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompetitorAnalysis;
