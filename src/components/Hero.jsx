import React from "react";
import "../tailwind.css";
import "../styles/hero.css";
import heroBg from "../assets/images/hero-bg.jpg";
import heroBanner from "../assets/images/hero-banner.png";
import { BiArrowFromLeft } from "react-icons/bi";
import Service from "./Service";
const Hero = () => {
  return (
    <main>
      <article>
      <section className="hero has-bg-image" aria-label="home" >
      <div className="containe">
        <div className="hero-content">
          <p className="section-subtitle :dark">We have talented engineers & mechanics</p>
          <h1 className="h1 section-title">Auto Maintenance & Repair Service</h1>
          <p className="section-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sint occaecat cupidatat non proident.
          </p>
          <a href="#" className="btn">
            <span className="span">Our Services</span>
            <span className="material-symbols-rounded"><BiArrowFromLeft/></span>
          </a>
        </div>
        <figure className="hero-banner" >
          <img src={heroBanner} width={920} alt="red motor vehicle" className="move-anim" />
        </figure>
      </div>
    </section>
    <Service />
      </article>
    </main>
  );
};

export default Hero;
