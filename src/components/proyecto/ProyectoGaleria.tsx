import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getImageDimensions } from "@/lib/image-dimensions";

// Cada foto usa su ancho/alto real: la columna define el ancho, el alto
// siempre respeta la proporción original — nunca se recorta el trabajo.
const patrones = [
  { grid: "col-span-12", sizes: "100vw" },
  { grid: "col-span-12 sm:col-span-6", sizes: "(min-width: 640px) 50vw, 100vw" },
  {
    grid: "col-span-12 sm:col-span-6 sm:col-start-7",
    sizes: "(min-width: 640px) 50vw, 100vw",
  },
  {
    grid: "col-span-12 sm:col-span-8 sm:col-start-3",
    sizes: "(min-width: 640px) 67vw, 100vw",
  },
];

export function ProyectoGaleria({
  imagenes,
  titulo,
}: {
  imagenes: string[];
  titulo: string;
}) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-12 items-start gap-x-4 gap-y-16 sm:gap-y-24">
          {imagenes.map((src, i) => {
            const patron = patrones[i % patrones.length];
            const { width, height } = getImageDimensions(src);
            return (
              <Reveal key={src} className={patron.grid}>
                <Image
                  src={src}
                  alt={`${titulo} — imagen ${i + 2}`}
                  width={width}
                  height={height}
                  sizes={patron.sizes}
                  quality={95}
                  className="h-auto w-full"
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
