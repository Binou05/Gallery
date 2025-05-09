// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
// importe réellement l’image, Vite te renvoie l’URL finale
import peinture5 from "../assets/Peinture5.jpg";

export default function Home() {
  return (
    <section
      className="home-page"
      style={{
        // on injecte inline style pour que React/Vite résolve l’URL
        background: `url(${peinture5}) center/cover no-repeat`,
      }}
    >
      <div className="home-page__overlay" />
      <div className="home-page__content">
        <h1>Bienvenue dans la Galerie d’Art d'Éric Delpech</h1>
        <p className="home-page__subtitle">
          Découvrez l’univers méditerranéen et onirique de cet artiste provençal.
        </p>
        <div className="home-page__buttons">
          <Link to="/galerie" className="btn btn--primary">
            Voir la galerie
          </Link>
          <Link to="/about" className="btn btn--outline">
            À propos de l’artiste
          </Link>
        </div>
      </div>
    </section>
  );
}
