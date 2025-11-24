"use client";

import Image from "next/image";

export default function LoadingScreen({ progress }: { progress: number }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="animate-bounce mb-8">
        <Image
          src="/logo.svg"
          alt="Loading..."
          width={120}
          height={120}
          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          priority
        />
      </div>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden border border-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-out shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-white font-mono text-lg tracking-widest">
        {Math.round(progress)}%
      </p>
    </div>
  );
}
