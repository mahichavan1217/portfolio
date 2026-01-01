
import { Project, Skill, Certification } from './types';

export const RESUME_URL = "https://drive.google.com/file/d/1tzKSsdIHlCpepPERjnHq3kuITV7_GzwP/view?usp=sharing"; 

export const PROJECTS: Project[] = [
  // --- DESIGN & DEVELOPMENT (CAD Projects) ---
  {
    id: 'tifan-2025',
    title: 'SAE TIFAN 2025 - Automatic Vegetable Transplanter',
    category: 'Design & Development',
    role: 'Head of Design & Material Purchasing',
    description: 'Design and development of an automated agricultural machine for transplanting seedlings.',
    detailedDescription: 'Led a multidisciplinary team to design an automated system capable of transplanting 30-40 seedlings per minute. Managed the selection of lightweight yet high-strength materials (AISI 1020) to ensure durability in harsh field conditions. Oversaw the entire CAD lifecycle from conceptual sketching to production-ready drafting.',
    objective: 'To automate the labor-intensive process of vegetable transplantation while maintaining seedling integrity.',
    methodology: 'Iterative design process using PTC Creo for parametric modeling. Integrated a 4-bar linkage mechanism for the planting arm. Performed weight optimization using SolidWorks to reduce the overall machine mass by 15%.',
    results: 'Produced a functional prototype that demonstrated a 60% reduction in labor time compared to manual transplantation.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    tools: ['PTC Creo', 'SolidWorks', 'Mechanism Design', 'Manufacturing']
  },
  {
    id: 'knuckle-joint-design',
    title: 'Design of Knuckle Joint Assembly',
    category: 'Design & Development',
    description: 'Detailed parametric modeling and drafting of a heavy-duty knuckle joint.',
    detailedDescription: 'Engineered a robust knuckle joint assembly for connecting two rods under tensile loading. Focused on optimized pin clearance and fork-end geometry to ensure smooth pivoting while maintaining structural integrity.',
    objective: 'Create a standardized, high-reliability mechanical link for axial load transmission.',
    methodology: 'Developed 3D parametric models in SolidWorks. Generated comprehensive 2D manufacturing drawings in AutoCAD, including GD&T callouts for the pin and eye-end interfaces.',
    results: 'Completed a full set of manufacturing-ready blueprints with precise tolerance stacking analysis.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    tools: ['SolidWorks', 'AutoCAD', 'Mechanical Drafting']
  },
  {
    id: 'cotter-joint-design',
    title: 'Design of Cotter Joint',
    category: 'Design & Development',
    description: 'Precision design of a socket-and-spigot cotter joint for rigid axial connections.',
    detailedDescription: 'Designed a standardized cotter joint used for connecting reciprocating parts. Calculated optimal taper angles for the cotter to ensure self-locking properties and ease of assembly/disassembly.',
    objective: 'Design a joint capable of withstanding significant axial compressive and tensile forces.',
    methodology: 'Utilized PTC Creo for 3D modeling and assembly. Performed geometric validation to ensure proper interference fits and clearances between the socket, spigot, and cotter.',
    results: 'Validated the design for standard industrial applications with a focus on ease of maintenance.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    tools: ['PTC Creo', 'Machine Design', 'Engineering Drawing']
  },
  {
    id: 'gripper-mechanism',
    title: 'Design of Gripper Mechanism',
    category: 'Design & Development',
    description: 'Kinematic design and 3D modeling of a robotic parallel gripper.',
    detailedDescription: 'Developed a mechanical gripper mechanism utilizing a rack-and-pinion drive. Optimized the link lengths to achieve a specific stroke range and parallel jaw movement for precise handling.',
    objective: 'Design an efficient end-effector for pick-and-place automation systems.',
    methodology: 'Modeled using SolidWorks with a focus on kinematic constraints. Analyzed the gear mesh and linkage movement to eliminate potential jamming.',
    results: 'Developed a compact, modular gripper design ready for rapid prototyping and actuator integration.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c307f87730d?auto=format&fit=crop&q=80&w=800',
    tools: ['SolidWorks', 'Mechanism Synthesis', 'Robotics Design']
  },
  {
    id: 'butterfly-valve',
    title: 'Assembly of Butterfly Valve',
    category: 'Design & Development',
    description: 'Complex assembly modeling and flow-path design of an industrial valve.',
    detailedDescription: 'Modeled a complete industrial butterfly valve assembly, including the body, disc, stem, and actuator mounting. Ensured proper sealing interface design and material selection for high-pressure fluid control.',
    objective: 'Create a high-fidelity 3D assembly for fluid simulation and manufacturing documentation.',
    methodology: 'Utilized CATIA V5 for advanced surfacing of the valve disc. Managed the assembly hierarchy to allow for easy part replacements and maintenance simulations.',
    results: 'Generated a full BOM (Bill of Materials) and exploded views for assembly line instructions.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tools: ['CATIA V5', 'Assembly Design', 'Industrial Valves']
  },
  {
    id: 'press-tool',
    title: 'Assembly of Industrial Press Tool',
    category: 'Design & Development',
    description: 'Detailed modeling of a high-tonnage stamping press tool assembly.',
    detailedDescription: 'Designed a multi-component press tool involving die blocks, punch holders, and guide pillars. Incorporated safety features and ejection mechanisms to facilitate high-speed production cycles.',
    objective: 'To develop a rigid and precise tool assembly for industrial metal forming.',
    methodology: 'Assembled in SolidWorks using top-down design techniques. Checked for interferences between moving components during the full stroke of the press.',
    results: 'Completed a production-ready assembly with optimized tool life and reduced maintenance downtime.',
    image: 'https://images.unsplash.com/photo-1504148455328-c39695715583?auto=format&fit=crop&q=80&w=800',
    tools: ['SolidWorks', 'Tool & Die Design', 'Sheet Metal']
  },
  {
    id: 'mini-drill',
    title: 'Design & Fabrication of Mini Drill Machine',
    category: 'Design & Development',
    description: 'Fabrication of a high-precision portable drilling machine for laboratory scale operations.',
    detailedDescription: 'Designed a compact, portable drilling machine focused on ergonomic handling and vibration dampening. Developed the power transmission system using a belt-drive mechanism to achieve variable speeds for different material types (Plastic, Wood, Soft Metals).',
    objective: 'Create a low-cost, high-efficiency vertical drill for small-scale precision work.',
    methodology: 'Detailed drafting in AutoCAD followed by 3D assembly in SolidWorks to check for interference. Fabricated components using lathe and milling operations with a tolerance of ±0.05mm.',
    results: 'Successfully drilled holes up to 6mm diameter in aluminum plates with high dimensional accuracy and minimal run-out.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    tools: ['CAD Modeling', 'Fabrication', 'Mechanical Assembly']
  },

  // --- FEA / RBD PROJECTS ---
  {
    id: 'chassis-fea',
    title: 'Structural Analysis of Chassis',
    category: 'FEA / RBD',
    description: 'Static and dynamic structural analysis to ensure safety under peak load conditions.',
    detailedDescription: 'Performed a full-scale Static Structural analysis of a tubular space-frame chassis. Applied a mesh of 150,000+ tetrahedral elements with local refinement at the weld joints. Analyzed stress distribution under 3G bump, cornering, and braking conditions.',
    objective: 'Evaluate the torsional rigidity and factor of safety (FoS) of the chassis under extreme racing loads.',
    methodology: 'Geometrical cleanup in SpaceClaim, meshing with ANSYS Meshing (Hex-Dominant), and defining Remote Forces to simulate wheel loads. Used Von-Mises stress criteria for failure prediction.',
    results: 'Identified a maximum stress of 185 MPa at the rear suspension mounts. Optimized the tube thickness to achieve a uniform FoS of 2.1 across the frame.',
    image: 'https://images.unsplash.com/photo-1599588210343-467262a2656d?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Mechanical', 'Static Structural', 'SpaceClaim']
  },
  {
    id: 'cantilever-beam',
    title: 'Structural Analysis of Cantilever Beam',
    category: 'FEA / RBD',
    description: 'Validation of numerical FEA methods against classical Euler-Bernoulli beam theory.',
    detailedDescription: 'Conducted a fundamental study on a rectangular cantilever beam subjected to a point load at the free end. This project served as a validation baseline for high-order element types (quadratic vs. linear).',
    objective: 'Compare numerical deflection and bending stress results with theoretical calculations.',
    methodology: 'Modeled using 20-node brick elements (SOLID186) in ANSYS. Performed a mesh convergence study to identify the optimal element size for result stability.',
    results: 'Numerical deflection of 12.45mm vs. Analytical deflection of 12.50mm, demonstrating a high accuracy of 99.6%.',
    image: 'https://images.unsplash.com/photo-1535813543269-73240f855541?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Workbench', 'FEA Validation']
  },
  {
    id: 'knuckle-joint',
    title: 'Structural Analysis of Knuckle Joint',
    category: 'FEA / RBD',
    description: 'Contact stress analysis and pin shear validation of mechanical linkages.',
    detailedDescription: 'Simulated a Knuckle Joint assembly under high-tensile loading. Modeled the complex contact interactions between the pin, fork-end, and eye-end using Frictional Contact formulations.',
    objective: 'Predict shear failure in the pin and crushing failure in the eye-end under axial pull.',
    methodology: 'Applied Augmented Lagrange contact algorithm. Used a fine mesh at the contact interfaces. Defined AISI 4130 steel properties with non-linear plastic deformation data.',
    results: 'Discovered high shear stress at the pin mid-section. Redesigned the joint with a 10% larger pin diameter, increasing load capacity by 25%.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Static Structural', 'Contact Mechanics']
  },
  {
    id: 'excavator-rbd',
    title: 'Rigid Body Dynamics of Excavator Arm',
    category: 'FEA / RBD',
    description: 'Transient motion study of multi-body systems to determine actuator forces.',
    detailedDescription: 'Developed a complete kinematic model of an excavator arm. Analyzed the dynamic forces acting on the joints during a 10-second digging cycle involving soil penetration and lifting.',
    objective: 'Extract joint reaction forces for subsequent component fatigue analysis and hydraulic sizing.',
    methodology: 'Defined Revolute joints and used the Transient Dynamic solver in ANSYS. Applied motion constraints via time-dependent displacement functions.',
    results: 'Successfully calculated a peak hydraulic force of 45kN required for the bucket cylinder. Verified no mechanical locking in the intended workspace.',
    image: 'https://images.unsplash.com/photo-1530268578403-df6e89da0d30?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS RBD', 'Transient Dynamics', 'Kinematics']
  },
  {
    id: 'piston-rbd',
    title: 'Rigid Body Dynamics of Cylinder and Piston',
    category: 'FEA / RBD',
    description: 'Inertial load analysis of IC Engine components at high RPM.',
    detailedDescription: 'Simulated the slider-crank mechanism of a single-cylinder engine operating at 6000 RPM. Evaluated side-thrust forces on the cylinder wall and secondary imbalance loads.',
    objective: 'Determine the timing and magnitude of maximum piston-slap and connecting rod stresses.',
    methodology: 'Used Rigid Body Dynamics with specific joint definitions (Cylindrical and Revolute). Incorporated inertial properties from the 3D CAD model.',
    results: 'Identified critical crank angle for maximum side-thrust (at 15° post-TDC), providing data for friction reduction designs.',
    image: 'https://images.unsplash.com/photo-1517420812314-8e1e9514631a?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS RBD', 'Mechanism Analysis']
  },

  // --- CFD PROJECTS ---
  {
    id: 't-junction-cfd',
    title: 'Fluid Flow Through T-Junction',
    category: 'CFD',
    description: 'Simulation of turbulence and mixing efficiency in branching pipes.',
    detailedDescription: 'Analyzed the pressure drop and velocity distribution when two fluids mix at a 90-degree junction. Focused on the formation of the vena contracta and secondary flow patterns.',
    objective: 'Map the turbulence intensity and identify potential erosion zones caused by high-velocity eddies.',
    methodology: 'Steady-state RANS simulation using the k-epsilon (Realizable) turbulence model. Generated a polyhedral mesh with 10 inflation layers to capture wall effects.',
    results: 'Quantified a pressure drop of 12% across the junction. Proposed a radius at the sharp edge which reduced energy loss by 4%.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'CFD', 'Turbulence Modeling']
  },
  {
    id: 'y-junction-cfd',
    title: 'Fluid Flow Through Y-Junction',
    category: 'CFD',
    description: 'Analysis of flow bifurcation and separation in symmetric splitters.',
    detailedDescription: 'Studied how fluid divides into two 45-degree branches. Investigated the effect of the Reynolds number on the stability of the split flow.',
    objective: 'Determine the separation point at the branch apex and its impact on outlet mass flow consistency.',
    methodology: 'Used k-omega SST model for superior near-wall treatment. Applied mass-flow-inlet and pressure-outlet boundary conditions.',
    results: 'Discovered a 5% flow imbalance due to upstream disturbances. Redesigned the apex geometry to equalize outlet pressures.',
    image: 'https://images.unsplash.com/photo-1535813543269-73240f855541?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'Fluid Dynamics']
  },
  {
    id: 'venturimeter-cfd',
    title: 'Fluid Flow Through Venturimeter',
    category: 'CFD',
    description: 'Calibration of flow measurement devices via numerical pressure-velocity mapping.',
    detailedDescription: 'Modeled a standard Venturi meter to observe the pressure gradient through the throat section. Validated the discharge coefficient calculation.',
    objective: 'Simulate the pressure recovery in the diverging section and calculate the meter constant.',
    methodology: 'Axisymmetric 2D simulation to reduce computational cost while maintaining accuracy. Used high-fidelity boundary layer mesh.',
    results: 'Numerical discharge coefficient (Cd) was calculated as 0.978, within 0.5% of the experimental laboratory value.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'Pressure-Based Solver']
  },
  {
    id: 'internal-3d-flow',
    title: 'Internal Flow Over 3D Object',
    category: 'CFD',
    description: 'Conjugate heat transfer and flow blockage study inside a duct.',
    detailedDescription: 'Analyzed the airflow over a bluff 3D object placed inside a rectangular conduit. Studied the pressure wake and recirculation zones behind the object.',
    objective: 'Evaluate the drag force on the internal object and the resulting downstream flow non-uniformity.',
    methodology: 'Three-dimensional CFD with local mesh refinement using the "Body of Influence" technique. Used k-omega SST model to capture separation.',
    results: 'Identified a high-drag region that caused a 20% increase in fan power requirements. Optimized the object shape to a more streamlined profile.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'Internal CFD']
  },
  {
    id: 'external-3d-flow',
    title: 'External Flow Over 3D Object',
    category: 'CFD',
    description: 'Aerodynamic coefficient study of complex geometries in a free-stream.',
    detailedDescription: 'Simulated the aerodynamic wake of a vehicle-like 3D body in a virtual wind tunnel. Calculated the Drag (Cd) and Lift (Cl) coefficients at various air speeds (20-60 m/s).',
    objective: 'Visualize vortex shedding and pressure distribution across the body surface.',
    methodology: 'External domain meshed with 2 million+ cells. Used Pressure-Far-Field boundary conditions. Implemented the SST k-omega turbulence model.',
    results: 'Visualized the Kármán vortex street in the wake. Provided Cd values that matched empirical data for similar bluff bodies (Cd = 0.32).',
    image: 'https://images.unsplash.com/photo-1564424555153-04228f0aa7ee?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Fluent', 'Aerodynamics', 'Meshing']
  },
  {
    id: 'meshing-volumetric',
    title: 'Volumetric Meshing Techniques',
    category: 'CFD',
    description: 'Study on grid quality metrics for stable and accurate simulations.',
    detailedDescription: 'A specialized project focusing on the generation of high-quality computational grids for complex engine geometries. Compared Tetrahedral, Polyhedral, and Hexcore meshing methods.',
    objective: 'Maximize mesh orthogonality while minimizing skewness and aspect ratio for complex volumes.',
    methodology: 'Used ANSYS Meshing and Fluent Meshing (Watertight Workflow). Evaluated mesh quality using Jacobian and Aspect Ratio checks.',
    results: 'Established a standardized meshing workflow that reduced solver convergence time by 18% without loss of precision.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tools: ['ANSYS Meshing', 'Fluent Meshing', 'Mesh Quality Control']
  }
];

