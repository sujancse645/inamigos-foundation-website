"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowLeft, Heart } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/10 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/10 blur-[150px] -z-10 rounded-full" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/projects" className="inline-flex items-center text-foreground/70 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        <GlassCard className="p-0 overflow-hidden mb-12">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image 
              src={project.image} 
              alt={project.name} 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg ${
                    project.color === "primary" ? "bg-primary/50 text-white" :
                    project.color === "secondary" ? "bg-secondary/50 text-white" :
                    "bg-amber-500/50 text-white"
                  }`}>
                    <project.icon className="w-8 h-8" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold font-heading text-white drop-shadow-md">
                    {project.name}
                  </h1>
                </div>
              </motion.div>
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold font-heading mb-6">About the Project</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed">
                <p className="text-xl font-medium text-primary mb-6">
                  {project.description}
                </p>
                <p>
                  {project.fullDescription}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <GlassCard glowColor={project.color}>
              <h3 className="text-xl font-bold font-heading mb-6">Project Impact</h3>
              <div className="space-y-6">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="bg-foreground/5 rounded-xl p-4">
                    <p className="text-sm text-foreground/50 uppercase tracking-wider mb-1">{key}</p>
                    <p className={`font-bold text-3xl font-heading ${
                      project.color === "primary" ? "text-primary" :
                      project.color === "secondary" ? "text-secondary" :
                      "text-amber-500"
                    }`}>{value as string}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard glowColor="primary">
              <h3 className="text-xl font-bold font-heading mb-4">Support This Cause</h3>
              <p className="text-foreground/70 mb-6">
                Your contribution can help us expand our reach and make a bigger impact.
              </p>
              <AnimatedButton 
                className="w-full justify-center"
                icon={Heart}
                href="/contact"
              >
                Donate Now
              </AnimatedButton>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
