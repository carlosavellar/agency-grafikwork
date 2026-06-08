"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const firebaseDatabaseUrl =
  "https://grafikwork-71064-default-rtdb.firebaseio.com";
const firebaseEndpoint = `${firebaseDatabaseUrl}/requests.json`;

type SubmitState = "idle" | "submitting" | "success" | "error";

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
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    projectType: "",
    deadline: "",
    projectDescription: "",
    budgetRange: "",
  });

  const requiredFieldsAreFilled =
    formValues.name.trim() !== "" &&
    formValues.email.trim() !== "" &&
    formValues.whatsapp.trim() !== "" &&
    formValues.projectType.trim() !== "" &&
    formValues.projectDescription.trim() !== "";

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (submitState === "success" || submitState === "error") {
      setSubmitState("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const attachment = formData.get("attachment");
    const payload = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      whatsapp: formValues.whatsapp.trim(),
      company: formValues.company.trim(),
      projectType: formValues.projectType.trim(),
      deadline: formValues.deadline.trim(),
      projectDescription: formValues.projectDescription.trim(),
      budgetRange: formValues.budgetRange.trim(),
      attachmentName: attachment instanceof File ? attachment.name : "",
      createdAt: new Date().toISOString(),
      source: "grafikwork-website",
    };

    if (!requiredFieldsAreFilled) {
      setSubmitState("error");
      setErrorMessage("Preencha os campos obrigatórios para enviar.");
      return;
    }

    try {
      const response = await fetch(firebaseEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Firebase rejected the request.");
      }

      form.reset();
      setFormValues({
        name: "",
        email: "",
        whatsapp: "",
        company: "",
        projectType: "",
        deadline: "",
        projectDescription: "",
        budgetRange: "",
      });
      setSubmitState("success");
    } catch {
      setSubmitState("error");
      setErrorMessage("Não foi possível enviar sua solicitação. Tente novamente.");
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#0d063f] px-[clamp(22px,7vw,96px)] py-14 text-white"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between gap-3.5 max-[560px]:flex-col max-[560px]:items-stretch">
          <div>
            <p className={eyebrowClass}>Vamos conversar</p>
            <h2 className="mb-0 max-w-[760px] text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-none">
              Vamos criar a próxima versão da sua presença na web
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
              ? "mt-10 grid-rows-[1fr] translate-y-0 opacity-100"
              : "mt-0 grid-rows-[0fr] -translate-y-2 opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <form
              id="contact-form"
              className="grid grid-cols-2 gap-5 border-t border-white/15 pt-8 max-[760px]:grid-cols-1"
              onSubmit={handleSubmit}
            >
              <label className={labelClass}>
                Nome
                <input
                  className={inputClass}
                  name="name"
                  type="text"
                  value={formValues.name}
                  onChange={handleFieldChange}
                  required
                />
              </label>
              <label className={labelClass}>
                E-mail
                <input
                  className={inputClass}
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleFieldChange}
                  required
                />
              </label>
              <label className={labelClass}>
                WhatsApp
                <input
                  className={inputClass}
                  name="whatsapp"
                  type="tel"
                  value={formValues.whatsapp}
                  onChange={handleFieldChange}
                  required
                />
              </label>
              <label className={labelClass}>
                Empresa (opcional)
                <input
                  className={inputClass}
                  name="company"
                  type="text"
                  value={formValues.company}
                  onChange={handleFieldChange}
                />
              </label>
              <label className={labelClass}>
                Tipo de projeto
                <select
                  className={inputClass}
                  name="projectType"
                  value={formValues.projectType}
                  onChange={handleFieldChange}
                  required
                >
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
                <input
                  className={inputClass}
                  name="deadline"
                  type="text"
                  value={formValues.deadline}
                  onChange={handleFieldChange}
                />
              </label>
              <label className={`${labelClass} col-span-2 max-[760px]:col-span-1`}>
                Descrição do projeto
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="projectDescription"
                  value={formValues.projectDescription}
                  onChange={handleFieldChange}
                  required
                />
              </label>
              <label className={labelClass}>
                Faixa de orçamento
                <input
                  className={inputClass}
                  name="budgetRange"
                  type="text"
                  value={formValues.budgetRange}
                  onChange={handleFieldChange}
                />
              </label>
              <label className={labelClass}>
                Upload de briefing/anexo
                <input
                  className="w-full rounded-md border border-dashed border-white/25 bg-white/10 px-4 py-3 text-sm text-white file:mr-4 file:rounded-md file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:text-sm file:font-extrabold file:text-slate-950"
                  name="attachment"
                  type="file"
                />
              </label>

              <div className="col-span-2 grid gap-3 max-[760px]:col-span-1">
                {requiredFieldsAreFilled ? (
                  <button
                    className={`${primaryButtonClass} w-fit disabled:cursor-not-allowed disabled:opacity-60 max-[560px]:w-full`}
                    type="submit"
                    disabled={submitState === "submitting"}
                  >
                    {submitState === "submitting"
                      ? "Enviando..."
                      : "Enviar solicitação"}
                  </button>
                ) : (
                  <p className="mb-0 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white/70">
                    Preencha nome, e-mail, WhatsApp, tipo de projeto e descrição
                    para exibir o botão de envio.
                  </p>
                )}

                {submitState === "success" ? (
                  <p className="mb-0 rounded-md bg-lime-100 px-4 py-3 text-sm font-bold text-lime-900">
                    Solicitação enviada com sucesso.
                  </p>
                ) : null}

                {submitState === "error" ? (
                  <p className="mb-0 rounded-md bg-red-100 px-4 py-3 text-sm font-bold text-red-900">
                    {errorMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
