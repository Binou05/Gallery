// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bgImg from "../assets/Peinture8.jpg";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // pour afficher un message

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rq8ak9r", // <— ton serviceID
        "template_19w61th", // <— ton templateID
        formRef.current, // <— le ref vers ton <form>
        "user_xYzAbCdEfGhIjKl" // <— ton userID / publicKey
      )
      .then(
        (result) => {

          console.log("Envoyé ✅", result.text);
          setStatus("Message envoyé ! Merci.");
          formRef.current.reset();
        },
        (error) => {
          console.error("Erreur ❌", error.text);
          setStatus("Une erreur est survenue. Réessaie.");
        }
      );
  };
  return (
    <section
      id="contact"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "70vh", // ou la hauteur que tu préfères
        position: "relative",
      }}
    >
      <div className="contact__inner">
        <h2>Contactez-moi</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label>
            Votre e-mail
            <input type="email" name="user_email" required />
          </label>
          <label>
            Votre message
            <textarea name="message" rows="8" required />
          </label>
          <button type="submit">Envoyer</button>
        </form>
        {status && <p className="contact__status">{status}</p>}
      </div>
    </section>
  );
}
