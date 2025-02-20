import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const LoginPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleStart = () => {
    if (name && age) {
      localStorage.setItem('userName', name);
      localStorage.setItem('userAge', age);
      navigate('/game');
    }
  };

  const getWelcomeImage = () => {
    try {
      return '/scenes/welcome.png';
    } catch (error) {
      console.error('Error loading welcome image:', error);
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-main flex flex-col items-center justify-center py-8 px-4">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <div className="w-full max-w-2xl bg-white rounded-3xl p-6 shadow-xl">
        <div className="flex flex-col gap-6">
          {/* Изображение */}
          <div className="w-full">
            <div className="relative w-full max-h-[40vh] rounded-xl overflow-hidden bg-gray-100">
              <img
                src={getWelcomeImage()}
                alt="Welcome"
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.error('Welcome image failed to load:', e.currentTarget.src);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400">👋</div>';
                }}
              />
            </div>
          </div>

          {/* Контент */}
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-8 text-center">
              {t('auth.welcome')}
            </h1>

            <div className="space-y-4 max-w-md mx-auto">
              <Input
                placeholder={t('auth.name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg"
              />
              <Input
                type="number"
                placeholder={t('auth.age')}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="text-lg"
              />
              <Button 
                onClick={handleStart} 
                className="w-full py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg font-medium bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 mt-4"
              >
                {t('auth.start')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};