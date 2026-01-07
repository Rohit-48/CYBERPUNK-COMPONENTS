"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return (
      <div 
        className="w-9 h-9 bg-secondary/50"
        style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center bg-secondary/50 hover:bg-cyber-yellow/20 border border-border dark:border-cyber-yellow/20 hover:border-cyber-yellow/50 transition-all duration-300 group"
      style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
      aria-label="Toggle theme"
    >
      <Sun 
        className="absolute w-4 h-4 text-cyber-yellow rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" 
      />
      <Moon 
        className="absolute w-4 h-4 text-cyber-yellow rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" 
      />
    </button>
  );
};
