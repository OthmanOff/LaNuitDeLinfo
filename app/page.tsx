import { Button } from "@/components/ui/button";
import { GlobeDemo } from "@/components/ui/globecomponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SimpleSlide from "@/components/ui/Slide_title";


export default function Home() {
  return (
    <div>
      <div className="flex flex-row w-screen h-screen">
        <GlobeDemo />
        <div className="flex flex-col flex-1 justify-around items-center">
          <div>
            <p className="text-4xl">Race for water</p>
          </div>
          <Button className="text-2xl">Commencer l &apos Aventure</Button>
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
