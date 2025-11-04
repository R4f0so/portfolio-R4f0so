import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:opacity-80 text-base transition-all duration-300 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-black/10 dark:border-white/10 font-medium min-w-12 flex items-center justify-center gap-1.5"
        title="Selecionar idioma"
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
      >
        <span>{currentLanguage.label}</span>
        <svg 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 z-30 bg-white dark:bg-graphite border border-black/10 dark:border-white/10 rounded-lg shadow-lg min-w-20 overflow-hidden backdrop-blur-sm">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                language === lang.code
                  ? "bg-rose/20 dark:bg-rose-dark/20 text-rose dark:text-rose-dark font-medium"
                  : "text-graphite dark:text-offwhite hover:bg-offwhite/50 dark:hover:bg-graphite/50"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

