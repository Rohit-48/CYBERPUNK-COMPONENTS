import type { Metadata } from "next";
import { Geist, Geist_Mono, Funnel_Sans, Electrolize } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Container from "@/components/container";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const electrolize = Electrolize({
  variable: "--font-electrolize",
  subsets: ["latin"],
  weight: "400",
});

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CyberCompo | Cyberpunk Clip-Path Components",
  description: "A collection of cyberpunk-themed clip-path components for React & Tailwind CSS. Futuristic UI elements with zero runtime overhead.",
};

const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(240, 225, 48, 0.08), transparent),
            radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255, 42, 109, 0.05), transparent),
            radial-gradient(ellipse 60% 40% at 0% 100%, rgba(5, 217, 232, 0.05), transparent)
          `,
        }}
      />
      
      {/* Corner accents */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 opacity-20 dark:opacity-10"
        style={{
          background: "linear-gradient(225deg, rgba(240, 225, 48, 0.3) 0%, transparent 50%)",
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 opacity-20 dark:opacity-10"
        style={{
          background: "linear-gradient(45deg, rgba(255, 42, 109, 0.2) 0%, transparent 50%)",
        }}
      />
      
      {/* Scanline effect for dark mode */}
      <div 
        className="absolute inset-0 dark:opacity-[0.02] opacity-0"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)",
        }}
      />
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${electrolize.variable} ${funnelSans.variable} antialiased relative min-h-screen`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem 
          disableTransitionOnChange
        >
          <BackgroundPattern />
          <Container className="relative z-10">
            <Navbar />
            <main>{children}</main>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
