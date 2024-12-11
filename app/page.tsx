import { Button } from "@/components/ui/button";
import Globe from "@/components/ui/globe";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SimpleSlide from "@/components/ui/Slide_title";

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-60">
      <span className="pointer-events-none whitespace-pre-wrap ">
        Globe Loading
      </span>
      <Globe className="top-28" />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="flex flex-row w-screen h-screen">
        <GlobeDemo />
        <div className="flex flex-col flex-1 justify-around items-center">
          <div>
            <p className="text-4xl">Race for water</p>
          </div>
          <Button className="text-2xl">Commencer l'Aventure</Button>
        </div>
      </div>
      <div className="h-screen">
        <Carousel >
          <CarouselContent>
            <CarouselItem>
              <SimpleSlide
                img="https://picsum.photos/id/1003/200/300"
                text="Arctique - Fonte des glaces"
                w={200}
                h={300}
              />
            </CarouselItem>
            <CarouselItem>
              <SimpleSlide
                img="https://picsum.photos/id/1003/200/300"
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
}
