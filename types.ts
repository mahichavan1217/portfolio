
export interface Project {
  id: string;
  title: string;
  category: 'FEA/RBD' | 'CFD';
  description: string;
  detailedDescription: string;
  objective: string;
  methodology: string;
  results: string;
  image: string;
  tools: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Simulation' | 'Design' | 'Computation';
}

export interface Certification {
  title: string;
  issuer: string;
}
