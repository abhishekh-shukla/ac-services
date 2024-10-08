import React from 'react';
import './ServicesList.css'

const ServicesList = () => {

    const services = [
        "Window AC Service Mumbai",
        "Window AC Service Centre In Mumbai",
        "Window AC Repair Service Center In Mumbai",
        "Window AC Service Center Mumbai Number",
        "Window AC Drain Outlet Repair Service In Mumbai",
        "Window AC Service Center Mumbai",
        "Window AC Repair Center In Mumbai",
        "Window AC Repair Center No Mumbai",
        "Window AC Repair Near Me",
        "Window AC Service Centre Near Me",
        "Window AC Repair Service Center Near Me",
        "Window AC PCB Repair Service In Mumbai",
        "Window AC Air Filter Repair Service In Mumbai",
        "Window AC Front Grille Repair Service In Mumbai",
        "Window AC Control Penal Repair Service In Mumbai",
        "Window Fan Motor Repair Service In Mumbai",
        "Window AC Cooling Repair Service In Mumbai",
        "Window AC Circuit Board Repair Service In Mumbai",
        "Window AC Blower Repair Service In Mumbai",
        "Window AC Compressor Repair Service In Mumbai",
        "Window AC Installation Services in Mumbai",
        "Window Air Conditioner(AC) Repair Service In Mumbai",
        "Window AC Repair Center Near Me",
        "Window AC Service At Home",
        "Window AC Swing Not Working",
        "Window AC Remote",
        "Window AC Service Center Near Me",
        "Window AC Repair In Mumbai",
        "Window AC Repair Center No Near Me",
        "Window AC PCB Repair In Mumbai",
        "Window AC Gas Charging In Mumbai",
        "Window AC Filter Repair Service In Mumbai",
        "Window AC Shifting In Mumbai",
        "Window AC Service Near Me",
        "Window AC Service in Mumbai",
        "Window AC Installation In Mumbai",
        "Window AC Gas Filling In Mumbai",
        "Window AC Repair Service in Mumbai"
      ];

    
    return (
        <div className="service-list-section">
             <h2 className="service-heading">Window AC Repair And Service Centre In Mumbai</h2>
      <div className="service-columns">
        <div className="service-column">
          {services.slice(0, Math.ceil(services.length / 3)).map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </div>
        <div className="service-column">
          {services.slice(Math.ceil(services.length / 3), Math.ceil((2 * services.length) / 3)).map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </div>
        <div className="service-column">
          {services.slice(Math.ceil((2 * services.length) / 3)).map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </div>
      </div>
    </div>
    );
}

export default ServicesList;
