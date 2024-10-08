import React from "react";

const ServicesListLocation = () => {
  const services = [
    "Service Centre In Naigaon Mumbai",
    "Service Centre In Goregaon Mumbai",
    "Service Centre In Aroli Mumbai",
    "Service Centre In Andheri Mumbai",
    "Service Centre In Asangaon Mumbai",
    "Service Centre In Atgaon Mumbai",
    "Service Centre In Borivali Mumbai",
    "Service Centre In Byculla Mumbai",
    "Service Centre In Chembur Mumbai",
    "Service Centre In Chinchpokli Mumbai",
    "Service Centre In Grant-Road Mumbai",
    "Service Centre In Chowpatty Mumbai",
    "Service Centre In Churchgate Mumbai",
    "Service Centre In Colaba Mumbai",
    "Service Centre In Vasai Mumbai",
    "Service Centre In Worli Mumbai",
    "Service Centre In Ambernath Mumbai",
    "Service Centre In Antop Hill Mumbai",
    "Service Centre In Badlapur Mumbai",
    "Service Centre In Bandra Mumbai",
    "Service Centre In Bhayandar Mumbai",
    "Service Centre In Charni Road Mumbai",
    "Service Centre In Diva Mumbai",
    "Service Centre In Dombivali Mumbai",
    "Service Centre In Elphinston Mumbai",
    "Service Centre In Ghatkopar Mumbai",
    "Service Centre In Ghansoli Mumbai",
    "Service Centre In Vidyavihar Mumbai",
    "Service Centre In Nalasopara Mumbai",
    "Service Centre In Agripada Mumbai",
    "Service Centre In Ambivali Mumbai",
    "Service Centre In Virar Mumbai",
    "Service Centre In Andheri Mumbai",
    "Service Centre In Kalina Mumbai",
    "Service Centre In Kalwa Mumbai",
    "Service Centre In Kalyan Mumbai",
    "Service Centre In Kandivali Mumbai",
    "Service Centre In Kanjur Marg Mumbai",
    "Service Centre In Peddar Road Mumbai",
    "Service Centre In Curry Road Mumbai",
    "Service Centre In Dadar Mumbai",
    "Service Centre In Dahanu Road Mumbai",
  ];

  return (
    <div className="service-list-section">
      <h2 className="service-heading">
      Services are Available in Mumbai
      </h2>
      <h2 className="location-text">Location -</h2>
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

export default ServicesListLocation;
