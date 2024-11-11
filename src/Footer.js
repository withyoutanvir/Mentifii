import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; // Your custom CSS file

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="footer-container py-4">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-3 mb-3">
            <h5>About Us</h5>
            <p>At [Mentifii], we specialize in harnessing the power of artificial intelligence and advanced data analysis to provide innovative solutions for businesses and organizations.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-white">Home</a></li>
              <li><a href="/" className="text-decoration-none text-white">Services</a></li>
              <li><a href="/" className="text-decoration-none text-white">Contact</a></li>
              <li><a href="/" className="text-decoration-none text-white">Administrator</a></li>
              <li><a href="/" className="text-decoration-none text-white">Student</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-3 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="/" className="text-white"><i className="bi bi-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-white"><i className="bi bi-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="text-white"><i className="bi bi-instagram"></i></a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3 mb-3">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates and news.</p>
            <form action="#" method="POST">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  aria-describedby="button-newsletter"
                  required
                />
                <button className="btn btn-primary" type="submit" id="button-newsletter">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="border-light" />

        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Mentifii. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
