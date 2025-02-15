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
] 