import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Credito } from "@/data/proyectos";

export function ProyectoCreditos({ creditos }: { creditos: Credito[] }) {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
            Créditos
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {creditos.map((credito, i) => (
            <Reveal key={credito.rol} delay={i * 0.03}>
              <div className="font-display leading-snug">
                <span className="block text-sm font-normal text-foreground-muted">
                  {credito.rol}
                </span>
                {credito.valor.map((linea) => (
                  <span
                    key={linea}
                    className="mt-1 block text-lg italic sm:text-xl"
                  >
                    {linea}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
