// src/pages/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import bgImg from "../assets/Peinture8.jpg";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  // ← Initialise EmailJS avec ta Public Key (obligatoire)
  useEffect(() => {
    emailjs.init("aV-l80m8P8EpbzjAt"); // <- mets ici la Public Key de ton dashboard
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // optionnel : lecture des valeurs pour debug
    const fd = new FormData(formRef.current);
    console.log("Envoi form:", {
      from_name: fd.get("from_name"),
      user_email: fd.get("user_email"),
      message: fd.get("message"),
      to_email: fd.get("to_email"),
    });

    emailjs
      .sendForm(
        "service_rq8ak9r", // <- ton service ID
        "template_19w61th", // <- ton template ID
        formRef.current,
        "aV-l80m8P8EpbzjAt" // <- public key (ici redondant si init() déjà fait, mais OK)
      )
      .then(
        (result) => {
          console.log("Envoyé ✅", result);
          setStatus("Message envoyé ! Merci.");
          formRef.current.reset();
        },
        (error) => {
          console.error("Erreur EmailJS ❌", error);
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
        minHeight: "70vh",
        position: "relative",
      }}
    >
      <div className="contact__inner">
        <h2>Contactez-moi</h2>

        <form ref={formRef} onSubmit={handleSubmit}>
          <label>
            Votre nom
            <input type="text" name="from_name" placeholder="Prénom et nom" />
          </label>

          <label>
            Votre e-mail
            <input type="email" name="user_email" required />
          </label>

          <label>
            Votre message
            <textarea name="message" rows="8" required />
          </label>

          {/* si ton template attend un to_email ou si tu veux que les messages aillent TOUJOURS à Éric */}
          <input
            type="hidden"
            name="to_email"
            value="eric.delpech13@outlook.fr"
          />

          <button type="submit">Envoyer</button>
        </form>

        {status && <p className="contact__status">{status}</p>}
      </div>
    </section>
  );
}
