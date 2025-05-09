// src/pages/GalleryEncre.jsx
import React from "react";
import GalleryGrid from "../components/GalleryGrid";
import imagesData from "../assets/imagesData";

export default function GalleryEncre() {
  const encreImages = imagesData.filter((img) => img.category === "encre");
  return (
    <>
      <h2>Peintures à l’encre</h2>
      <GalleryGrid images={encreImages} />
    </>
  );
}
