"use client";

import { useState } from "react";

const eyebrowClass =
  "mb-3 text-xs font-extrabold uppercase tracking-wider text-cyan-400";

const primaryButtonClass =
  "inline-flex min-w-32 justify-center rounded-md bg-gradient-to-br from-cyan-400 to-lime-300 px-5 py-3.5 text-sm font-extrabold text-slate-950";

const inputClass =
  "min-h-12 w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-cyan-300 focus:bg-white/15";

const labelClass = "grid gap-2 text-xs font-extrabold uppercase tracking-wider";

const projectTypes = [
  "Landing Page",
  "Site Institucional",
  "E-commerce",
  "Sistema Web",
  "Aplicativo Mobile",
  "Outro",
];

export default function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="contact"
      className="bg-[#0d063f] px-[clamp(22px,7vw,96px)] py-14 text-white"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between gap-3.5 max-[560px]:flex-col max-[560px]:items-stretch">
          <div>
            <p className={eyebrowClass}>Lets play</p>
            <h2 className="mb-0 max-w-[760px] text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-none">
              Vamos criar a sua poxima versão de3 presença na web
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 max-[560px]:flex-col">
            <button
              className={`${primaryButtonClass} max-[560px]:w-full`}
              type="button"
              aria-expanded={isFormOpen}
              aria-controls="contact-form"
              onClick={() => setIsFormOpen((current) => !current)}
            >
              Contato
            </button>
            <a
              className="inline-flex min-w-32 justify-center rounded-md border border-white/40 px-5 py-3.5 text-sm font-extrabold text-white transition hover:border-lime-300 hover:text-lime-200 max-[560px]:w-full"
              href="https://wa.me/5511976610711"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity,transform,margin] duration-500 ease-out ${
            isFormOpen
              ? "mt-10 grid-rows-[1fr] opacity-100 translate-y-0"
              : "mt-0 grid-rows-[0fr] opacity-0 -translate-y-2"
          }`}
        >
          <div className="overflow-hidden">
            <form
              id="contact-form"
              className="grid grid-cols-2 gap-5 border-t border-white/15 pt-8 max-[760px]:grid-cols-1"
            >
              <label className={labelClass}>
                Nome
                <input className={inputClass} name="name" type="text" />
              </label>
              <label className={labelClass}>
                E-mail
                <input className={inputClass} name="email" type="email" />
              </label>
              <label className={labelClass}>
                WhatsApp
                <input className={inputClass} name="whatsapp" type="tel" />
              </label>
              <label className={labelClass}>
                Empresa (opcional)
                <input className={inputClass} name="company" type="text" />
              </label>
              <label className={labelClass}>
                Tipo de projeto
                <select className={inputClass} name="projectType" defaultValue="">
                  <option value="" disabled>
                    Selecione
                  </option>
                  {projectTypes.map((projectType) => (
                    <option className="text-slate-950" key={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                Prazo desejado
                <input className={inputClass} name="deadline" type="text" />
              </label>
              <label className={`${labelClass} col-span-2 max-[760px]:col-span-1`}>
                Descrição do projeto
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="projectDescription"
                />
              </label>
              <label className={labelClass}>
                Faixa de orçamento
                <input className={inputClass} name="budgetRange" type="text" />
              </label>
              <label className={labelClass}>
                Upload de briefing/anexo
                <input
                  className="w-full rounded-md border border-dashed border-white/25 bg-white/10 px-4 py-3 text-sm text-white file:mr-4 file:rounded-md file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:text-sm file:font-extrabold file:text-slate-950"
                  name="attachment"
                  type="file"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
