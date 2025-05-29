// src/pages/About.jsx
import React, { useState } from "react";

// assets
import photoPortrait from "../assets/photoeric.jpg";
import photoPeintre from "../assets/photopeintre.jpg";
import carteVisite from "../assets/carte-de-visite.png";

export default function About() {
  const [showCard, setShowCard] = useState(false);

  return (
    <section className="about-page">
      <h2>À propos d'Éric Delpech</h2>

      <div className="about-page__intro">
        {/* Portrait et texte côte à côte */}
        <img
          className="about-page__portrait"
          src={photoPortrait}
          alt="Portrait de Éric Delpech"
        />
        <div className="about-page__text">
          <p>
            Éric Delpech est un artiste-peintre contemporain originaire de
            Miramas, passionné par la Provence et tout particulièrement par la
            lumière dorée qui se reflète sur les façades et dans les champs de
            lavande. Sur toile de lin, il capte cette atmosphère grâce à une
            technique mêlant pinceaux traditionnels et couteaux pour donner
            relief et texture à ses œuvres.
          </p>
          
          <p>
            Dans chacun de ses tableaux se dégage une forme de quiétude : on
            pourrait presque s’asseoir dans l’un de ses paysages pour respirer
            le temps qui passe. C’est avec grande passion et souci du détail
            qu’il enseigne son art à tous les amoureux de la peinture.
          </p>
          <br />
          <p>
            Éric réalise sur commande toutes les œuvres présentées dans sa
            galerie : si un tableau vous plaît, il peut le reproduire selon la
            taille et les finitions de votre choix. Le tarif, ajustable en
            fonction des dimensions et de vos demandes spécifiques , reste
            négociable ; vous pouvez consulter la grille tarifaire dans le menu
            « Galerie », « Tarifs ».
            Pour vous offrir une pièce unique.
          </p>
        </div>
      </div>

      {/* 2. Galerie d’illustrations : côte à côte */}
      <div className="about-page__gallery">
        {/* en pleine action */}
        <img
          src={photoPeintre}
          alt="Éric Delpech en pleine peinture"
          className="about-page__action"
        />

        {/* carte de visite (clic ouvre le modal) */}
        <div className="about-page__card" onClick={() => setShowCard(true)}>
          <h3>Ma carte de visite</h3> <br />
          <br />
          <img
            src={carteVisite}
            alt="Carte de visite Éric Delpech"
            className="about-page__card-img"
          />
        </div>

      
      </div>

      {/* Modal carte de visite */}
      {showCard && (
        <div className="modal-overlay" onClick={() => setShowCard(false)}>
          <img
            src={carteVisite}
            alt="Carte de visite en grand"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
