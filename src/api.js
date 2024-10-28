// src/api.js
import axios from 'axios';
const BASE_URL = 'http://localhost:8000';

export const fetchCrawledLinks = async (url) => {
  const response = await fetch(`${BASE_URL}/crawledlinks/?url=${encodeURIComponent(url)}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
};

export const fetchCanonicalLinks = async (url) => {
  const response = await fetch(`${BASE_URL}/canonical/?url=${encodeURIComponent(url)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};


export const fetchImagesData = async (url) => {
    const response = await axios.get(`${BASE_URL}/images/?url=${encodeURIComponent(url)}`);
    return response.data;
  };
  
  export const fetchFollowLinks = async (url) => {
    const response = await axios.get(`${BASE_URL}/followlinks/?url=${encodeURIComponent(url)}`);
    return response.data;
  };

  export const fetchWebsiteDetails = async (url) => {
    const response = await axios.get(`${BASE_URL}/analyse/?url=${encodeURIComponent(url)}`);
    return response.data;
  };
  
  export const fetchPageAnalysis = async (url) => {
    const response = await axios.get(`${BASE_URL}/urls/`, {
      params: { url: url }
    });
    return response.data.page_analysis;
  };

  export const fetchTitleDetails = async (url) => {
    const response = await axios.get(`${BASE_URL}/get_title/`, {
      params: { url: url }
    });
    return response.data;
  };
  
  export const fetchWebStatus = async (url) => {
    const response = await axios.get(`${BASE_URL}/webstatus/`, {
      params: { url: url }
    });
    return response.data.links_with_status_200;
  };

  export const fetchSocialTags = async (url) => {
    const response = await axios.get(`${BASE_URL}/analyze_social_tags/`, { params: { url } });
    return response.data;
  };
  
  export const fetchSitemaps = async (url) => {
    const response = await axios.get(`${BASE_URL}/sitemaps/`, { params: { url } });
    return response.data;
  };



  export const keywordResearch = async (url) => {
    const response = await axios.get(`${BASE_URL}/extract_keywords/`, { params: { url } });
    return response.data;
  };

  export const keywordSuggesstion = async (url) => {
    const response = await axios.get(`${BASE_URL}/autocomplete/`, { params: { url } });
    return response.data;
  };




  export const fetchInternalLinksData = async (url) => {
    const response = await axios.get(`${BASE_URL}/count-internal-links/`, { params: { url } });
    return response.data;
  };


  export const fetchExternalLinks = async (url) => {
    const response = await axios.get(`${BASE_URL}/externallinks/`, { params: { url } });
    return response.data;
  };


  export const fetchAnalyzedResources = async (url) => {
    const response = await axios.get(`${BASE_URL}/analyze_resources/`, { params: { url } });
    return response.data;
  };


  export const fetchInternalLinks = async (url) => {
    const response = await axios.get(`${BASE_URL}/api/internal-links/`, { params: { url } });
    return response.data;
  };


  export const fetchBacklinks = async (url) => {
    const response = await axios.get(`${BASE_URL}/api/fetch_backlinks_count/`, { params: { url } });
    return response.data;
  };

  export const fetchSeoDetails = async (url) => {
    try {
      const response = await axios.get(`${BASE_URL}/analyze_optimization/`, { params: { url } });
      return response.data;
    } catch (error) {
      throw error;
    }
  }


  export const fetchSpamScore = async (url) => {
    const response = await axios.get(`${BASE_URL}/spanscore/`, { params: { url } });

    return response.data;
  };


  export const seoanalysis = async (url) => {
    const response = await axios.get(`${BASE_URL}/seo_analysis/`, { params: { url } });

    return response.data;
  };



  export const analyseseotool = async (url) => {
    const response = await axios.get(`${BASE_URL}/analyze-seotool/`, { params: { url } });

    return response.data;
  };

  export const checkwebsite = async (url) => {
    const response = await axios.get(`${BASE_URL}/check-website-accessibility/`, { params: { url } });

    return response.data;
  };


  export const analyseseo = async (url) => {
    const response = await axios.get(`${BASE_URL}/analyze-seo/`, { params: { url } });

    return response.data;
  };


  
  export const fetchinternalissues = async (baseUrl) => {
    const response = await axios.get(`${BASE_URL}/crawl_internal_links_issues/`, { params: { baseUrl } });

    return response.data;
  };





// apiService.js


// Replace 'your_token_here' with the actual token or fetch it dynamically
const token = 'your_token_here'; 

export const fetchCrawlingResults = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/get_crawling_results/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching crawling results:', error);
        throw error;
    }
};
