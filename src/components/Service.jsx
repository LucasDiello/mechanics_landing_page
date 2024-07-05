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
    alt: "Reparo de Motor",
    title: "Reparo de Motor",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  },
  {
    id: 2,
    image: servicesImg2,
    alt: "Reparo de Freios",
    title: "Reparo de Freios",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  },
  {
    id: 3,
    image: servicesImg3,
    alt: "Reparo de Pneus",
    title: "Reparo de Pneus",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  },
  {
    id: 4,
    image: servicesImg4,
    alt: "Reparo de Bateria",
    title: "Reparo de Bateria",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  },
  {
    id: 5,
    image: servicesImg5,
    alt: "Carro Vermelho",
    banner: true,
    className: "service-banner"
  },
  {
    id: 6,
    image: servicesImg6,
    alt: "Reparo de Direção",
    title: "Reparo de Direção",
    description: "Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles"
  }
];

const Service = () => {
  return (
    <section className="section pt-20 service has-bg-image" aria-labelledby="service-label" style={{ backgroundImage: `url(${serviceBgImage})` }}>
      <div className="containe">
        <p className="section-subtitle :light" id="service-label">Nossos serviços</p>
        <h2 className="text-[var(--eerie-black)] h2 text-[2.4rem] font-[var(--fw-600)] leading-10 section-title">Oferecemos Ótimos Serviços Para o seu Veículo</h2>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={service.id} >
              <div className={`service-card ${index === 4 && "xs:hidden"} `}>
                <figure className={`card-icon ${index === 4 && "service-banner"}`}>
                  <img src={service.image} 
                    loading="lazy" alt={service.alt} />
                </figure>
                <h3 className="h3 text-[var(--eerie-black)] text-[2rem] font-[var(--fw-600)] leading-10   card-title">{service.title}</h3>
                <p className=" leading-8 mb-4 mt-4">{service.description}</p>
                <a href="#" className={`btn-link ${index === 4 && "hidden"}`}>Saiba mais</a>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="btn">
          <span className="span">Veja todos os serviços</span>
          <span className="material-symbols-rounded"><BiArrowFromLeft/></span>
        </a>
      </div>
    </section>
  );
}

export default Service;
