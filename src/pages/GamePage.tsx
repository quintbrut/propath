import React from 'react';
import { useGame } from '../hooks/useGame';
import { GameScene } from '../components/GameScene';

export const GamePage = () => {
  const { currentScene, scores, makeChoice, getTranslation } = useGame();

  if (!currentScene) {
    return null;
  }

  return (
    <GameScene
      scene={currentScene}
      scores={scores}
      onChoice={makeChoice}
      t={getTranslation}
    />
  );
};