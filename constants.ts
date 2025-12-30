
import { Project, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  // FEA / RBD Projects
  {
    id: 'fea-chassis',
    title: 'Structural Analysis of Chassis',
    category: 'FEA/RBD',
    description: 'Static structural validation of a vehicle chassis frame.',
    detailedDescription: 'The primary challenge was managing a complex assembly with multiple welded joints which often led to mesh singularities. I implemented sub-modeling techniques for critical joint sections and utilized symmetry boundary conditions to reduce the computational cost by 40% while maintaining high accuracy in the heat-affected zones.',
    objective: 'Determine stress distribution and safety factor under peak load conditions.',
    methodology: 'Geometrical cleanup in SpaceClaim followed by hex-dominant meshing and boundary condition application in ANSYS Mechanical.',
    results: 'Identified high-stress regions; optimized frame thickness reducing weight by 8% while maintaining safety factor > 1.5.',
    image: 'https://images.unsplash.com/photo-1590651662916-24f68340d2f0?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Mechanical', 'Static Structural']
  },
  {
    id: 'fea-cantilever',
    title: 'Structural Analysis of Cantilever Beam',
    category: 'FEA/RBD',
    description: 'Fundamental stress and deflection study of a cantilevered support.',
    detailedDescription: 'Ensuring convergence near the fixed support was critical to avoid artificial stress stiffening. By implementing localized mesh refinement (Body Sizing) at the fixed end and using second-order tetrahedral elements, I achieved a high-fidelity stress gradient that aligned closely with analytical beam theories.',
    objective: 'Validate numerical FEA results against Euler-Bernoulli beam theory.',
    methodology: 'Linear elastic analysis with fixed support and point loading.',
    results: 'Deflection results within 2% margin of theoretical calculations.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Mechanical']
  },
  {
    id: 'fea-knuckle',
    title: 'Structural Analysis of Knuckle Joint',
    category: 'FEA/RBD',
    description: 'Contact stress analysis of a mechanical knuckle assembly.',
    detailedDescription: 'The non-linear contact behavior between the pin and fork presented convergence issues during high-load simulations. I utilized the Augmented Lagrange formulation and fine-tuned the normal stiffness factor to ensure stable contact tracking, effectively capturing the Hertzian contact stresses across the interface.',
    objective: 'Analyze load transfer and shear stress at the pin-fork interface.',
    methodology: 'Frictional contact modeling with non-linear solver settings.',
    results: 'Verified shear strength and prevented local deformation through material selection.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Mechanical', 'Non-linear Analysis']
  },
  {
    id: 'rbd-excavator',
    title: 'Rigid Body Dynamics of Excavator Arm',
    category: 'FEA/RBD',
    description: 'Kinematic and dynamic simulation of a multi-link mechanism.',
    detailedDescription: 'Simulating the full range of motion often triggered numerical instabilities at extreme joint extensions. By incorporating joint friction models and optimizing the solver’s time-stepping for high-momentum phases, I generated accurate reaction force profiles for the hydraulic cylinders across the entire duty cycle.',
    objective: 'Calculate hydraulic cylinder forces required for maximum lift capacity.',
    methodology: 'Joint definitions (Revolute/Cylindrical) and transient dynamic solver.',
    results: 'Generated force-time plots for cylinder sizing and link stress analysis input.',
    image: 'https://images.unsplash.com/photo-1586864387917-f579ae5259bc?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS RBD', 'Transient Structural']
  },
  {
    id: 'rbd-piston',
    title: 'Rigid Body Dynamics of Piston & Crankshaft',
    category: 'FEA/RBD',
    description: 'Motion study of an internal combustion engine sub-assembly.',
    detailedDescription: 'The high-speed operation (5000+ RPM) created significant inertial imbalances. I performed a parametric study of counterweight geometry, using Rigid Body Dynamics to find the optimal mass distribution that minimized bearing vibration and improved the structural longevity of the crankcase assembly.',
    objective: 'Analyze secondary motion of piston and bearing reaction forces.',
    methodology: 'High-speed transient simulation with inertial loads.',
    results: 'Optimized counterweight mass for balanced operation at 5000 RPM.',
    image: 'https://images.unsplash.com/photo-1517420704952-d9f39e99b43d?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Rigid Body Dynamics']
  },

  // CFD Projects
  {
    id: 'cfd-tjunction',
    title: 'Fluid Flow through T-Junction',
    category: 'CFD',
    description: 'Mixing study in a T-pipe configuration.',
    detailedDescription: 'Capturing the complex recirculation zones at the junction corner was essential for accurate pressure drop prediction. I employed the K-Epsilon turbulence model with enhanced wall functions and optimized the grid in the separation region, leading to a much more accurate representation of the secondary flow patterns.',
    objective: 'Analyze pressure drop and flow separation at the junction.',
    methodology: 'Steady-state pressure-based solver with K-Epsilon turbulence model.',
    results: 'Mapped recirculation zones and pressure gradients for different velocity ratios.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'CFD']
  },
  {
    id: 'cfd-yjunction',
    title: 'Fluid Flow through Y-Junction',
    category: 'CFD',
    description: 'Analysis of merging flow streams in a Y-shaped pipe.',
    detailedDescription: 'The main challenge was predicting flow separation at the "crotch" of the Y-junction, which impacts mixing efficiency. Using the SST k-omega model, I was able to capture the near-wall effects more accurately than standard models, identifying the optimal branch angle to minimize energy losses.',
    objective: 'Evaluate turbulence intensity at the merging point.',
    methodology: 'SST k-omega model for enhanced near-wall treatment.',
    results: 'Achieved uniform flow distribution with optimized branch angle.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent']
  },
  {
    id: 'cfd-venturi',
    title: 'Fluid Flow through Venturimeter',
    category: 'CFD',
    description: 'Simulation of a flow measurement device.',
    detailedDescription: 'Wall shear effects in the constricted throat region can significantly skew the Discharge Coefficient (Cd). I implemented fine inflation layers (Y+ < 1) to resolve the boundary layer accurately, ensuring that the pressure drop calculations accounted for viscous losses in the high-velocity zone.',
    objective: 'Calculate Discharge Coefficient (Cd) through pressure differential.',
    methodology: 'Validation of Bernoulli’s principle in a constricted flow region.',
    results: 'Cd results within 3% of experimental discharge values.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent']
  },
  {
    id: 'cfd-internal-3d',
    title: 'Internal Flow over 3D Object',
    category: 'CFD',
    description: 'Simulating air flow inside a duct with an internal blockage.',
    detailedDescription: 'Predicting the unsteady vortex shedding frequency behind the object was the primary focus. I switched from steady-state to a Transient RANS approach with a fine time-step determined by the Courant-Friedrichs-Lewy (CFL) condition, which successfully captured the oscillating lift and drag forces.',
    objective: 'Study wake formation and stagnation points.',
    methodology: 'Unstructured polyhedral meshing with inflation layers.',
    results: 'Characterized drag coefficient changes based on object orientation.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'SpaceClaim']
  },
  {
    id: 'cfd-external-3d',
    title: 'External Flow over 3D Object',
    category: 'CFD',
    description: 'Aerodynamic study of a simplified vehicle/wing body.',
    detailedDescription: 'The challenge lay in managing the huge computational domain required for external aero simulations. By utilizing an automated meshing workflow with proximity and curvature controls, I maintained a high-resolution wake mesh while keeping the total cell count within manageable limits for workstation-level solvers.',
    objective: 'Determine lift and drag coefficients at various Reynolds numbers.',
    methodology: 'Large eddy simulation (LES) for transient wake analysis.',
    results: 'Visualized tip vortices and flow separation points accurately.',
    image: 'https://images.unsplash.com/photo-1564424555153-04228f0aa7ee?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'External Aero']
  },
  {
    id: 'cfd-volumetric',
    title: 'Volumetric Meshing',
    category: 'CFD',
    description: 'Advanced grid generation for complex geometries.',
    detailedDescription: 'Handling thin walls and small gaps in the geometry often resulted in poor quality cells (high skewness). I mastered the use of "Gap Tooling" and "Surface Mesh Scaling" in Fluent Meshing to create a robust Poly-Hexcore volume mesh that ensured solver stability and faster convergence rates.',
    objective: 'Ensure high orthogonality and low skewness for solver stability.',
    methodology: 'Comparison of Hex-Core vs Poly-Hexcore meshing techniques.',
    results: 'Reduced cell count by 20% without compromising spatial resolution.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Meshing', 'Fluent Meshing']
  }
];

export const SKILLS: Skill[] = [
  { name: 'ANSYS (FEA & CFD)', level: 85, category: 'Simulation' },
  { name: 'Structural Analysis', level: 80, category: 'Simulation' },
  { name: 'PTC Creo', level: 90, category: 'Design' },
  { name: 'SolidWorks', level: 88, category: 'Design' },
  { name: 'AutoCAD', level: 85, category: 'Design' },
  { name: 'CATIA V5', level: 80, category: 'Design' },
  { name: 'GD&T', level: 75, category: 'Computation' },
  { name: '2D/3D Drafting', level: 90, category: 'Computation' }
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Mechanical Design', issuer: 'VCADD' },
  { title: 'AutoCAD', issuer: 'Learn Delta' },
  { title: 'PTC CREO', issuer: 'Access CADD' },
  { title: 'FEA & CFD', issuer: 'ANSYS' },
  { title: 'CATIA V5', issuer: 'CADCAM GURU' }
];
