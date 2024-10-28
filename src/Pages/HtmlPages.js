import React, { useState, useEffect } from 'react';
import html from '../assets/html.jpg';
import { Typography, Card, CardContent, CardActions, Button, Grid, Container, Box } from '@mui/material';

const HtmlPages = () => {
  const [htmlPages, setHtmlPages] = useState([]);

  useEffect(() => {
    // Retrieve stored HTML links from localStorage
    const storedHtmlLinks = localStorage.getItem('htmlPages'); // Note the correct key 'htmlPages'
    if (storedHtmlLinks) {
      setHtmlPages(JSON.parse(storedHtmlLinks));
    }
  }, []);

  return (
    <div className="html-links">
      <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
        <Box
          sx={{
            backgroundColor: '#0288d1',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '30px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom sx={{ color: '#fff' }}>
            HTML Links
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            
HTML links, or hyperlinks, are elements on a webpage that allow users to navigate to other web pages or resources by clicking on them. They are created using the <a></a> tag in HTML, typically pointing to URLs or files.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {htmlPages.length > 0 ? (
            htmlPages.map((link, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'orange',
                    color: '#fff',
                    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {index + 1}
                    </Typography>
                    <Typography variant="body2" color="inherit" sx={{ wordBreak: 'break-word' }}>
                      {link}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ marginTop: 'auto' }}>
                    <Button
                      size="small"
                      color="inherit"
                      href={link}
                      target="_blank"
                      sx={{ textTransform: 'none', fontWeight: 'bold' }}
                    >
                      Open Link
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No HTML links found.</Typography>
          )}
        </Grid>
      </Container> 

    <div className="seo-optimization-wrapper">
      <div className="seo-optimization-header">
        <h1 className="seo-optimization-title">Optimize Your HTML Pages for Superior Search Engine Performance</h1>
        <p className="seo-optimization-subtitle">Ensure Your HTML Pages Are Fully Optimized for SEO and User Experience</p>
        <h3 className="seo-optimization-heading">Mastering HTML Pages: The Foundation of a Strong SEO Strategy</h3>
      </div>
      <div className="seo-optimization-image-container">
      {<img src={html} class="seo-optimization-image" alt="Line chart showing website ranking improvement" />}

      </div>
      <div className="seo-optimization-content">
        <div className="seo-optimization-card">
          <h4 className="seo-optimization-card-title">What Are HTML Pages?</h4>
          <p className="seo-optimization-card-text">
            HTML (HyperText Markup Language) pages are the core components of any website,
            defining the structure and content of web pages. They contain the text, images, links, and
            other elements that users interact with, and they provide the necessary information that
            search engines use to index and rank your site. Optimizing your HTML pages for SEO is
            critical to ensure that your website is both user-friendly and search engine-friendly.
          </p>
        </div>
      </div>
  <div class="content-wrapper">
    <h2 class="section-title">Why HTML Pages Matter</h2>
    <div class="importance-list">
      <div class="importance-entry" style={{backgroundColor:"#e1bee7"}}>
        <div class="entry-icon"><i class="fa fa-search" style={{color:"lightpink"}}></i></div>
        <div class="entry-text">
          <h3>Search Engine Indexing</h3>
          <p>Properly structured HTML pages ensure that search engines can efficiently crawl, index, and understand the content on your site, leading to better rankings.</p>
        </div>
      </div>
      <div class="importance-entry" style={{backgroundColor:" #e0f7fa"}}>
        <div class="entry-icon"><i class="fa fa-user"></i></div>
        <div class="entry-text">
          <h3>User Experience</h3>
          <p>Well-optimized HTML pages contribute to a smoother, more intuitive user experience by ensuring fast load times, easy navigation, and clear content presentation.</p>
        </div>
      </div>
      <div class="importance-entry" style={{backgroundColor:"#ffe0b2"}}>
        <div class="entry-icon"><i class="fa fa-cogs" style={{color:"orange"}}></i></div>
        <div class="entry-text">
          <h3>Technical SEO</h3>
          <p>HTML elements such as meta tags, headings, and alt attributes play a significant role in on-page SEO, helping search engines understand the relevance and context of your content.</p>
        </div>
      </div>
      <div class="importance-entry" style={{backgroundColor:"#d0f5d3"}}>
        <div class="entry-icon"><i class="fa fa-eye" style={{color:"green"}}></i></div>
        <div class="entry-text">
          <h3>Content Visibility</h3>
          <p>Optimizing HTML pages ensures that all content, including text, images, and videos, is visible and accessible to both users and search engines, maximizing engagement and discoverability.</p>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <section class="seo-tool-overview">
  <h2 class="overview-heading">How to Use Our SEO Tool for HTML Page Optimization</h2>
  <p class="overview-description">
    Our SEO tool offers a comprehensive set of features to help you analyze and optimize your HTML pages for better SEO and user experience:
  </p>
  <ul class="overview-list">
    <li class="overview-item">
      <div class="icon-container"><i class="fa fa-tag"></i></div>
      <div class="content-container">
        <h3 class="item-heading">Title Tag Analysis</h3>
        <p class="item-description">Ensure that all your HTML pages have unique, keyword-rich title tags that accurately reflect their content.</p>
      </div>
    </li>
    <li class="overview-item">
      <div class="icon-container"><i class="fa fa-info-circle"></i></div>
      <div class="content-container">
        <h3 class="item-heading">Meta Description Checker</h3>
        <p class="item-description">Review and optimize meta descriptions to improve click-through rates from search engine results pages (SERPs).</p>
      </div>
    </li>
    <li class="overview-item">
      <div class="icon-container"><i class="fa fa-heading"></i></div>
      <div class="content-container">
        <h3 class="item-heading">Heading Structure Analysis</h3>
        <p class="item-description">Evaluate the use of heading tags to ensure they are correctly used to organize content and highlight important topics.</p>
      </div>
    </li>
    <li class="overview-item">
      <div class="icon-container"><i class="fa fa-image"></i></div>
      <div class="content-container">
        <h3 class="item-heading">Image Alt Text Checker</h3>
        <p class="item-description">Verify that all images have appropriate alt text to improve SEO and accessibility.</p>
      </div>
    </li>
    <li class="overview-item">
      <div class="icon-container"><i class="fa fa-link"></i></div>
      <div class="content-container">
        <h3 class="item-heading">Internal Linking Audit</h3>
        <p class="item-description">Analyze the internal links on your HTML pages to optimize navigation and link equity distribution.</p>
      </div>
    </li>
    <li class="overview-item">
      <div class="icon-container"><i class="fa fa-mobile"></i></div>
      <div class="content-container">
        <h3 class="item-heading">Mobile Optimization</h3>
        <p class="item-description">Check that your HTML pages are fully responsive and provide a seamless experience across all devices.</p>
      </div>
    </li>
   
    <li class="overview-item">
      <div class="icon-container"><i class="fa fa-cogs"></i></div>
      <div class="content-container">
        <h3 class="item-heading">Canonical Tag Implementation</h3>
        <p class="item-description">Ensure that canonical tags are correctly used to manage duplicate content and consolidate link equity.</p>
      </div>
    </li>
    <li class="overview-item">
      <div class="icon-container"><i class="fa fa-code"></i></div>
      <div class="content-container">
        <h3 class="item-heading">Schema Markup Validator</h3>
        <p class="item-description">Implement and validate schema markup to provide search engines with additional context about your content.</p>
      </div>
    </li>
  </ul>
</section>
<div class="container py-5">
  <div class="conclusion-section">
    <h2 class="conclusion-title">Conclusion</h2>
    <p class="conclusion-text">
    HTML pages are the foundation of your website’s SEO and user experience. By optimizing
 your HTML pages, you can ensure that your content is easily accessible, search
 engine-friendly, and engaging for users. Our advanced tools provide the insights and
 recommendations you need to optimize your HTML pages for better rankings, faster load
 times, and improved user experience.    </p>
    <div class="cta-section text-center">
      <h3 class="cta-title"> Optimize Your HTML Pages for Maximum SEO Impact!
      </h3>
      <p class="cta-text">
      Don’t let poorly optimized HTML pages hold back your website’s performance. Use our
 powerful SEO tools to analyze, optimize, and enhance your HTML pages for better search
 engine rankings and a superior user experience. Start optimizing today to unlock your site’s
 full potential!      </p>
      <div class="cta-buttons">
        <a href="#explore" class="btn btn-primary cta-button">Explore Our SEO Tool</a>
        <a href="#contact" class="btn btn-secondary cta-button">Contact Us for More Information</a>
      </div>
    </div>
  </div>
  </div>
    </div>
    </div>
  );
};
export default HtmlPages;