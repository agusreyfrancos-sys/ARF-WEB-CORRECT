import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Contacto() {
  return (
    <section id="contacto" className="border-t border-line py-24 sm:py-32">
      <Container className="flex flex-col items-start gap-8">
        <Reveal>
          <p className="max-w-md font-display text-2xl italic leading-snug sm:text-3xl">
            Cada imagen construye una forma de ser vista.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href="mailto:agusreyfrancos@gmail.com"
            className="font-display text-xl italic underline-offset-4 hover:underline sm:text-2xl"
          >
            agusreyfrancos@gmail.com
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
