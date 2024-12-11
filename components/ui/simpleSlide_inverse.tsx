import React from "react";
interface SimpleSlideProps {
    img: string; // URL de l'image
    text: string; // Texte à afficher
    w: number; // Largeur de l'image
    h: number; // Hauteur de l'image
    alt:string;

  }
  
  const SimpleSlide: React.FC<SimpleSlideProps> = ({ img, text, w, h,alt }) => {
    return (
      <div className="flex justify-center items-center text-6xl bg-[#7de3ec] w-full">
        <span className="ml-4">{text}</span>
        <img src={img} alt={alt} width={w} height={h} />
      </div>
    );
  };
  
  export default SimpleSlide;
  