import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryGrid({ images }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <section className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{ cursor: "pointer" }}
            onClick={() => setIndex(i)}
          >
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map((img) => ({ src: img.src }))}
        index={index}
      />
    </>
  );
}
