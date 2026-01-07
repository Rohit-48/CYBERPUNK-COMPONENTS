"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type CardProps = {
  heading: string;
  description: string;
  imageUrl: string;
  slug?: string;
  category?: string;
  className?: string;
};

export const Card = ({
  heading,
  description,
  imageUrl,
  slug,
  category,
  className = "",
}: CardProps) => {
  const clipPathStyle = `polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% 100%,
    20px 100%,
    0 calc(100% - 20px)
  )`;

  const innerClipPath = `polygon(
    0 0,
    calc(100% - 18px) 0,
    100% 18px,
    100% 100%,
    18px 100%,
    0 calc(100% - 18px)
  )`;

  const CardContent = () => (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      {/* Outer border with gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyber-yellow via-cyber-magenta to-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ clipPath: clipPathStyle }}
      />
      
      {/* Border layer */}
      <div
        className="relative p-[2px] bg-border dark:bg-cyber-yellow/20 group-hover:bg-transparent transition-colors duration-500"
        style={{ clipPath: clipPathStyle }}
      >
        {/* Card content */}
        <div
          className={`relative bg-card dark:bg-cyber-dark overflow-hidden ${className}`}
          style={{ clipPath: innerClipPath }}
        >
          {/* Top accent line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-yellow via-cyber-magenta to-cyber-cyan opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)" }}
          />
          
          {/* Image container */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 via-transparent to-transparent z-10"
            />
            <img
              src={imageUrl}
              alt={heading}
              className="w-full h-44 object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Category badge */}
            {category && (
              <div className="absolute top-3 left-3 z-20">
                <span 
                  className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-cyber-black/80 text-cyber-yellow border border-cyber-yellow/30"
                  style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
                >
                  {category}
                </span>
              </div>
            )}
            
            {/* Hover overlay */}
            {slug && (
              <div className="absolute inset-0 bg-cyber-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-cyber-yellow/20 backdrop-blur-sm flex items-center justify-center border border-cyber-yellow/50">
                  <ArrowUpRight className="w-5 h-5 text-cyber-yellow" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-family-electrolize font-bold text-lg text-foreground mb-2 group-hover:text-cyber-yellow transition-colors duration-300">
              {heading}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {description}
            </p>

            {slug && (
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-cyber-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Component</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            )}
          </div>
          
          {/* Bottom corner accent */}
          <div 
            className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-cyber-yellow/20 to-transparent"
          />
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "0 0 40px rgba(240, 225, 48, 0.15)",
          clipPath: clipPathStyle,
        }}
      />
    </motion.div>
  );

  if (slug) {
    return (
      <Link href={`/clips/${slug}`} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};
