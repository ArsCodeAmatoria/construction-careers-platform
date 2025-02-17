import { NextResponse } from 'next/server'

const searchData = {
  programs: [
    {
      title: "Tower Crane Operator",
      description: "Master the operation of tower cranes for high-rise construction. Red Seal certification program.",
      href: "/programs/crane/tower-crane",
      category: "Crane Operations"
    },
    {
      title: "Mobile Crane Operator",
      description: "Learn to operate mobile cranes with Class 3 license training included.",
      href: "/programs/crane/mobile-crane",
      category: "Crane Operations"
    },
    {
      title: "Boom Truck Operator",
      description: "Operate truck-mounted folding boom cranes with unlimited tonnage certification.",
      href: "/programs/crane/boom-truck",
      category: "Crane Operations"
    },
    {
      title: "Marine Pedestal Crane",
      description: "Specialized training for ship-mounted crane operations.",
      href: "/programs/crane/marine",
      category: "Crane Operations"
    },
    {
      title: "BIM Integration",
      description: "Master Building Information Modeling for construction projects.",
      href: "/digital-construction/bim",
      category: "Digital Construction"
    },
    {
      title: "AI in Construction",
      description: "Learn AI and machine learning applications in construction.",
      href: "/digital-construction/ai",
      category: "Digital Construction"
    },
    {
      title: "Solar Integration",
      description: "Learn to integrate solar power systems into construction projects.",
      href: "/technologies/green/solar",
      category: "Green Building"
    },
    {
      title: "Heat Pump Technology",
      description: "Master heat pump systems optimized for BC's climate zones.",
      href: "/technologies/green/heat-pump",
      category: "Green Building"
    },
    {
      title: "Bigfoot Crane Academy",
      description: "Premier crane operator training school in British Columbia.",
      href: "/about",
      category: "Training Institution"
    },
    {
      title: "Rigging Level 1",
      description: "Essential rigging and hoisting skills certification by Bigfoot Crane Academy.",
      href: "/programs/crane/rigging-1",
      category: "Crane Operations"
    },
    {
      title: "Advanced Rigging",
      description: "Advanced rigging certification program from Bigfoot Crane Academy for experienced operators.",
      href: "/programs/crane/rigging-advanced",
      category: "Crane Operations"
    },
    {
      title: "Hoist Operator",
      description: "Bigfoot certified hoist operator training program, 8-week comprehensive course.",
      href: "/programs/crane/hoist-operator",
      category: "Crane Operations"
    }
  ]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase()

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  const results = searchData.programs.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.description.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes('bigfoot') && query.includes('bigfoot')
  )

  return NextResponse.json({ results })
} 