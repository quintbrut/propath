import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { useTranslation } from 'react-i18next';
import { Score } from '../types/game';
import { Button } from './Button';

interface ResultCardProps {
  professionKey: string;
  descriptionKey: string;
  dialogKey: string;
  scores: Score;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  professionKey,
  descriptionKey,
  dialogKey,
  scores
}) => {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const userName = localStorage.getItem('userName');

  const getProfessionImage = () => {
    try {
      const fullProfession = professionKey.split('.').pop() || '';
      return `/scenes/${fullProfession.toLowerCase()}.png`;
    } catch (error) {
      console.error('Error loading profession image:', error);
      return null;
    }
  };

  const handleDownload = async () => {
    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current);
      const link = document.createElement('a');
      link.download = 'my-career-result.png';
      link.href = dataUrl;
      link.click();
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('share.title'),
          text: `${userName} - ${t(professionKey)}!\n${t(descriptionKey)}`,
          url: window.location.href
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-main flex flex-col items-center justify-center py-8 px-4">
      <div ref={cardRef} className="w-full max-w-3xl bg-white rounded-3xl p-6 shadow-xl">
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Изображение профессии */}
          <div className="w-full">
            <div className="relative w-full max-h-[40vh] rounded-xl overflow-hidden bg-gray-100">
              <img
                src={getProfessionImage()}
                alt={t(professionKey)}
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.error('Profession image failed to load:', e.currentTarget.src);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400">🎯</div>';
                }}
              />
            </div>
          </div>

          {/* Текстовый контент */}
          <div className="w-full text-center">
            <div className="text-6xl sm:text-7xl mb-4 sm:mb-6">🎉</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2 sm:mb-3">
              {t('result.congratulations', { name: userName })}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-6 sm:mb-8">
              {t(professionKey)}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              {t(descriptionKey)}
            </p>
            <p className="text-lg sm:text-xl font-bold text-purple-600 mb-6 sm:mb-8">
              {t(dialogKey)}
            </p>

            {/* Кнопки */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <Button
                onClick={handleDownload}
                className="w-full py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg font-medium bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800"
              >
                {t('result.download')}
              </Button>
              {navigator.share && (
                <Button
                  onClick={handleShare}
                  className="w-full py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg font-medium bg-orange-400 text-white hover:bg-orange-500 active:bg-orange-600"
                >
                  {t('result.share')}
                </Button>
              )}
              <Button
                onClick={() => window.location.reload()}
                className="w-full py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg font-medium bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300"
              >
                {t('result.startOver')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};