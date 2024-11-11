import React, { useState, useEffect, useMemo } from 'react';
import './index.css'; // Ensure this import is at the top

const Hero = () => {
  const colors = useMemo(() => ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33F6'], []); // Array of colors
  const [currentColor, setCurrentColor] = useState(colors[0]); // Initialize state with the first color

  useEffect(() => {
    let index = 0; // Start index

    const intervalId = setInterval(() => {
      index = (index + 1) % colors.length; // Cycle through colors
      setCurrentColor(colors[index]); // Update current color
    }, 1000); // Change color every 1 second

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [colors]);

  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="container-fluid bsb-hero-6 bsb-overlay border border-dark"
              style={{
                '--bsb-overlay-opacity': '0.5',
                '--bsb-overlay-bg-color': 'var(--bs-light-rgb)',
                backgroundImage: "url('Starting.jpg')",
                height: '600px', // Set a specific height if needed
              }}
            >
              <div className="row justify-content-md-center align-items-center h-100">
                <div className="col-12 col-md-11 col-xl-10 text-center">
                <h2 className="display-1 text-shadow-head fw-bold mb-4" style={{ color: 'white' }}>
                 Welcome to Mentifii
                </h2>

                  <p className="lead text-shadow-body mb-4" style={{ color: currentColor }}>
                    Where every squeak, every rattle, and every wobble finds its solution, ensuring your ride is always smooth and worry-free.
                  </p>
                  <div className="d-grid gap-2 justify-content-center">
                     <a href="#!" className="btn bsb-btn-2xl btn-dark text-white">Explore More</a>
                        </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
