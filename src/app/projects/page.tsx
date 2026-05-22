"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowRight, Leaf, Users, HeartPulse, GraduationCap, Bird, HandHeart } from "lucide-react";

const projects = [
  {
    id: "vikas",
    name: "Project VIKAS",
    description: "Empowering underprivileged youth through skill development, career counseling, and mentorship programs to build a sustainable future.",
    icon: GraduationCap,
    image: "/images/hero/bachpansala.jpg",
    stats: { beneficiaries: "15,000+", locations: "12 Cities" },
    color: "primary" as const
  },
  {
    id: "prakriti",
    name: "Project PRAKRITI",
    description: "Environmental conservation initiative focusing on massive tree plantation drives, waste management, and climate change awareness.",
    icon: Leaf,
    image: "/images/hero/prakriti.jpg",
    stats: { trees: "20,000+", volunteers: "3,500+" },
    color: "secondary" as const
  },
  {
    id: "seva",
    name: "Project SEVA",
    description: "Community service campaigns addressing immediate social needs including food distribution, cloth donation, and disaster relief.",
    icon: HandHeart,
    image: "/images/hero/sewa.jpg",
    stats: { meals: "50,000+", drives: "120+" },
    color: "accent" as const
  },
  {
    id: "bachpanshala",
    name: "Project BACHPANSHALA",
    description: "Ensuring quality primary education for children in slums and rural areas through evening classes and educational kits.",
    icon: Users,
    image: "/images/hero/bachpansala.jpg",
    stats: { students: "10,000+", centers: "25+" },
    color: "primary" as const
  },
  {
    id: "udaan",
    name: "Project UDAAN",
    description: "Women empowerment program providing vocational training, financial literacy, and entrepreneurial support to women.",
    icon: HeartPulse,
    image: "/images/hero/udaan.jpg",
    stats: { women: "5,000+", businesses: "150+" },
    color: "secondary" as const
  },
  {
    id: "jeev",
    name: "Project JEEV",
    description: "Animal welfare initiative focusing on rescuing, feeding, and providing medical aid to stray and abandoned animals.",
    icon: Bird,
    image: "/images/hero/jeev.jpg",
    stats: { animals: "8,000+", camps: "45+" },
    color: "accent" as const
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 blur-[150px] -z-10 rounded-full" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-glow">Our Projects</h1>
          <p className="text-foreground/70 text-lg md:text-xl">
            Discover the initiatives driving change across communities. Each project is designed to tackle specific social and environmental challenges with measurable impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard glowColor={project.color} className="h-full flex flex-col group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg ${
                    project.color === "primary" ? "bg-primary/20 text-primary shadow-primary/20" :
                    project.color === "secondary" ? "bg-secondary/20 text-secondary shadow-secondary/20" :
                    "bg-amber-500/20 text-amber-500 shadow-amber-500/20"
                  }`}>
                    <project.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors">
                    {project.name}
                  </h2>
                </div>
                
                <div className="w-full h-48 bg-foreground/5 rounded-xl mb-6 overflow-hidden relative">
                  <img src={project.image} alt={project.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>

                <p className="text-foreground/70 mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-foreground/5 rounded-xl p-4 mb-6 grid grid-cols-2 gap-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">{key}</p>
                      <p className="font-bold text-foreground font-heading">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <AnimatedButton 
                    variant={project.color === "primary" ? "primary" : project.color === "secondary" ? "secondary" : "outline"} 
                    className="flex-1 justify-center"
                    href={`/projects/${project.id}`}
                  >
                    View Details
                  </AnimatedButton>
                  <AnimatedButton 
                    variant="outline"
                    className="flex-1 justify-center"
                    href="/donate"
                  >
                    Support
                  </AnimatedButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
