"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Briefcase, Award, GraduationCap, CheckCircle2 } from "lucide-react";

export default function Internships() {
  const benefits = [
    "ISO Certified Certificate",
    "Letter of Recommendation",
    "Real-world NGO Experience",
    "Mentorship from Industry Leaders",
    "Flexible Working Hours",
    "PPO Opportunity for Top Performers",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[150px] -z-10 rounded-full" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-4 tracking-wider uppercase">
            Career & Impact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-glow">Internship & Volunteer Portal</h1>
          <p className="text-foreground/70 text-lg">
            Join our network of 30,000+ interns who have contributed to social change while building their professional skills and portfolios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard glowColor="primary" className="h-full">
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold font-heading mb-4">Professional Internships</h2>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Our internship programs are designed to provide students with hands-on experience in domains like Digital Marketing, HR, Content Writing, Web Development, and Graphic Design.
              </p>
              
              <h3 className="font-semibold text-lg mb-4 text-foreground">Why Join Us?</h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <AnimatedButton className="w-full justify-center" href="/volunteer">Apply for Internship</AnimatedButton>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard glowColor="secondary" className="h-full">
              <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold font-heading mb-4">Volunteer Program</h2>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Become a change-maker by participating in our on-ground drives. Whether it's planting trees, teaching children, or helping animals, your time makes a difference.
              </p>

              <div className="bg-foreground/5 rounded-xl p-6 mb-8 border border-border">
                <h3 className="font-bold text-lg mb-4 flex items-center"><GraduationCap className="w-5 h-5 mr-2 text-primary"/> Campus Ambassador</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Represent InAmigos Foundation in your college/university. Lead campaigns, organize events, and build a community of youth leaders.
                </p>
                <div className="text-primary text-sm font-medium hover:underline cursor-pointer">Learn More about CA Program &rarr;</div>
              </div>

              <AnimatedButton variant="secondary" className="w-full justify-center" href="/volunteer">Register as Volunteer</AnimatedButton>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
