import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const projectsPathMap = {
    pt: '/projetos',
    en: '/projects',
    es: '/proyectos'
  };

  const projectsPath = projectsPathMap[language] || '/projects';

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 bg-offwhite/80 dark:bg-graphite/80 backdrop-blur-sm border-b border-graphite/10 dark:border-offwhite/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Navigation Links - Left Side */}
        <div className="flex items-center gap-6 pl-2">
          <a
            href="/"
            onClick={handleHomeClick}
            className="text-graphite dark:text-offwhite hover:text-rose dark:hover:text-rose-dark transition-colors duration-300 font-sans font-medium cursor-pointer"
          >
            {t("home")}
          </a>
          <Link
            to={projectsPath}
            className="text-graphite dark:text-offwhite hover:text-rose dark:hover:text-rose-dark transition-colors duration-300 font-sans font-medium"
          >
            {t("projects")}
          </Link>
          <a
            href="#about"
            className="text-graphite dark:text-offwhite hover:text-rose dark:hover:text-rose-dark transition-colors duration-300 font-sans font-medium"
          >
            {t("about")}
          </a>
        </div>

        {/* Theme and Language toggles - Right Side */}
        <div className="flex items-center gap-4 pr-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}