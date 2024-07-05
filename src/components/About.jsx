import React from "react";
import aboutBanner from "../assets/images/about-banner.png";
import "../styles/about.css";

const About = () => {
  return (
    <section className="section about has-before" aria-labelledby="about-label">
      <div className="containe grid gap-[50px]">
        <figure className="about-banner">
          <img
            src={aboutBanner}
            width="540"
            height="540"
            loading="lazy"
            alt="vehicle repair equipments"
            className="w-full"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle :dark" id="about-label">
            Sobre nós
          </p>

          <h2 className="h2 section-title">
            Estamos Comprometidos com a Qualidade
          </h2>

          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nesciunt laboriosam odio aut illo dolores nemo esse! Enim tempore
            maxime quos aliquid fuga iusto, facere error architecto,
          </p>

          <p className="section-text">
            Reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui.
          </p>

          <ul className="about-list grid gap-7 mt-10">
            <li className="about-item">
              <p>
                <strong className="display-1 strong">8K+</strong> Clientes
                Satisfeitos
              </p>
            </li>

            <li className="about-item">
              <p>
                <strong className="display-1 strong">22+</strong> Instrumentos
              </p>
            </li>

            <li className="about-item">
              <p>
                <strong className="display-1 strong">50+</strong> Anos no
                mercado
              </p>
            </li>

            <li className="about-item">
              <p>
                <strong className="display-1 strong">99%</strong> Projetos
                concluídos
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
