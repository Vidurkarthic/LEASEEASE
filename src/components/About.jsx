import React from 'react';
import './About.css';
import Home from './Home';
import Footer from './Footer';

const About = () => {
  return (
    <div>
    <div className='about'>
      <Home />
      <div className="about-container">
        <h1 className="about-title">About LeaseEase</h1>
        <p className="about-description">
          Welcome to LeaseEase, your go-to solution for affordable and convenient product rentals. We understand the financial strain of purchasing high-cost items and have designed our service to cater to middle-class families seeking quality products without the burden of ownership.
        </p>
        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-description">
          At LeaseEase, our mission is to provide a seamless and cost-effective rental experience, enabling you to enjoy premium products at a fraction of the cost. Whether it’s home appliances, electronics, or furniture, we have a wide range of options to meet your needs.
        </p>
        <h2 className="about-subtitle">Why Choose LeaseEase?</h2>
        <ul className="about-list">
          <li>High-quality products</li>
          <li>Affordable rental prices</li>
          <li>Flexible rental terms</li>
          <li>Easy and hassle-free process</li>
          <li>Exceptional customer service</li>
        </ul>
        <p className="about-description">
          Join us at LeaseEase and transform your lifestyle with the convenience and affordability of renting. Say goodbye to high purchase costs and hello to the ease of LeaseEase!
        </p>
      </div>
      <Footer />
    </div>
      </div>
  );
};

export default About;
