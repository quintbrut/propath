import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const userName = localStorage.getItem('userName');

  return (
    <div className="min-h-screen bg-main flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">
          {t('home.hello', { name: userName })}
        </h1>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/test')} 
            className="w-full"
          >
            {t('home.startTest')}
          </Button>
        </div>
      </div>
    </div>
  );
};