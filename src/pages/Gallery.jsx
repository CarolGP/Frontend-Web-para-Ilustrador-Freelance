import { useEffect, useState } from "react";
import { getGallery } from "../services/api";

import "./Gallery.css";

export const Gallery = () => {

  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGallery().then(data => {
      setItems(data);
      setLoading(false);
    });

  }, []);

  if(loading){

    return <p className="loading">Cargando...</p>;

  }

  return(

    <section className="gallerySection">

      <div className="galleryGrid">

        {
          items.map((item, index) => {
            const sizeClass =
              index % 7 === 0 ? "large" :
              index % 5 === 0 ? "wide" : "";

            return (

              <div
                className={`galleryCard ${sizeClass}`}
                key={item._id}
                onClick={() => setSelectedIndex(index)}
              >

                <img
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
            );
          })
        }
      </div>


  {selectedIndex !== null && (
  <div
    className="modalOverlay"
    onClick={() => setSelectedIndex(null)}>

    <button
      className="carouselButton left"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedIndex(
          selectedIndex === 0
            ? items.length - 1
            : selectedIndex - 1
        );
      }}
    >
      ←
    </button>

    <img
      src={items[selectedIndex].imageUrl}
      alt={items[selectedIndex].title}
      className="modalImage"
      onClick={(e) => e.stopPropagation()}
    />

    <button
      className="carouselButton right"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedIndex(
          selectedIndex === items.length - 1
            ? 0
            : selectedIndex + 1
        );
      }}
    >
      →
    </button>
  </div>
)}
    </section>
  );
};