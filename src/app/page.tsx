import { Button } from "@/components/ui/button";
import { Construction, Brain, Cpu, Hammer } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-12 text-center">
      <section className="space-y-4 pt-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          The Future of Construction Careers
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Discover how technology is transforming the construction industry. 
          Explore careers in BIM, AI, automation, and virtual reality.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
          <Link href="/careers">
            <Button size="lg">
              <Construction className="mr-2 h-5 w-5" />
              Explore Careers
            </Button>
          </Link>
          <Link href="/quiz">
            <Button variant="outline" size="lg">
              Find Your Path
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {categories.map((category) => (
          <div key={category.title} className="flex flex-col items-center p-6 border rounded-lg">
            {category.icon}
            <h3 className="mt-4 text-xl font-semibold">{category.title}</h3>
            <p className="mt-2 text-gray-500">{category.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

const categories = [
  {
    title: "BIM & Digital Design",
    icon: <Construction className="h-8 w-8 text-blue-500" />,
    description: "Create and manage digital representations of buildings and infrastructure."
  },
  {
    title: "AI & Automation",
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    description: "Implement AI solutions for construction planning and automation."
  },
  {
    title: "VR & Visualization",
    icon: <Cpu className="h-8 w-8 text-green-500" />,
    description: "Design immersive experiences for construction visualization and training."
  },
];
