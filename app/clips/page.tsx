"use client";
import { Card } from "@/components/card";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function ComponentPage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 font-family-electrolize selection:bg-yellow-400">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center">
        <EncryptedText
          text="Components"
          className="font-family-electrolize font-bold text-6xl"
        />
        <p className="text-gray-500">
          Discover our collection of high-end clip-path components. Each piece is designed for maximum visual impact and flexibility.
        </p>
      </div>

      {/* Body Section */}
      <div className="grid grid-cols-2 mx-auto max-w-4xl mt-10 justify-between gap-8">
      <Card 
          heading="Neuro-Spine"
          description="Neuro-Spine is a component that uses the ClipPath Tailwind class to create a shape."
          imageUrl="/Logos.png"  
          slug="Neuro-Spine"
      />
       {/* Card 1 */}
       <Card
            heading="Encrypted Text"
            description="A cyberpunk-style text animation that encrypts and decrypts characters with a Matrix-like effect."
            imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400"
            slug="encrypted-text"
          />

          {/* Card 2 */}
          <Card
            heading="Glow Button"
            description="Interactive button with neon glow effects and smooth hover animations for modern UI."
            imageUrl="https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?w=400"
            slug="glow-button"
          />

          {/* Card 3 - Has slug (clickable) */}
          <Card
            heading="Particle Background"
            description="Animated particle system creating dynamic backgrounds with interconnected nodes."
            imageUrl="/Logos.png"
            slug="particle-background"
          />

    </div>
    </div>
  );
}

