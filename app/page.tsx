import Header from "./components/Header";

const whatsappLink =
  "https://wa.me/5531999530770?text=Olá%20Carlos!%20Tenho%20interesse%20no%20livro%2013.892%20Palavras%20para%20Entender%20o%20Parkinson%20no%20Cotidiano.";

function WhatsAppIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`h-6 w-6 ${dark ? "fill-[#102b22]" : "fill-white"}`}
      aria-hidden="true"
    >
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 15.98c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.75a12.9 12.9 0 0 0 6.34 1.62h.01c7.18 0 13.01-5.82 13.01-12.98C29.06 8.82 23.22 3 16.04 3Zm0 23.65h-.01a10.77 10.77 0 0 1-5.49-1.5l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.72 10.72 0 0 1-1.65-5.71c0-5.94 4.84-10.77 10.8-10.77 2.88 0 5.59 1.12 7.63 3.15a10.7 10.7 0 0 1 3.17 7.62c0 5.94-4.84 10.77-10.9 10.77Zm5.92-8.06c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.56-.74-.57h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#102b22]/20 bg-white/55 text-xl text-[#102b22] shadow-[0_10px_22px_rgba(16,43,34,0.10)]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdfaf5] via-[#f8f2e8] to-[#f2eadf] text-[#102b22]">
      <Header />

      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_42%)]" />

        {/* WEB */}
        <div className="relative hidden w-full overflow-hidden rounded-b-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:block">
          <img
            src="/imagens/capa1.png"
            alt="13.892 Palavras para Entender o Parkinson no Cotidiano"
            className="w-full select-none"
            draggable={false}
          />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[9.6%] top-[87%] flex items-center gap-3 rounded-full bg-gradient-to-r from-[#46b95d] to-[#2f8b46] px-10 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white shadow-[0_12px_35px_rgba(63,146,84,.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_45px_rgba(63,146,84,.6)]"
          >
            <WhatsAppIcon />
            COMPRAR PELO WHATSAPP
          </a>
        </div>

        {/* CELULAR */}
        <div className="relative block overflow-hidden rounded-b-[32px] bg-[#f7f0e6] px-5 pb-10 pt-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] md:hidden">
          <div className="mx-auto flex max-w-[360px] flex-col items-center text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#3f9254]">
              Lançamento literário
            </p>

            <h1 className="mt-3 text-[34px] font-black leading-[1.05]">
              13.892 Palavras
            </h1>

            <p className="mt-2 text-[17px] font-bold leading-6">
              para Entender o Parkinson no Cotidiano
            </p>

            <div className="mt-6 w-[245px] overflow-hidden rounded-[28px] bg-white p-2 shadow-2xl">
              <img
                src="/imagens/00.jpeg"
                alt="Capa do livro"
                className="h-[330px] w-full rounded-[22px] object-cover"
              />
            </div>

            <p className="mt-6 text-[15px] leading-7 text-[#26362f]">
              Uma obra sensível, humana e acolhedora para quem vive ou convive
              com essa nova realidade.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#46b95d] to-[#2f8b46] px-6 py-4 text-[14px] font-black uppercase tracking-wide text-white shadow-[0_12px_35px_rgba(63,146,84,.45)]"
            >
              <WhatsAppIcon />
              Comprar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#fbf5eb] px-5 py-12 md:px-14 md:py-16">
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 items-start gap-10 md:grid-cols-[380px_1fr] md:gap-14">
          <div className="text-center md:text-left">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.35em] text-[#3f9254]">
              Livro independente
            </p>

            <h2 className="text-[28px] font-black uppercase tracking-wide md:text-[30px]">
              SOBRE O LIVRO
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#102b22] to-[#3f9254] md:mx-0" />

            <p className="mt-6 text-[15px] leading-7 text-[#26362f]">
              O objetivo do livro não é concentrar na compreensão, mas sim
              humanizar a informação. Aqui, o imaginário popular limita o
              Parkinson ao tremor das mãos — e estreitar o abismo que existe
              entre o “ouvi falar” com o “é assim” que acontece no cotidiano.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#26362f]">
              Lançada pela Arte Impressa Editora, a obra é acolhedora e direta
              para quem vive e convive com o Parkinson e também para todos
              aqueles que vivem ou viverão essa realidade.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 text-center sm:grid-cols-3 md:grid-cols-3">
              {[
                ["/imagens/livro.png", "Linguagem acessível", "e bem humorada"],
                ["/imagens/coracao.png", "Humaniza a experiência", "do Parkinson"],
                ["/imagens/sms.png", "Para quem vive", "e para quem convive"],
              ].map(([icon, t1, t2]) => (
                <div
                  key={icon}
                  className="group flex flex-col items-center rounded-2xl bg-white/40 p-4 shadow-sm md:bg-transparent md:p-0 md:shadow-none"
                >
                  <img
                    src={icon}
                    className="h-16 w-16 object-contain drop-shadow-[0_15px_18px_rgba(0,0,0,.25)] transition duration-300 group-hover:scale-110"
                    alt=""
                  />
                  <p className="mt-2 text-[12px] font-bold leading-4">
                    {t1}
                    <br />
                    {t2}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="galeria"
            className="grid scroll-mt-28 grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          >
            {["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"].map((img) => (
              <div
                key={img}
                className="group h-[240px] overflow-hidden rounded-2xl bg-white p-2 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:h-[320px]"
              >
                <img
                  src={`/imagens/${img}`}
                  alt="Imagem do livro"
                  className="h-full w-full rounded-xl object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="trecho"
        className="grid grid-cols-1 bg-[#e8eee5] md:grid-cols-2"
      >
        <div className="relative px-5 py-12 md:px-14 md:py-14">
          <p className="absolute left-5 top-6 text-[76px] leading-none text-[#102b22]/20 md:left-10 md:top-8 md:text-[96px]">
            “
          </p>
          <p className="mx-auto max-w-[590px] pt-10 text-center text-[16px] leading-8 text-[#26362f] md:text-left md:text-[18px]">
            Cada frase deste livro foi contada não apenas pelo que está escrito
            no papel, mas pelo significado que carrega. Elas representam a minha
            tentativa de traduzir o invisível para quem vive, especialmente,
            para quem convive comigo.
          </p>
          <p className="mt-6 text-center font-bold md:text-left">
            — Prefácio do autor
          </p>
          <p className="absolute bottom-3 right-6 text-[76px] leading-none text-[#102b22]/20 md:bottom-8 md:right-14 md:text-[96px]">
            ”
          </p>
        </div>

        <div className="px-5 pb-12 md:px-14 md:py-14">
          <div className="rounded-2xl border border-[#102b22]/25 bg-white/25 p-6 text-center shadow-[0_18px_45px_rgba(16,43,34,0.08)] backdrop-blur md:p-8">
            <h3 className="text-xl font-black uppercase">PREFÁCIO</h3>
            <p className="mt-1 text-sm">A Contagem da Vida em Palavras</p>

            <p className="mt-5 text-[15px] leading-7 text-[#26362f]">
              Muitos dirão que o Parkinson é feito de silêncio, de movimentos
              que não acontecem ou de palavras que se perdem no caminho entre o
              pensamento e a fala. Mas, ao longo de 15 anos, vivendo cada dia sob
              o compasso dessa nova realidade, eu descobri o contrário.
            </p>

            <p className="mt-6 text-sm font-black uppercase tracking-wide text-[#2f8b46]">
              Leia mais do prefácio →
            </p>
          </div>
        </div>
      </section>

      <section
        id="autor"
        className="grid grid-cols-1 items-center gap-7 bg-[#fbf5eb] px-5 py-12 text-center md:grid-cols-[210px_1fr_1fr] md:gap-10 md:px-14 md:text-left"
      >
        <img
          src="/imagens/auto.jpeg"
          alt="Carlos Henrique"
          className="mx-auto h-40 w-40 rounded-full border-[8px] border-white object-cover shadow-[0_25px_45px_rgba(0,0,0,.28)] md:h-44 md:w-44"
        />

        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#3f9254]">
            Sobre o autor
          </p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">
            Carlos Henrique Bitar Barbosa
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#26362f]">
            Escritor, pai e paciente de Parkinson há mais de 15 anos.
            Transformou sua jornada em palavras para ajudar outras pessoas a
            compreenderem essa nova realidade.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#102b22]/20 bg-[#fffaf1] p-6 shadow-[0_14px_32px_rgba(16,43,34,0.10)] md:flex-row md:items-center md:gap-5 md:p-7">
          <img
            src="/imagens/livro.png"
            className="h-16 w-16 object-contain drop-shadow-[0_12px_16px_rgba(0,0,0,0.20)]"
            alt=""
          />
          <p className="text-[15px] leading-7 text-[#26362f] md:text-[16px]">
            Este não é um livro sobre o que eu perdi. É uma obra detalhada de
            tudo o que eu precisei escrever para continuar sendo quem eu sou.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0d241d] via-[#102b22] to-[#16362c] px-5 py-7 text-white md:px-10 md:py-6">
        <div className="mx-auto flex max-w-[1150px] flex-col items-center justify-between gap-6 text-center md:flex-row md:gap-8 md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-5">
            <img
              src="/imagens/livro.png"
              className="h-14 w-14 object-contain brightness-0 invert"
              alt=""
            />
            <div>
              <h2 className="text-2xl font-black">
                Adquira seu exemplar diretamente com o autor
              </h2>
              <p className="mt-1 text-sm text-white/85">
                É rápido, seguro e você ainda apoia um projeto independente!
              </p>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#46b95d] to-[#2f8b46] px-8 py-4 font-black uppercase text-white shadow-[0_12px_30px_rgba(63,146,84,0.35)] transition hover:-translate-y-1 hover:scale-105 md:w-auto md:py-3"
          >
            <WhatsAppIcon />
            Comprar pelo WhatsApp
          </a>
        </div>
      </section>

      <footer id="contato" className="bg-[#fbf5eb] px-5 py-8 md:px-14">
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 items-center gap-8 text-center md:grid-cols-[240px_1fr] md:text-left">
          <div>
            <h3 className="text-xl font-black uppercase">FALE COMIGO</h3>
            <p className="mt-2 text-sm text-[#26362f]">
              Tire dúvidas ou faça seu pedido por qualquer um dos canais.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <p className="flex items-center justify-center gap-3 font-semibold md:justify-start">
              <ContactIcon>☎</ContactIcon>
              <span>(31) 99936-7386</span>
            </p>

            <p className="flex items-center justify-center gap-3 break-all font-semibold md:justify-start">
              <ContactIcon>✉</ContactIcon>
              <span>telepksbrasil@gmail.com</span>
            </p>

            <p className="flex items-center justify-center gap-3 font-semibold md:justify-start">
              <ContactIcon>@</ContactIcon>
              <span>@teleparkinson</span>
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[1420px] flex-col items-center justify-between gap-2 border-t border-[#102b22]/15 pt-5 text-center text-sm text-[#26362f] md:flex-row md:text-left">
          <p>© 2024 Carlos Henrique Bitar Barbosa · Todos os direitos reservados.</p>
          <p>Arte Impressa Editora</p>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] shadow-2xl transition hover:scale-110 md:bottom-6 md:right-6"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}
