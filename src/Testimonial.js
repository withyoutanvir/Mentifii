import React from 'react';
import 'animate.css'; // Import animate.css
import './index.css';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
     <h2 className="testimonial-heading animate__animated animate__fadeInUp" style={{ color: '#FFFFFF' }}>
  Testimonials
</h2>

      <div className="testimonial-cards d-flex justify-content-between">
        {/* First Testimonial Card */}
        <div className="testimonial-item animate__animated animate__fadeInUp animate__delay-1s">
          <img
            src="https://www.iare.ac.in/sites/default/files/IARE10757.jpg"
            alt="John Doe"
            className="testimonial-img"
          />
          <div className="testimonial-content">
            <p className="testimonial-text">
              "This is the best service I've ever used. Highly recommend it to everyone!"
            </p>
            <p className="testimonial-author">Dr. Srinivasulu</p>
            <p className="testimonial-position">Dean At IARE</p>
          </div>
        </div>

        {/* Second Testimonial Card */}
        <div className="testimonial-item animate__animated animate__fadeInUp animate__delay-2s">
          <img
            src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ypdu8otb79lkewsw74wf"
            alt="Sandeep Jain"
            className="testimonial-img"
          />
          <div className="testimonial-content">
            <p className="testimonial-text">
              "Absolutely amazing experience, exceeded all my expectations."
            </p>
            <p className="testimonial-author">Sandeep Jain</p>
            <p className="testimonial-position">CEO at GFG</p>
          </div>
        </div>

        {/* Third Testimonial Card */}
        <div className="testimonial-item animate__animated animate__fadeInUp animate__delay-3s">
          <img
            src="https://www.iare.ac.in/sites/default/files/IARE10001.jpg"
            alt="Dr. L V Narasimha Prasad"
            className="testimonial-img"
          />
          <div className="testimonial-content">
            <p className="testimonial-text">
              "Best investment I made, worth every penny. Highly recommend!"
            </p>
            <p className="testimonial-author">Dr. L V Narasimha Prasad</p>
            <p className="testimonial-position">Principal at IARE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
