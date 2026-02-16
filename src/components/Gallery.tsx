import { useState } from "react";
import { X, Scissors } from "lucide-react";

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  alt: `Barbershop work ${i + 1}`,
}));

const Gallery = () => {
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  const getAspect = (index: number) => {
    const aspects = [
      "aspect-[3/4]",
      "aspect-square",
      "aspect-[4/3]",
      "aspect-[3/4]",
      "aspect-[4/5]",
      "aspect-square",
    ];
    return aspects[index % aspects.length];
  };

  return (
    <section id="gallery" className="section-padding bg-secondary/50 bg-noise">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="line-accent mx-auto" />
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Every cut is a statement. Here's the proof.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setLightboxId(img.id)}
              className="group block w-full overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500 break-inside-avoid"
            >
              <div
                className={`${getAspect(i)} bg-card relative overflow-hidden`}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center">
                  <Scissors
                    size={24}
                    className="text-primary/10 group-hover:text-primary/20 group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* View indicator */}
                <div className="absolute bottom-3 right-3 text-[9px] uppercase tracking-[0.3em] font-heading text-primary/0 group-hover:text-primary/60 transition-all duration-300">
                  View
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxId && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightboxId(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
            onClick={() => setLightboxId(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="max-w-4xl w-full aspect-[4/3] bg-card border border-border/50 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <Scissors size={48} className="text-primary/20 mx-auto mb-4" />
              <p className="text-muted-foreground text-sm">
                Image placeholder #{lightboxId}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
