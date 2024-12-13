import React from "react";
interface SimpleSlideProps {
  img: string; // URL de l'image
  text: string; // Texte à afficher
  w: number; // Largeur de l'image
  h: number; // Hauteur de l'image
 // Texte du bouton // Callback lorsque le bouton est cliqué
}

const SimpleSlide: React.FC<SimpleSlideProps> = ({ img, text, w = 500, h = 500 , }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#7de3ec] w-full p-4 h-screen">
      <div
        className="flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
          width: `${w}px`,
          height: `${h}px`,
        }}
      ><span className="text-4xl font-bold text-black mb-4">{text}</span></div>
      
    </div>
  );
};

export default SimpleSlide;
