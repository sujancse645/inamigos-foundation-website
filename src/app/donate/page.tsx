"use client";

import { motion } from "framer-motion";
import { Heart, CreditCard, Wallet, ArrowRight, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import Image from "next/image";

const impactTiers = [
  { amount: 500, impact: "Provides meals for 10 children for a day." },
  { amount: 1500, impact: "Funds educational supplies for 5 students." },
  { amount: 5000, impact: "Supports a woman's skill development course." },
];

export default function DonatePage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            Make a <span className="text-gradient">Difference</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Your contribution helps us continue our mission of empowering youth, protecting the environment, and aiding the underprivileged. All donations are 80G tax-exempt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard glowColor="primary" className="p-8">
              <h2 className="text-2xl font-bold font-heading mb-6 flex items-center">
                <Heart className="w-6 h-6 text-primary mr-2" />
                Donation Details
              </h2>
              
              <form action="/api/donate" method="POST" className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Select Amount (₹)</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[500, 1000, 2000, 5000, 10000].map((amt) => (
                      <label key={amt} className="cursor-pointer">
                        <input type="radio" name="amount" value={amt} className="peer sr-only" />
                        <div className="text-center py-3 rounded-lg border border-border bg-background/50 hover:bg-primary/10 peer-checked:border-primary peer-checked:bg-primary/20 peer-checked:text-primary transition-all">
                          ₹{amt}
                        </div>
                      </label>
                    ))}
                    <label className="cursor-pointer">
                      <input type="radio" name="amount" value="custom" className="peer sr-only" />
                      <div className="text-center py-3 rounded-lg border border-border bg-background/50 hover:bg-primary/10 peer-checked:border-primary peer-checked:bg-primary/20 peer-checked:text-primary transition-all">
                        Custom
                      </div>
                    </label>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <label className="text-sm font-medium">PAN Number (For 80G Receipt)</label>
                    <input type="text" name="pan" required className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 uppercase" />
                  </div>
                </div>

                <AnimatedButton className="w-full justify-center" type="submit" icon={CreditCard}>
                  Proceed to Payment
                </AnimatedButton>
              </form>
            </GlassCard>
          </motion.div>

          {/* Impact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/donate.png"
                alt="Impact"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold font-heading text-white">Your Impact Matters</h3>
              </div>
            </div>

            <GlassCard>
              <h3 className="text-xl font-bold font-heading mb-4">What Your Money Does</h3>
              <ul className="space-y-4">
                {impactTiers.map((tier) => (
                  <li key={tier.amount} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 mr-3" />
                    <div>
                      <p className="font-semibold">₹{tier.amount}</p>
                      <p className="text-sm text-foreground/70">{tier.impact}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <div className="flex items-center space-x-4 p-4 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <Wallet className="w-8 h-8 shrink-0" />
              <p className="text-sm font-medium">
                Direct Bank Transfer? Contact us at <strong>support@inamigosfoundation.org.in</strong> for account details.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
