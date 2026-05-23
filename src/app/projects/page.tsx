"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

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
              <GlassCard glowColor={project.color} className="h-full flex flex-col group p-0 overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg ${
                    project.color === "primary" ? "bg-primary/50 text-white" :
                    project.color === "secondary" ? "bg-secondary/50 text-white" :
                    "bg-amber-500/50 text-white"
                  }`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors mb-4">
                    {project.name}
                  </h2>

                  <p className="text-foreground/70 mb-8 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="bg-foreground/5 rounded-xl p-4 mb-6 grid grid-cols-2 gap-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">{key}</p>
                        <p className="font-bold text-foreground font-heading">{value as string}</p>
                      </div>
                    ))}
                  </div>

                  <AnimatedButton 
                    variant={project.color === "primary" ? "primary" : project.color === "secondary" ? "secondary" : "outline"} 
                    className="w-full justify-center"
                    icon={ArrowRight}
                    href={`/projects/${project.id}`}
                  >
                    View Details
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
