"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Award, ShieldCheck, Target, Heart } from "lucide-react";
import Image from "next/image";

export default function About() {
  const certifications = [
    { title: "Section 8 Registered", desc: "Registered as a Not-for-Profit Company" },
    { title: "80G Certified", desc: "Tax exemption for donors" },
    { title: "12A Registered", desc: "Tax exemption for NGO income" },
    { title: "CSR Certified", desc: "Eligible for Corporate Social Responsibility funding" },
    { title: "NITI Aayog Darpan", desc: "Registered on NGO Darpan portal" },
    { title: "ISO 9001:2015", desc: "Certified for quality management systems" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-glow">About InAmigos</h1>
          <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto">
            Founded with a vision to create a self-sustainable ecosystem, InAmigos Foundation operates at the intersection of youth empowerment and social welfare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold font-heading mb-4 text-glow">Get to Know Us Better</h2>
            <p className="text-foreground/80 leading-relaxed">
              InAmigos Foundation was founded on September 23, 2020, by Mr. Govind Shukla (Founder & CEO). It is a Section 8 registered non-profit organization, licensed by the Central Government. It has its base at Chhattisgarh.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              With a strong network of dedicated professionals, volunteers and corporate partners, we work tirelessly to bring positive change in society. Every contribution is directed towards essential causes such as food distribution, education, women empowerment, animal welfare, environmental sustainability and social inclusion programs across India.
            </p>
            <p className="font-semibold text-primary">Join Us in Making a Difference!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image src="https://inamigosfoundation.org.in/public/storage/settings/1738236437.jpg" alt="About InAmigos" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-white">Govind Shukla</h3>
                <p className="text-primary font-medium text-sm">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard glowColor="primary" className="h-full border-l-4 border-l-primary">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h2 className="text-2xl font-bold font-heading mb-3">Our Mission</h2>
              <p className="text-foreground/70 leading-relaxed">
                To mobilize youth and channel their energy towards productive social causes, ensuring holistic development of marginalized communities while nurturing future leaders.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard glowColor="secondary" className="h-full border-l-4 border-l-secondary">
              <Heart className="w-10 h-10 text-secondary mb-4" />
              <h2 className="text-2xl font-bold font-heading mb-3">Our Vision</h2>
              <p className="text-foreground/70 leading-relaxed">
                A world where every individual, regardless of their background, has access to quality education, a clean environment, and equal opportunities to thrive.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-heading mb-4">Accreditations & Trust</h2>
            <p className="text-foreground/70">We operate with the highest levels of transparency and accountability.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <GlassCard key={index} className="text-center p-4 md:p-6 hover:bg-card/90 transition-all">
                <Award className="w-8 h-8 mx-auto text-amber-500 mb-3" />
                <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
                <p className="text-xs text-foreground/60">{cert.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
