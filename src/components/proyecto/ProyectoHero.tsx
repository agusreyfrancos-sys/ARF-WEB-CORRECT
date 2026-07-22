import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getImageDimensions } from "@/lib/image-dimensions";
import type { Proyecto } from "@/data/proyectos";

export function ProyectoHero({
  proyecto,
  cover,
}: {
  proyecto: Proyecto;
  cover: string;
}) {
  const { width, height } = getImageDimensions(cover);

  return (
    <section className="pt-24 sm:pt-28">
      <Container>
        <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <h1 className="font-display text-2xl italic leading-tight sm:text-4xl lg:text-5xl">
            {proyecto.titulo}
          </h1>
          <span className="text-[11px] uppercase tracking-[0.18em] text-foreground-muted sm:shrink-0">
            {proyecto.anio ? `${proyecto.categoria} — ${proyecto.anio}` : proyecto.categoria}
          </span>
        </div>
        {proyecto.nota && (
          <p className="mb-10 max-w-xl text-sm italic leading-relaxed text-foreground-muted sm:mb-12">
            {proyecto.nota}
          </p>
        )}
      </Container>
      <Image
        src={cover}
        alt={proyecto.titulo}
        width={width}
        height={height}
        priority
        quality={95}
        sizes="100vw"
        className="h-auto w-full"
      />
    </section>
  );
}
