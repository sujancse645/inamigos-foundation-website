"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Send, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-glow">Get In Touch</h1>
          <p className="text-foreground/70 text-lg">Reach out to us for collaborations, queries, or support.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 lg:col-span-1"
          >
            <GlassCard glowColor="primary" className="p-6 flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Head Office</h3>
                <p className="text-foreground/70 text-sm">New Delhi, India<br/>Registered under Section 8, 80G & 12A</p>
              </div>
            </GlassCard>

            <GlassCard glowColor="secondary" className="p-6 flex items-start space-x-4">
              <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-foreground/70 text-sm">+91 98765 43210<br/>Mon - Sat, 9:00 AM - 6:00 PM</p>
              </div>
            </GlassCard>

            <GlassCard glowColor="accent" className="p-6 flex items-start space-x-4">
              <Mail className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-foreground/70 text-sm">info@inamigosfoundation.org.in<br/>support@inamigosfoundation.org.in</p>
              </div>
            </GlassCard>
            
            <AnimatedButton variant="outline" className="w-full justify-center" icon={MessageSquare} href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </AnimatedButton>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <GlassCard glowColor="primary" className="p-8 h-full">
              <h2 className="text-2xl font-bold font-heading mb-6">Send us a Message</h2>
              <form action="/api/contact" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-foreground/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-foreground/30"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Subject</label>
                  <select name="subject" required className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all text-foreground">
                    <option>General Inquiry</option>
                    <option>Volunteer Registration</option>
                    <option>Internship Query</option>
                    <option>Corporate Partnership / CSR</option>
                    <option>Donation Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-foreground/30 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <AnimatedButton type="submit" size="lg" className="w-full justify-center" icon={Send}>
                  Send Message
                </AnimatedButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
