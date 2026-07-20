import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Proyecto } from "@/data/proyectos";

export function ProyectoNav({
  anterior,
  siguiente,
}: {
  anterior?: Proyecto;
  siguiente?: Proyecto;
}) {
  if (!anterior && !siguiente) return null;

  return (
    <section className="border-t border-line py-16 sm:py-20">
      <Container className="flex items-center justify-between gap-6">
        {anterior ? (
          <Link
            href={`/proyectos/${anterior.slug}`}
            className="group flex flex-col gap-1"
          >
            <span className="text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
              Anterior
            </span>
            <span className="font-display text-lg italic transition-colors group-hover:text-foreground-muted sm:text-xl">
              {anterior.titulo}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {siguiente ? (
          <Link
            href={`/proyectos/${siguiente.slug}`}
            className="group flex flex-col items-end gap-1 text-right"
          >
            <span className="text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
              Siguiente
            </span>
            <span className="font-display text-lg italic transition-colors group-hover:text-foreground-muted sm:text-xl">
              {siguiente.titulo}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </Container>
    </section>
  );
}
