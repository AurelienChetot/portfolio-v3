import { useRef } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import Toast, {
  emailSucces,
  emailError,
  captchaError,
} from "./ToasterContainer";
import ReCAPTCHA from "react-google-recaptcha";

import User from "../assets/svg/user.svg";
import Arroba from "../assets/svg/arroba.svg";
import Message from "../assets/svg/message.svg";

export default function Contact() {
  const form = useRef();
  const recaptchaRef = useRef();

  // Pour vider les champs
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Obtenir le token
    const token = recaptchaRef.current.getValue();

    // Vérifier le token
    if (!token) {
      captchaError(
        "Veuillez compléter le reCAPTCHA avant d'envoyer le message."
      );
      return;
    }

    // Envoi de l'email via EmailJS
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        { "g-recaptcha-response": token }
      )
      .then((result) => {
        console.log("Email envoyé avec succès :", result.text);
        emailSucces("Votre message a été envoyé avec succès !");
        // Vide les champs
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        recaptchaRef.current.reset();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email :", error);
        emailError("Une erreur s'est produite. Veuillez réessayer.");
      });
  };

  return (
    <section id="contact" className="section-contact">
      <Toast />
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
              ref={nameRef}
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
              ref={emailRef}
            />
          </div>
          <div className="flex-message">
            <div className="icone-text-container">
              <Image src={Message} alt="" width={35} height={35} />
              <label htmlFor="msg">Message *</label>
            </div>
            <textarea
              id="msg"
              name="message"
              required
              aria-required="true"
              ref={messageRef}
            ></textarea>
          </div>
          <div className="button-container">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              ref={recaptchaRef} // Appellé qd l'utilisateur "coche"
            />
            <button type="submit">Envoyer</button>
          </div>
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
