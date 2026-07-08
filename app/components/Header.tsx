import Link from "next/link";

const whatsappLink =
  "https://wa.me/5531999530770?text=Olá%20Carlos!%20Tenho%20interesse%20no%20livro%2013.892%20Palavras%20para%20Entender%20o%20Parkinson%20no%20Cotidiano.";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-4 w-4 fill-[#102b22]">
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 15.98c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.75a12.9 12.9 0 0 0 6.34 1.62h.01c7.18 0 13.01-5.82 13.01-12.98C29.06 8.82 23.22 3 16.04 3Zm0 23.65h-.01a10.77 10.77 0 0 1-5.49-1.5l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.72 10.72 0 0 1-1.65-5.71c0-5.94 4.84-10.77 10.8-10.77 2.88 0 5.59 1.12 7.63 3.15a10.7 10.7 0 0 1 3.17 7.62c0 5.94-4.84 10.77-10.9 10.77Zm5.92-8.06c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.56-.74-.57h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#102b22] text-white shadow-md">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-4 md:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <img
            src="/imagens/logo.png"
            alt="Arte Impressa Editora"
            className="h-[50px] w-auto object-contain md:h-[62px]"
          />

          <div className="leading-[1]">
            <p className="text-[12px] font-black tracking-[0.18em] text-white md:text-[15px] md:tracking-[0.22em]">
              ARTE IMPRESSA
            </p>
            <p className="mt-1 text-[10px] font-bold tracking-[0.28em] text-white md:text-[13px] md:tracking-[0.35em]">
              EDITORA
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-semibold md:flex">
          <a href="#sobre" className="transition hover:text-[#d7c7ac]">
            Sobre o livro
          </a>
          <a href="#trecho" className="transition hover:text-[#d7c7ac]">
            Trecho
          </a>
          <a href="#autor" className="transition hover:text-[#d7c7ac]">
            O autor
          </a>
          <a href="#galeria" className="transition hover:text-[#d7c7ac]">
            Galeria
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#d7c7ac]"
          >
            Contato
          </a>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#f4eadc] px-7 py-3 text-sm font-bold uppercase text-[#102b22] transition hover:scale-105 md:flex"
        >
          <WhatsAppIcon />
          Comprar pelo WhatsApp
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4eadc] md:hidden"
          aria-label="Comprar pelo WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </header>
  );
}
