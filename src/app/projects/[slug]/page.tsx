import { ArrowLeft, Target, Heart, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedButton } from "@/components/ui/animated-button";

const projectsData = {
  "vikas": {
    title: "Project VIKAS",
    description: "Enhancing employability through skill development programs.",
    image: "/images/hero/bachpansala.jpg",
    objectives: [
      "Vocational training for marginalized youth",
      "Soft skills and interview preparation",
      "Career counseling and placement assistance"
    ],
    impact: "15,000+ Youth Trained",
  },
  "prakriti": {
    title: "Project PRAKRITI",
    description: "Environmental conservation and sustainability efforts.",
    image: "/images/hero/prakriti.jpg",
    objectives: [
      "Nationwide plantation drives",
      "Waste management awareness",
      "Promoting sustainable living practices"
    ],
    impact: "20,000+ Trees Planted",
  },
  "seva": {
    title: "Project SEVA",
    description: "Providing food and clothing to the underprivileged.",
    image: "/images/hero/sewa.jpg",
    objectives: [
      "Weekly food distribution drives",
      "Winter clothing donation camps",
      "Disaster relief support"
    ],
    impact: "50,000+ Meals Distributed",
  },
  "bachpanshala": {
    title: "Project BACHPANSHALA",
    description: "Ensuring quality education for underprivileged children.",
    image: "/images/hero/bachpansala.jpg",
    objectives: [
      "Free evening classes",
      "Distribution of educational kits",
      "Mentorship and holistic development"
    ],
    impact: "10,000+ Children Educated",
  },
  "udaan": {
    title: "Project UDAAN",
    description: "Women empowerment through skill development and financial independence.",
    image: "/images/hero/udaan.jpg",
    objectives: [
      "Skill training workshops for women",
      "Micro-entrepreneurship support",
      "Health and hygiene awareness"
    ],
    impact: "5,000+ Women Empowered",
  },
  "jeev": {
    title: "Project JEEV",
    description: "Animal welfare, including rescue, protection and feeding.",
    image: "/images/hero/jeev.jpg",
    objectives: [
      "Stray animal feeding drives",
      "Medical assistance and rescue operations",
      "Adoption awareness campaigns"
    ],
    impact: "8,000+ Animals Assisted",
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold font-heading mb-4">Project Not Found</h1>
        <p className="text-foreground/70 mb-8">The project you are looking for does not exist.</p>
        <AnimatedButton href="/projects" icon={ArrowLeft}>Back to Projects</AnimatedButton>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] w-full mb-12">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
          <Link href="/projects" className="absolute top-8 left-4 md:left-8 text-foreground/70 hover:text-primary transition-colors flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Projects
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-glow">{project.title}</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-foreground/90">{project.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <GlassCard>
              <h2 className="text-2xl font-bold font-heading mb-6 flex items-center text-primary">
                <Target className="w-6 h-6 mr-3" /> Key Objectives
              </h2>
              <ul className="space-y-4">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start bg-secondary/5 p-4 rounded-xl border border-secondary/10">
                    <span className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mr-3 mt-0.5 text-sm font-bold">{i + 1}</span>
                    <span className="text-foreground/80">{obj}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard glowColor="secondary">
              <h2 className="text-2xl font-bold font-heading mb-6 flex items-center text-secondary">
                <Users className="w-6 h-6 mr-3" /> Our Impact
              </h2>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{project.impact}</div>
              <p className="text-foreground/70">And counting. Every day we strive to increase our reach and help more lives.</p>
            </GlassCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <GlassCard glowColor="primary" className="text-center p-8">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-heading mb-4">Support This Project</h3>
              <p className="text-sm text-foreground/70 mb-6">Your contribution goes directly towards funding the activities of {project.title}.</p>
              <AnimatedButton className="w-full justify-center" href="/donate">Donate Now</AnimatedButton>
            </GlassCard>

            <GlassCard className="text-center p-8">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-heading mb-4">Get Involved</h3>
              <p className="text-sm text-foreground/70 mb-6">Join us on the ground and make a direct impact.</p>
              <AnimatedButton variant="outline" className="w-full justify-center" href="/volunteer">Become a Volunteer</AnimatedButton>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
