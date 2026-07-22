import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Reveal } from "./Reveal";
import { useLocale } from "@/context/LocaleContext";

const EMAILJS_SERVICE_ID = "service_14pb0pc";
const EMAILJS_TEMPLATE_ID = "template_fz6dzsz";
const EMAILJS_PUBLIC_KEY = "HjUtmJXowhIFn5m0Q";

export function Contact() {
  const { t } = useLocale();
  const { pre, em } = t.contact.heading;
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("mariana.azevedo.tech@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.target as HTMLFormElement;
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY,
      );
      toast.success(t.contact.fields.toast);
      form.reset();
    } catch {
      toast.error(
        t.locale === "pt"
          ? "Erro ao enviar. Tente novamente ou entre em contato pelo e-mail."
          : "Failed to send. Please try again or reach out via email.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-wine-deep py-28 text-ivory md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 70% at 90% 0%, color-mix(in oklab, var(--wine) 60%, transparent), transparent 70%), radial-gradient(40% 60% at 0% 100%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{t.contact.tag}</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-6xl text-balance">
              {pre} <em className="italic">{em}</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75">
              {t.contact.description}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-4 border-b border-ivory/15 py-4 text-ivory/85">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20">
                  <Mail size={16} />
                </span>
                <span className="text-sm md:text-base">mariana.azevedo.tech@gmail.com</span>
                <button
                  onClick={copyEmail}
                  className="group ml-auto grid h-8 w-8 place-items-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
                  aria-label="Copiar e-mail"
                >
                  {copied ? <Check size={14} className="text-gold" /> : <Copy size={14} />}
                </button>
              </div>
              {[
                { icon: Linkedin, label: "www.linkedin.com/mariana-azevedo", href: "https://www.linkedin.com/in/mariana-azevedo-7175b7246/" },
                { icon: Github, label: "github.com/Mariana-Azevedo", href: "https://github.com/Mariana-Azevedo" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-b border-ivory/15 py-4 text-ivory/85 transition-colors hover:text-gold"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 transition-colors group-hover:border-gold">
                    <c.icon size={16} />
                  </span>
                  <span className="text-sm md:text-base">{c.label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-ivory/15 bg-ivory/[0.04] p-7 backdrop-blur-xl md:p-10"
          >
            <div className="space-y-5">
              <Field label={t.contact.fields.name} name="name" type="text" required />
              <Field label={t.contact.fields.email} name="email" type="email" required />
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-ivory/60">
                  {t.contact.fields.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none border-0 border-b border-ivory/20 bg-transparent pb-2 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-0"
                  placeholder={t.contact.fields.placeholder}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ivory px-6 py-4 text-sm font-medium text-wine-deep transition-all hover:bg-gold disabled:opacity-60 md:w-auto"
            >
              {sending ? t.contact.fields.sending : t.contact.fields.send}
              <Send size={15} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-ivory/60">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-ivory/20 bg-transparent pb-2 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-0"
      />
    </div>
  );
}
