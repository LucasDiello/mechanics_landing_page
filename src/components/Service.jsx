import React from 'react';
import serviceBgImage from '../assets/images/service-bg.jpg';
import { BiArrowFromLeft } from 'react-icons/bi';
import servicesImg1 from '../assets/images/services-1.png';
import servicesImg2 from '../assets/images/services-2.png';
import servicesImg3 from '../assets/images/services-3.png';
import servicesImg4 from '../assets/images/services-4.png';
import servicesImg5 from '../assets/images/services-5.png';
import servicesImg6 from '../assets/images/services-6.png';
import "../styles/service.css";

// Array de serviços em formato JSON
const services = [
  {
    id: 1,
    image: servicesImg1,
    alt: "Engine Repair",
    title: "Engine Repair",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  },
  {
    id: 2,
    image: servicesImg2,
    alt: "Brake Repair",
    title: "Brake Repair",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  },
  {
    id: 3,
    image: servicesImg3,
    alt: "Tire Repair",
    title: "Tire Repair",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  },
  {
    id: 4,
    image: servicesImg4,
    alt: "Battery Repair",
    title: "Battery Repair",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  },
  {
    id: 5,
    image: servicesImg5,
    alt: "Red Car",
    banner: true,
    className: "service-banner"
  },
  {
    id: 6,
    image: servicesImg6,
    alt: "Steering Repair",
    title: "Steering Repair",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  }
];

const Service = () => {
  return (
    <section className="section pt-20 service has-bg-image" aria-labelledby="service-label" style={{ backgroundImage: `url(${serviceBgImage})` }}>
      <div className="container">
        <p className="section-subtitle :light" id="service-label">Our services</p>
        <h2 className="text-[var(--eerie-black)] h2 text-[2.4rem] font-[var(--fw-600)] leading-10 section-title">We Provide Great Services For your Vehicle</h2>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={service.id} className={`${index === 4 && "service-banner"}`}>
              <div className="service-card">
                <figure className="card-icon">
                  <img src={service.image} width={`${index === 4 ? "646" : "110"}`}
                   height={`${index === 4 ? "380" : "110"}`} loading="lazy" alt={service.alt} />
                </figure>
                <h3 className="h3 text-[var(--eerie-black)] text-[2rem] font-[var(--fw-600)] leading-10   card-title">{service.title}</h3>
                <p className=" leading-8 mb-4 mt-4">{service.description}</p>
                <a href="#" className="btn-link">Read more</a>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="btn">
          <span className="span">View All Services</span>
          <span className="material-symbols-rounded"><BiArrowFromLeft/></span>
        </a>
      </div>
    </section>
  );
}

export default Service;
