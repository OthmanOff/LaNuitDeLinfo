import { Button } from "@/components/ui/button"
import React from "react";
interface SimpleSlideProps {
    img: string; // URL de l'image
    text: string; // Texte à afficher
    w: number; // Largeur de l'image
    h: number; // Hauteur de l'image
    alt:string;
    buttonText: string; // Texte du bouton
    onButtonClick?: () => void; // Callback lorsque le bouton est cliqué
  }
  
  const SimpleSlide: React.FC<SimpleSlideProps> = ({ img, text, w, h,alt , buttonText, onButtonClick}) => {
    return (
      <div className="flex justify-center items-center text-6xl bg-[#7de3ec] w-full">
        <span className="ml-4">{text}</span>
        <img src={img} alt={alt} width={w} height={h} />
        <Button
        onClick={handleClick} // Attacher le gestionnaire de clic
        className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {buttonText} {/* Bouton à gauche */}
      </Button>

      <Button
        onClick={handleClick} // Attacher le gestionnaire de clic
        className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {buttonText} {/* Bouton à droite */}
      </Button>
      </div>
    );
  };
  
  export default SimpleSlide;
  