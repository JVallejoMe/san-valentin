import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/foto1.jpg",
  "/images/foto2.jpg",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
];

const PhotoCarousel: React.FC = () => {
  return (
    <div className="carousel">
      <motion.div
        className="inner-carousel"
        drag="x"
        dragConstraints={{ right: 0, left: -((images.length - 1) * 300) }}
      >
        {images.map((src, index) => (
          <motion.div key={index} className="item">
            <img src={src} alt={`Foto ${index + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhotoCarousel;
