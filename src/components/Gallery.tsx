import { useState } from "react";
import { X } from "lucide-react";

const images = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  src: "/placeholder.svg",
  alt: `Haircut style ${i + 1}`,
}));

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold">
            Our Work
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-sm group"
              onClick={() => setLightbox(img.id)}
            >
              <div
                className={`bg-muted ${
                  img.id % 3 === 0 ? "aspect-[3/4]" : img.id % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                } overflow-hidden`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-sm"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
