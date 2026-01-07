"use client";
import { Card } from "@/components/card";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { motion } from "motion/react";
import { Search, Filter, Layers } from "lucide-react";
import { useState } from "react";

const components = [
  {
    heading: "Neuro-Spine",
    description: "A futuristic card component with angular clip-path edges and neon accent borders.",
    imageUrl: "/Logos.png",
    slug: "Neuro-Spine",
    category: "Cards",
  },
  {
    heading: "Encrypted Text",
    description: "Matrix-style text animation that decrypts characters on scroll into view.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400",
    slug: "encrypted-text",
    category: "Text",
  },
  {
    heading: "Glow Button",
    description: "Interactive button with neon glow effects and smooth hover animations.",
    imageUrl: "https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?w=400",
    slug: "glow-button",
    category: "Buttons",
  },
  {
    heading: "Particle Background",
    description: "Animated particle system creating dynamic backgrounds with interconnected nodes.",
    imageUrl: "/Logos.png",
    slug: "particle-background",
    category: "Backgrounds",
  },
  {
    heading: "Hex Grid",
    description: "Honeycomb-style grid layout with hexagonal clip-path cells.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    slug: "hex-grid",
    category: "Layouts",
  },
  {
    heading: "Corner Notch",
    description: "Classic cyberpunk corner-cut container with animated border gradients.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
    slug: "corner-notch",
    category: "Cards",
  },
];

const categories = ["All", "Cards", "Buttons", "Text", "Backgrounds", "Layouts"];

export default function ComponentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredComponents = components.filter((component) => {
    const matchesSearch = component.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || component.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12 font-family-electrolize selection:bg-cyber-yellow selection:text-cyber-black">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest bg-cyber-yellow/10 text-cyber-yellow border border-cyber-yellow/30 clip-corner-cut">
          <Layers className="w-3 h-3" />
          <span>Component Library</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <EncryptedText
            text="Components"
            className="font-family-electrolize"
          />
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Discover our collection of cyberpunk-themed clip-path components. 
          Each piece is designed for maximum visual impact.
        </p>
      </motion.div>

      {/* Search & Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto mb-10"
      >
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-background border border-border dark:border-cyber-yellow/20 focus:border-cyber-yellow focus:outline-none transition-colors font-family-electrolize text-sm"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyber-yellow text-cyber-black"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
              style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredComponents.map((component, index) => (
          <motion.div
            key={component.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card
              heading={component.heading}
              description={component.description}
              imageUrl={component.imageUrl}
              slug={component.slug}
              category={component.category}
            />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredComponents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold mb-2">No components found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria.
          </p>
        </motion.div>
      )}

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-border dark:border-cyber-yellow/10 text-center"
      >
        <p className="text-sm text-muted-foreground">
          Showing <span className="text-cyber-yellow font-bold">{filteredComponents.length}</span> of{" "}
          <span className="text-foreground font-bold">{components.length}</span> components
        </p>
      </motion.div>
    </div>
  );
}
