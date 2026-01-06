"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Components",
        path: "/clips"
    },
]

const Logo = () => {
    return (
        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transform duration-300">
            <Image src="/Logos.png" alt="Logo" width={100} height={100} className="h-10 w-10 rounded-lg" />
            <span className="text-md font-bold font-electrolize">CyberCompo</span>
        </div>
    )
}


export const Navbar = () => {
    return (
       <div
            className="bg-white text-black mx-auto max-w-5xl px-2 sm:px-6 lg:px-8  border-2 rounded-lg mt-10  border-black font-family-electrolize"
            style={{
                clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                borderRight: "2px solid var(--color-black)",
                borderTop: "2px solid var(--color-black)",
            }}>
            <div className="flex items-center justify-between py-4">
                <Logo /> 
                <div className="flex items-center gap-10 mr-10">
                    {navItems.map((item) => (
                        <Link href={item.path} key={item.label}> 
                            <span className="text-black font-family-electrolize font-bold text-md hover:scale-110 transform transition-transform duration-300 inline-block">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}