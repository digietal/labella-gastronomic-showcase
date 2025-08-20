import { useEffect, useMemo, useState } from "react";
import hero1 from "@/assets/file-la-bella.jpg";
import hero2 from "@/assets/camarao-internacional.jpg";
import hero3 from "@/assets/risoto-parmesao-salmao.jpg";
import hero4 from "@/assets/peixes-category.jpg";
import hero5 from "@/assets/massas-category.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Hero = () => {
  const slides = useMemo(
    () => [
      { src: hero1, alt: "Filé La Bella ao molho do chef – cardápio premium" },
      { src: hero2, alt: "Camarão Internacional cremoso – especial da casa" },
      { src: hero3, alt: "Risoto de parmesão com salmão empanado" },
      { src: hero4, alt: "Seleção de peixes grelhados La Bella" },
      { src: hero5, alt: "Fettuccine artesanal com molho especial" },
    ],
    []
  );

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(slides.length);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Autoplay simples
  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 4000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="relative w-full min-h-screen">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start", dragFree: false }}
        className="w-full h-[100svh]"
      >
        <CarouselContent className="h-full">
          {slides.map((s, i) => (
            <CarouselItem key={i} className="h-[100svh]">
              <div className="relative w-full h-full">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controles */}
        <CarouselPrevious className="left-4 bg-black/40 border-primary/30 hover:bg-black/60" />
        <CarouselNext className="right-4 bg-black/40 border-primary/30 hover:bg-black/60" />

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                current === i ? "bg-primary scale-110" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};
