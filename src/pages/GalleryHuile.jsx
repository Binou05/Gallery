// src/pages/GalleryHuile.jsx
import React from "react";
import GalleryGrid from "../components/GalleryGrid";
import imagesData from "../assets/imagesData";

export default function GalleryHuile() {
  const huileImages = imagesData.filter((img) => img.category === "huile");
  return (
    <>
      <h2>Peintures à l’huile</h2>
      <GalleryGrid images={huileImages} />
    </>
  );
}
