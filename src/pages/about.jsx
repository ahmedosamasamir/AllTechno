import React from 'react';
import './about.css'; // Importing the CSS file
import { Link } from 'react-router-dom';
import Home from './Home';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>All Techno</strong>, your go-to destination for all things tech! Whether you're looking for the latest laptops, top-notch accessories, or amazing deals, we’ve got you covered. At Enjoy, we believe in providing a seamless shopping experience, with a focus on quality products, customer satisfaction, and unbeatable prices.
        </p>
        <p>
          We’re passionate about bringing you the best in technology, from everyday essentials to cutting-edge gadgets. Our user-friendly platform makes it easy to browse, compare, and purchase what you need, with a dedicated team ready to support you every step of the way.
        </p>
        <p>
          Explore. Shop.<Link className='shoping' to={"/Laptop"}> All Techno </Link>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
