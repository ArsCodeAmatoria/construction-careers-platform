export type Career = {
  id: string;
  title: string;
  category: 'trades' | 'crane-operations' | 'technology';
  description: string;
  salary: string;
  certification: string[];
  skills: string[];
  trainingProvider?: string;
  trainingUrl?: string;
  bcSpecific?: {
    union?: string;
    regulations?: string[];
    additionalCerts?: string[];
    companies?: string[];
  };
}

export const careers: Career[] = [
  // Traditional Trades
  {
    id: 'carpentry',
    title: 'Carpenter',
    category: 'trades',
    description: 'Build and maintain structures across British Columbia's diverse construction landscape, from Vancouver high-rises to remote resource projects.',
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
    description: 'Essential trade for BC's growing infrastructure, from residential developments in the Lower Mainland to commercial projects across the province.',
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
    description: 'Power BC's construction industry, working on everything from Vancouver's Skytrain expansion to northern BC resource projects.',
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
    description: 'Essential for BC's high-rise construction boom, particularly in Vancouver, Burnaby, and Victoria's growing skylines.',
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
    description: 'Operate mobile cranes across BC's diverse construction sites, from Vancouver's urban projects to remote resource developments.',
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
    description: 'Specialized crane operation vital for BC's construction and resource sectors, particularly in forestry and mining.',
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
    description: 'Operate versatile folding boom cranes across BC's construction sites, particularly useful in urban development projects.',
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
  }
] 