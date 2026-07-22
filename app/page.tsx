"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Header from "./components/Header";

const numeroWhatsApp = "5531999367386";
const editoraLink = "https://www.arteimpressaeditora.com.br/";
const chavePix = "31999367386";
const pixCopiaECola =
  "00020126360014br.gov.bcb.pix0114+55319993673865204000053039865802BR5925CARLOS HENRIQUE BITAR BAR6014BELO HORIZONTE62090505Livro6304C416";

function criarLinkWhatsApp(mensagem: string) {
  return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
}

const opcoes = [
  {
    titulo: "Livro + Correios",
    preco: "59,00",
    imagem: "/imagens/00.jpeg",
    descricao: "Livro físico enviado para seu endereço, com frete incluído.",
    detalhe: "Frete incluído",
    mensagem: `Olá! Quero comprar o livro 13.892 Palavras.

OPÇÃO ESCOLHIDA
Livro físico + envio pelos Correios
Valor unitário: R$ 59,00
Quantidade:
Valor total:

DADOS PARA O PEDIDO
Nome:
WhatsApp:
Endereço completo:
Cidade/UF:
CEP:

Faça o Pix do valor total e envie o comprovante para este WhatsApp.`,
  },
  {
    titulo: "Livro físico",
    preco: "52,00",
    imagem: "/imagens/4.jpeg",
    descricao: "Livro impresso com entrega ou retirada combinada.",
    detalhe: "Entrega combinada",
    mensagem: `Olá! Quero comprar o livro 13.892 Palavras.

OPÇÃO ESCOLHIDA
Livro físico
Valor unitário: R$ 52,00
Quantidade:
Valor total:

DADOS PARA O PEDIDO
Nome:
WhatsApp:

Faça o Pix do valor total e envie o comprovante para este WhatsApp.`,
  },
  {
    titulo: "Livro digital",
    preco: "40,00",
    imagem: "/imagens/1.jpeg",
    descricao: "Versão digital enviada após a confirmação do pagamento.",
    detalhe: "Envio online",
    mensagem: `Olá! Quero comprar o livro 13.892 Palavras.

OPÇÃO ESCOLHIDA
Livro digital
Valor unitário: R$ 40,00
Quantidade:
Valor total:

DADOS PARA O PEDIDO
Nome:
WhatsApp:
E-mail para receber o arquivo:

Faça o Pix do valor total e envie o comprovante para este WhatsApp.`,
  },
];

const whatsappContato = criarLinkWhatsApp(
  "Olá! Gostaria de tirar uma dúvida sobre o livro 13.892 Palavras."
);

function WhatsAppIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`h-5 w-5 ${dark ? "fill-[#102b22]" : "fill-white"}`}
      aria-hidden="true"
    >
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 15.98c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.75a12.9 12.9 0 0 0 6.34 1.62h.01c7.18 0 13.01-5.82 13.01-12.98C29.06 8.82 23.22 3 16.04 3Zm0 23.65h-.01a10.77 10.77 0 0 1-5.49-1.5l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.72 10.72 0 0 1-1.65-5.71c0-5.94 4.84-10.77 10.8-10.77 2.88 0 5.59 1.12 7.63 3.15a10.7 10.7 0 0 1 3.17 7.62c0 5.94-4.84 10.77-10.9 10.77Z" />
    </svg>
  );
}

