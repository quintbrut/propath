export interface Profession {
    id: number;
    title: string;
    description: string;
    skills: string[];
    education: string[];
    salary: {
      min: number;
      max: number;
    };
  }
  
  export interface Question {
    id: number;
    text: string;
    options: {
      id: number;
      text: string;
      professionTags: string[];
    }[];
  }