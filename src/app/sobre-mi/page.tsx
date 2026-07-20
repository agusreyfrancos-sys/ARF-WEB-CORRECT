import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getImageDimensions } from "@/lib/image-dimensions";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Estilismo, dirección de arte y consultoría creativa desde una mirada editorial.",
  alternates: { canonical: "/sobre-mi" },
};

const RETRATO = "/sobre-mi/01.jpg";

export default function SobreMiPage() {
  const { width, height } = getImageDimensions(RETRATO);

  return (
    <div className="pt-24 sm:pt-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:gap-8">
          <div className="sm:col-span-7 sm:col-start-1">
            <Reveal>
              <h1 className="font-display text-2xl italic sm:text-3xl">
                Sobre mí
              </h1>
            </Reveal>

            <div className="mt-12 flex flex-col gap-6 text-[15px] leading-relaxed text-foreground/90 sm:mt-16 sm:text-base">
              <Reveal delay={0.05}>
                <p>
                  Soy Agustina. Directora Creativa y estilista. Estudié
                  Producción de Moda en la Universidad de Palermo y Diseño de
                  Indumentaria en la UBA. Trabajo mis proyectos desde una
                  mirada nostálgica y sensible. Me gusta explorar universos
                  femeninos y crear historias y narrativas. Creo que hacer
                  editoriales y pensar proyectos en equipo nos permite
                  conectar con las historias.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Colaboro con marcas, fotógrafos y publicaciones en
                  proyectos editoriales, campañas y consultoría de imagen. El
                  proceso es siempre a medida: research, construcción de
                  universo visual, dirección en set y, en algunos casos,
                  seguimiento y propuestas para el post.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  También soy fundadora y directora creativa de{" "}
                  <a
                    href="https://terrestrestudio.com.ar"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-foreground-muted"
                  >
                    Terrestre Studio
                  </a>
                  , un estudio de branding y dirección de marca. Este espacio
                  es distinto: es donde vive mi mirada personal sobre la
                  imagen y las narrativas que me conmueven y convocan.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="sm:col-span-4 sm:col-start-9">
            <Reveal delay={0.1}>
              <div className="relative w-full overflow-hidden bg-line">
                <Image
                  src={RETRATO}
                  alt=""
                  width={width}
                  height={height}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  quality={95}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="mt-32 sm:mt-40" />
    </div>
  );
}
