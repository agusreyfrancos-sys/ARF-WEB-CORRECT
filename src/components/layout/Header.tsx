"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/proyectos", label: "Trabajo" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const overlay = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        overlay ? "bg-transparent text-white" : "bg-background text-foreground"
      )}
    >
      <Container className="flex items-center justify-between py-5 sm:py-8">
        <Link
          href="/"
          className="whitespace-nowrap font-display text-base italic tracking-tight sm:text-xl"
        >
          Agustina Rey Francos
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.18em] sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors",
                overlay ? "hover:text-white/70" : "hover:text-foreground-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-[11px] uppercase tracking-[0.18em] sm:hidden"
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
      </Container>

      {menuOpen && (
        <nav className="flex flex-col border-t border-line bg-background px-6 py-2 text-foreground sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-line py-4 text-sm uppercase tracking-[0.18em] last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
