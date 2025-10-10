"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/header";
import CardPublications from "@/components/cardPublications";

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

  const publications = [
    {
      id: 1,
      title: "Estudo sobre Biodiversidade da Mata Atlântica",
      description:
        "Análise detalhada da fauna e flora no Parque Estadual da Serra do Tabuleiro.",
      date: "2023-10-01",
      link: "/publicacoes/1",
      image: "/images/publicacao1.jpg",
    },
    {
      id: 2,
      title: "Relatório de Conservação Sustentável",
      description:
        "Estratégias para o uso público sustentável da área protegida.",
      date: "2023-08-15",
      link: "/publicacoes/2",
      image: "/images/publicacao2.jpg",
    },
    {
      id: 3,
      title: "Educação Ambiental em Comunidades Locais",
      description:
        "Impacto dos programas de mobilização comunitária na preservação.",
      date: "2023-06-20",
      link: "/publicacoes/3",
      image: "/images/publicacao3.jpg",
    },
  ];

  return (
    <div>
      <div className="space-y-8">
        {/* Hero Section with Glassmorphism */}
        <div
          className="
          w-full max-w-7xl mx-auto flex flex-col p-6 sm:p-8 md:p-10 min-h-[20vh]
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          {/* 1. Cabeçalho */}
          <Header />

          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight hover:text-yellow-400 transition-colors duration-500 ease-in-out">
              Publicações
            </h1>
            <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 transition-colors duration-500 ease-in-out">
              Explore nossos estudos, relatórios e publicações científicas sobre
              a conservação do Parque Estadual da Serra do Tabuleiro.
            </p>
          </div>
        </div>

        {/* Cards Section with Glassmorphism */}
        <div
          ref={cardsRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
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
