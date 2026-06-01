import Image from "next/image";
import Header from "./Header";
import PortfolioCarousel from "./PortfolioCarousel";

const tools = [
  {
    title: "Frameworks e Bibliotecas",
    body: "Utilizamos bibliotecas que permitem a melhor manutenibilidade, escalabilidade e performance.",
    image: "/assets/react.png",
  },
  {
    title: "Clean code",
    body: "Desenvolvemos softwares que sao faceis de ler, manter e escalar.",
    image: "/assets/web-dev.png",
  },
  {
    title: "Design",
    body: "Utilizamos ferramentas que permitem criar interfaces claras, consistentes e prontas para evoluir.",
    image: "/assets/figma.png",
  },
  {
    title: "Versionamento",
    body: "Organizamos entregas com controle de versao, colaboracao e historico claro de desenvolvimento.",
    image: "/assets/github.png",
  },
];

const services = [
  {
    title: "UX/UI",
    body: "Criamos interfaces pensadas para usuarios reais, com fluxos claros e uma experiencia visual memoravel.",
    visual: "ux",
    theme: "bg-[#31bdc6]",
  },
  {
    title: "Front-end",
    body: "Desenvolvemos sites modernos, responsivos e performaticos com React, Next.js e boas praticas.",
    visual: "code",
    theme: "bg-[#442df0]",
  },
  {
    title: "Design",
    body: "Criamos identidades digitais consistentes para transformar ideias em presenca visual forte.",
    visual: "cube",
    theme: "bg-[#a453f2]",
  },
];

const stats = [
  ["5+", "Years"],
  ["38", "Projects"],
  ["22", "Clients"],
];

const eyebrowClass =
  "mb-3 text-xs font-extrabold uppercase tracking-normal text-cyan-400";
const sectionClass = "px-[clamp(22px,7vw,96px)] py-[clamp(64px,9vw,128px)]";
const primaryButtonClass =
  "inline-flex min-w-32 justify-center rounded-md bg-gradient-to-br from-cyan-400 to-lime-300 px-5 py-3.5 text-sm font-extrabold text-slate-950";

