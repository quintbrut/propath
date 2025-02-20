import React from 'react';
import { useTranslation } from 'react-i18next';
import { Score } from '../types/game';

interface ProgressBarProps {
  scores: Score;
  currentQuestion: number;
  totalQuestions: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  scores, 
  currentQuestion, 
  totalQuestions 
}) => {
  const { t } = useTranslation();
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-6">
      <div className="bg-white/20 rounded-full h-2">
        <div 
          className="bg-orange-400 h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-white/60 text-sm mt-2">
        <span>{t('test.question', { current: currentQuestion, total: totalQuestions })}</span>
      </div>
    </div>
  );
};