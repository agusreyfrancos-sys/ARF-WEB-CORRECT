import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { proyectos } from "@/data/proyectos";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Styling, dirección de arte y proyectos editoriales de Agustina Rey Francos.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <div className="min-h-[100svh] py-24 sm:py-32">
      <Container>
        <h1 className="sr-only">Proyectos</h1>
        <ul className="divide-y divide-line border-y border-line">
          {proyectos.map((proyecto, i) => (
            <Reveal key={proyecto.slug} delay={i * 0.04}>
              <li>
                <Link
                  href={`/proyectos/${proyecto.slug}`}
                  className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-7"
                >
                  <span className="font-display text-2xl italic transition-colors group-hover:text-foreground-muted sm:text-3xl">
                    {proyecto.titulo}
                  </span>
                  <span className="flex shrink-0 gap-4 text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
                    <span>{proyecto.categoria}</span>
                    {proyecto.anio && <span>{proyecto.anio}</span>}
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </div>
  );
}
