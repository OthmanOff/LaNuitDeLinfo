"use client";
import { Button } from "@/components/ui/button";
import { GlobeDemo } from "@/components/ui/globecomponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SimpleSlide from "@/components/ui/Slide_title";
import Image from "./image.png";
import React, { useRef } from "react";
export default function Home() {
  const section1Ref = useRef(null);
  
  const handleScroll = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (section1Ref.current) {
    section1Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
    return (
      <div>
        <div className="flex flex-row w-screen h-screen">
          <GlobeDemo />
          <div className="flex flex-col flex-1 justify-around items-center">
            <div>
              <p className="text-4xl">Race for water</p>
            </div>
            <Button onClick={handleScroll} className="text-2xl">
              Commencer l'Aventure
            </Button>
          </div>
        </div>
        <div className="h-screen" id="carousel">
          <Carousel ref={section1Ref}>
            <CarouselContent>
              <CarouselItem>
                <SimpleSlide
                  img={Image}
                  text="Arctique - Fonte des glaces"
                  w={200}
                  h={300}
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
          </Carousel>
        </div>
      </div>
    );
  };