export const SKILLS: Skill[] = [
  // Software Tools
  { name: 'AutoCAD', level: 85, category: 'Software Tools' },
  { name: 'PTC Creo', level: 90, category: 'Software Tools' },
  { name: 'SolidWorks', level: 88, category: 'Software Tools' },
  { name: 'CATIA V5', level: 82, category: 'Software Tools' },
  { name: 'ANSYS Mechanical/Fluent', level: 85, category: 'Software Tools' },
  
  // Engineering Skills
  { name: 'GD&T', level: 78, category: 'Engineering Skills' },
  { name: '2D/3D Modeling', level: 92, category: 'Engineering Skills' },
  { name: 'FEA (Structural/Thermal)', level: 85, category: 'Engineering Skills' },
  { name: 'CFD (Fluent/CFX)', level: 80, category: 'Engineering Skills' },
  
  // Soft Skills
  { name: 'Leadership', level: 85, category: 'Soft Skills' },
  { name: 'Technical Presentation', level: 90, category: 'Soft Skills' },
  { name: 'Critical Problem Solving', level: 88, category: 'Soft Skills' }
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Mechanical Design Mastery', issuer: 'VCADD' },
  { title: 'Professional AutoCAD', issuer: 'Learn Delta' },
  { title: 'Expert in PTC CREO', issuer: 'Access CADD' },
  { title: 'ANSYS FEA Specialist', issuer: 'ARK Infosolutions' },
  { title: 'CATIA V5 Advanced Design', issuer: 'CADCAM GURU' }
];
