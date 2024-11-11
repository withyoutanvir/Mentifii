import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import AnimatedComponent from './Animation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TeamSection from './Feature';
import CardSection from './Card';
import './App.css';
import TestimonialSlider from './Testimonial';


function App() {
  return (
    <div className="app-container">
      <div className="Navbar">
      <Navbar />
      </div>

      <HeroSection />
      <div style={{ marginTop: "0.5rem" }}>
        <CardSection />
      </div>
      

      <AnimatedComponent className="Animated-Component">
        <h1>Fast Solution to Analyze Your Data</h1>
        <p>This is an AI interface for analyzing the data </p>
      </AnimatedComponent>

      
      <TeamSection />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}

export default App;

