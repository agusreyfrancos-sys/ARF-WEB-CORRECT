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
        <div className="mb-8 flex items-baseline justify-between gap-6 sm:mb-10">
          <h1 className="font-display text-3xl italic leading-tight sm:text-4xl lg:text-5xl">
            {proyecto.titulo}
          </h1>
          <span className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
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
