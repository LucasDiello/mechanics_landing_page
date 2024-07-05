import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import "../styles/footer.css";
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import footerShape from "../assets/images/footer-shape-1.png";
import footerShape2 from "../assets/images/footer-shape-2.png";
import footerShape3 from "../assets/images/footer-shape-3.png";

const Footer = () => {
  const footerData = {
    brand: {
      logo: logo,
      text: "Rerum necessitatibus saepe eveniet aut et voluptates repudiandae sint et molestiae non recusandae.",
      socialLinks: [
        { id: 1, icon: facebook, url: "#" },
        { id: 2, icon: instagram, url: "#" },
        { id: 3, icon: twitter, url: "#" }
      ]
    },
    openingHours: [
      { id: 1, day: "Segunda – Sábado", hours: "12:00 – 14:45" },
      { id: 2, day: "Domingo – Quinta", hours: "17:30 – 00:00" },
      { id: 3, day: "Sexta – Sábado", hours: "12:00 – 14:45" }
    ],
    contactInfo: [
      { id: 1, icon: <BsTelephone />, text: "+55 51 9999-9999", url: "tel:+01234567890" },
      { id: 2, icon: <MdEmail />, text: "info@autofix.com", url: "mailto:info@autofix.com" },
      { id: 3, icon: <SiGooglemaps />, text: "Canoas - Rio Grande Do Sul - 135", url: "#" }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="containe pt-10 grid gap-10">

          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={footerData.brand.logo} width="128" height="63" alt="autofix home" />
            </a>
            <p className="footer-text">{footerData.brand.text}</p>
            <ul className="flex gap-6">
              {footerData.brand.socialLinks.map(link => (
                <li key={link.id}>
                  <a href={link.url} className="social-link">
                    <img src={link.icon} alt={`Ícone social`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="h3">Horário de Funcionamento</p>
            </li>
            {footerData.openingHours.map(day => (
              <li key={day.id}>
                <p className="p">{day.day}</p>
                <span className="span">{day.hours}</span>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            <li>
              <p className="h3">Informações de Contato</p>
            </li>
            {footerData.contactInfo.map(info => (
              <li key={info.id}>
                <a href={info.url} className="footer-link">
                  <span className="material-symbols-rounded">{info.icon}</span>
                  <span className="span">{info.text}</span>
                </a>
              </li>
            ))}
          </ul>

        </div>
        <img src={footerShape3} width="637" height="173" loading="lazy" alt="Forma" className="shape shape-3 move-anim" />
      </div>

      <div className="footer-bottom">
        <div className="containe">
          <img src={footerShape2} width="778" height="335" loading="lazy" alt="Forma" className="shape shape-2" />
          <img src={footerShape} width="805" height="652" loading="lazy" alt="Carro Vermelho" className="shape shape-1" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
