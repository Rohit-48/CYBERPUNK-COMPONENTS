"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Components",
    path: "/clips",
  },
];

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative">
        <div 
          className="w-10 h-10 bg-gradient-to-br from-cyber-yellow to-cyber-yellow-bright flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(240,225,48,0.5)]"
          style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
        >
          <Image 
            src="/Logos.png" 
            alt="Logo" 
            width={32} 
            height={32} 
            className="w-7 h-7"
          />
        </div>
      </div>
      <span className="text-lg font-bold font-family-electrolize tracking-tight">
        <span className="text-foreground">Cyber</span>
        <span className="text-cyber-yellow">Compo</span>
      </span>
    </Link>
  );
};

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <Link href={href} className="relative group">
    <span className={`font-family-electrolize font-semibold text-sm uppercase tracking-wider transition-colors duration-300 ${
      isActive 
        ? "text-cyber-yellow" 
        : "text-foreground/80 hover:text-cyber-yellow"
    }`}>
      {children}
    </span>
    <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyber-yellow transition-all duration-300 ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`} />
  </Link>
);

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 pt-4"
    >
      <nav
        className="relative mx-auto max-w-5xl bg-background/80 backdrop-blur-xl border border-border dark:border-cyber-yellow/20 px-4 sm:px-6 lg:px-8 transition-all duration-300 hover:border-cyber-yellow/40"
        style={{
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
        }}
      >
        {/* Accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-yellow via-cyber-magenta to-cyber-cyan"
          style={{
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)",
          }}
        />
        
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.label} 
                href={item.path}
                isActive={pathname === item.path}
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="flex items-center gap-3 pl-4 border-l border-border dark:border-cyber-yellow/20">
              <ModeToggle />
              <Link href="/clips">
                <button 
                  className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-cyber-yellow text-cyber-black transition-all duration-300 hover:shadow-[0_0_15px_rgba(240,225,48,0.5)] hover:-translate-y-0.5"
                  style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-cyber-yellow transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-border dark:border-cyber-yellow/20 mt-2 pt-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-family-electrolize font-semibold text-sm uppercase tracking-wider py-2 transition-colors ${
                    pathname === item.path
                      ? "text-cyber-yellow"
                      : "text-foreground/80 hover:text-cyber-yellow"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/clips" onClick={() => setMobileMenuOpen(false)}>
                <button 
                  className="w-full px-4 py-2 text-xs font-bold uppercase tracking-wider bg-cyber-yellow text-cyber-black mt-2"
                  style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
