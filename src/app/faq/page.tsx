"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const faqs = [
  {
    question: "What is InAmigos Foundation?",
    answer: "InAmigos Foundation is a Section 8 registered non-profit organization, founded on September 23, 2020. We focus on youth empowerment, environmental conservation, and social inclusion initiatives across India.",
  },
  {
    question: "Are my donations tax-exempt?",
    answer: "Yes! InAmigos Foundation holds 80G & 12A certifications, which ensures that your donations are tax-exempt under the Indian Income Tax Act.",
  },
  {
    question: "How can I volunteer?",
    answer: "You can apply to be a volunteer through our 'Volunteer' page. Fill out the registration form, and our team will get in touch with you regarding upcoming opportunities.",
  },
  {
    question: "What projects are currently active?",
    answer: "We have several active initiatives including Project SEVA (Food Distribution), Project BACHPANSHALA (Education), Project JEEV (Animal Welfare), Project UDAAN (Women Empowerment), Project PRAKRITI (Environment), and Project VIKAS (Skill Development).",
  },
  {
    question: "Can corporates partner with you?",
    answer: "Absolutely. We are CSR-1 registered and actively collaborate with corporate partners for impactful Corporate Social Responsibility (CSR) initiatives.",
  },
  {
    question: "Where are you located?",
    answer: "Our foundation has its base in Chhattisgarh, but we have a nationwide volunteer network and operate projects across multiple states in India.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Find answers to common questions about our organization, projects, and how you can get involved.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-0 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                  >
                    <span className="font-heading font-bold text-lg">{faq.question}</span>
                    <div className={`shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-primary/20 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-foreground/70 border-t border-border/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
