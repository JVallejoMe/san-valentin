import { useState } from "react";
import "./App.css";

const images: string[] = [
  "/images/foto1.jpg",
  "/images/foto2.jpg",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
  "/images/foto5.jpg",
  "/images/foto6.jpg",
  "/images/foto7.jpg",
];

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const moveSlide = (direction: number): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + direction + images.length) % images.length
    );
  };

  const showMessage = (): void => {
    alert("¡Te amo mucho! 💘");
  };

  return (
    <div className="container">
      <h1>💖 Feliz Día de San Valentín, Mi Amor 💖</h1>
      <p>
        Eres la persona más especial en mi vida. Gracias por cada sonrisa, cada
        abrazo y cada momento juntos. Te amo con todo mi corazón. 💕
      </p>
      <div className="heart">❤️</div>
      <button className="button" onClick={showMessage}>
        Haz clic aquí
      </button>

      {/* Carrusel de imágenes */}
      <div className="carousel-container">
        <button className="prev" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <div className="carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Recuerdo juntos"
              className={index === currentIndex ? "active" : "inactive"}
            />
          ))}
        </div>
        <button className="next" onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>

      {/* Sección de hitos en nuestra relación */}
      <div className="milestones">
        <h2>✨ Nuestra Historia ✨</h2>
        <ul>
          <li>
            🥰 Hace <strong>750 días</strong> que estamos juntos.
          </li>
          <li>
            💌 Nos volvimos a hablar después de casi <strong>10 años</strong>{" "}
            separados, y ahora no puedo vivir sin ti.
          </li>
          <li>
            💖 Cada cita contigo fue indescriptible, pero me encantó ese primer{" "}
            <strong>25</strong> cuando aceptaste ser mi enamorada.
          </li>
          <li>
            🏠 Ahora llevamos casi <strong>1 año</strong> viviendo juntos y solo
            espero el futuro contigo.
          </li>
        </ul>
      </div>

      {/* Frase de amor */}
      <div className="love-quote">
        <p>
          "Cada día a tu lado es el mejor regalo que la vida me ha dado. Te amo
          con toda mi alma. 💖"
        </p>
      </div>

      {/* Sección de recuerdos de salidas */}
      <div className="memories">
        <h2>🎭 Extraño nuestras salidas 🎬</h2>
        <p>
          Me encanta cada momento contigo, desde nuestras cenas románticas, las
          risas en el cine, nuestras aventuras en el teatro y las noches de
          baile. Cada instante es mágico cuando estoy contigo. 💃🕺
        </p>
      </div>

      {/* Ranking de sus cualidades */}
      <div className="qualities">
        <h2>🌟 Lo que más amo de ti 🌟</h2>
        <ol>
          <li>💖 Cariñosa y Amorosa</li>
          <li>💪 Honesta y Valiente</li>
          <li>😆 Divertida y Hermosa</li>
          <li>🐻 Totorretonasa</li>
          <li>🧠 Su mente Fuerte y amable</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
