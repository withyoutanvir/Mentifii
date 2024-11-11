import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './index.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-200">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="/">
          {/* Replace the GitHub icon with your custom icon */}
          <img 
            src="./mentifi.png" 
            alt="Custom Icon" 
            className="img-fluid mx-3 ps-1" 
            style={{ width: '80px', height: '60px' }} // Adjust the size as needed
          />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Search Form */}
          <form className="me-3">
            <div className="input-group" style={{ width: '250px' }}>
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>

          {/* Navbar Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Administrator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Student</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Teacher</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">AI MODEL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Test</a>
            </li>
          </ul>

          {/* Right Navbar Links */}
          <ul className="navbar-nav d-flex flex-row ms-auto me-3">
            {/* Plus Icon Dropdown */}
            <li className="nav-item me-3 me-lg-0 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-plus"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">Help</a></li>
                <li><a className="dropdown-item" href="/">About Us</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">FAQ's</a></li>
              </ul>
            </li>

            {/* User Avatar Dropdown */}
            <li className="nav-item me-3 me-lg-0 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                  className="rounded-circle"
                  height="22"
                  alt="User Avatar"
                  loading="lazy"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
                <li><a className="dropdown-item" href="/">Profile</a></li>
                <li><a className="dropdown-item" href="/">Issues</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Contact</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
