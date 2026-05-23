"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";

const categories = ["All", "Education", "Welfare", "Animal Welfare", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    { id: 1, category: "Education", title: "Project Bachpanshala", src: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg" },
    { id: 2, category: "Welfare", title: "Project Sewa", src: "https://inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg" },
    { id: 3, category: "Welfare", title: "Project Udaan", src: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235638.jpg" },
    { id: 4, category: "Animal Welfare", title: "Project Jeev", src: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg" },
    { id: 5, category: "Events", title: "World Water Day", src: "https://inamigosfoundation.org.in/public/storage/events/1738238109.jpg" },
    { id: 6, category: "Events", title: "International Day of Happiness", src: "https://inamigosfoundation.org.in/public/storage/events/1738135259.jpeg" },
    { id: 7, category: "Events", title: "Women and Girls in Science", src: "https://inamigosfoundation.org.in/public/storage/events/1738134836.jpeg" },
    { id: 8, category: "Welfare", title: "Community Welfare 1", src: "https://inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg" },
    { id: 9, category: "Welfare", title: "Community Welfare 2", src: "https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg" },
    { id: 10, category: "Welfare", title: "Community Welfare 3", src: "https://inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg" },
    { id: 11, category: "Education", title: "Community Welfare 4", src: "https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg" }
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
                  <Image src={img.src} alt={img.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 -z-10" />
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
