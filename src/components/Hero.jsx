import React from "react";
import "../tailwind.css";
import "../styles/hero.css";
import heroBg from "../assets/images/hero-bg.jpg";
import heroBanner from "../assets/images/hero-banner.png";
import { BiArrowFromLeft } from "react-icons/bi";
import Service from "./Service";
import About from "./About";
import Work from "./Work";

const Hero = () => {
  return (
    <main>
      <article>
        <section className="hero has-bg-image" aria-label="página inicial">
          <div className="containe">
            <div className="hero-content">
              <p className="section-subtitle :dark">Temos engenheiros e mecânicos talentosos</p>
              <h1 className="h1 section-title">Manutenção & Reparo & Concerto</h1>
              <p className="section-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sint occaecat cupidatat non proident.
              </p>
              <a href="#" className="btn">
                <span className="span">Nossos Serviços</span>
                <span className="material-symbols-rounded"><BiArrowFromLeft/></span>
              </a>
            </div>
            <figure className="hero-banner">
              <img src={heroBanner} width={920} alt="Veículo motorizado vermelho" className="move-anim" />
            </figure>
          </div>
        </section>
        <Service />
        <About />
        <Work />
      </article>
    </main>
  );
};

export default Hero;
