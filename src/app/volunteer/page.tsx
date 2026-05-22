"use client";

import { motion } from "framer-motion";
import { Users, Calendar, HeartHandshake, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import Image from "next/image";
import Link from "next/link";

const volunteers = [
  {
    name: "Faiz Khan",
    role: "Volunteer Supervisor, Uttar Pradesh",
    image: "/images/volunteers/volunteer-faiz.jpg",
  },
  {
    name: "Manavi Jaiswal",
    role: "Junior Volunteer Associate",
    image: "/images/volunteers/volunteer-manavi.jpg",
  },
  {
    name: "Akash .",
    role: "Volunteer Associate",
    image: "/images/volunteers/volunteer-akash.jpg",
  },
];

const opportunities = [
  {
    title: "Project SEVA - Food Distribution",
    location: "Nationwide",
    date: "Every Weekend",
    icon: HeartHandshake,
  },
  {
    title: "Project PRAKRITI - Plantation Drive",
    location: "Multiple Cities",
    date: "Monthly",
    icon: Calendar,
  },
  {
    title: "Project BACHPANSHALA - Teaching",
    location: "Local Centers",
    date: "Flexible",
    icon: Users,
  },
];

export default function VolunteerPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            Become a <span className="text-gradient">Volunteer</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join our nationwide network of changemakers. Step in, stand out, and create a lasting impact on society.
          </p>
          <div className="mt-8">
            <AnimatedButton size="lg" href="#register">
              Join Us Now
            </AnimatedButton>
          </div>
        </motion.div>

        {/* Our Volunteers */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-glow mb-4">Meet Our Volunteers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteers.map((vol, idx) => (
              <motion.div
                key={vol.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col items-center text-center group overflow-hidden p-0">
                  <div className="w-full h-64 relative overflow-hidden">
                    <Image
                      src={vol.image}
                      alt={vol.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading mb-2">{vol.name}</h3>
                    <p className="text-foreground/70">{vol.role}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Opportunities */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-glow mb-4">Current Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard glowColor="secondary" className="group h-full flex flex-col cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                    <opp.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-2">{opp.title}</h3>
                  <div className="text-sm text-foreground/60 space-y-1 mb-4 flex-1">
                    <p>📍 {opp.location}</p>
                    <p>🕒 {opp.date}</p>
                  </div>
                  <Link href="#register" className="text-secondary text-sm font-medium flex items-center group-hover:underline">
                    Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section id="register" className="max-w-2xl mx-auto scroll-m-32">
          <GlassCard glowColor="primary" className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-heading mb-2">Volunteer Registration</h2>
              <p className="text-foreground/70">Fill out the form below to start your journey with us.</p>
            </div>
            
            <form action="/api/volunteer" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input type="text" name="name" required className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input type="tel" name="phone" required className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Area of Interest</label>
                <select name="interest" className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="education">Education & Teaching</option>
                  <option value="environment">Environment & Plantation</option>
                  <option value="food">Food Distribution</option>
                  <option value="animal">Animal Welfare</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message (Optional)</label>
                <textarea name="message" rows={4} className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50"></textarea>
              </div>
              
              <AnimatedButton className="w-full justify-center" type="submit">
                Submit Application
              </AnimatedButton>
            </form>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
