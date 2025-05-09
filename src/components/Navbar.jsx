// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li
          className="navbar__dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* CLIQUE NAVIGUE BIEN VERS /galerie (redirection vers huile) */}
          <Link
            to="/galerie"
            className="navbar__link navbar__dropdown-toggle"
            onClick={() => setOpen((o) => !o)}
          >
            Galerie <span className="navbar__chevron">▾</span>
          </Link>
          <ul className={`navbar__dropdown-menu ${open ? "open" : ""}`}>
            <li>
              <Link to="/galerie/huile">A l’huile</Link>
            </li>
            <li>
              <Link to="/galerie/encre"> A l’encre</Link>
            </li>
            <li>
              <Link to="/galerie/tarifs">Tarifs</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      
    </nav>
  );
}
