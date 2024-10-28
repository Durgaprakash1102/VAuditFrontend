import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow(!show);
  };

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        {/* Toggle Sidebar button */}
        <div className='header-toggle' onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className="nav" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
          <div>
            <Link to='/fullcontent' className="nav-logo">
              <i className="fas fa-home-alt nav-logo-icon"></i>
              <span className="nav-logo-name" >Home</span>
            </Link>

            <Link to='/dashboard' className="nav-logo">
              <i className="fa fa-link nav-logo-icon"></i>
              <span className="nav-logo-name">Internal & external links</span>
            </Link>

            <Link to='/KeywordResearch' className="nav-logo">
              <i className="fas fa-tachometer-alt nav-logo-icon"></i>
              <span className="nav-logo-name">Keywords</span>
            </Link>

            <Link to='/fullcontent' className="nav-logo">
              <i className="fa fa-link nav-logo-icon"></i>
              <span className="nav-logo-name">Content</span>
            </Link>

            <Link to='/' className="nav-logo">
              <i className="fas fa-dollar-sign nav-logo-icon"></i>
              <span className="nav-logo-name">Gallery</span>
            </Link>

            <Link to='/transaction' className="nav-logo">
              <i className="fas fa-dollar-sign nav-logo-icon"></i>
              <span className="nav-logo-name" >Transaction</span>
            </Link>

            <Link to='/headings' className="nav-logo">
              <i className="fas fa-dollar-sign nav-logo-icon"></i>
              <span className="nav-logo-name" >Headings</span>
            </Link>

            <Link to='/imagelinks' className="nav-logo">
              <i className="fas fa-dollar-sign nav-logo-icon"></i>
              <span className="nav-logo-name">Images</span>
            </Link>

            <Link to='/errorlinks' className="nav-logo">
              <i className="fa fa-exclamation-triangle nav-logo-icon"></i>
              <span className="nav-logo-name" >Error Links</span>
            </Link>

            <Link to='/dofollow' className="nav-logo">
              <i className="fa fa-link nav-logo-icon"></i>
              <span className="nav-logo-name">Follow Links</span>
            </Link>

            <Link to='/title' className="nav-logo">
              <i className="fa fa-link nav-logo-icon"></i>
              <span className="nav-logo-name" >Title</span>
            </Link>

            <Link to='/websiteanalysis' className="nav-logo">
              <i className="fa fa-link nav-logo-icon"></i>
              <span className="nav-logo-name" >Website analysis Links</span>
            </Link>

            <Link to='/imageresource' className="nav-logo">
              <i className="fa fa-link nav-logo-icon"></i>
              <span className="nav-logo-name" >Image resource Links</span>
            </Link>

            <Link to='/crawedlinks' className="nav-logo">
              <i className="fa fa-link nav-logo-icon"></i>
              <span className="nav-logo-name" >Crawled Links</span>
            </Link>

            <Link to='/imagesone' className="nav-logo">
              <i className="fa fa-link nav-logo-icon"></i>
              <span className="nav-logo-name" >Broken images</span>
            </Link>
          </div>
        </nav>
      </aside>
    </main>
  );
};

export default Sidebar;
