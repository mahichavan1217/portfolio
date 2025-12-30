export interface Project {
  id: string;
  title: string;
  category: 'Design & Development' | 'FEA / RBD' | 'CFD';
  description: string;
  detailedDescription: string;
  objective: string;
  methodology: string;
  results: string;
  image: string;
  tools: string[];
  role?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Software Tools' | 'Engineering Skills' | 'Soft Skills';
}

export interface Certification {
  title: string;
  issuer: string;
}