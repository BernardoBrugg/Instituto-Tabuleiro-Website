"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/header";
import Tucan from "@/components/tucan";
import scrollIntoView from "scroll-into-view-if-needed";

export default function HomePage() {
  const sobreRef = useRef<HTMLDivElement>(null);
  const publicacoesRef = useRef<HTMLDivElement>(null);
  const localRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

    if (sobreRef.current) observer.observe(sobreRef.current);
    if (publicacoesRef.current) observer.observe(publicacoesRef.current);
    if (localRef.current) observer.observe(localRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="space-y-8">
        {/* Hero Section with Glassmorphism */}
        <div
          className="
          w-full max-w-7xl mx-auto flex flex-col p-6 sm:p-8 md:p-10 min-h-[90vh]
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          {/* 1. Cabeçalho */}
          <Header />

          {/* 2. Conteúdo Principal (Hero Section) */}
          <section className="flex-grow flex items-center w-full">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* Tags Verticais - como na imagem de referência */}
              <div className="hidden md:flex flex-col gap-4 text-sm text-white/70">
                <span className="hover:text-white hover:scale-110 transition-all duration-500 cursor-pointer">
                  Pesquisa
                </span>
                <span className="hover:text-white hover:scale-110 transition-all duration-500 cursor-pointer">
                  Conservação
                </span>
                <span className="hover:text-white hover:scale-110 transition-all duration-500 cursor-pointer">
                  Comunidade
                </span>
              </div>

              {/* Texto Principal */}
              <div className="text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight hover:text-yellow-200 transition-colors duration-500">
                  Preservando o Coração de Santa Catarina
                </h2>
                <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 transition-colors duration-500">
                  Uma jornada no coração da Mata Atlântica para encontrar a
                  incrível diversidade que o Parque Estadual da Serra do
                  Tabuleiro abriga. Explore o trabalho da nossa organização.
                </p>
                <button 
                  className="mt-8 px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 cursor-pointer"
                  onClick={() => sobreRef.current && scrollIntoView(sobreRef.current, { behavior: 'smooth' })}
                >
                  Saiba Mais
                </button>
              </div>

              {/* 3D Tucan Model */}
              {!isMobile && (
                <div className="flex-shrink-0">
                  <Tucan />
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sobre Section with Glassmorphism */}
        <div
          ref={sobreRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
           hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <h2 className="text-center text-3xl font-bold text-white mb-6 hover:text-yellow-200 transition-colors duration-500">
            Sobre o Instituto
          </h2>
          <p className="text-center text-white/80 mb-8 hover:text-white/90 transition-colors duration-500">
            O Instituto Tabuleiro é uma organização não governamental dedicada à
            preservação e conservação do Parque Estadual da Serra do Tabuleiro,
            desenvolvendo atividades de pesquisa científica, uso público
            sustentável, educação ambiental e mobilização comunitária.
          </p>
          <div className="text-center">
            <Link
              href="/sobre"
              className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-yellow-200"
            >
              Saiba Mais Sobre Nós
            </Link>
          </div>
        </div>

        {/* Publicações Section with Glassmorphism */}
        <div
          ref={publicacoesRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
           hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <h2 className="text-center text-3xl font-bold text-white mb-6 hover:text-yellow-200 transition-colors duration-500">
            Publicações
          </h2>
          <p className="text-center text-white/80 mb-8 hover:text-white/90 transition-colors duration-500">
            Explore nossos estudos, relatórios e publicações científicas sobre a
            conservação do Parque Estadual da Serra do Tabuleiro.
          </p>
          <div className="text-center">
            <Link
              href="/publicacoes"
              className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-yellow-200"
            >
              Ver Publicações
            </Link>
          </div>
        </div>

        {/* Localização Section with Glassmorphism */}
        <div
          ref={localRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
           hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <h2 className="text-center text-3xl font-bold text-white mb-6 hover:text-yellow-200 transition-colors duration-500">
            Localização
          </h2>
          <p className="text-center text-white/80 mb-8 hover:text-white/90 transition-colors duration-500">
            O Parque Estadual da Serra do Tabuleiro está localizado no coração
            de Santa Catarina, abrangendo uma área de 84.130 hectares de Mata
            Atlântica.
          </p>
          <div className="text-center">
            <Link
              href="/local"
              className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-yellow-200"
            >
              Ver Localização
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}