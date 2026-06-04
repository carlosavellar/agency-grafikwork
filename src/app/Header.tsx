"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "./assetPath";

const navLinks = [
  ["Servicos", "#services"],
  ["Ferramentas", "#tools"],
  ["Sobre", "#about"],
  ["Work", "#work"],
  ["Contato", "#contact"],
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-10 bg-[#0d063f]/95 px-[clamp(18px,5vw,72px)] py-4 max-[560px]:px-4">
      <div className="flex items-center justify-between gap-8">
        <a className="shrink-0" href="#home" aria-label="Grafikwork home">
          <Image
            className="h-auto w-[clamp(138px,18vw,192px)]"
            src={assetPath("/assets/logo.png")}
            alt="Grafikwork"
            width={192}
            height={58}
            priority
          />
        </a>

        <button
          className="hidden h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-white/25 text-white transition hover:border-cyan-300 hover:text-cyan-300 max-[900px]:flex"
          type="button"
          aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="h-0.5 w-5 rounded bg-current" />
          <span className="h-0.5 w-5 rounded bg-current" />
          <span className="h-0.5 w-5 rounded bg-current" />
        </button>

        <nav
          className="flex flex-wrap items-center justify-end gap-[clamp(14px,3vw,34px)] text-sm font-bold text-white max-[900px]:hidden"
          aria-label="Main navigation"
        >
          {navLinks.map(([label, href]) => (
            <a
              className="opacity-80 transition hover:opacity-100"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <nav
        id="main-navigation"
        className={`grid overflow-hidden text-sm font-bold text-white transition-[grid-template-rows,opacity,padding] duration-300 max-[900px]:grid ${
          isMenuOpen
            ? "grid-rows-[1fr] pt-4 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        } min-[901px]:hidden`}
        aria-label="Mobile navigation"
      >
        <div className="flex min-h-0 flex-col gap-1 overflow-hidden border-t border-white/10 pt-3">
          {navLinks.map(([label, href]) => (
            <a
              className="rounded-md px-2 py-3 opacity-80 transition hover:bg-white/10 hover:opacity-100"
              href={href}
              key={href}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
