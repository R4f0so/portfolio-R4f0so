import { useRef } from "react";
import Header from "./components/Header";
import { useLanguage } from "./contexts/LanguageContext";
import useSectionVisibility from "./hooks/useSectionVisibility";

export default function App() {
  const { t } = useLanguage();

  // Refs para as seções
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutVisible = useSectionVisibility(aboutRef);
  const projectsVisible = useSectionVisibility(projectsRef);
  const contactVisible = useSectionVisibility(contactRef);

  return (
    <main className="min-h-screen bg-offwhite text-graphite dark:bg-graphite dark:text-offwhite transition-colors duration-500 relative overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto pt-20">
        <div className="w-full space-y-8 animate-fade-in -mt-40">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="shrink-0 order-2 md:order-1">
              <img
                src="/profile.jpg"
                alt="Rafael Ferreira Martins"
                className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-rose/30 dark:border-rose-dark/30 shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-1 text-center md:text-left order-1 md:order-2 space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-graphite dark:text-offwhite leading-tight whitespace-nowrap">
                {t("name")}
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl font-sans font-normal leading-tight whitespace-nowrap" style={{ color: '#A57A71' }}>
                {t("title")}
              </h2>
              
              {/* Social Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/R4f0so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-graphite/10 dark:bg-offwhite/10 hover:bg-rose/20 dark:hover:bg-rose-dark/20 border-2 border-transparent hover:border-rose-dark transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6 text-graphite dark:text-offwhite" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rafael-ferreira-706964210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-graphite/10 dark:bg-offwhite/10 hover:bg-rose/20 dark:hover:bg-rose-dark/20 border-2 border-transparent hover:border-rose-dark transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 text-graphite dark:text-offwhite" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:ratf705@gmail.com"
                  className="p-3 rounded-full bg-graphite/10 dark:bg-offwhite/10 hover:bg-rose/20 dark:hover:bg-rose-dark/20 border-2 border-transparent hover:border-rose-dark transition-all duration-300"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6 text-graphite dark:text-offwhite" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>

              {/* CTA Button - WhatsApp */}
              <div className="pt-2">
                <a
                  href="https://wa.me/5511994911865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 border-2 border-rose dark:border-rose-dark text-rose dark:text-rose-dark hover:bg-rose hover:text-offwhite dark:hover:bg-rose-dark dark:hover:text-graphite transition-all duration-300 font-sans font-medium"
                >
                  {t("getInTouch")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-offwhite/50 dark:bg-graphite/50 transition-all duration-1000 ${
          aboutVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-sans font-bold text-graphite dark:text-offwhite mb-8">
            {t("about")}
          </h3>
          <div className="space-y-4 text-lg font-sans text-graphite/80 dark:text-offwhite/80 leading-relaxed">
            <p>{t("aboutText1")}</p>
            <p>{t("aboutText2")}</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6 list-none font-sans">
              {[
                "JavaScript",
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "Tailwind CSS",
              ].map((tech) => (
                <li
                  key={tech}
                  className="flex items-center text-rose dark:text-rose-dark"
                >
                  <span className="mr-3 text-graphite dark:text-offwhite">
                    ▹
                  </span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 transition-all duration-1000 ${
          projectsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-sans font-bold text-graphite dark:text-offwhite mb-12 text-center">
            {t("featuredProjects")}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div
                key={project}
                className="border border-graphite/10 dark:border-offwhite/10 p-6 hover:border-rose/50 dark:hover:border-rose-dark/50 transition-all duration-300"
              >
                <div className="text-rose dark:text-rose-dark text-sm font-medium mb-2">
                  {t("featuredProject")}
                </div>
                <h4 className="text-2xl font-serif font-bold text-graphite dark:text-offwhite mb-3">
                  {t("projectName")}
                </h4>
                <p className="text-graphite/70 dark:text-offwhite/70 mb-4 leading-relaxed">
                  {t("projectDescription")}
                </p>
                <div className="flex flex-wrap gap-3 mb-4 text-sm text-graphite/60 dark:text-offwhite/60">
                  {["React", "TypeScript", "Tailwind"].map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity"
                  >
                    {t("github")}
                  </a>
                  <a
                    href="#"
                    className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity"
                  >
                    {t("liveDemo")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-offwhite/50 dark:bg-graphite/50 transition-all duration-1000 ${
          contactVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-rose dark:text-rose-dark text-lg font-sans font-medium mb-4">
            {t("whatsNext")}
          </p>
          <h3 className="text-4xl md:text-5xl font-sans font-bold text-graphite dark:text-offwhite mb-6">
            {t("getInTouchTitle")}
          </h3>
          <p className="text-lg font-sans text-graphite/80 dark:text-offwhite/80 mb-10 leading-relaxed">
            {t("contactText")}
          </p>
          <a
            href="https://wa.me/5511994911865?text=Olá Rafael,%20vim%20através%20do%20seu%20portfólio!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-rose dark:border-rose-dark text-rose dark:text-rose-dark hover:bg-rose hover:text-offwhite dark:hover:bg-rose-dark dark:hover:text-graphite transition-all duration-300 font-sans font-medium"
          >
            {t("sayHello")}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-graphite/10 dark:border-offwhite/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-sans text-graphite/60 dark:text-offwhite/60">
            {t("builtWith")}
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/R4f0so"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity text-sm font-sans"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-ferreira-706964210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity text-sm font-sans"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ratf705@gmail.com"
              className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity text-sm font-sans"
            >
              E-mail
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
