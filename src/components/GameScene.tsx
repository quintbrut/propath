import React from 'react';
import { Scene, Score } from '../types/game';
import { ResultCard } from './ResultCard';
import { ProgressBar } from './ProgressBar';
import { LanguageSwitcher } from './LanguageSwitcher';

interface GameSceneProps {
  scene: Scene;
  onChoice: (nextSceneId: string, scores?: Partial<Score>) => void;
  scores: Score;
  t: (key: string) => string;
}

export const GameScene: React.FC<GameSceneProps> = ({ scene, onChoice, scores, t }) => {
  const isFinalScene = scene.choices.length === 0;
  const isQuestionScene = scene.id.startsWith('SceneQ');
  const currentQuestion = isQuestionScene ? parseInt(scene.id.replace('SceneQ', '')) : 0;
  const totalQuestions = 7;

  // Динамический импорт изображения
  const getSceneImage = () => {
    try {
      return `/scenes/${scene.id.toLowerCase()}.png`;
    } catch (error) {
      console.error('Error loading image:', error);
      return null;
    }
  };

  if (isFinalScene) {
    return (
      <div className="relative">
        <div className="absolute top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>
        <ResultCard
          professionKey={`profession.${scene.id}`}
          descriptionKey={`scenes.${scene.descriptionKey}`}
          dialogKey={`scenes.${scene.dialogKey}`}
          scores={scores}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-main flex flex-col items-center py-8 px-4">
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <div className="w-full max-w-4xl flex flex-col"> {/* Container for all content */}
        {isQuestionScene && (
          <ProgressBar
            scores={scores}
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
          />
        )}
        <div className="bg-white rounded-3xl p-6 shadow-xl mt-4 flex-grow">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Контейнер для изображения */}
            <div className="w-full">
              <div className="relative w-full max-h-[40vh] rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={getSceneImage()}
                  alt={t(`scenes.${scene.descriptionKey}`)}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error('Image failed to load:', e.currentTarget.src);
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400">Изображение скоро появится</div>';
                  }}
                />
              </div>
            </div>

            {/* Контейнер для текста и кнопок */}
            <div className="w-full">
              <p className="text-gray-600 mb-4 text-base sm:text-lg">
                {t(`scenes.${scene.descriptionKey}`)}
              </p>

              <p className="text-purple-600 font-bold mb-6 sm:mb-8 text-lg sm:text-xl">
                {t(`scenes.${scene.dialogKey}`)}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {scene.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => onChoice(choice.nextSceneId, choice.scores)}
                    className="w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-center transition text-base sm:text-lg font-medium
                              bg-gray-100 text-gray-900
                              hover:bg-orange-400 hover:text-white
                              active:bg-orange-500"
                  >
                    {t(`scenes.${choice.textKey}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
