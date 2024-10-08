import React from "react";

const ServicesListSplitAC = () => {
  const services = [
    "Split AC Fan Motor Repair Service In Mumbai",
    "Split Cube AC Repair Service In Mumbai",
    "Split AC Service At Home",
    "Split AC Service Centre Near Me",
    "Split AC Service Near Me",
    "Split AC Installation In Mumbai",
    "Split AC Gas Filling In Mumbai",
    "Split AC Gas Charging In Mumbai",
    "Split AC Fan Motor Repair In Mumbai",
    "Split AC Fan Motor Replace In Mumbai",
    "Split AC Compressor Repair In Mumbai",
    "Split AC Fan Compressor Replace In Mumbai",
    "Split AC Indoor PCB Repair Service In Mumbai",
    "Split AC Out Fan Motor Repair Service In Mumbai",
    "Split AC Compressor Repair Service In Mumbai",
    "Split AC Service Center Number Mumbai",
    "Split AC Repair Service Center In Mumbai",
    "Split AC Service Center Mumbai Number",
    "Split AC Service Center Mumbai",
    "Split AC Repair Center In Mumbai",
    "Split AC Repair Center No Mumbai",
    "Ductless Mini-Split (AC) Service Centre In Mumbai",
    "Ductless Mini-Split (AC) Repair Service In Mumbai",
    "Ductless Mini-Split (AC) Service Centre Near Me",
    "Split AC Service Repair Service & Installation In Mumbai",
    "Split AC PCB Replace In Mumbai",
    "Split AC Repair Service Center Near Me",
    "Split AC Service Center Number Near Me",
    "Split AC Repair Center No Near Me",
    "Split AC Indoor Blower Repair Service In Mumbai",
    "Split AC Repair Center No",
    "Split AC Repair Near Me",
    "Split AC Out-Door PCB Repair Service In Mumbai",
    "Split AC Front Grille Repair Service In Mumbai",
    "Split AC Patty Repair Service In Mumbai",
    "Split AC Service Center Near Me",
    "Split AC Control Penal Repair Service In Mumbai",
    "Split AC PCB Repair Service In Mumbai",
    "Split AC Swing Motor Repair Service In Mumbai",
    "Split AC Repair In Mumbai",
    "Split AC Repair Service In Mumbai",
    "Split AC Service Center Number",
    "Split AC Out Door Sensor Repair Service In Mumbai",
    "Split AC Service Centre In Mumbai",
    "Split AC Cooling Sensor Repair Service In Mumbai",
  ];

  return (
    <div className="service-list-section">
      <h2 className="service-heading">
      Split AC Repair And Service Centre In Mumbai
      </h2>
      <div className="service-columns">
        <div className="service-column">
          {services
            .slice(0, Math.ceil(services.length / 3))
            .map((service, index) => (
              <li key={index}>{service}</li>
            ))}
        </div>
        <div className="service-column">
          {services
            .slice(
              Math.ceil(services.length / 3),
              Math.ceil((2 * services.length) / 3)
            )
            .map((service, index) => (
              <li key={index}>{service}</li>
            ))}
        </div>
        <div className="service-column">
          {services
            .slice(Math.ceil((2 * services.length) / 3))
            .map((service, index) => (
              <li key={index}>{service}</li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesListSplitAC;
