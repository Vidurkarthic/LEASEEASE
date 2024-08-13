import React from 'react';
import './ContactUs.css';
import Home from './Home';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div className='contact'>
        <Home />
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                Have questions or need assistance? Reach out to us and we'll get back to you as soon as possible.
            </p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="contact-submit">Submit</button>
            </form>
        </div>
        <Footer />
    </div>
  );
};

export default ContactUs;
