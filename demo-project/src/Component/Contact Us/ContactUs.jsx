import React from 'react';
import { useState } from 'react';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: ""
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted: ", formData);
        // Here you can add logic to send the form data to a server
      };

    return (
        <div className="contact-us-container">
            <div className="heading">
            {" "}
            <h1>Contact Us</h1>
          </div>
  
        {/* Form Section */}
        <div className='secondary-container'>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                />
              <button type="submit">Submit</button>
            </form>
  
        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="info-item">
            <img
              src=""
              alt="Phone Icon"
            />
            <a href="tel:+919838000797">+91 9838000797</a>
          </div>
          <div className="info-item">
            <img
              src=""
              alt="Website Icon"
            />
            <a href="https://acservicemumbai.in">acservicemumbai.in</a>
          </div>
          <div className="info-item">
            <img
              src=""
              alt="Email Icon"
            />
            <a href="mailto:info@acservicemumbai.in">info@acservicemumbai.in</a>
          </div>
        </div>
  
        {/* WhatsApp Button */}
        <div className="whatsapp-button">
          <a href="https://wa.me/919838000797" target="_blank" rel="noopener noreferrer">
            <img
              src=""
              alt="WhatsApp"
            />
          </a>
        </div>
      </div>
      </div>
    );
}

export default ContactUs;
