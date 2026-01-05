import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center mt-10 p-4 selection:bg-yellow-300 font-family-electrolize">
        <h1 className="font-bold text-8xl">CyberCompo</h1>
        <p className="text-md font-medium py-6 text-gray-500">CyberCompo is a platform for creating and sharing cyberpunk-themed components.</p>
        <div className="flex items-center justify-center gap-6 mt-1">
            <button className="bg-yellow-300  text-white px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-400 transform duration-300 hover:-translate-y-0.5 hover:scale-105">Get Started</button>
            <button className="borser-2  text-black font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-50 transform duration-300 hover:-translate-y-0.5 hover:scale-105">Documentation</button>
        </div>
    </div>
  );
}
