import React, { useState } from 'react';

const AnimatedComponent = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to the component
    const y = e.clientY - rect.top;  // Mouse Y relative to the component
    setMousePosition({ x, y });
  };

  const containerStyle = {
    animation: 'fadeInUp 1s ease-out forwards',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '50vh',
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(255, 65, 108, 0.8), 
                  rgba(37, 117, 252, 1) 70%)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    marginBottom: '20px',
    marginTop: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden', // Ensures no overflow from gradients
    transition: 'background 0.1s ease-out',
  };

  return (
    <div
      style={containerStyle}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
