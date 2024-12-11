import React from "react";
import { Button } from "@/components/ui/button"
interface SimpleSlideProps {
  img: string; // URL de l'image
  text: string; // Texte à afficher
  w: number; // Largeur de l'image
  h: number; // Hauteur de l'image
  alt: string; // Texte alternatif pour l'image
  buttonText: string; // Texte du bouton
  onButtonClick?: () => void; // Callback lorsque le bouton est cliqué
}

const SimpleSlide: React.FC<SimpleSlideProps> = ({ img, text, w, h, alt, buttonText, onButtonClick }) => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center bg-[#7de3ec] w-full h-96 p-4 h-full">
      {/* Texte */}
      <span className="text-4xl font-bold text-black mb-4">{text}</span>

      {/* Image */}
      <img src={img} alt={alt} width={w} height={h} className="object-contain" />

      {/* Bouton en bas à droite */}
      <Button
        // onClick={onButtonClick}
        className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default SimpleSlide;
