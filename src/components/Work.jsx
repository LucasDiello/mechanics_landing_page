import React from 'react';
import "../styles/work.css";
import work1 from "../assets/images/work-1.jpg";
import work2 from "../assets/images/work-2.jpg";
import work3 from "../assets/images/work-3.jpg";
import { BsArrowBarRight } from 'react-icons/bs';

const projects = [
  {
    id: 1,
    image: work1,
    alt: "Engine Repair",
    title: "Engine Repair",
    subtitle: "Auto Repair"
  },
  {
    id: 2,
    image: work2,
    alt: "Car Tyre change",
    title: "Car Tyre change",
    subtitle: "Auto Repair"
  },
  {
    id: 3,
    image: work3,
    alt: "Battery Adjust",
    title: "Battery Adjust",
    subtitle: "Auto Repair"
  }
];

const Work = () => {
  return (
    <section className="section work mt-10" aria-labelledby="work-label">
      <div className="container">

        <p className="section-subtitle text-[2rem] :light" id="work-label">Our Work</p>

        <h2 className="text-[var(--eerie-black)] h2 text-[2.4rem] font-[var(--fw-600)] leading-10 section-title">Latest projects we have done</h2>

        <ul className="has-scrollbar">
          {projects.map(project => (
            <li className="scrollbar-item" key={project.id}>
              <div className="work-card">

                <figure className="card-banner img-holder" style={{ '--width': 350, '--height': 406 }}>
                  <img src={project.image} width="350" height="406" loading="lazy" alt={project.alt} className="object-cover h-full w-full" />
                </figure>

                <div className="card-content">
                  <p className="card-subtitle">{project.subtitle}</p>

                  <h3 className="h3 card-title">{project.title}</h3>

                  <a href="#" className="card-btn">
                    <span className="material-symbols-rounded"><BsArrowBarRight/></span>
                  </a>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default Work;
