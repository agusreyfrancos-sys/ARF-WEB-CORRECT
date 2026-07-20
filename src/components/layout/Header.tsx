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

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const overlay = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        overlay ? "bg-transparent text-white" : "bg-background text-foreground"
      )}
    >
      <Container className="flex items-center justify-between py-6 sm:py-8">
        <Link
          href="/"
          className="font-display text-lg italic tracking-tight sm:text-xl"
        >
          Agustina Rey Francos
        </Link>
        <nav className="flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] sm:gap-8">
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
      </Container>
    </header>
  );
}