export default function Home() {
  return (
    <main className="bg-[#f6f8fb] text-[#18191f]">
      <Header />

      <section
        id="home"
        className="relative flex min-h-[min(760px,92vh)] items-end overflow-hidden px-[clamp(22px,7vw,96px)] pb-18 pt-[clamp(64px,9vw,112px)] max-[900px]:min-h-[760px] max-[560px]:min-h-[720px] max-[560px]:px-4 max-[560px]:pb-12 max-[560px]:pt-16"
      >
        <Image
          className="object-cover"
          src="/assets/hero-programming.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09042b]/85 via-[#120650]/50 to-[#09042b]/30" />
        <div className="relative z-[1] max-w-[690px] text-white">
          <p className={eyebrowClass}>Creative development portfolio</p>
          <h1 className="mb-5 text-[clamp(2.45rem,6vw,5.6rem)] font-bold leading-[0.95]">
            Desenvolvimento Front-end
          </h1>
          <p className="max-w-[620px] text-[clamp(1rem,1.6vw,1.18rem)] leading-7 text-white/80">
            A Grafikwork é uma empresa especializada em desenvolvimento
            Front-end, com forte atuação na criação de interfaces modernas,
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3.5 max-[560px]:flex-col max-[560px]:items-stretch">
            <a className={primaryButtonClass} href="#work">
              Portfólio
            </a>
            <a
              className="inline-flex min-w-32 justify-center rounded-md border border-white/40 px-5 py-3.5 text-sm font-extrabold text-white max-[560px]:w-full"
              href="#contact"
            >
              Seu próximo projeto
            </a>
          </div>
        </div>
      </section>

      <section id="services" className={`${sectionClass} bg-[#f1f1f1]`}>
        <div className="mx-auto mb-[clamp(34px,6vw,54px)] max-w-[520px] text-center">
          <p className="mb-2 text-[0.66rem] font-black uppercase text-[#2b7cf6]">
            Nossos servicos
          </p>
          <h2 className="mb-0 text-[clamp(1.65rem,3.1vw,2.1rem)] font-black leading-[1.05] text-[#11152b]">
            Prezamos pelas melhores praticas de desenvolvimento.
          </h2>
        </div>

        <div className="mx-auto grid max-w-[900px] grid-cols-3 items-stretch gap-7 max-[820px]:grid-cols-1">
          {services.map((service) => (
            <article
              className={`${service.theme} flex min-h-[346px] flex-col items-center justify-between rounded-none px-7 py-9 text-center text-white shadow-[0_18px_46px_rgba(31,35,88,0.12)]`}
              key={service.title}
            >
              <div className="flex min-h-24 items-center justify-center">
                {service.visual === "ux" ? (
                  <Image
                    className="h-24 w-24 object-contain"
                    src="/assets/ux-ui.png"
                    alt=""
                    width={96}
                    height={96}
                  />
                ) : null}
                {service.visual === "code" ? (
                  <div className="grid gap-1.5">
                    <div className="mx-auto flex h-11 w-16 items-center justify-center rounded bg-white/12 text-xs font-black">
                      code
                    </div>
                    <div className="grid gap-1">
                      <span className="mx-auto h-1 w-11 rounded bg-cyan-300" />
                      <span className="mx-auto h-1 w-16 rounded bg-lime-300" />
                      <span className="mx-auto h-1 w-9 rounded bg-orange-300" />
                    </div>
                  </div>
                ) : null}
                {service.visual === "cube" ? (
                  <div className="relative h-20 w-20">
                    <span className="absolute left-5 top-2 h-9 w-9 rotate-45 bg-[#fff27a]" />
                    <span className="absolute left-2 top-7 h-9 w-9 rotate-45 bg-[#d9e1e8]" />
                    <span className="absolute left-8 top-7 h-9 w-9 rotate-45 bg-[#7d8fa8]" />
                  </div>
                ) : null}
              </div>
              <div>
                <h3 className="mb-4 text-lg font-black leading-none">
                  {service.title}
                </h3>
                <p className="mx-auto max-w-[210px] text-xs leading-6 text-white/70">
                  {service.body}
                </p>
              </div>
              <a
                className="text-xs font-black text-white transition hover:text-cyan-100"
                href="#contact"
              >
                Saiba mais
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className={`${sectionClass} grid grid-cols-[minmax(260px,420px)_minmax(0,1fr)] items-center gap-[clamp(34px,6vw,82px)] bg-white max-[900px]:grid-cols-1`}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg max-[900px]:max-w-[420px]">
          <Image
            className="object-cover"
            src="/assets/profile-large.jpg"
            alt="Grafikwork profile portrait"
            fill
            sizes="(max-width: 800px) 90vw, 420px"
          />
        </div>
        <div className="max-w-[660px]">
          <p className={eyebrowClass}>Sobre Grafikwork</p>
          <h2 className="mb-5 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none">
            Excelência em desenvolvimento
          </h2>
          <p className="leading-7 text-[#6f7280]">
            Empresa com mais de 25 anos de experiência em projetos de aplicações
            web e mobile, do planejamento, desenvolvimento, design UX/UI,
            front-end, testes e produção. Nosso objetivo desenvolver aplicações
            que agreguem valores para sua empresa, projeto, prtoduto.
          </p>
          <div className="mt-7 grid grid-cols-3 gap-4 border-t border-black/10 pt-6 max-[560px]:grid-cols-1">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong className="block text-[clamp(1.7rem,4vw,3rem)] font-bold">
                  {value}
                </strong>
                <span className="text-sm text-[#6f7280]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className={`${sectionClass} bg-[#f4f5f9]`}>
        <div className="mx-auto mb-10 max-w-[740px] text-center">
          <p className={eyebrowClass}>Selected work</p>
          <h2 className="mb-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-none">
            Portifólio
          </h2>
          <p className="mx-auto max-w-xl leading-7 text-[#6f7280]">
            Explore alguns trabalhos e materiais visuais. Use as setas para
            navegar e clique em uma imagem para ver detalhes maiores.
          </p>
        </div>
        <PortfolioCarousel />
      </section>
      <section id="tools" className={`${sectionClass} bg-white`}>
        <div className="mx-auto mb-[clamp(40px,7vw,72px)] max-w-[720px] text-center">
          <p className={eyebrowClass}>Nossos servicos</p>
          <h2 className="mb-5 text-[clamp(2.1rem,4.6vw,4rem)] font-bold leading-none">
            Ferramentas e tecnologias que utilizamos.
          </h2>
          <p className="mx-auto max-w-xl leading-7 text-[#6f7280]">
            Abaixo estao algumas tecnologias, bibliotecas e praticas que guiam a
            criacao de experiencias digitais modernas.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1040px] grid-cols-2 gap-x-[clamp(38px,8vw,104px)] gap-y-[clamp(28px,5vw,58px)] max-[900px]:grid-cols-1">
          {tools.map((tool) => (
            <article
              className="grid grid-cols-[96px_minmax(0,1fr)] items-center gap-6 max-[560px]:grid-cols-[76px_minmax(0,1fr)] max-[560px]:items-start"
              key={tool.title}
            >
              <div className="flex aspect-square items-center justify-center rounded-lg border border-black/10 bg-[#f3f7fb] p-4 max-[560px]:p-3.5">
                <Image
                  className="h-full w-full object-contain"
                  src={tool.image}
                  alt=""
                  width={92}
                  height={92}
                />
              </div>
              <div>
                <h3 className="mb-2 text-[clamp(1.18rem,2vw,1.55rem)] font-bold">
                  {tool.title}
                </h3>
                <p className="mb-0 leading-7 text-[#6f7280]">{tool.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        id="contact"
        className="flex items-center justify-between gap-3.5 bg-[#0d063f] px-[clamp(22px,7vw,96px)] py-14 text-white max-[560px]:flex-col max-[560px]:items-stretch"
      >
        <div>
          <p className={eyebrowClass}>Available for work</p>
          <h2 className="mb-0 max-w-[760px] text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-none">
            Let&apos;s build the next version of your web presence.
          </h2>
        </div>
        <a
          className={`${primaryButtonClass} max-[560px]:w-full`}
          href="mailto:hello@grafikwork.dev"
        >
          Contact Me
        </a>
      </section>

      <footer className="flex items-center justify-between gap-6 bg-[#07041c] px-[clamp(22px,7vw,96px)] py-6 text-white max-[560px]:items-start max-[560px]:flex-col">
        <Image
          className="h-auto"
          src="/assets/logo.png"
          alt="Grafikwork"
          width={160}
          height={48}
        />
        <div className="flex items-center gap-5">
          <a className="text-sm font-bold text-white/80" href="#home">
            Back to top
          </a>
          <a href="https://github.com" aria-label="GitHub">
            <Image src="/assets/github.png" alt="" width={22} height={22} />
          </a>
        </div>
      </footer>
    </main>
  );
}
