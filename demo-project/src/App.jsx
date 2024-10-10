import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageCarousel from "./Component/Image Carousel/ImageCarousel";
import Cards from "./Component/Cards/Cards";
import WhyChooseUs from "./Component/WhyChooseUs/WhyChooseUs";
import WebsiteDescription from "./Component/Description/WebsiteDescription";
import ServicesList from "./Component/ServicesList/ServicesList";
import ServicesListSplitAC from "./Component/ServicesList/ServicesListSplitAC";
import ServicesListLocation from "./Component/ServicesList/ServicesListLocation";
import ContactUs from "./Component/Contact Us/ContactUs";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
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
    <>
      <div className="container">
        <header className="header">
          <img
            src="https://acservicemumbai.in/wp-content/uploads/2024/04/images.png"
            alt="Daikin Logo"
            className="logo"
          />
          <p className="contact">Call Us:<a href="tel:+917666420421" className="href-contactnumber">+91 7666420421</a></p>
        </header>

        <main className="main-section">
          <div className="heading">
            {" "}
            <h1>DAIKIN AUTHORISED SERVICE CENTRE</h1>
            <h2>24 x 7 Service Available</h2>
          </div>
          <div className="secondary-container">
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h2 className="form-heading">ENQUIRY TO REPAIR</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
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
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
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

            <div className="image-section">
              <ImageCarousel />
            </div>
          </div>
        </main>
        <div className="service-container">
          <div className="header2">
            <h1 className="services-heading">
              Welcome to Daikin AC Repair Service
            </h1>
          </div>
          <ul className="service-list">
            <li>
              Welcome to Daikin AC Repair Service, your trusted destination for
              comprehensive AC maintenance and repair solutions. Our skilled
              technicians specialize in HVAC repair, duct cleaning, resolving
              water leakages, and expert PCB repair with a focus on quality
              service and customer satisfaction.
            </li>
            <li>
              We ensure your Daikin AC operates at optimal efficiency, providing
              you with maximum comfort and peace of mind. From routine
              maintenance to emergency repairs, our team is dedicated to keeping
              your cooling system running smoothly year-round. Experience
              reliable service and enjoy a comfortable environment in your home
              with Daikin AC Service.
            </li>
          </ul>
        </div>
        <div className="our-services">
          <h1 className="services-heading">Our Services</h1>
          <Cards />
        </div>
        <div className="why-choose-us">
          <h1 className="tag"> Why Choose Us</h1>
        </div>
        <div className="services-provide">
          <WhyChooseUs />
        </div>
        <div className="why-choose-us">
          <h1 className="tag"> About Ac Service Centre in (Mumbai)</h1>
        </div>
        <div className="website-description">
          <WebsiteDescription />
        </div>
        <div className="services-list">
          <ServicesList />
          <ServicesListSplitAC />
          <ServicesListLocation />
        </div>
        <div className="contactus-page">
          <ContactUs />
        </div>
      </div>
    </>
  );
}

export default App;
