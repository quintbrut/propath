import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ruFlag from '../assets/flags/ru.svg';
import kzFlag from '../assets/flags/kz.svg';
import gbFlag from '../assets/flags/gb.svg';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="flex justify-center py-2">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
        <div className="flex rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg text-xs sm:text-sm">
          <button
            onClick={() => i18n.changeLanguage('ru')}
            className={`px-2 sm:px-4 py-1.5 transition-all duration-200 flex items-center gap-1 ${
              i18n.language === 'ru' 
                ? 'bg-white/15 text-white' 
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <img src={ruFlag} alt="RU" className="w-4 h-3" />
            <span className="hidden sm:inline">Русский</span>
            <span className="sm:hidden">RU</span>
          </button>
          <button
            onClick={() => i18n.changeLanguage('kz')}
            className={`px-2 sm:px-4 py-1.5 transition-all duration-200 flex items-center gap-1 ${
              i18n.language === 'kz' 
                ? 'bg-white/15 text-white' 
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <img src={kzFlag} alt="KZ" className="w-4 h-3" />
            <span className="hidden sm:inline">Қазақша</span>
            <span className="sm:hidden">KZ</span>
          </button>
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-2 sm:px-4 py-1.5 transition-all duration-200 flex items-center gap-1 ${
              i18n.language === 'en' 
                ? 'bg-white/15 text-white' 
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <img src={gbFlag} alt="EN" className="w-4 h-3" />
            <span className="hidden sm:inline">English</span>
            <span className="sm:hidden">EN</span>
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="px-3 py-1.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 text-xs sm:text-sm"
        >
          {t('auth.logout')}
        </button>
      </div>
    </div>
  );
};