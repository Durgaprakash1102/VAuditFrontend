import React, { useState } from 'react';
import axios from 'axios';

const AddKeyword = () => {
    const [keyword, setKeyword] = useState('');
    const [keywordData, setKeywordData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8000//${encodeURIComponent(keyword)}/`);
            setKeywordData(response.data);
            setError('');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setError('Keyword not found');
            } else {
                setError('Server error, please try again later');
            }
            console.error('Error fetching keyword data:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter keyword"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {keywordData && (
                <div>
                    <h2>{keywordData.keyword}</h2>
                    <p>Search Volume: {keywordData.search_volume}</p>
                    <p>Competition: {keywordData.competition}</p>
                    {/* Display more data as needed */}
                </div>
            )}
        </div>
    );
};

export default AddKeyword;
