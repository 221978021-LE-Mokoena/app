import React, { useState, useEffect } from 'react';
import '../styles/Auth.css';

// Importing images
import courthouse from '../assets/courthouse.jpeg'; 
import gabble from '../assets/gabble.jpeg'; 
import insideBuilding from '../assets/insidebuilding.jpeg'; 
import ladyJustice from '../assets/ladyjustice.jpeg';

function Login() {
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

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="auth-container">
      {/* Left section for image slider */}
      <div className="left-section">
        <div className="slider">
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>

      {/* Right section for the login form */}
      <div className="right-section">
        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="hello@example.com" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
            <button type="submit" className="join-btn">Sign In</button>
          </form>
          <p>
            Don’t have an account? <a href="/register">Register here</a>
          </p>
          <p>
            By signing in, you agree to the <a href="#">Terms and Conditions</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
