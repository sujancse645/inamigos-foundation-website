"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

const categories = ["All", "Plantation", "Education", "Welfare", "Animal Welfare", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    { id: 1, category: "Animal Welfare", title: "Street Dog Feeding", src: "/images/gallery/gallery-1.jpg" },
    { id: 2, category: "Welfare", title: "Blanket Distribution Night", src: "/images/gallery/gallery-2.jpg" },
    { id: 3, category: "Welfare", title: "Blanket Distribution Slum", src: "/images/gallery/gallery-3.jpg" },
    { id: 4, category: "Welfare", title: "Ration Kit Drive", src: "/images/gallery/gallery-4.jpg" },
    { id: 5, category: "Welfare", title: "Hospital Food Distribution", src: "/images/gallery/gallery-5.jpg" },
    { id: 6, category: "Welfare", title: "Elderly Support", src: "/images/gallery/gallery-6.jpg" },
    { id: 7, category: "Welfare", title: "Street Distribution", src: "/images/gallery/gallery-7.jpg" },
    { id: 8, category: "Welfare", title: "Ration Kit Drive", src: "/images/gallery/gallery-8.jpg" },
    { id: 9, category: "Welfare", title: "Food Drive", src: "/images/gallery/gallery-9.jpg" },
    { id: 10, category: "Plantation", title: "Sapling Preparation", src: "/images/gallery/gallery-10.jpg" },
    { id: 11, category: "Education", title: "Slum Children Teaching", src: "/images/gallery/gallery-11.jpg" },
    { id: 12, category: "Education", title: "Street Teaching", src: "/images/gallery/gallery-12.jpg" },
    { id: 13, category: "Events", title: "Republic Day Celebration", src: "/images/gallery/gallery-13.jpg" },
    { id: 14, category: "Events", title: "Flag Distribution", src: "/images/gallery/gallery-14.jpg" },
    { id: 15, category: "Welfare", title: "Food Distribution", src: "/images/gallery/gallery-15.jpg" },
    { id: 16, category: "Welfare", title: "Cloth Distribution", src: "/images/gallery/gallery-16.jpg" },
    { id: 17, category: "Animal Welfare", title: "Feeding Stray Dogs", src: "/images/gallery/gallery-17.jpg" },
    { id: 18, category: "Welfare", title: "Slum Distribution", src: "/images/gallery/gallery-18.jpg" },
    { id: 19, category: "Animal Welfare", title: "Petting Pups", src: "/images/gallery/gallery-19.jpg" },
    { id: 20, category: "Plantation", title: "Tree Planting", src: "/images/gallery/gallery-20.jpg" },
    { id: 21, category: "Welfare", title: "Summer Drink Distribution", src: "/images/gallery/gallery-21.jpg" },
    { id: 22, category: "Animal Welfare", title: "Feeding Street Dog", src: "/images/gallery/gallery-22.jpg" },
    { id: 23, category: "Welfare", title: "Child Nutrition Support", src: "/images/gallery/gallery-23.jpg" }
  ];

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-glow">Impact Gallery</h1>
          <p className="text-foreground/70 text-lg">Visual stories of change from our nationwide campaigns.</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "glass hover:bg-card/80 text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid Placeholder */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
              >
                <GlassCard glowColor="primary" className="p-2 overflow-hidden group cursor-pointer h-[300px] flex flex-col justify-end relative">
                  <img src={img.src} alt={img.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 -z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                  
                  <div className="relative z-10 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">{img.category}</span>
                    <h3 className="text-white font-heading font-bold text-lg">{img.title}</h3>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
