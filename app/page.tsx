"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { ArrowRight, Zap, Layers, Code2, Sparkles, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

const HeroShape = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated geometric shapes */}
    <motion.div
      className="absolute top-20 right-10 w-32 h-32 border-2 border-cyber-yellow/30 dark:border-cyber-yellow/20"
      style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute top-40 right-32 w-16 h-16 bg-cyber-magenta/10"
      style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-32 left-10 w-24 h-24 border border-cyber-cyan/30"
      style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute top-60 left-20 w-8 h-8 bg-cyber-yellow/20"
      animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    
    {/* Grid lines */}
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
      style={{
        backgroundImage: `
          linear-gradient(var(--color-cyber-yellow) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-cyber-yellow) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    />
  </div>
);

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="cyber-card p-6 group"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-cyber-yellow/10 dark:bg-cyber-yellow/5 mb-4 clip-corner-cut">
      <Icon className="w-6 h-6 text-cyber-yellow" />
    </div>
    <h3 className="font-family-electrolize text-lg font-bold mb-2 text-foreground group-hover:text-cyber-yellow transition-colors">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const ComponentShowcase = () => {
  const shapes = [
    { 
      name: "Corner Cut", 
      clip: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
      color: "from-cyber-yellow to-cyber-yellow-bright"
    },
    { 
      name: "Hexagon", 
      clip: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      color: "from-cyber-magenta to-cyber-purple"
    },
    { 
      name: "Arrow", 
      clip: "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
      color: "from-cyber-cyan to-cyber-blue"
    },
    { 
      name: "Notch", 
      clip: "polygon(0 0, 40% 0, 45% 10%, 55% 10%, 60% 0, 100% 0, 100% 100%, 0 100%)",
      color: "from-cyber-green to-cyber-cyan"
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {shapes.map((shape, index) => (
        <motion.div
          key={shape.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative group cursor-pointer"
        >
          <div 
            className={`h-24 bg-gradient-to-br ${shape.color} opacity-80 group-hover:opacity-100 transition-all duration-300`}
            style={{ clipPath: shape.clip }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-family-electrolize font-bold text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {shape.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const CodeBlock = () => {
  const [copied, setCopied] = useState(false);
  const code = `npm install cybercompo`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-cyber-dark dark:bg-cyber-black border border-cyber-yellow/20 p-4 font-mono text-sm clip-corner-cut group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-cyber-magenta">$</span>
          <span className="text-cyber-cyan">{code}</span>
        </div>
        <button 
          onClick={handleCopy}
          className="text-muted-foreground hover:text-cyber-yellow transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-cyber-green" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "20+", label: "Components" },
    { value: "100%", label: "Public Domain" },
    { value: "0kb", label: "Runtime" },
    { value: "∞", label: "Possibilities" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="font-family-electrolize text-4xl md:text-5xl font-bold text-cyber-yellow mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen font-family-electrolize selection:bg-cyber-yellow selection:text-cyber-black">
      <HeroShape />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-cyber-yellow/10 text-cyber-yellow border border-cyber-yellow/30 clip-corner-cut">
              Public Domain · Open Source
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-foreground">Cyber</span>
            <span className="text-cyber-yellow dark:neon-text">Compo</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A collection of <span className="text-cyber-cyan font-semibold">cyberpunk-themed</span> clip-path components 
            for React & Tailwind CSS. Futuristic UI elements with{" "}
            <span className="text-cyber-magenta font-semibold">zero runtime</span> overhead.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/clips">
              <button className="cyber-button flex items-center gap-2 group">
                <span>Browse Components</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="cyber-button-outline flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Shape Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <EncryptedText text="Clip-Path Shapes" className="font-family-electrolize" />
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pre-built geometric shapes using CSS clip-path. No SVGs, no images—pure CSS magic.
            </p>
          </motion.div>
          <ComponentShowcase />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30 dark:bg-cyber-dark/50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why <span className="text-cyber-yellow">CyberCompo</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Built for developers who want futuristic UI without the complexity.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Zap}
              title="Zero Runtime"
              description="Pure CSS clip-paths with no JavaScript overhead. Lightning fast performance."
              delay={0}
            />
            <FeatureCard
              icon={Layers}
              title="Tailwind Native"
              description="Seamlessly integrates with your existing Tailwind CSS workflow."
              delay={0.1}
            />
            <FeatureCard
              icon={Code2}
              title="Copy & Paste"
              description="No npm install needed. Just copy the code and customize as you need."
              delay={0.2}
            />
            <FeatureCard
              icon={Sparkles}
              title="Public Domain"
              description="Free to use, modify, and distribute. No attribution required."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <StatsSection />
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 md:py-24 bg-secondary/30 dark:bg-cyber-dark/50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Started in <span className="text-cyber-cyan">Seconds</span>
            </h2>
            <p className="text-muted-foreground">
              Browse, copy, and paste. It's that simple.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            <CodeBlock />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Or simply browse our components and copy the code directly.
              </p>
              <Link href="/clips">
                <button className="cyber-button-outline text-sm">
                  Explore Components →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cyber-card p-10 md:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-yellow/5 via-transparent to-cyber-magenta/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to go <span className="text-cyber-magenta">Cyberpunk</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Start building futuristic interfaces today with our collection of clip-path components.
              </p>
              <Link href="/clips">
                <button className="cyber-button text-lg px-8 py-4">
                  Start Building
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-family-electrolize font-bold text-lg">CyberCompo</span>
              <span className="text-xs text-muted-foreground">· Public Domain</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/clips" className="hover:text-cyber-yellow transition-colors">
                Components
              </Link>
              <a href="https://github.com" className="hover:text-cyber-yellow transition-colors">
                GitHub
              </a>
              <span>Made with ⚡ for the future</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
