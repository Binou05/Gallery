// src/pages/Gallery.jsx
import React from "react";
import GalleryGrid from "../components/GalleryGrid";
import imagesData from "../assets/imagesData";

export default function Gallery() {
  return (
    <section className="gallery-page">
      <h2>Mes Œuvres</h2>
      <GalleryGrid images={imagesData} />
    </section>
  );
}
