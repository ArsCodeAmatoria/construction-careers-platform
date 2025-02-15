export type Career = {
  id: string;
  title: string;
  category: 'trades' | 'crane-operations' | 'technology' | 'heavy-equipment' | 'management';
  description: string;
  salary: string;
  certification: string[];
  skills: string[];
  trainingProvider?: string;
  trainingUrl?: string;
  driverLicense?: {
    class: string;
    endorsements?: string[];
    airBrake?: boolean;
  };
  bcSpecific?: {
    union?: string;
    regulations?: string[];
    additionalCerts?: string[];
    companies?: string[];
    demand?: string;
    regions?: string[];
    certifications?: string[];
  };
  requirements?: string[];
}

export const careers: Career[] = [
  // Traditional Trades
  {
    id: 'carpentry',
    title: 'Carpenter',
    category: 'trades',
    description: 'Build and maintain structures across British Columbia\'s diverse construction landscape, from Vancouver high-rises to remote resource projects.',
    salary: '$35-45/hr in BC (Union rates may be higher)',
    certification: [
      'Red Seal Certification',
      'BC Certificate of Qualification (C of Q)',
      'BCIT Construction Programs'
    ],
    skills: ['Blueprint Reading', 'Math Skills', 'Physical Stamina', 'Problem-solving', 'Manual Dexterity'],
    bcSpecific: {
      union: 'Carpenters Local 1995 - British Columbia',
      regulations: [
        'WorkSafeBC compliance',
        'BC Building Code knowledge'
      ]
    }
  },
  {
    id: 'plumbing',
    title: 'Plumber',
    category: 'trades',
    description: 'Essential trade for BC\'s growing infrastructure, from residential developments in the Lower Mainland to commercial projects across the province.',
    salary: '$38-48/hr in BC (Union scale)',
    certification: [
      'Red Seal Certification',
      'BC Certificate of Qualification',
      'Gas Fitting License (Class B)'
    ],
    skills: ['Technical Knowledge', 'Problem-solving', 'Physical Strength', 'Customer Service'],
    bcSpecific: {
      union: 'UA Local 170 - British Columbia',
      regulations: [
        'BC Safety Authority certification',
        'Cross Connection Control certification'
      ]
    }
  },
  {
    id: 'electrical',
    title: 'Electrician',
    category: 'trades',
    description: 'Power BC\'s construction industry, working on everything from Vancouver\'s Skytrain expansion to northern BC resource projects.',
    salary: '$38-50/hr in BC (Union rates available)',
    certification: [
      'Red Seal Certification',
      'BC Certificate of Qualification',
      'FSR - Field Safety Representative'
    ],
    skills: ['Technical Knowledge', 'Problem-solving', 'Color Vision', 'Physical Dexterity'],
    bcSpecific: {
      union: 'IBEW Local 213 - Vancouver',
      regulations: [
        'Technical Safety BC certification',
        'BC Electrical Code knowledge'
      ]
    }
  },
  
  // Crane Operations
  {
    id: 'tower-crane',
    title: 'Tower Crane Operator',
    category: 'crane-operations',
    description: 'Essential for BC\'s high-rise construction boom, particularly in Vancouver, Burnaby, and Victoria\'s growing skylines.',
    salary: '$40-55/hr in BC (Union rates may vary)',
    certification: [
      'BC Crane Safety Certification',
      'Red Seal Certification'
    ],
    skills: ['Depth Perception', 'Hand-Eye Coordination', 'Communication', 'Safety Awareness'],
    trainingProvider: 'Bigfoot Academy',
    trainingUrl: 'https://bigfootcrane.com/bigfoot-academy/',
    bcSpecific: {
      regulations: [
        'WorkSafeBC Crane Operator Certification',
        'BC Construction Safety Alliance compliance'
      ]
    }
  },
  {
    id: 'mobile-crane',
    title: 'Mobile Crane Operator',
    category: 'crane-operations',
    description: 'Operate mobile cranes across BC\'s diverse construction sites, from Vancouver\'s urban projects to remote resource developments.',
    salary: '$38-52/hr in BC',
    certification: [
      'BC Crane Safety Certification',
      'Red Seal Certification'
    ],
    skills: ['Equipment Knowledge', 'Spatial Awareness', 'Communication', 'Safety Protocols'],
    trainingProvider: 'Bigfoot Academy',
    trainingUrl: 'https://bigfootcrane.com/bigfoot-academy/',
    bcSpecific: {
      regulations: [
        'BC Crane Safety Program compliance',
        'Mobile Crane Operator Program - ITA BC'
      ]
    }
  },
  {
    id: 'stiff-boom',
    title: 'Stiff Boom Crane Operator',
    category: 'crane-operations',
    description: 'Specialized crane operation vital for BC\'s construction and resource sectors, particularly in forestry and mining.',
    salary: '$35-45/hr in BC',
    certification: [
      'BC Crane Safety Certification',
      'Stiff Boom Level A'
    ],
    skills: ['Load Charts', 'Rigging Knowledge', 'Safety Procedures', 'Communication'],
    trainingProvider: 'Bigfoot Academy',
    trainingUrl: 'https://bigfootcrane.com/bigfoot-academy/',
    bcSpecific: {
      regulations: [
        'WorkSafeBC Stiff Boom certification',
        'BC Forest Safety Council compliance'
      ]
    }
  },
  {
    id: 'folding-boom',
    title: 'Folding Boom Crane Operator',
    category: 'crane-operations',
    description: 'Operate versatile folding boom cranes across BC\'s construction sites, particularly useful in urban development projects.',
    salary: '$35-45/hr in BC',
    certification: [
      'BC Crane Safety Certification',
      'Folding Boom Level A'
    ],
    skills: ['Load Assessment', 'Equipment Operation', 'Safety Standards', 'Team Coordination'],
    trainingProvider: 'Bigfoot Academy',
    trainingUrl: 'https://bigfootcrane.com/bigfoot-academy/',
    bcSpecific: {
      regulations: [
        'BC Crane Safety Program certification',
        'WorkSafeBC compliance'
      ]
    }
  },

  // Technology Careers
  {
    id: 'bim-specialist',
    title: 'BIM Specialist',
    category: 'technology',
    description: 'Create and manage Building Information Models for BC construction projects, supporting major developments across Vancouver and the Lower Mainland.',
    salary: '$65,000-95,000/year in BC',
    certification: [
      'Autodesk Certified Professional',
      'BCIT BIM Technology Certificate',
      'CanBIM Certification'
    ],
    skills: [
      'Revit/AutoCAD',
      '3D Modeling',
      'Construction Documentation',
      'Coordination',
      'Technical Communication'
    ],
    bcSpecific: {
      companies: [
        'PCL Construction',
        'EllisDon',
        'Ledcor Group',
        'Clark Builders'
      ],
      regulations: [
        'BC Building Code compliance',
        'WorkSafeBC digital documentation standards'
      ]
    }
  },
  {
    id: 'vr-specialist',
    title: 'VR/AR Construction Specialist',
    category: 'technology',
    description: 'Implement virtual and augmented reality solutions for construction projects across BC, enhancing project visualization and safety training.',
    salary: '$70,000-100,000/year in BC',
    certification: [
      'Unity Certified Developer',
      'Unreal Engine Certification',
      'BCIT Digital Construction Certificate'
    ],
    skills: [
      'VR/AR Development',
      '3D Visualization',
      'Unity/Unreal Engine',
      'Safety Training Design',
      'Project Communication'
    ],
    bcSpecific: {
      companies: [
        'Binnie Construction',
        'Fusion Projects',
        'BC Construction Innovation Hub'
      ],
      regulations: [
        'WorkSafeBC Virtual Training Standards',
        'BC Construction Safety Alliance guidelines'
      ]
    }
  },
  {
    id: 'drone-operator',
    title: 'Construction Drone Specialist',
    category: 'technology',
    description: 'Operate drones for surveying, inspection, and progress monitoring on BC construction sites, from urban developments to remote infrastructure projects.',
    salary: '$60,000-85,000/year in BC',
    certification: [
      'Advanced RPAS Certificate (Transport Canada)',
      'BC Land Surveyors certification',
      'Construction Site Mapping Certification'
    ],
    skills: [
      'Drone Operation',
      'Photogrammetry',
      'Site Mapping',
      'Data Analysis',
      'Safety Protocols'
    ],
    bcSpecific: {
      regulations: [
        'Transport Canada RPAS regulations',
        'BC Privacy Laws for Aerial Photography',
        'WorkSafeBC Aerial Work Standards'
      ],
      companies: [
        'SkyTech Imaging',
        'Vancouver Drone Services',
        'BC Infrastructure Benefits Inc.'
      ]
    }
  },
  {
    id: 'digital-construction-manager',
    title: 'Digital Construction Manager',
    category: 'technology',
    description: 'Lead digital transformation initiatives in BC construction projects, integrating BIM, VR, and drone technologies for improved project delivery.',
    salary: '$85,000-130,000/year in BC',
    certification: [
      'PMP Certification',
      'Digital Construction Management Certificate',
      'CanBIM Manager Certification'
    ],
    skills: [
      'Digital Project Management',
      'BIM Coordination',
      'Technology Integration',
      'Team Leadership',
      'Innovation Strategy'
    ],
    bcSpecific: {
      companies: [
        'Bosa Properties',
        'Anthem Properties',
        'Concert Properties',
        'Ventana Construction'
      ],
      regulations: [
        'BC Construction Standards',
        'Digital Project Delivery Guidelines',
        'BC Building Code Digital Submissions'
      ]
    }
  },
  {
    id: 'heavy-equipment-operator',
    title: 'Heavy Equipment Operator',
    category: 'trades',
    description: 'Operate heavy machinery across BC\'s construction sites, from urban development to resource projects. Work with excavators, bulldozers, and loaders.',
    salary: '$35-50/hr in BC (Union rates may vary)',
    certification: [
      'Heavy Equipment Operator Certificate',
      'BC Ground Disturbance Certificate',
      'IUOE Certification'
    ],
    skills: [
      'Equipment Operation',
      'Safety Protocols',
      'Ground Assessment',
      'Maintenance Knowledge',
      'GPS/Machine Control Systems'
    ],
    bcSpecific: {
      union: 'International Union of Operating Engineers Local 115',
      regulations: [
        'WorkSafeBC Heavy Equipment Standards',
        'BC Construction Safety Alliance compliance',
        'Environmental Operations certification'
      ],
      companies: [
        'Ledcor Construction',
        'Jacob Bros Construction',
        'Mainland Construction Materials',
        'Fraser River Pile & Dredge'
      ]
    }
  },
  {
    id: 'excavator-operator',
    title: 'Excavator Operator',
    category: 'trades',
    description: 'Specialize in precision excavation for BC construction projects, from residential foundations to major infrastructure work.',
    salary: '$35-48/hr in BC (Union scale)',
    certification: [
      'Excavator Operator Certificate',
      'Ground Disturbance Level II',
      'BC Construction Safety Alliance Training'
    ],
    skills: [
      'Precision Control',
      'Site Reading',
      'Grade Checking',
      'Machine Maintenance',
      'Digital Grade Control Systems'
    ],
    bcSpecific: {
      union: 'International Union of Operating Engineers Local 115',
      regulations: [
        'WorkSafeBC Excavation Standards',
        'Municipal Excavation Permits',
        'BC One Call compliance'
      ],
      companies: [
        'Hall Constructors',
        'B&B Contracting',
        'Jack Cewe Construction',
        'Lafarge Canada'
      ]
    }
  },
  {
    id: 'bulldozer-operator',
    title: 'Bulldozer Operator',
    category: 'trades',
    description: 'Shape and grade BC\'s construction landscapes, from residential developments to resource roads in northern BC.',
    salary: '$35-45/hr in BC',
    certification: [
      'Heavy Equipment Operator Certificate',
      'Surface Mining Certification (where applicable)',
      'BC Ground Disturbance Certificate'
    ],
    skills: [
      'Grade Control',
      'Site Preparation',
      'Machine Control Technology',
      'Soil Assessment',
      'Safety Protocols'
    ],
    bcSpecific: {
      union: 'International Union of Operating Engineers Local 115',
      regulations: [
        'WorkSafeBC Heavy Equipment Standards',
        'BC Forest Safety Council certification (for resource work)',
        'Environmental Operations certification'
      ],
      companies: [
        'Arthon Construction',
        'Emil Anderson Construction',
        'Pittman Asphalt',
        'Peter Kiewit Sons'
      ]
    }
  },
  {
    id: 'dump-truck-driver',
    title: 'Dump Truck Driver',
    category: 'heavy-equipment',
    description: 'Transport construction materials across BC construction sites, from urban developments to resource projects.',
    salary: '$30-45/hr in BC (Union rates available)',
    certification: [
      'Class 3 Driver\'s License',
      'Air Brake Endorsement',
      'Transportation of Dangerous Goods (TDG)'
    ],
    skills: [
      'Vehicle Operation',
      'Load Management',
      'Safety Protocols',
      'Route Planning',
      'Equipment Maintenance'
    ],
    driverLicense: {
      class: 'Class 3',
      endorsements: ['Air Brake'],
      airBrake: true
    },
    bcSpecific: {
      union: 'Teamsters Local Union No. 213',
      regulations: [
        'BC Commercial Vehicle Safety Compliance',
        'WorkSafeBC Transportation Standards',
        'Municipal Hauling Permits'
      ],
      companies: [
        'Mainland Construction Materials',
        'Columbia Bitulithic',
        'Ocean Concrete',
        'LaFarge Canada'
      ]
    }
  },
  {
    id: 'lowbed-operator',
    title: 'Lowbed Truck Operator',
    category: 'heavy-equipment',
    description: 'Transport heavy construction equipment throughout BC, specializing in oversized and specialized loads.',
    salary: '$35-50/hr in BC (Union scale)',
    certification: [
      'Class 1 Driver\'s License',
      'Air Brake Endorsement',
      'Heavy Equipment Transport Certification'
    ],
    skills: [
      'Heavy Load Management',
      'Route Planning',
      'Equipment Securing',
      'Permit Compliance',
      'Safety Protocols'
    ],
    driverLicense: {
      class: 'Class 1',
      endorsements: ['Air Brake'],
      airBrake: true
    },
    bcSpecific: {
      union: 'Teamsters Local Union No. 213',
      regulations: [
        'BC Commercial Transport Regulations',
        'Oversize Load Permits',
        'BC Highway Load Restrictions'
      ],
      companies: [
        'Triton Transport',
        'Island Tractor',
        'Western Equipment Transport',
        'United Rentals'
      ]
    }
  },
  {
    id: 'concrete-mixer-driver',
    title: 'Concrete Mixer Driver',
    category: 'heavy-equipment',
    description: 'Deliver ready-mix concrete to construction sites across BC\'s Lower Mainland and beyond.',
    salary: '$32-45/hr in BC',
    certification: [
      'Class 3 Driver\'s License',
      'Air Brake Endorsement',
      'Concrete Delivery Certification'
    ],
    skills: [
      'Mixer Operation',
      'Time Management',
      'Quality Control',
      'Site Safety',
      'Customer Service'
    ],
    driverLicense: {
      class: 'Class 3',
      endorsements: ['Air Brake'],
      airBrake: true
    },
    bcSpecific: {
      union: 'Teamsters Local Union No. 213',
      regulations: [
        'WorkSafeBC Concrete Delivery Standards',
        'BC Commercial Vehicle Safety',
        'Environmental Regulations'
      ],
      companies: [
        'Ocean Concrete',
        'Butler Concrete',
        'Lafarge Canada',
        'Columbia Ready-Mix'
      ]
    }
  },
  {
    id: 'fuel-truck-driver',
    title: 'Construction Fuel Truck Driver',
    category: 'heavy-equipment',
    description: 'Supply fuel to construction equipment and sites across BC, ensuring continuous operations.',
    salary: '$32-45/hr in BC',
    certification: [
      'Class 3 Driver\'s License with Air Brake',
      'TDG Certification',
      'WHMIS Certification',
      'Petroleum Transport Certification'
    ],
    skills: [
      'Fuel Delivery',
      'Safety Protocols',
      'Hazmat Handling',
      'Equipment Maintenance',
      'Documentation'
    ],
    driverLicense: {
      class: 'Class 3',
      endorsements: ['Air Brake', 'TDG'],
      airBrake: true
    },
    bcSpecific: {
      union: 'Teamsters Local Union No. 213',
      regulations: [
        'BC Fuel Transport Regulations',
        'WorkSafeBC Hazardous Materials Standards',
        'Environmental Emergency (E2) Regulations'
      ],
      companies: [
        '4Refuel',
        'Coastal Mountain Fuels',
        'North Arm Transportation',
        'Parkland Corporation'
      ]
    }
  },
  {
    id: 'pipeline-welder',
    title: 'Pipeline Welder',
    category: 'trades',
    description: 'Specialize in welding for BC\'s expanding LNG and pipeline projects, particularly in northern BC and coastal regions.',
    salary: '$45-65/hr in BC (Union rates)',
    certification: [
      'Red Seal Welding Certification',
      'CWB Certification',
      'Pipeline Welding Endorsement',
      'Pressure Vessel Certification'
    ],
    skills: [
      'Pipeline Welding Techniques',
      'Quality Control',
      'Blueprint Reading',
      'Safety Protocols',
      'Material Knowledge'
    ],
    bcSpecific: {
      union: 'UA Local 170 Pipefitters',
      regulations: [
        'Technical Safety BC Standards',
        'BC Oil and Gas Commission Standards',
        'CWB Certification Requirements'
      ],
      companies: [
        'LNG Canada',
        'Coastal GasLink',
        'Trans Mountain Pipeline',
        'Ledcor Pipeline'
      ]
    }
  },
  {
    id: 'pipeline-inspector',
    title: 'Pipeline Construction Inspector',
    category: 'trades',
    description: 'Ensure quality and safety standards in BC\'s pipeline construction projects, from LNG facilities to distribution networks.',
    salary: '$85,000-120,000/year in BC',
    certification: [
      'NACE Pipeline Inspector Certification',
      'API Pipeline Inspector Certification',
      'BC Safety Authority Certification'
    ],
    skills: [
      'Quality Control',
      'Regulatory Compliance',
      'Technical Documentation',
      'Project Management',
      'Safety Standards'
    ],
    bcSpecific: {
      regulations: [
        'BC Oil and Gas Commission Requirements',
        'Environmental Assessment Standards',
        'First Nations Consultation Guidelines'
      ],
      companies: [
        'TC Energy',
        'Enbridge',
        'FortisBC',
        'Coastal GasLink'
      ]
    }
  },
  {
    id: 'gas-plant-operator',
    title: 'LNG Plant Construction Operator',
    category: 'trades',
    description: 'Operate and maintain equipment during construction of BC\'s LNG facilities, focusing on Kitimat and Prince Rupert regions.',
    salary: '$40-60/hr in BC',
    certification: [
      'Power Engineering Certification',
      'Gas Process Operator Certificate',
      'WHMIS Certification',
      'Confined Space Entry'
    ],
    skills: [
      'Process Operations',
      'Safety Systems',
      'Equipment Monitoring',
      'Emergency Response',
      'Environmental Compliance'
    ],
    bcSpecific: {
      union: 'IUOE Local 115',
      regulations: [
        'BC Oil and Gas Commission Standards',
        'WorkSafeBC Industrial Standards',
        'Environmental Operations Certification'
      ],
      companies: [
        'LNG Canada',
        'Woodfibre LNG',
        'Chevron Canada',
        'Shell Canada'
      ]
    }
  },
  {
    id: 'environmental-monitor',
    title: 'Environmental Monitor - Oil & Gas',
    category: 'technology',
    description: 'Monitor environmental compliance during construction of BC\'s energy projects, ensuring protection of sensitive ecosystems.',
    salary: '$75,000-95,000/year in BC',
    certification: [
      'Environmental Professional Certification',
      'Registered Professional Biologist (RPBio)',
      'Environmental Monitoring Certificate'
    ],
    skills: [
      'Environmental Assessment',
      'Regulatory Compliance',
      'Wildlife Management',
      'Water Quality Monitoring',
      'Reporting'
    ],
    bcSpecific: {
      regulations: [
        'BC Environmental Assessment Act',
        'Species at Risk Act Compliance',
        'First Nations Environmental Standards'
      ],
      companies: [
        'Coastal GasLink',
        'Environmental Dynamics Inc.',
        'Hemmera',
        'Stantec'
      ]
    }
  },
  {
    id: 'pipeline-equipment-operator',
    title: 'Pipeline Equipment Operator',
    category: 'heavy-equipment',
    description: 'Operate specialized equipment for pipeline construction across BC\'s diverse terrain, from coastal regions to northern projects.',
    salary: '$38-55/hr in BC',
    certification: [
      'Pipeline Construction Safety Training',
      'Heavy Equipment Operator Certification',
      'Ground Disturbance Level II'
    ],
    skills: [
      'Pipeline Equipment Operation',
      'Terrain Assessment',
      'Safety Protocols',
      'Environmental Protection',
      'Team Coordination'
    ],
    bcSpecific: {
      union: 'IUOE Local 115',
      regulations: [
        'BC Oil and Gas Commission Standards',
        'WorkSafeBC Pipeline Standards',
        'Environmental Operations Requirements'
      ],
      companies: [
        'Surerus Pipeline',
        'SA Energy Group',
        'Macro Pipelines',
        'Banister Pipelines'
      ]
    }
  },
  {
    id: 'sustainability-coordinator',
    title: 'Construction Sustainability Coordinator',
    category: 'technology',
    description: 'Lead sustainable building practices and LEED certification processes for BC construction projects.',
    salary: '$70,000-95,000/year in BC',
    certification: [
      'LEED Green Associate',
      'LEED AP Building Design + Construction',
      'Passive House Certification',
      'BC Energy Step Code Training'
    ],
    skills: [
      'Green Building Standards',
      'Sustainability Assessment',
      'Energy Modeling',
      'Environmental Compliance',
      'Project Documentation'
    ],
    bcSpecific: {
      regulations: [
        'BC Energy Step Code',
        'Vancouver Green Building Policy',
        'BC Building Code Sustainability Requirements'
      ],
      companies: [
        'Perkins & Will',
        'Dialog Design',
        'Integral Group',
        'Fast + Epp'
      ]
    }
  },
  {
    id: 'energy-modeler',
    title: 'Building Energy Modeler',
    category: 'technology',
    description: 'Model and optimize energy performance for BC\'s sustainable construction projects and retrofits.',
    salary: '$75,000-110,000/year in BC',
    certification: [
      'Certified Energy Modeler (ASHRAE)',
      'BC Energy Step Code Certification',
      'Building Energy Specialist',
      'Energy Management Certificate'
    ],
    skills: [
      'Energy Simulation Software',
      'Building Performance Analysis',
      'Technical Report Writing',
      'HVAC Systems Knowledge',
      'Renewable Energy Integration'
    ],
    bcSpecific: {
      regulations: [
        'BC Energy Step Code Requirements',
        'Clean BC Building Innovation Fund Guidelines',
        'Municipal Green Building Requirements'
      ],
      companies: [
        'Stantec',
        'RDH Building Science',
        'Morrison Hershfield',
        'WSP Canada'
      ]
    }
  },
  {
    id: 'renewable-systems-installer',
    title: 'Renewable Energy Systems Installer',
    category: 'trades',
    description: 'Install and maintain solar, geothermal, and other renewable energy systems in BC buildings.',
    salary: '$38-52/hr in BC',
    certification: [
      'Red Seal Electrician',
      'Solar PV Installation Certification',
      'Heat Pump Installation Certificate',
      'NABCEP Certification'
    ],
    skills: [
      'Solar PV Installation',
      'Geothermal Systems',
      'Heat Pump Technology',
      'Electrical Systems',
      'Renewable Integration'
    ],
    bcSpecific: {
      union: 'IBEW Local 213',
      regulations: [
        'Technical Safety BC Standards',
        'BC Renewable Energy Requirements',
        'Clean BC Program Standards'
      ],
      companies: [
        'Shift Energy',
        'Terratek Energy',
        'Vancouver Renewable Energy',
        'Empower Energy'
      ]
    }
  },
  {
    id: 'green-building-inspector',
    title: 'Green Building Inspector',
    category: 'technology',
    description: 'Inspect and verify sustainable construction practices and energy efficiency measures across BC projects.',
    salary: '$75,000-100,000/year in BC',
    certification: [
      'Building Officials Certification',
      'LEED Green Associate',
      'Energy Code Compliance Specialist',
      'BC Energy Step Code Verifier'
    ],
    skills: [
      'Building Code Knowledge',
      'Energy Efficiency Standards',
      'Inspection Protocols',
      'Documentation Review',
      'Compliance Verification'
    ],
    bcSpecific: {
      regulations: [
        'BC Building Code (Part 10)',
        'Vancouver Building Bylaw',
        'BC Energy Step Code',
        'Zero Carbon Building Standards'
      ],
      companies: [
        'City of Vancouver',
        'City of Surrey',
        'BC Housing',
        'Passive House Canada'
      ]
    }
  },
  {
    id: 'waste-management-specialist',
    title: 'Construction Waste Management Specialist',
    category: 'technology',
    description: 'Develop and implement waste reduction strategies for BC construction projects, focusing on recycling and circular economy principles.',
    salary: '$65,000-85,000/year in BC',
    certification: [
      'Waste Management Professional',
      'LEED Materials & Resources Specialist',
      'Construction Waste Recycling Certificate',
      'Environmental Management Systems'
    ],
    skills: [
      'Waste Reduction Planning',
      'Recycling Programs',
      'Material Recovery',
      'Regulatory Compliance',
      'Data Analysis'
    ],
    bcSpecific: {
      regulations: [
        'Metro Vancouver Waste Regulations',
        'BC Construction Waste Guidelines',
        'Clean BC Waste Reduction Requirements'
      ],
      companies: [
        'Urban Impact Recycling',
        'Sea to Sky Removal',
        'Revolution Resource Recovery',
        'Recycling Alternative'
      ]
    }
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    category: 'management',
    description: 'Lead and oversee construction projects from inception to completion.',
    salary: '$85,000 - $150,000',
    requirements: [
      'Bachelor's degree in Construction Management, Engineering, or related field',
      '5+ years of construction experience',
      'PMP certification preferred',
      'Strong leadership and communication skills'
    ],
    bcSpecific: {
      demand: 'High',
      regions: ['Vancouver', 'Victoria', 'Kelowna', 'Prince George'],
      certifications: ['Gold Seal Certification', 'PMP'],
      regulations: [
        'WorkSafeBC OHS Regulations',
        'BC Building Code compliance'
      ]
    },
    trainingProvider: 'BCIT',
    trainingUrl: 'https://www.bcit.ca/programs/construction-management/'
  },
  {
    id: 'field-coordinator',
    title: 'Field Coordinator',
    category: 'management',
    description: 'Coordinate on-site construction activities and resources.',
    salary: '$65,000 - $95,000',
    requirements: [
      'Diploma in Construction or related field',
      '3+ years field experience',
      'Strong organizational skills',
      'Experience with construction scheduling software'
    ],
    bcSpecific: {
      demand: 'High',
      regions: ['Lower Mainland', 'Vancouver Island', 'Interior'],
      certifications: ['Construction Safety Officer'],
      regulations: [
        'WorkSafeBC safety coordination requirements'
      ]
    }
  },
  {
    id: 'project-coordinator',
    title: 'Project Coordinator',
    category: 'management',
    description: 'Support project management team with documentation and coordination.',
    salary: '$55,000 - $85,000',
    requirements: [
      'Diploma or degree in Construction Management',
      '2+ years construction experience',
      'Proficiency in project management software',
      'Strong administrative skills'
    ],
    bcSpecific: {
      demand: 'High',
      regions: ['Metro Vancouver', 'Victoria', 'Kelowna'],
      certifications: ['Construction Documentation Technician'],
      regulations: [
        'Contract administration requirements',
        'Document control procedures'
      ]
    }
  },
  {
    id: 'structural-superintendent',
    title: 'Structural Superintendent',
    category: 'management',
    description: 'Oversee structural construction aspects of major projects.',
    salary: '$90,000 - $140,000',
    requirements: [
      'Extensive experience in structural construction',
      '10+ years construction experience',
      'Strong technical knowledge of structural systems',
      'Leadership experience'
    ],
    bcSpecific: {
      demand: 'High',
      regions: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond'],
      certifications: ['Gold Seal Certification'],
      union: 'Optional - varies by employer',
      regulations: [
        'BC Building Code structural requirements',
        'Seismic construction standards'
      ]
    }
  },
  {
    id: 'interior-superintendent',
    title: 'Interior Finishing Superintendent',
    category: 'management',
    description: 'Manage interior finishing phase of construction projects.',
    salary: '$85,000 - $130,000',
    requirements: [
      'Extensive experience in interior finishing trades',
      '8+ years construction experience',
      'Knowledge of multiple finishing trades',
      'Quality control experience'
    ],
    bcSpecific: {
      demand: 'Medium-High',
      regions: ['Lower Mainland', 'Victoria', 'Kelowna'],
      certifications: ['Gold Seal Certification'],
      union: 'Optional - varies by employer',
      regulations: [
        'BC Building Code interior requirements',
        'Finishing standards compliance'
      ]
    }
  }
] 