import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./contexts/LanguageContext";

export default function App() {
  const { t } = useLanguage();
  
  // Refs para as seções
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Estados para controlar as animações
  const [aboutVisible, setAboutVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const observers = [];

    // Configuração do Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    // Observer para About
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      });
    }, observerOptions);

    // Observer para Projects
    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true);
        }
      });
    }, observerOptions);

    // Observer para Contact
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setContactVisible(true);
        }
      });
    }, observerOptions);

    // Observar os elementos
    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
      observers.push({ observer: aboutObserver, element: aboutRef.current });
    }
    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
      observers.push({ observer: projectsObserver, element: projectsRef.current });
    }
    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
      observers.push({ observer: contactObserver, element: contactRef.current });
    }

    // Cleanup
    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-offwhite text-graphite dark:bg-graphite dark:text-offwhite transition-colors duration-500 relative overflow-x-hidden">
      <ThemeToggle />
      <LanguageToggle />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="w-full space-y-8 animate-fade-in">
          {/* Greeting */}
          <p className="text-rose dark:text-rose-dark text-lg md:text-xl font-medium tracking-wide">
            {t("greeting")}
          </p>
          
          {/* Name with Photo */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="Rafael Ferreira Martins"
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-rose/30 dark:border-rose-dark/30 shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-graphite dark:text-offwhite leading-tight">
                {t("name")}
              </h1>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-graphite/70 dark:text-offwhite/70 leading-tight">
            {t("title")}
          </h2>
          
          {/* Education */}
          <p className="text-base md:text-lg text-rose dark:text-rose-dark font-medium mt-4">
            {t("education")}
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-graphite/80 dark:text-offwhite/80 max-w-2xl leading-relaxed mt-6">
            {t("description")}
          </p>
          
          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-rose dark:border-rose-dark text-rose dark:text-rose-dark hover:bg-rose hover:text-offwhite dark:hover:bg-rose-dark dark:hover:text-graphite transition-all duration-300 font-medium"
            >
              {t("getInTouch")}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={aboutRef}
        className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-offwhite/50 dark:bg-graphite/50 transition-all duration-1000 ${
          aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-graphite dark:text-offwhite mb-8">
            {t("about")}
          </h3>
          <div className="space-y-4 text-lg text-graphite/80 dark:text-offwhite/80 leading-relaxed">
            <p>
              {t("aboutText1")}
            </p>
            <p>
              {t("aboutText2")}
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6 list-none">
              {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS'].map((tech) => (
                <li key={tech} className="flex items-center text-rose dark:text-rose-dark">
                  <span className="mr-3 text-graphite dark:text-offwhite">▹</span>
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
          projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-graphite dark:text-offwhite mb-12 text-center">
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
                  {['React', 'TypeScript', 'Tailwind'].map((tech) => (
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
          contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-rose dark:text-rose-dark text-lg font-medium mb-4">
            {t("whatsNext")}
          </p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-graphite dark:text-offwhite mb-6">
            {t("getInTouchTitle")}
          </h3>
          <p className="text-lg text-graphite/80 dark:text-offwhite/80 mb-10 leading-relaxed">
            {t("contactText")}
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 border-2 border-rose dark:border-rose-dark text-rose dark:text-rose-dark hover:bg-rose hover:text-offwhite dark:hover:bg-rose-dark dark:hover:text-graphite transition-all duration-300 font-medium"
          >
            {t("sayHello")}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-graphite/10 dark:border-offwhite/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-graphite/60 dark:text-offwhite/60">
            {t("builtWith")}
          </p>
          <div className="flex gap-6">
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}



