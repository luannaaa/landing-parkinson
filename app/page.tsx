import type { ReactNode } from "react";
import Header from "./components/Header";

const numeroWhatsApp = "553199367386";
const editoraLink = "https://www.arteimpressaeditora.com.br/";

function criarLinkWhatsApp(mensagem: string) {
  return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
}

const whatsappLivroCorreio = criarLinkWhatsApp(
  `Olá! Quero comprar o livro 13.892 Palavras.

OPÇÃO ESCOLHIDA
Livro físico + envio pelos Correios
Valor: R$ 59,00

DADOS PARA O PEDIDO
Nome:
WhatsApp:
Endereço completo:
Cidade/UF:
CEP:

Após o pagamento, enviarei o comprovante por aqui.`
);

const whatsappLivroFisico = criarLinkWhatsApp(
  `Olá! Quero comprar o livro 13.892 Palavras.

OPÇÃO ESCOLHIDA
Livro físico
Valor: R$ 52,00

DADOS PARA O PEDIDO
Nome:
WhatsApp:

Após o pagamento, enviarei o comprovante por aqui.`
);

const whatsappLivroDigital = criarLinkWhatsApp(
  `Olá! Quero comprar o livro 13.892 Palavras.

OPÇÃO ESCOLHIDA
Livro digital
Valor: R$ 40,00

DADOS PARA O PEDIDO
Nome:
WhatsApp:
E-mail para receber o arquivo:

Após o pagamento, enviarei o comprovante por aqui.`
);

const whatsappContato = criarLinkWhatsApp(
  "Olá! Gostaria de tirar uma dúvida sobre o livro 13.892 Palavras."
);

function WhatsAppIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={`h-6 w-6 ${dark ? "fill-[#102b22]" : "fill-white"}`} aria-hidden="true">
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 15.98c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.75a12.9 12.9 0 0 0 6.34 1.62h.01c7.18 0 13.01-5.82 13.01-12.98C29.06 8.82 23.22 3 16.04 3Zm0 23.65h-.01a10.77 10.77 0 0 1-5.49-1.5l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.72 10.72 0 0 1-1.65-5.71c0-5.94 4.84-10.77 10.8-10.77 2.88 0 5.59 1.12 7.63 3.15a10.7 10.7 0 0 1 3.17 7.62c0 5.94-4.84 10.77-10.9 10.77Zm5.92-8.06c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.56-.74-.57h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function ContactIcon({ children }: { children: ReactNode }) {
  return <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#102b22]/20 bg-white/55 text-xl text-[#102b22] shadow-[0_10px_22px_rgba(16,43,34,0.10)]">{children}</span>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdfaf5] via-[#f8f2e8] to-[#f2eadf] text-[#102b22]">
      <Header />

      <section className="relative overflow-hidden pt-20">
        <div className="relative hidden w-full overflow-hidden rounded-b-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:block">
          <img src="/imagens/capa1.png" alt="13.892 Palavras para Entender o Parkinson no Cotidiano" className="w-full select-none" draggable={false} />
          <a href="#comprar" className="absolute left-[9.6%] top-[87%] flex items-center gap-3 rounded-full bg-gradient-to-r from-[#46b95d] to-[#2f8b46] px-10 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white shadow-[0_12px_35px_rgba(63,146,84,.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <WhatsAppIcon />Comprar pelo WhatsApp
          </a>
        </div>

        <div className="relative block overflow-hidden rounded-b-[32px] bg-[#f7f0e6] px-5 pb-10 pt-8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] md:hidden">
          <div className="mx-auto flex max-w-[360px] flex-col items-center text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#3f9254]">Lançamento literário</p>
            <h1 className="mt-3 text-[34px] font-black leading-[1.05]">13.892 Palavras</h1>
            <p className="mt-2 text-[17px] font-bold leading-6">para Entender o Parkinson no Cotidiano</p>
            <div className="mt-6 w-[245px] overflow-hidden rounded-[28px] bg-white p-2 shadow-2xl">
              <img src="/imagens/00.jpeg" alt="Capa do livro" className="h-[330px] w-full rounded-[22px] object-cover" />
            </div>
            <p className="mt-6 text-[15px] leading-7 text-[#26362f]">Um texto surpreendente e humano sobre a rotina de quem vive nessa condição.</p>
            <a href="#comprar" className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#46b95d] to-[#2f8b46] px-6 py-4 text-[14px] font-black uppercase tracking-wide text-white shadow-[0_12px_35px_rgba(63,146,84,.45)]">
              <WhatsAppIcon />Comprar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#fbf5eb] px-5 py-12 md:px-14 md:py-14">
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 items-start gap-10 md:grid-cols-[390px_1fr] md:gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-[28px] font-black uppercase tracking-wide md:text-[30px]">Sobre o livro</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#102b22] to-[#3f9254] md:mx-0" />
            <p className="mt-6 text-[15px] leading-7 text-[#26362f]">Um texto surpreendente e humano sobre a rotina de quem vive nessa condição. Longe de ser um manual médico ou um relato focado em sintomas, esta obra pulsa através de histórias curiosas, leves e inesperadas do dia a dia. O autor compartilha bastidores reais que a maioria das pessoas nem imagina que acontecem, transformando a jornada em narrativa viva.</p>
            <p className="mt-5 text-[15px] leading-7 text-[#26362f]">É um convite para enxergar a vida além do diagnóstico, celebrando a sensibilidade, o humor e muita autenticidade. Uma leitura essencial para descobrir que, mesmo com desafios, a vida transborda momentos extraordinários e profundamente inspiradores.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              {[["/imagens/livro.png","Linguagem acessível","e bem-humorada"],["/imagens/coracao.png","Humaniza a experiência","do Parkinson"],["/imagens/sms.png","Para quem vive","e para quem convive"]].map(([icon,t1,t2]) => (
                <div key={icon} className="group flex flex-col items-center rounded-2xl bg-white/40 p-4 shadow-sm md:bg-transparent md:p-0 md:shadow-none">
                  <img src={icon} className="h-16 w-16 object-contain drop-shadow-[0_15px_18px_rgba(0,0,0,.25)] transition duration-300 group-hover:scale-110" alt="" />
                  <p className="mt-2 text-[12px] font-bold leading-4">{t1}<br />{t2}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="galeria" className="min-w-0 scroll-mt-28">
            <div className="mb-6 text-center md:text-left">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#3f9254]">
                Bastidores da obra
              </p>

              <h3 className="mt-2 text-2xl font-black md:text-3xl">
                Da escrita à publicação
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#26362f]/80">
                Arraste para o lado e conheça os registros do processo de criação,
                revisão e construção do livro.
              </p>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 hidden w-12 bg-gradient-to-r from-[#fbf5eb] to-transparent md:block" />
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 hidden w-12 bg-gradient-to-l from-[#fbf5eb] to-transparent md:block" />

              <div
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-color:#3f9254_transparent] [scrollbar-width:thin]"
                aria-label="Galeria de fotos do livro"
              >
                {[
                  {
                    src: "/imagens/1.jpeg",
                    alt: "Detalhe da capa do livro",
                    legenda: "Detalhes da capa",
                  },
                  {
                    src: "/imagens/2.jpeg",
                    alt: "Livro sendo manuseado",
                    legenda: "Acabamento do livro",
                  },
                  {
                    src: "/imagens/3.jpeg",
                    alt: "Lombada do livro",
                    legenda: "Detalhes da lombada",
                  },
                  {
                    src: "/imagens/4.jpeg",
                    alt: "Livro sobre a mesa",
                    legenda: "Livro finalizado",
                  },
                  {
                    src: "/imagens/foto 5.png",
                    alt: "Páginas revisadas e organizadas",
                    legenda: "Processo de revisão",
                  },
                  {
                    src: "/imagens/foto 4.png",
                    alt: "Livro aberto durante a revisão",
                    legenda: "Leitura e ajustes",
                  },
                  {
                    src: "/imagens/foto 3.png",
                    alt: "Caça-palavras utilizado no projeto gráfico",
                    legenda: "Construção da capa",
                  },
                  {
                    src: "/imagens/foto 2.png",
                    alt: "Estudo manuscrito da expressão no cotidiano",
                    legenda: "Bastidores da escrita",
                  },
                ].map((foto) => (
                  <figure
                    key={foto.src}
                    className="group relative w-[78vw] max-w-[310px] shrink-0 snap-center overflow-hidden rounded-[24px] border border-[#102b22]/10 bg-white p-2 shadow-[0_18px_40px_rgba(16,43,34,0.14)] transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:w-[290px] md:w-[300px]"
                  >
                    <div className="h-[330px] overflow-hidden rounded-[18px] bg-[#eee7dc] sm:h-[360px] md:h-[390px]">
                      <img
                        src={foto.src}
                        alt={foto.alt}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <figcaption className="absolute inset-x-2 bottom-2 rounded-b-[18px] bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-16 text-left text-sm font-bold text-white">
                      {foto.legenda}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="mt-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#3f9254]">
                <span aria-hidden="true">←</span>
                Deslize para ver mais
                <span aria-hidden="true">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trecho" className="bg-[#e8eee5] px-5 py-12 md:px-14 md:py-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-3">
          {["Enquanto o mundo se move na pressa e no automático, por impulso e instinto eu me movo por estratégia.","Não faço mais o que eu quero, faço o que eu consigo, então passei a querer só o que eu consigo.","Porta giratória ou estreita, tapetes, pisos irregulares, plantas, o cachorro que tira uma soneca bem no seu caminho, até o chinelo, que, se não for adequado, vira uma armadilha."].map((trecho) => (
            <article key={trecho} className="flex min-h-[210px] items-center rounded-2xl border border-[#102b22]/15 bg-white/30 p-7 text-center shadow-[0_14px_30px_rgba(16,43,34,0.08)]">
              <p className="font-serif text-[18px] italic leading-8 text-[#26362f]">{trecho}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="autor" className="grid grid-cols-1 items-center gap-7 bg-[#fbf5eb] px-5 py-12 text-center md:grid-cols-[210px_1fr] md:gap-10 md:px-14 md:text-left">
        <img src="/imagens/auto.jpeg" alt="Carlos Henrique" className="mx-auto h-40 w-40 rounded-full border-[8px] border-white object-cover object-top shadow-[0_25px_45px_rgba(0,0,0,.28)] md:h-44 md:w-44" />
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#3f9254]">Sobre o autor</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">Carlos Henrique Bitar Barbosa</h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-7 text-[#26362f]">Carlos Henrique Bitar Barbosa, um observador atento da vida que, aos 44 anos, 4 meses e 22 dias de idade, recebeu o diagnóstico de Parkinson, confirmando o que os sintomas já anunciavam há tempos.</p>
          <p className="mt-3 max-w-4xl text-[15px] leading-7 text-[#26362f]">Longe de aceitar o diagnóstico como um ponto final, transformou os últimos 15 anos de convivência diária – 24 horas por dia – em um laboratório de superações, redescobertas e criatividade.</p>
        </div>
      </section>

      <section
        id="comprar"
        className="scroll-mt-20 bg-gradient-to-r from-[#0d241d] via-[#102b22] to-[#16362c] px-5 py-14 text-white md:px-10 md:py-16"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#8bd19a]">
              Escolha sua opção
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Como deseja adquirir o livro?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/75">
              Escolha uma opção. O WhatsApp abrirá com o produto, o valor e os
              campos necessários já organizados.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#78d78b] bg-white/15 shadow-2xl ring-2 ring-[#57c66d]/40 transition hover:-translate-y-2">
              <span className="absolute right-4 top-4 z-10 rounded-full bg-[#78d78b] px-3 py-1 text-[11px] font-black uppercase text-[#102b22] shadow-lg">
                Mais completo
              </span>

              <div className="h-[250px] overflow-hidden bg-white/10 p-2 md:h-[270px]">
                <img
                  src="/imagens/00.jpeg"
                  alt="Livro físico com envio pelos Correios"
                  className="h-full w-full rounded-2xl object-cover object-center transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8bd19a]">
                  Opção 1
                </p>
                <h3 className="mt-2 text-2xl font-black">Livro + Correios</h3>
                <p className="mt-3 min-h-[52px] text-sm leading-6 text-white/70">
                  Livro físico enviado para seu endereço pelos Correios.
                </p>
                <div className="my-6 h-px bg-white/15" />
                <p className="text-4xl font-black">R$ 59,00</p>
                <p className="mt-1 text-sm font-semibold text-[#8bd19a]">
                  Frete incluído
                </p>

                <a
                  href={whatsappLivroCorreio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#46b95d] to-[#2f8b46] px-5 py-4 text-sm font-black uppercase text-white shadow-[0_12px_30px_rgba(63,146,84,0.35)] transition hover:scale-[1.03]"
                >
                  <WhatsAppIcon />
                  Escolher esta opção
                </a>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl transition hover:-translate-y-2">
              <div className="h-[250px] overflow-hidden bg-white/10 p-2 md:h-[270px]">
                <img
                  src="/imagens/4.jpeg"
                  alt="Livro físico"
                  className="h-full w-full rounded-2xl object-cover object-center transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8bd19a]">
                  Opção 2
                </p>
                <h3 className="mt-2 text-2xl font-black">Livro físico</h3>
                <p className="mt-3 min-h-[52px] text-sm leading-6 text-white/70">
                  Livro impresso sem envio pelos Correios.
                </p>
                <div className="my-6 h-px bg-white/15" />
                <p className="text-4xl font-black">R$ 52,00</p>
                <p className="mt-1 text-sm font-semibold text-[#8bd19a]">
                  Entrega combinada
                </p>

                <a
                  href={whatsappLivroFisico}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#46b95d] to-[#2f8b46] px-5 py-4 text-sm font-black uppercase text-white shadow-[0_12px_30px_rgba(63,146,84,0.35)] transition hover:scale-[1.03]"
                >
                  <WhatsAppIcon />
                  Escolher esta opção
                </a>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl transition hover:-translate-y-2">
              <div className="h-[250px] overflow-hidden bg-white/10 p-2 md:h-[270px]">
                <img
                  src="/imagens/1.jpeg"
                  alt="Livro digital"
                  className="h-full w-full rounded-2xl object-cover object-center transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8bd19a]">
                  Opção 3
                </p>
                <h3 className="mt-2 text-2xl font-black">Livro digital</h3>
                <p className="mt-3 min-h-[52px] text-sm leading-6 text-white/70">
                  Versão digital enviada após a confirmação do pagamento.
                </p>
                <div className="my-6 h-px bg-white/15" />
                <p className="text-4xl font-black">R$ 40,00</p>
                <p className="mt-1 text-sm font-semibold text-[#8bd19a]">
                  Envio online
                </p>

                <a
                  href={whatsappLivroDigital}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#46b95d] to-[#2f8b46] px-5 py-4 text-sm font-black uppercase text-white shadow-[0_12px_30px_rgba(63,146,84,0.35)] transition hover:scale-[1.03]"
                >
                  <WhatsAppIcon />
                  Escolher esta opção
                </a>
              </div>
            </article>
          </div>

          <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-white/15 bg-black/10 px-5 py-4 text-center text-sm leading-6 text-white/75">
            O pagamento é feito por PIX. Depois, envie o comprovante no WhatsApp.
            Para pedidos pelos Correios, o protocolo de rastreamento será enviado
            após a postagem.
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-[#fbf5eb] px-5 py-8 md:px-14">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-8 text-center md:grid-cols-[1fr_1fr_auto] md:text-left">
          <a href={editoraLink} target="_blank" rel="noopener noreferrer" className="mx-auto flex items-center justify-center md:mx-0 md:justify-start" aria-label="Acessar o site da Arte Impressa Editora">
            <span className="inline-flex rounded-2xl bg-[#102b22] px-5 py-3 shadow-lg">
              <img
                src="/imagens/logo.png"
                alt="Arte Impressa Editora"
                className="h-14 w-auto object-contain"
              />
            </span>
          </a>
          <a href={whatsappContato} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 font-semibold md:justify-start">
            <ContactIcon>☎</ContactIcon><span>(31) 99936-7386</span>
          </a>
          <a href="https://www.instagram.com/13892palavras/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 font-semibold md:justify-start">
            <ContactIcon>@</ContactIcon><span>@13892palavras</span>
          </a>
        </div>
        <div className="mx-auto mt-8 flex max-w-[1100px] flex-col items-center justify-between gap-2 border-t border-[#102b22]/15 pt-5 text-center text-sm text-[#26362f] md:flex-row md:text-left">
          <p>© 2026 Carlos Henrique Bitar Barbosa · Todos os direitos reservados.</p>
          <a href={editoraLink} target="_blank" rel="noopener noreferrer" className="font-bold transition hover:text-[#3f9254]">Arte Impressa Editora</a>
        </div>
      </footer>

      <a href={whatsappContato} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] shadow-2xl transition hover:scale-110 md:bottom-6 md:right-6">
        <WhatsAppIcon />
      </a>
    </main>
  );
}
