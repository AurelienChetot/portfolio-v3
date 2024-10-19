import Image from "next/image";

import User from "../assets/svg/user.svg";
import Arroba from "../assets/svg/arroba.svg";
import Message from "../assets/svg/message.svg";

export default function Contact() {
  return (
    <section id="contact" className="section-contact">
      <div className="top-color-contact"></div>
      <div className="bottom-color-contact">
        <h6>Contact</h6>
        <p>N’hésitez pas à m’écrire</p>
        <form aria-labelledby="contact-form">
          <div className="flex-name-mail">
            <div className="icone-text-container">
              <Image src={User} alt="" width={35} height={35} />
              <label htmlFor="name">Nom / Prénom *</label>
            </div>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              aria-required="true"
            />
          </div>
          <div className="flex-name-mail">
            <div className="icone-text-container">
              <Image src={Arroba} alt="" width={30} height={30} />
              <label htmlFor="mail">Adresse mail *</label>
            </div>
            <input
              type="email"
              id="mail"
              name="user_mail"
              required
              aria-required="true"
            />
          </div>
          <div className="flex-message">
            <div className="icone-text-container">
              <Image src={Message} alt="" width={35} height={35} />
              <label htmlFor="msg">Message *</label>
            </div>
            <textarea
              id="msg"
              name="user_message"
              required
              aria-required="true"
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <footer className="footer-container">
        <p>© Aurélien Chetot | 2024</p>
        <div className="link-container">
          <a
            href="https://www.linkedin.com/in/aur%C3%A9lien-chetot-6861852b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Linkedin </p>
          </a>
          <div className="caractere-style">|</div>
          <a
            href="https://github.com/AurelienChetot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Github</p>
          </a>
        </div>
      </footer>
    </section>
  );
}