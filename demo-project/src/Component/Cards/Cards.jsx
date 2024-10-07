import React from 'react';
import './Cards.css'
const Cards = () => {

    const services = [
        {
          title: 'Water Leakage',
          description: 'We specialize in detecting and repairing leaks in air conditioning systems to prevent water damage and ensure efficient operation.',
          image: 'https://acservicemumbai.in/wp-content/uploads/2024/04/featured_image_why_is_my_air_conditioner_leaking.jpeg.webp',  // Replace with your image URL
        },
        {
          title: 'PCB Repairing',
          description: 'Our expert technicians are skilled in repairing and replacing damaged Printed Circuit Boards (PCBs) in various electronic devices and appliances, ensuring they function optimally.',
          image: 'https://acservicemumbai.in/wp-content/uploads/2024/04/aircon-pcb-repair-1536x1024.webp',  // Replace with your image URL
        },
        {
          title: 'Heating Service',
          description: 'From routine maintenance to emergency repairs, we offer comprehensive heating services to keep your system running smoothly and efficiently, especially during cold weather.',
          image: 'https://acservicemumbai.in/wp-content/uploads/2024/04/Heater-Repair-Services-1536x1048.jpg',  // Replace with your image URL
        },
        {
            title: 'Maintenace & Repair',
          description: ' We keep your equipment running smoothly with regular check-ups and fixes to prevent breakdowns and extend lifespan. If problems arise, our skilled technicians swiftly diagnose and repair issues to minimize downtime.',
          image:'https://acservicemumbai.in/wp-content/uploads/2024/04/ac-repair-sushant-lok.jpg',
        },
        {
            title: 'Indoor Air Quality',
          description: 'Our services focus on improving the air quality inside your home or business through solutions such as air purifiers, ventilation systems, and humidity control, promoting a healthier and more comfortable environment.',
          image:'https://acservicemumbai.in/wp-content/uploads/2024/04/couple-enjoying-ac-min.jpg',
        },
        {
            title: 'HVAC repair',
          description: 'We provide prompt and reliable repair services for Heating, Ventilation, and Air Conditioning (HVAC) systems, ensuring your comfort and the efficient operation of your equipment.',
          image:'https://acservicemumbai.in/wp-content/uploads/2024/04/Anderson-Mechanical-Services-VRF-HVAC-Experts10-scaled-1-2048x1366.jpg',
        }
      ];

    return (
        // <div className='card'>
        //     <img src='https://acservicemumbai.in/wp-content/uploads/2024/04/featured_image_why_is_my_air_conditioner_leaking.jpeg.webp' className='card-image'></img>
        //     <h1 className='card-title'>Water Leakage</h1>
        //     <p className='card-desc'>We specialize in detecting and repairing leaks in air conditioning systems to prevent water damage and ensure efficient operation.</p>
        // </div>

        <div className="services-container">
      {/* <h2 className="services-heading">Our Services</h2> */}
      <div className="cards-wrapper">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <button className="service-button">{service.title}</button> 
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Cards;
