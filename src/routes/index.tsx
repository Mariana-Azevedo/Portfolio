import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { LocaleProvider } from "@/context/LocaleContext";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Timeline } from "@/components/portfolio/Timeline";
import { Credentials } from "@/components/portfolio/Credentials";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mariana Azevedo da Silva — QA, Business Analyst & Product" },
      { name: "description", content: "Portfólio de Mariana Azevedo da Silva — Quality Assurance, Análise de Negócios e Produto. Carreira, qualificações, cursos e cases." },
      { property: "og:title", content: "Mariana Azevedo da Silva — Portfólio" },
      { property: "og:description", content: "QA, Análise de Negócios e Produto. Construindo confiança em cada release." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LocaleProvider>
      <main className="bg-background text-foreground">
        <Nav />
        <Hero />
        <About />
        <Timeline />
        <Credentials />
        <Skills />
        <Contact />
        <Footer />
        <Toaster position="bottom-center" theme="light" richColors />
      </main>
    </LocaleProvider>
  );
}
