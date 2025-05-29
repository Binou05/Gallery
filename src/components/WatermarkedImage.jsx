import React, { useEffect, useRef, useState } from "react";

export default function WatermarkedImage({ src, alt, artistName }) {
  const canvasRef = useRef(null);
  const [dataUrl, setDataUrl] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

      img.onload = () => {
        console.log("Image chargée pour filigrane :", src);
      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");

      // Dessine l’image
      ctx.drawImage(img, 0, 0);

      // Calcule une taille de texte en fonction de la largeur
      const fontSize = Math.floor(canvas.width * 0.04);
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
      ctx.lineWidth = 2;
      ctx.textAlign = "center";

      // Appliquer une rotation au centre de l’image
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((-45 * Math.PI) / 180); // -45 degrés
      ctx.strokeText(artistName, 0, 0);
      ctx.fillText(artistName, 0, 0);

      // Restaure la transformation
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      // Génère l’image finale
      const dataURL = canvas.toDataURL();
      setDataUrl(dataURL);
    };
  }, [src, artistName]);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {dataUrl ? <img src={dataUrl} alt={alt} /> : <img src={src} alt={alt} />}
    </>
  );
}
