"use client";

import { useState } from "react";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`${className} fill-current`}
      aria-hidden="true"
    >
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 15.98c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.75a12.9 12.9 0 0 0 6.34 1.62h.01c7.18 0 13.01-5.82 13.01-12.98C29.06 8.82 23.22 3 16.04 3Zm0 23.65h-.01a10.77 10.77 0 0 1-5.49-1.5l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.72 10.72 0 0 1-1.65-5.71c0-5.94 4.84-10.77 10.8-10.77 2.88 0 5.59 1.12 7.63 3.15a10.7 10.7 0 0 1 3.17 7.62c0 5.94-4.84 10.77-10.9 10.77Zm5.92-8.06c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.56-.74-.57h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

const links = [
  ["Sobre o livro", "#sobre"],
  ["Trechos", "#trechos"],
  ["O autor", "#autor"],
  ["Galeria", "#galeria"],
  ["Contato", "#contato"],
];

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d2d23]/95 text-white shadow-[0_10px_35px_rgba(0,0,0,.18)] backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1450px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a
          href="#topo"
          onClick={() => setAberto(false)}
          className="text-[13px] font-black uppercase tracking-[0.2em] sm:text-sm"
        >
          13.892 Palavras
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {links.map(([nome, href]) => (
            <a
              key={href}
              href={href}
              className="transition hover:text-[#9ae6aa]"
            >
              {nome}
            </a>
          ))}
        </nav>

        <a
          href="#comprar"
          className="hidden items-center gap-2 rounded-full bg-[#f6ebdd] px-6 py-3 text-xs font-black uppercase tracking-wide text-[#102b22] shadow-lg transition hover:-translate-y-0.5 hover:scale-[1.02] lg:flex"
        >
          <WhatsAppIcon className="h-4 w-4 text-[#102b22]" />
          Ver opções de compra
        </a>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#comprar"
            onClick={() => setAberto(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6ebdd] text-[#102b22] shadow-md sm:w-auto sm:gap-2 sm:px-4"
            aria-label="Ver opções de compra"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#102b22]" />
            <span className="hidden text-xs font-black uppercase sm:inline">
              Comprar
            </span>
          </a>

          <button
            type="button"
            onClick={() => setAberto((valor) => !valor)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
          >
            <span
              className={`h-0.5 w-5 bg-white transition ${
                aberto ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition ${
                aberto ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition ${
                aberto ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-[#0d2d23] transition-all duration-300 lg:hidden ${
          aberto
            ? "max-h-[520px] border-t border-white/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 pb-5 pt-2 sm:px-6">
          {links.map(([nome, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setAberto(false)}
              className="border-b border-white/10 px-2 py-4 text-sm font-bold"
            >
              {nome}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}