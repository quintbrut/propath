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
    <div className="flex gap-3 items-center">
      <div className="flex rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
        <button
          onClick={() => i18n.changeLanguage('ru')}
          className={`px-4 py-1.5 transition-all duration-200 ${
            i18n.language === 'ru' 
              ? 'bg-white/15 text-white' 
              : 'text-white/80 hover:bg-white/10 hover:text-white'
          }`}
        >
          🇷🇺 RU
        </button>
        <button
          onClick={() => i18n.changeLanguage('kz')}
          className={`px-4 py-1.5 transition-all duration-200 ${
            i18n.language === 'kz' 
              ? 'bg-white/15 text-white' 
              : 'text-white/80 hover:bg-white/10 hover:text-white'
          }`}
        >
          🇰🇿 KZ
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className={`px-4 py-1.5 transition-all duration-200 ${
            i18n.language === 'en' 
              ? 'bg-white/15 text-white' 
              : 'text-white/80 hover:bg-white/10 hover:text-white'
          }`}
        >
          🇬🇧 EN
        </button>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-1.5 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors duration-200 border border-red-400/20"
      >
        ⬅️
      </button>
    </div>
  );
};