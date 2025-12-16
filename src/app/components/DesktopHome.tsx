"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Header from "@/components/header";
import Tucan from "@/components/tucan";
import scrollIntoView from "scroll-into-view-if-needed";
import Image from "next/image";

export default function DesktopHome({
  onModelLoaded,
}: {
  onModelLoaded?: () => void;
}) {
  const sobreRef = useRef<HTMLDivElement>(null);
  const publicacoesRef = useRef<HTMLDivElement>(null);
  const localRef = useRef<HTMLDivElement>(null);

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
        <div
          className="
          w-full max-w-7xl mx-auto flex flex-col p-6 sm:p-8 md:p-10 min-h-[60vh]
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <Header />
          <section className="flex-grow flex items-center justify-center w-full">
            <div className="flex flex-row items-center gap-16">
              <div className="text-center flex flex-col justify-center items-center">
                <Image
                  src="/logo.svg"
                  alt="Instituto Tabuleiro Logo"
                  width={300}
                  height={90}
                  className="scale-135 hover:scale-140 transition-all duration-500 cursor-pointer"
                />
                <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 transition-colors duration-500">
                  Uma jornada no coração da Mata Atlântica para encontrar a
                  incrível diversidade que o Parque Estadual da Serra do
                  Tabuleiro abriga. Explore o trabalho da nossa organização.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Tucan onLoaded={onModelLoaded} />
              </div>
            </div>
          </section>
          <div className="text-center mt-8">
            <button
              className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 cursor-pointer"
              onClick={() =>
                sobreRef.current &&
                scrollIntoView(sobreRef.current, { behavior: "smooth" })
              }
            >
              Saiba Mais
            </button>
          </div>
        </div>

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
          <h2 className="text-center text-3xl font-bold text-white mb-6 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
            Sobre o Instituto
          </h2>
          <p className="text-center text-white/80 mb-8 hover:text-white/90 transition-colors duration-500">
            O Instituto Tabuleiro foi constituída em 1 de novembro de 2015.
            Nossa missão é auxiliar a gestão do Parque e promover a conservação
            de seus ecossistemas naturais.
          </p>
          <div className="text-center">
            <Link
              href="/sobre"
              className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-white cursor-pointer"
            >
              Saiba Mais Sobre Nós
            </Link>
          </div>
        </div>

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
          <h2 className="text-center text-3xl font-bold text-white mb-6 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
            Projetos
          </h2>
          <p className="text-center text-white/80 mb-8 hover:text-white/90 transition-colors duration-500">
            Explore nossos estudos, relatórios e publicações científicas sobre a
            conservação do Parque Estadual da Serra do Tabuleiro.
          </p>
          <div className="text-center">
            <Link
              href="/publicacoes"
              className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-white cursor-pointer"
            >
              Ver Publicações
            </Link>
          </div>
        </div>

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
          <h2 className="text-center text-3xl font-bold text-white mb-6 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
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
              className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-white cursor-pointer"
            >
              Ver Localização
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
