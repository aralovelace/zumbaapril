import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export const Carousel = () => {
  const options = { delay: 3000 };
  const autoplay = Autoplay(options);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay]);
  const images = [
    "zumba_april.png",
    "zumba-1.jpg",
    "zumba-2.jpg",
    "zumba-3.png",
  ];
  return (
    <section className="w-full mx-auto mb-16">
      <h4 className="text-center text-2xl leading-8 font-extrabold text-pink-800 dark:text-white tracking-tight sm:leading-9">
        Photo Gallery
      </h4>
      <div className="overflow-hidden mt-16" ref={emblaRef}>
        <div className="flex items-start">
          {images.map((image, index) => (
            <div className="relative flex w-full" key={index}>
              <Image
                src={`/images/${image}`}
                alt="April Smith Zumba"
                width={500}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
