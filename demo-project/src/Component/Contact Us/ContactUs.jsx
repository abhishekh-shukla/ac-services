import React, { useRef, useState } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
       'service_ibwkmbr', // Replace with your EmailJS service ID
        'template_kp756a9', // Replace with your EmailJS template ID
        formRef.current,
        'UuloJy_3rhgaqz6Lv' // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset(); // Clear the form fields
          setFormData({
            name: '',
            phone: '',
            email: '',
            address: '',
            message: ''
          });
        },
        (error) => {
          console.error('Failed to send the message...', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

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
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">
          Submit <span>&#10132;</span>
        </button>
      </form>

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
