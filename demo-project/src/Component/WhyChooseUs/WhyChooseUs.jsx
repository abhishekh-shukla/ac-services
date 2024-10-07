import React from 'react';
import './WhyChooseUs.css'
const WhyChooseUs = () => {
    return (
    <div className="service-section">
      <div className="service-image-container">
        <img 
          src="https://acservicemumbai.in/wp-content/uploads/2024/04/Contact-Us-Vector-Illustration-Part-02-1.jpg" 
          alt="Service Representation" 
          className="service-image"
        />
      </div>

      <div className="service-details">
        <div className="service-item">
          <div className="icon2">
            <img src="https://acservicemumbai.in/wp-content/uploads/elementor/thumbs/47401379-e1714292297991-qnd7tow0m2n7fazyo74px8e3os90p5ds4npu7v4vh6.jpg" className='img1' alt="Trusted Icon" />
          </div>
          <div className="text-content">
            <h3 className="service-title">Trusted Service Center</h3>
            <p>With years of experience and a dedicated team of skilled technicians, we provide top-notch solutions for all your air conditioning needs.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="icon">
            <img src="https://acservicemumbai.in/wp-content/uploads/elementor/thumbs/3967871-200-qnd7slesn155volb2q2e0icqqlnlpv11z8bg28resg.png" alt="Reasonable Price Icon" />
          </div>
          <div className="text-content">
            <h3 className="service-title">Reasonable Price</h3>
            <p>Choose our reliable AC Repairing Centre and experience the perfect harmony of reasonable prices and exceptional service.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="icon">
            <img src="https://acservicemumbai.in/wp-content/uploads/elementor/thumbs/2020773-qnd7smcmtv6g7ajxx8h0l047bziyxk4sbcyxjiq0m8.png" alt="24/7 Support Icon" />
          </div>
          <div className="text-content">
            <h3 className="service-title">24/7 Support</h3>
            <p>Don’t let AC troubles disrupt your comfort, rely on our 24/7 support to keep you cool all year round.</p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default WhyChooseUs;
