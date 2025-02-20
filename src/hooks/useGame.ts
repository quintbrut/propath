import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import scenesData from '../data/scenes.json';
import { Scene, GameState, Score, Category, PROFESSIONS_BY_CATEGORY } from '../types/game';

const initialScore: Score = {
  creative: 0,
  tech: 0,
  social: 0,
  analytical: 0
};

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentSceneId: 'SceneEntrance',
    scores: initialScore,
    path: []
  });

  const { t } = useTranslation();

  const currentScene: Scene = scenesData[gameState.currentSceneId];

  const getDominantCategory = (scores: Score): Category => {
    return Object.entries(scores).reduce((a, b) => 
      scores[a as Category] > scores[b[0] as Category] ? a : b[0]
    ) as Category;
  };

  const getRandomProfession = (category: Category): string => {
    const professions = PROFESSIONS_BY_CATEGORY[category];
    return professions[Math.floor(Math.random() * professions.length)];
  };

  const makeChoice = (nextSceneId: string, scores?: Partial<Score>) => {
    setGameState(prev => {
      const newScores = {
        creative: prev.scores.creative + (scores?.creative || 0),
        tech: prev.scores.tech + (scores?.tech || 0),
        social: prev.scores.social + (scores?.social || 0),
        analytical: prev.scores.analytical + (scores?.analytical || 0)
      };

      // Если это сцена результата, определяем профессию
      if (nextSceneId === 'SceneResult') {
        const category = getDominantCategory(newScores);
        const profession = getRandomProfession(category);
        return {
          currentSceneId: profession,
          scores: newScores,
          path: [...prev.path, prev.currentSceneId]
        };
      }

      return {
        currentSceneId: nextSceneId,
        scores: newScores,
        path: [...prev.path, prev.currentSceneId]
      };
    });
  };

  return {
    currentScene,
    scores: gameState.scores,
    makeChoice,
    getTranslation: t
  };
};