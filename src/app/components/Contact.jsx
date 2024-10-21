import { useRef } from "react";
import Image from "next/image";
import emailjs from "emailjs-com"; // Importer EmailJS

import User from "../assets/svg/user.svg";
import Arroba from "../assets/svg/arroba.svg";
import Message from "../assets/svg/message.svg";

export default function Contact() {
  const form = useRef(); // Référence au formulaire

  const sendEmail = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page

    // Envoi de l'email via EmailJS
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log("Email envoyé avec succès :", result.text);
        alert("Votre message a été envoyé avec succès !");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email :", error);
        alert("Une erreur s'est produite. Veuillez réessayer.");
      });
  };

  return (
    <section id="contact" className="section-contact">
      <div className="top-color-contact"></div>
      <div className="bottom-color-contact">
        <h6>Contact</h6>
        <p>N’hésitez pas à m’écrire</p>
        <form ref={form} onSubmit={sendEmail} aria-labelledby="contact-form">
          <div className="flex-name-mail">
            <div className="icone-text-container">
              <Image src={User} alt="" width={35} height={35} />
              <label htmlFor="name">Nom / Prénom *</label>
            </div>
            <input
              type="text"
              id="name"
              name="from_name"
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
              name="user_email"
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
              name="message" // Correspond à {{message}} dans le template
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
