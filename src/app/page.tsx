"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, TreePine, GraduationCap, HeartHandshake } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlassCard } from "@/components/ui/glass-card";
import { Particles } from "@/components/ui/particles";
import { projects } from "@/data/projects";
import Image from "next/image";

const stats = [
  { icon: Users, label: "Lives Impacted", value: "50,000+" },
  { icon: GraduationCap, label: "Interns Trained", value: "30,000+" },
  { icon: TreePine, label: "Trees Planted", value: "20,000+" },
  { icon: HeartHandshake, label: "Active Volunteers", value: "200+" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-4 tracking-wider">
              EMPOWERING THE YOUTH, CHANGING THE WORLD
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              A Platform For <br className="hidden md:block" />
              <span className="text-gradient">Real Impact</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              InAmigos Foundation is dedicated to driving sustainable social change through youth engagement, environmental conservation, and educational empowerment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <AnimatedButton size="lg" icon={ArrowRight} href="/projects">
                Explore Our Projects
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg" href="/internships">
                Join as a Volunteer
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 relative z-10 bg-card/30 backdrop-blur-md border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-foreground">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base text-foreground/60 uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-glow">Our Core Initiatives</h2>
            <p className="text-foreground/70 text-lg">
              Through focused projects, we address critical social issues and bring tangible improvements to society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => window.location.href = `/projects/${project.id}`}
              >
                <GlassCard glowColor={project.color} className="h-full flex flex-col group cursor-pointer p-6">
                  <div className="w-full h-48 bg-foreground/5 rounded-xl mb-6 overflow-hidden relative">
                    <Image src={project.image} alt={project.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-foreground/70 mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:underline">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <AnimatedButton variant="outline" href="/projects">View All Projects</AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}
