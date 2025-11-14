"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/header";
import CardPublications from "@/components/cardPublications";
import { publications } from "./[id]/publications";

export default function PublicacoesPage() {
  const introRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
          } else {
            entry.target.classList.remove("opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="space-y-8">
        <div
          className="
          w-full max-w-7xl mx-auto flex flex-col p-6 sm:p-8 md:p-10 min-h-[20vh]
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <Header />

          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight hover:scale-105 transition-all duration-500 ease-in-out">
              Publicações
            </h1>
            <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 transition-colors duration-500 ease-in-out">
              Explore nossos estudos, relatórios e publicações científicas sobre
              a conservação do Parque Estadual da Serra do Tabuleiro.
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => (
              <CardPublications key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