function SectionTitle({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-xs font-black uppercase tracking-[0.32em] text-[#3f9254]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 rounded-full bg-[#3f9254] ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

function SmartImage({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt: string;
  className: string;
  fallback?: ReactNode;
}) {
  const [erro, setErro] = useState(false);

  if (erro) {
    return (
      <div className={`${className} flex items-center justify-center bg-[#f4eadc] p-6 text-center text-sm font-bold text-[#102b22]/70`}>
        {fallback ?? "Imagem indisponível"}
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setErro(true)} />;
}

export default function Home() {
  return (
    <main id="topo" className="min-h-screen overflow-x-hidden bg-[#fbf6ee] text-[#102b22]">
      <Header />

      <section className="pt-[72px]">
        <div className="relative hidden overflow-hidden md:block">
          <img
            src="/imagens/capa1.png"
            alt="13.892 Palavras para Entender o Parkinson no Cotidiano"
            className="w-full"
          />
          <a
            href="#comprar"
            className="absolute bottom-[7%] left-[9%] flex items-center gap-3 rounded-full bg-[#3f9254] px-8 py-4 text-sm font-black uppercase text-white shadow-[0_16px_40px_rgba(63,146,84,.38)] transition hover:-translate-y-1"
          >
            <WhatsAppIcon />
            Comprar pelo WhatsApp
          </a>
        </div>

        <div className="bg-gradient-to-b from-[#f8f0e5] to-[#fbf6ee] px-5 py-10 md:hidden">
          <div className="mx-auto flex max-w-sm flex-col items-center text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#3f9254]">
              Lançamento literário
            </p>
            <h1 className="mt-3 text-4xl font-black leading-[1.05]">
              13.892 Palavras
            </h1>
            <p className="mt-3 text-lg font-bold leading-6">
              para Entender o Parkinson no Cotidiano
            </p>
            <div className="mt-7 w-[245px] rounded-[28px] bg-white p-2 shadow-2xl">
              <img
                src="/imagens/00.jpeg"
                alt="Capa do livro"
                className="h-[330px] w-full rounded-[22px] object-cover"
              />
            </div>
            <p className="mt-6 text-[15px] leading-7 text-[#26362f]">
              Um olhar humano, sensível e verdadeiro sobre a vida além do diagnóstico.
            </p>
            <a
              href="#comprar"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#3f9254] px-6 py-4 text-sm font-black uppercase text-white shadow-lg"
            >
              <WhatsAppIcon />
              Ver opções de compra
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow="Conheça a obra" title="Sobre o livro" />
            <p className="mt-7 text-[15px] leading-8 text-[#26362f]">
              Um texto surpreendente e humano sobre a rotina de quem vive nessa condição.
              Longe de ser um manual médico, a obra reúne histórias curiosas, leves e
              inesperadas do cotidiano.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-[#26362f]">
              É um convite para enxergar a vida além do diagnóstico, celebrando a
              sensibilidade, o humor e a autenticidade.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["/imagens/livro.png", "Linguagem acessível"],
                ["/imagens/coracao.png", "Experiência humanizada"],
                ["/imagens/sms.png", "Para quem vive e convive"],
              ].map(([icone, texto]) => (
                <div
                  key={icone}
                  className="rounded-2xl border border-[#102b22]/10 bg-white p-5 text-center shadow-[0_12px_35px_rgba(16,43,34,.07)]"
                >
                  <img src={icone} alt="" className="mx-auto h-14 w-14 object-contain" />
                  <p className="mt-3 text-sm font-bold">{texto}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="galeria" className="min-w-0 scroll-mt-24">
            <SectionTitle eyebrow="Bastidores da obra" title="Da escrita à publicação" />
            <div className="mt-7 flex snap-x gap-4 overflow-x-auto pb-5">
              {[
                ["/imagens/1.jpeg", "Detalhes da capa"],
                ["/imagens/2.jpeg", "Acabamento do livro"],
                ["/imagens/3.jpeg", "Detalhes da lombada"],
                ["/imagens/4.jpeg", "Livro finalizado"],
                ["/imagens/foto 5.png", "Processo de revisão"],
                ["/imagens/foto 4.png", "Leitura e ajustes"],
                ["/imagens/foto 3.png", "Construção da capa"],
                ["/imagens/foto 2.png", "Bastidores da escrita"],
              ].map(([src, legenda]) => (
                <figure
                  key={src}
                  className="group relative w-[78vw] max-w-[285px] shrink-0 snap-center overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_18px_45px_rgba(16,43,34,.13)]"
                >
                  <img
                    src={src}
                    alt={legenda}
                    className="h-[350px] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-2 bottom-2 rounded-b-[18px] bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-16 text-sm font-bold text-white">
                    {legenda}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-1 text-center text-xs font-black uppercase tracking-[0.2em] text-[#3f9254]">
              ← Deslize para ver mais →
            </p>
          </div>
        </div>
      </section>

      <section id="trechos" className="scroll-mt-24 bg-[#eaf0e7] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle eyebrow="Palavras do autor" title="Trechos da obra" center />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Enquanto o mundo se move na pressa e no automático, por impulso e instinto eu me movo por estratégia.",
              "Não faço mais o que eu quero, faço o que eu consigo, então passei a querer só o que eu consigo.",
              "Porta giratória ou estreita, tapetes, pisos irregulares, plantas e até o chinelo podem virar uma armadilha.",
            ].map((trecho) => (
              <article
                key={trecho}
                className="relative flex min-h-[220px] items-center rounded-3xl border border-[#102b22]/10 bg-white p-8 text-center shadow-[0_18px_45px_rgba(16,43,34,.08)]"
              >
                <span className="absolute left-6 top-4 font-serif text-5xl text-[#3f9254]/25">“</span>
                <p className="font-serif text-lg italic leading-8 text-[#26362f]">{trecho}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="autor" className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 rounded-[32px] border border-[#102b22]/10 bg-white p-7 shadow-[0_24px_60px_rgba(16,43,34,.1)] md:grid-cols-[240px_1fr] md:p-10">
          <img
            src="/imagens/auto.jpeg"
            alt="Carlos Henrique Bitar Barbosa"
            className="mx-auto h-52 w-52 rounded-full border-[10px] border-[#eef3ec] object-cover object-top shadow-xl"
          />
          <div className="text-center md:text-left">
            <SectionTitle eyebrow="Sobre o autor" title="Carlos Henrique Bitar Barbosa" />
            <p className="mt-6 text-[15px] leading-8 text-[#26362f]">
              Carlos Henrique Bitar Barbosa recebeu o diagnóstico de Parkinson aos
              44 anos, 4 meses e 22 dias de idade, confirmando o que os sintomas já
              anunciavam havia algum tempo.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-[#26362f]">
              Em vez de aceitar o diagnóstico como ponto final, transformou os anos
              de convivência diária em um laboratório de superações, redescobertas
              e criatividade.
            </p>
          </div>
        </div>
      </section>

      <section id="comprar" className="scroll-mt-20 bg-[#0d2d23] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#8bd19a]">
              Escolha sua opção
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Como deseja adquirir o livro?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
              Escolha a opção, informe a quantidade e faça o Pix do valor total.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {opcoes.map((opcao, index) => (
              <article
                key={opcao.titulo}
                className="flex overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-[0_24px_55px_rgba(0,0,0,.22)] transition hover:-translate-y-2"
              >
                <div className="flex w-full flex-col">
                  <div className="h-[260px] p-2">
                    <img
                      src={opcao.imagem}
                      alt={opcao.titulo}
                      className="h-full w-full rounded-[22px] object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8bd19a]">
                      Opção {index + 1}
                    </p>
                    <h3 className="mt-2 text-2xl font-black">{opcao.titulo}</h3>
                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/70">
                      {opcao.descricao}
                    </p>
                    <div className="my-5 h-px bg-white/15" />
                    <p className="text-4xl font-black">R$ {opcao.preco}</p>
                    <p className="mt-2 text-sm font-bold">Quantidade: informe pelo WhatsApp</p>
                    <p className="mt-1 text-sm font-bold text-[#8bd19a]">
                      Faça o Pix do valor total
                    </p>
                    <p className="mt-1 text-xs text-white/60">{opcao.detalhe}</p>

                    <a
                      href={criarLinkWhatsApp(opcao.mensagem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-3 rounded-full bg-[#3f9254] px-5 py-4 text-sm font-black uppercase text-white shadow-lg transition hover:scale-[1.02]"
                    >
                      <WhatsAppIcon />
                      Escolher esta opção
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ea] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1000px]">
          <SectionTitle eyebrow="Pagamento por Pix" title="Dados para pagamento" center />
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-[#26362f]">
            Faça o Pix do valor total e envie o comprovante para o WhatsApp
            (31) 99936-7386.
          </p>

          <div className="mt-10 grid gap-7 md:grid-cols-[1.15fr_.85fr]">
            <article className="rounded-[28px] border border-[#102b22]/10 bg-white p-7 shadow-[0_22px_50px_rgba(16,43,34,.1)]">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#3f9254]">
                Chave Pix
              </p>
              <p className="mt-3 text-3xl font-black">{chavePix}</p>
              <p className="mt-1 text-sm text-[#26362f]">Tipo: celular</p>

              <p className="mt-7 text-sm font-black">Pix copia e cola</p>
              <div className="mt-2 break-all rounded-2xl bg-[#f7f0e6] p-4 text-xs leading-6 text-[#26362f]">
                {pixCopiaECola}
              </div>

              <a
                href={whatsappContato}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 rounded-full bg-[#3f9254] px-5 py-4 text-sm font-black uppercase text-white shadow-lg"
              >
                <WhatsAppIcon />
                Enviar comprovante
              </a>
            </article>

            <article className="flex flex-col items-center justify-center rounded-[28px] border border-[#102b22]/10 bg-white p-7 text-center shadow-[0_22px_50px_rgba(16,43,34,.1)]">
              <p className="text-sm font-black">QR Code para pagamento</p>
              <SmartImage
                src="/imagens/QRpagamento (1).png"
                alt="QR Code para pagamento via Pix"
                className="mt-5 aspect-square w-full max-w-[260px] rounded-[22px] border border-[#102b22]/10 object-contain p-3"
              />
              <p className="mt-4 text-xs leading-5 text-[#26362f]">
                Escaneie com o aplicativo do seu banco.
              </p>
            </article>
          </div>

          <article className="mx-auto mt-7 max-w-[650px] rounded-[28px] border border-[#102b22]/10 bg-white p-8 text-center shadow-[0_22px_50px_rgba(16,43,34,.10)]">
            <p className="text-xs font-black uppercase tracking-[0.30em] text-[#3f9254]">
              Siga no Instagram
            </p>
            <h3 className="mt-3 text-3xl font-black text-[#102b22]">
              @13892palavras
            </h3>
            <div className="mt-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] shadow-xl">
                <svg viewBox="0 0 24 24" className="h-12 w-12 fill-white" aria-hidden="true">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm1.2 1.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                </svg>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-7 text-[#26362f]">
              Acompanhe novidades, bastidores do livro e conteúdos exclusivos.
            </p>
            <a
              href="https://www.instagram.com/13892palavras?igsh=MW15amQwbzZpemNldw=="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-8 py-4 text-sm font-black uppercase text-white shadow-xl transition hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm1.2 1.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
              </svg>
              Abrir Instagram
            </a>
          </article>

        </div>
      </section>

      <footer id="contato" className="scroll-mt-24 bg-[#fbf6ee] px-5 py-10 md:px-10">
        <div className="mx-auto grid max-w-[1100px] items-center gap-7 text-center md:grid-cols-[1fr_1fr_1fr]">
          <a href={editoraLink} target="_blank" rel="noopener noreferrer">
            <img
              src="/imagens/logo editora (1).png"
              alt="Arte Impressa Editora"
              className="mx-auto h-20 w-auto rounded-2xl bg-white p-3 shadow-md"
            />
          </a>
          <a href={whatsappContato} target="_blank" rel="noopener noreferrer" className="font-bold">
            (31) 99936-7386
          </a>
          <a
            href="https://www.instagram.com/13892palavras?igsh=MW15amQwbzZpemNldw=="
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            @13892palavras
          </a>
        </div>
        <div className="mx-auto mt-8 max-w-[1100px] border-t border-[#102b22]/15 pt-5 text-center text-sm text-[#26362f]">
          © 2026 Carlos Henrique Bitar Barbosa · Todos os direitos reservados.
        </div>
      </footer>

      <a
        href={whatsappContato}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] shadow-2xl transition hover:scale-110"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}
