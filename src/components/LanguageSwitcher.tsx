import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
      <div className="flex rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg text-xs sm:text-sm">
        <button
          onClick={() => i18n.changeLanguage('ru')}
          className={`px-2 sm:px-4 py-1.5 transition-all duration-200 ${
            i18n.language === 'ru' 
              ? 'bg-white/15 text-white' 
              : 'text-white/80 hover:bg-white/10 hover:text-white'
          }`}
        >
          <span className="hidden sm:inline">🇷🇺 RU</span>
          <span className="sm:hidden">RU</span>
        </button>
        <button
          onClick={() => i18n.changeLanguage('kz')}
          className={`px-2 sm:px-4 py-1.5 transition-all duration-200 ${
            i18n.language === 'kz' 
              ? 'bg-white/15 text-white' 
              : 'text-white/80 hover:bg-white/10 hover:text-white'
          }`}
        >
          <span className="hidden sm:inline">🇰🇿 KZ</span>
          <span className="sm:hidden">KZ</span>
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className={`px-2 sm:px-4 py-1.5 transition-all duration-200 ${
            i18n.language === 'en' 
              ? 'bg-white/15 text-white' 
              : 'text-white/80 hover:bg-white/10 hover:text-white'
          }`}
        >
          <span className="hidden sm:inline">🇬🇧 EN</span>
          <span className="sm:hidden">EN</span>
        </button>
      </div>
      <button
        onClick={handleLogout}
        className="px-3 sm:px-4 py-1.5 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors duration-200 border border-red-400/20 text-xs sm:text-sm"
      >
        ⬅️
      </button>
    </div>
  );
};