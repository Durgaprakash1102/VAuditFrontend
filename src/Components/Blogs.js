import React, { useState } from 'react'
import engine from '../assets/engine.jpg'
import engine2 from '../assets/engine2.jpg'
import engine3 from '../assets/engine3.png'

const Blog = () => {
    const [selectedResource, setSelectedResource] = useState("General SEO")

    const blogs = [
        {
            title: "Understanding SEO Basics Of Vaudit",
            description: "Get to know the fundamental concepts of SEO, including keyword optimization, on-page SEO, and how these elements work together to improve your website's search engine ranking.",
            imgSrc: engine2,
            link: "/blog/seo-basics"
        },
        {
            title: "Advanced Keyword Research Techniques",
            description: "Discover advanced strategies for conducting keyword research, such as using competitor analysis tools and understanding search intent, to target the most valuable search terms for your business.",
            imgSrc: engine3,
            link: "/blog/keyword-research"
        },
        {
            title: "Optimizing Your Website for Local SEO",
            description: "Learn how to optimize your website for local searches, including the importance of Google My Business, local backlinks, and relevant keywords to attract more customers from your geographic area.",
            imgSrc: engine,
            link: "/blog/local-seo"
        }
    ]

    const seoResources = {
        "General SEO": [
            {
                title: "How to Do Keyword Research for SEO",
                description: "Learn how to find, analyze, target, and prioritize the best keywords for SEO using tools like Google Keyword Planner and SEMrush.",
                link: "/resources/keyword-research"
            },
            {
                title: "What Are Keywords? How to Use Them for SEO",
                description: "Learn what keywords are, the different types (short-tail vs. long-tail), and best practices for incorporating them into your content strategy.",
                link: "/resources/what-are-keywords"
            },
            {
                title: "SEO Best Practices for 2024",
                description: "Stay updated with the latest SEO best practices for 2024, including user experience signals, mobile-first indexing, and the importance of quality content.",
                link: "/resources/seo-best-practices"
            },
            {
                title: "How to Improve Your Website’s Load Time",
                description: "Learn techniques to speed up your website, such as image optimization, minimizing CSS and JavaScript, and leveraging browser caching to enhance user experience.",
                link: "/resources/improve-load-time"
            }
        ],
        // Other resource categories ...
    }

    return (
        <div>
            <div className="container-fluid mb-4" style={{ backgroundColor: '#0235c3' }}>
                <div className="row">
                    <div className="col-md-12 text-center py-5">
                        <h2 className="text-white">Our Latest Blogs</h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mb-4">
                    {blogs.map((blog, index) => (
                        <div className="col-xs-12 col-md-4 mb-4" key={index}>
                            <div className="card border-primary rounded shadow-sm">
                                <img
                                    className="card-img-top rounded-top"
                                    src={blog.imgSrc}
                                    alt={blog.title}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary font-weight-bold">{blog.title}</h5>
                                    <p className="card-text">{blog.description}</p>
                                    <a
                                        href={blog.link}
                                        className="btn btn-primary"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-4">
                    <h1 style={{ fontSize: '2rem' }}>SEO Resources</h1>
                    <p className='text-start'>If you want to rank higher in search engines like Google, you need SEO. Check out the resources below to learn how to get more organic traffic to your website.</p>
                </div>

                <div className="d-block d-md-none text-center mb-4">
                    {["General SEO", "Keyword Research", "On-Page SEO", "Link Building"].map((resource) => (
                        <button
                            key={resource}
                            className="btn btn-primary m-1"
                            onClick={() => setSelectedResource(resource)}
                        >
                            {resource}
                        </button>
                    ))}
                </div>

                <div className="container bg-light p-4 rounded">
                    <div className="row">
                        {seoResources[selectedResource].map((resource, index) => (
                            <div className="col-xs-12 col-md-3 mb-4" key={index}>
                                <div className="card border-primary rounded shadow-sm">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{resource.title}</h5>
                                        <p className="card-text">{resource.description}</p>
                                        <a
                                            href={resource.link}
                                            className="btn btn-primary"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog