// src/components/GalleryGrid.jsx
import React, { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import WatermarkedImage from "./WatermarkedImage";

export default function GalleryGrid({ images }) {
  const [index, setIndex] = useState(-1);
  // on prépare un ref pour chaque item
  const itemRefs = useRef(images.map(() => React.createRef()));
  const artist = "Eric Delpech";
  const handleClick = (i) => {
    // 1) on scroll vers la vignette pour la centrer
    itemRefs.current[i].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    // 2) on ouvre la lightbox après un court délai
    setTimeout(() => setIndex(i), 300);
  };

  return (
    <>
      <section className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            ref={itemRefs.current[i]}
            onClick={() => handleClick(i)}
          >
            <WatermarkedImage
              src={img.src}
              alt={img.title}
              artistName={artist}
            />

            {/* overlay qui n’apparaît qu’au hover */}
            <div className="overlay">
              <h4>{img.title}</h4>
               {/* si c'est en collection privée */}
             
              {img.private ? (
                <p>Collection privée</p>
              ) : (
                <>
                  {img.dimensions && <p>{img.dimensions}</p>}
                  {img.price  != null && <p>{img.price} €</p>}
                  </>
              )}
             
            </div>

            {/* légende toujours visible */}
            <p className="caption">{img.title}</p>
          </div>
        ))}
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map((img) => ({ src: img.src }))}
        index={index}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          doubleTapBehavior: "zoom",
        }}
      />
    </>
  );
}
