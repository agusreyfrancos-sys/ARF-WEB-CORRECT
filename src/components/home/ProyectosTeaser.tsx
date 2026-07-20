import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getImageDimensions } from "@/lib/image-dimensions";

const imagenes = [
  {
    src: "/proyectos/sweet-and-salty/03.jpg",
    span: "sm:col-span-5",
    sizes: "(min-width: 640px) 42vw, 100vw",
  },
  {
    src: "/proyectos/barcelona-junes-colors/05.jpg",
    span: "sm:col-span-4",
    sizes: "(min-width: 640px) 33vw, 100vw",
  },
  {
    src: "/proyectos/ampi-vera-intuicion/02.jpg",
    span: "sm:col-span-3",
    sizes: "(min-width: 640px) 25vw, 100vw",
  },
];

export function ProyectosTeaser() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-6">
          {imagenes.map((img, i) => {
            const { width, height } = getImageDimensions(img.src);
            return (
              <Reveal key={img.src} delay={i * 0.1} className={img.span}>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-line">
                  <Image
                    src={img.src}
                    alt=""
                    width={width}
                    height={height}
                    sizes={img.sizes}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          delay={0.2}
          className="mt-16 flex flex-col items-center gap-6 text-center sm:mt-20"
        >
          <Link
            href="/proyectos"
            className="text-xs uppercase tracking-[0.18em] transition-colors hover:text-foreground-muted"
          >
            Ver proyectos →
          </Link>
          <p className="max-w-sm font-display text-lg italic leading-snug text-foreground-muted sm:text-xl">
            Construir narrativas desde una mirada nostálgica y sensible.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
