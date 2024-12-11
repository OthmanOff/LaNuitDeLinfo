import React from "react";
interface SimpleSlideProps {
  img: string; // URL de l'image
  text: string; // Texte à afficher
  w: number; // Largeur de l'image
  h: number; // Hauteur de l'image
  alt: string; // Texte alternatif pour l'image
}

const SimpleSlide: React.FC<SimpleSlideProps> = ({ img, text, w, h, alt }) => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center bg-[#7de3ec] w-full h-96 p-4 h-full">
      {/* Texte */}
      <span className="text-4xl font-bold text-black mb-4">{text}</span>

      {/* Image */}
      <img src={img} alt={alt} width={w} height={h} className="object-contain" />

    </div>
  );
};

export default SimpleSlide;
