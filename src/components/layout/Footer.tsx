import { Container } from "@/components/ui/Container";

// Instagram es un placeholder — reemplazar por el usuario real en la pasada final.
export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-8 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Agustina Rey Francos</span>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          Instagram
        </a>
      </Container>
    </footer>
  );
}
