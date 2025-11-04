import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';

export default function Projects() {
  const { t } = useLanguage();
  
  const digitalSolutionsRef = useRef(null);
  const dashboardsRef = useRef(null);
  
  const [digitalVisible, setDigitalVisible] = useState(false);
  const [dashboardsVisible, setDashboardsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const digitalObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setDigitalVisible(true);
        }
      });
    }, observerOptions);

    const dashboardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setDashboardsVisible(true);
        }
      });
    }, observerOptions);

    if (digitalSolutionsRef.current) {
      digitalObserver.observe(digitalSolutionsRef.current);
    }
    if (dashboardsRef.current) {
      dashboardsObserver.observe(dashboardsRef.current);
    }

    return () => {
      digitalObserver.disconnect();
      dashboardsObserver.disconnect();
    };
  }, []);

  // Projetos de exemplo - substituir pelos seus projetos reais
  const digitalProjects = [
    {
      id: 1,
      name: "Projeto 1",
      description: "Descrição do projeto 1",
      image: "/project1-preview.jpg",
      github: "https://github.com/seu-usuario/projeto1",
      demo: "https://projeto1.com",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    // Adicione mais projetos aqui
  ];

  const dashboardProjects = [
    {
      id: 1,
      name: "Dashboard 1",
      description: "Descrição do dashboard 1",
      image: "/dashboard1-preview.jpg",
      github: "https://github.com/seu-usuario/dashboard1",
      demo: "https://dashboard1.com",
      tags: ["Python", "Plotly", "Pandas"]
    },
    // Adicione mais dashboards aqui
  ];

  return (
    <main className="min-h-screen bg-offwhite text-graphite dark:bg-graphite dark:text-offwhite transition-colors duration-500">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-graphite dark:text-offwhite mb-6">
          {t("myProjects")}
        </h1>
        <p className="text-lg md:text-xl text-graphite/80 dark:text-offwhite/80 max-w-2xl text-center">
          {t("projectsDescription")}
        </p>
      </section>

      {/* Digital Solutions Section */}
      <section
        ref={digitalSolutionsRef}
        className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 transition-all duration-1000 ${
          digitalVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-graphite dark:text-offwhite mb-12">
            {t("digitalSolutions")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalProjects.map((project) => (
              <div
                key={project.id}
                className="group border border-graphite/10 dark:border-offwhite/10 overflow-hidden hover:border-rose/50 dark:hover:border-rose-dark/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-graphite/5 dark:bg-offwhite/5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-graphite dark:text-offwhite mb-2">
                    {project.name}
                  </h3>
                  <p className="text-graphite/70 dark:text-offwhite/70 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-graphite/60 dark:text-offwhite/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity text-sm"
                    >
                      {t("liveDemo")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section
        ref={dashboardsRef}
        className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-offwhite/50 dark:bg-graphite/50 transition-all duration-1000 ${
          dashboardsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-graphite dark:text-offwhite mb-12">
            {t("dashboards")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardProjects.map((project) => (
              <div
                key={project.id}
                className="group border border-graphite/10 dark:border-offwhite/10 overflow-hidden hover:border-rose/50 dark:hover:border-rose-dark/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-graphite/5 dark:bg-offwhite/5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-graphite dark:text-offwhite mb-2">
                    {project.name}
                  </h3>
                  <p className="text-graphite/70 dark:text-offwhite/70 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-graphite/60 dark:text-offwhite/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose dark:text-rose-dark hover:opacity-70 transition-opacity text-sm"
                    >
                      {t("liveDemo")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}