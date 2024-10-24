import React, { useState, useEffect } from 'react';
import '../styles/Auth.css'; // Ensure the CSS file path is correct

// Importing images for the slider (same images as in Login)
import courthouse from '../assets/courthouse.jpeg';
import gabble from '../assets/gabble.jpeg';
import insideBuilding from '../assets/insidebuilding.jpeg';
import ladyJustice from '../assets/ladyjustice.jpeg';

function Register() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of slides containing the imported images
  const slides = [courthouse, gabble, insideBuilding, ladyJustice]; 

  // Logic to switch slides every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Handle register submission
  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <div className="auth-container">
      {/* Left section for image slider */}
      <div className="left-section">
        <div className="slider">
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>

      {/* Right section for the registration form */}
      <div className="right-section">
        <div className="auth-form">
          <h2>Signup</h2>
          <form onSubmit={handleRegister}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="hello@example.com" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Minimum 8 characters" required />
            <button type="submit" className="join-btn">Join</button>
          </form>
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
          <p>
            By joining, you agree to the <a href="#">Terms and Conditions</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
