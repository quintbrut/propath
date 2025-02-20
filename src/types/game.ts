export interface Score {
    creative: number;
    tech: number;
    social: number;
    analytical: number;
  }
  
  export interface Choice {
    textKey: string;
    nextSceneId: string;
    scores?: Partial<Score>; // очки за выбор
  }
  
  export interface Scene {
    id: string;
    descriptionKey: string;
    dialogKey: string;
    choices: Choice[];
  }
  
  export interface GameState {
    currentSceneId: string;
    scores: Score;
    path: string[];
  }
  
  export type Category = 'creative' | 'tech' | 'social' | 'analytical';
  
  export const PROFESSIONS_BY_CATEGORY: Record<Category, string[]> = {
    creative: ['SceneEndArtist', 'SceneEndDesigner', 'SceneEndWriter', 'SceneEndMusician', 'SceneEndPhotographer'],
    tech: ['SceneEndProgrammer', 'SceneEndDataScientist', 'SceneEndWebDeveloper', 'SceneEndNetworkEngineer', 'SceneEndGameDeveloper'],
    social: ['SceneEndTeacher', 'SceneEndPsychologist', 'SceneEndHRManager', 'SceneEndJournalist', 'SceneEndCounselor'],
    analytical: ['SceneEndAccountant', 'SceneEndEconomist', 'SceneEndResearcher', 'SceneEndMathematician', 'SceneEndFinancialAnalyst']
  };