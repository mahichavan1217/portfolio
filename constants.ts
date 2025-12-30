import { Project, Skill, Certification } from './types';

// Tip: Replace this with your Google Drive or LinkedIn link if you don't want to host the file locally.
export const RESUME_URL = "/Jay_Kuwar_Resume.pdf"; 

export const PROJECTS: Project[] = [
  {
    id: 'tifan-2025',
    title: 'SAE TIFAN 2025 - Automatic Vegetable Transplanter',
    category: 'Design & Development',
    role: 'Head of Design & Material Purchasing',
    description: 'Design and development of an automated agricultural machine.',
    detailedDescription: 'Led the design planning for an automatic vegetable transplanter. Responsible for material sourcing and prototype building. The project focused on mechanical automation for agricultural efficiency.',
    objective: 'Create a functional prototype for automatic vegetable transplantation.',
    methodology: 'CAD modeling in Creo/SolidWorks, material selection based on stress requirements, and prototype fabrication.',
    results: 'Successful design development and contribution to prototype building for the SAE TIFAN competition.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    tools: ['PTC Creo', 'SolidWorks', 'Manufacturing']
  },
  {
    id: 'mini-drill',
    title: 'Design & Fabrication of Mini Drill Machine',
    category: 'Design & Development',
    description: 'Fabrication of a small-scale drilling machine for academic use.',
    detailedDescription: 'Involves the complete design and assembly of a portable mini drill machine. Optimized for small-scale drilling tasks and academic demonstration of mechanical power transmission.',
    objective: 'Design a compact and efficient drilling machine for small-scale tasks.',
    methodology: 'Mechanical assembly design, component fabrication, and testing.',
    results: 'Fully functional mini drill machine suitable for academic and small-scale drilling operations.',
    image: 'https://images.unsplash.com/photo-1504148455328-c39695715583?auto=format&fit=crop&q=80&w=800',
    tools: ['CAD Modeling', 'Fabrication', 'Assembly']
  },
  {
    id: 't-junction',
    title: 'Fluid Flow Through T-Junction',
    category: 'Simulations (FEA/CFD)',
    description: 'CFD analysis of fluid behavior in a T-junction pipe system.',
    detailedDescription: 'Analyzed velocity distribution, pressure drop, flow separation, and turbulence in a T-junction system using ANSYS Fluent. Critical for understanding piping system efficiency.',
    objective: 'Model fluid behavior and identify pressure drop zones.',
    methodology: 'Geometrical modeling, mesh generation, and CFD solver setup in ANSYS.',
    results: 'Detailed mapping of turbulence and flow separation zones, assisting in pipe design optimization.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'CFD']
  },
  {
    id: 'venturimeter',
    title: 'Fluid Flow Through Venturimeter',
    category: 'Simulations (FEA/CFD)',
    description: 'Simulation of incompressible fluid flow for discharge measurement.',
    detailedDescription: 'Studied discharge rates in pipeline systems by analyzing the flow of incompressible fluids through a Venturimeter geometry. Validated the pressure-velocity relationship.',
    objective: 'Measure discharge rates and analyze pressure gradients.',
    methodology: 'Steady-state simulation of fluid flow through a converging-diverging nozzle.',
    results: 'Accurate measurement of discharge rates consistent with theoretical Bernoulli calculations.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent']
  },
  {
    id: 'external-3d',
    title: 'External Flow Over 3D Object',
    category: 'Simulations (FEA/CFD)',
    description: 'Aerodynamic study of drag and lift on complex geometries.',
    detailedDescription: 'Analyzed external fluid flow around 3D objects to study drag, lift, flow separation, and wake formation. Essential for aerodynamic validation in mechanical systems.',
    objective: 'Study wake formation and drag characteristics of 3D bodies.',
    methodology: 'External domain CFD simulation with localized mesh refinement around the object.',
    results: 'Quantified drag and lift coefficients and visualized vortex shedding in the wake.',
    image: 'https://images.unsplash.com/photo-1564424555153-04228f0aa7ee?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'Aerodynamics']
  }
];

export const SKILLS: Skill[] = [
  // Software Tools
  { name: 'AutoCAD', level: 85, category: 'Software Tools' },
  { name: 'PTC Creo', level: 90, category: 'Software Tools' },
  { name: 'SolidWorks', level: 88, category: 'Software Tools' },
  { name: 'CATIA V5', level: 82, category: 'Software Tools' },
  { name: 'ANSYS', level: 85, category: 'Software Tools' },
  
  // Engineering Skills
  { name: 'GD&T', level: 78, category: 'Engineering Skills' },
  { name: '2D/3D Modeling', level: 92, category: 'Engineering Skills' },
  { name: 'Drafting', level: 88, category: 'Engineering Skills' },
  { name: 'Simulation', level: 85, category: 'Engineering Skills' },
  
  // Soft Skills
  { name: 'Leadership', level: 85, category: 'Soft Skills' },
  { name: 'Teamwork', level: 90, category: 'Soft Skills' },
  { name: 'Communication', level: 88, category: 'Soft Skills' }
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Mechanical Design', issuer: 'VCADD' },
  { title: 'AutoCAD', issuer: 'Learn Delta' },
  { title: 'PTC CREO', issuer: 'Access CADD' },
  { title: 'FEA & CFD', issuer: 'ANSYS' },
  { title: 'CATIA V5', issuer: 'CADCAM GURU' }
];