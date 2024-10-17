import React from 'react';
import './ContactUs.css';

const ContactUs = () => {


  return (
    <div className="contact-us-container">
      {/* Floating Call Button */}
      <div className="floating-call-btn">
        <a href="tel:+919702776360">
          <img
            src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
            alt="Call Now"
            className="call-icon"
          />
        </a>
      </div>
      <a href="tel:+919702776360">
        <p className="call-now">Call Now</p>
      </a>

      {/* Form Section */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="phone"placeholder="Phone Number" />
        <input type="email"name="email" placeholder="Email" />
        <input type="text"name="address" placeholder="Address" />
        <textarea placeholder="Message" name='message'></textarea>
        <button type="submit">
          Submit <span>&#10132;</span>
        </button>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
            alt="Phone Icon"
          />
          <a href="tel:+919702776360">+91 9702776360</a>
        </div>
        <div className="info-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/482/482681.png"
            alt="Website Icon"
          />
          <a href="https://acservicemumbai.in">acservicemumbai.in</a>
        </div>
        <div className="info-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/725/725643.png"
            alt="Email Icon"
          />
          <a href="mailto:info@acservicemumbai.in">info@acservicemumbai.in</a>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="whatsapp-button">
        <a
          href="https://wa.me/9702776360"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
