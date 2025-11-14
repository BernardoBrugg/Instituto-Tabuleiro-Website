import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface CarouselProps {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  alt: string;
}

export default function Carousel({
  images,
  currentIndex,
  setCurrentIndex,
  alt,
}: CarouselProps) {
  const next = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prev = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={src}
                alt={`${alt} ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 border border-white/30 rounded-full hover:bg-black/70 transition-all text-white"
      >
        <IoChevronBack size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 border border-white/30 rounded-full hover:bg-black/70 transition-all text-white"
      >
        <IoChevronForward size={24} />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
