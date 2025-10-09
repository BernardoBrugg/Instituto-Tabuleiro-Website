"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Header from "@/components/header";

export default function SobrePage() {
  const historiaRef = useRef(null);
  const missaoRef = useRef(null);
  const equipeRef = useRef(null);
  const contatoRef = useRef(null);

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

    if (historiaRef.current) observer.observe(historiaRef.current);
    if (missaoRef.current) observer.observe(missaoRef.current);
    if (equipeRef.current) observer.observe(equipeRef.current);
    if (contatoRef.current) observer.observe(contatoRef.current);

    return () => observer.disconnect();
  }, []);

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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight hover:text-yellow-400 transition-colors duration-500">
              Sobre o Instituto Tabuleiro
            </h1>
            <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 transition-colors duration-500">
              Conheça nossa história, missão e compromisso com a preservação da
              Mata Atlântica.
            </p>
          </div>
        </div>

        {/* Nossa História Section with Glassmorphism */}
        <div
          ref={historiaRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <h2 className="text-center text-3xl font-bold text-white mb-6 hover:text-yellow-400 transition-colors duration-500">
            Nossa História
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 mb-6 hover:text-white/90 transition-colors duration-500">
                Fundado em 1975, o Instituto Tabuleiro surgiu da necessidade de
                proteger o Parque Estadual da Serra do Tabuleiro, um dos últimos
                remanescentes da Mata Atlântica no Brasil.
              </p>
              <p className="text-white/80 mb-6 hover:text-white/90 transition-colors duration-500">
                Ao longo das décadas, desenvolvemos projetos de pesquisa,
                educação ambiental e mobilização comunitária, contribuindo para
                a conservação de 84.130 hectares de floresta nativa.
              </p>
              <p className="text-white/80 mb-6 hover:text-white/90 transition-colors duration-500">
                Nossa trajetória é marcada por parcerias com instituições
                científicas, governos e comunidades locais, sempre com o foco na
                sustentabilidade e no desenvolvimento regional.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg text-center border border-white/20">
              <h3 className="text-white mb-4 hover:text-yellow-400 transition-colors duration-500">
                Fatos Importantes
              </h3>
              <ul className="text-left leading-loose text-white/80">
                <li>
                  <strong>Fundação:</strong> 1975
                </li>
                <li>
                  <strong>Área Protegida:</strong> 84.130 ha
                </li>
                <li>
                  <strong>Ecossistema:</strong> Mata Atlântica
                </li>
                <li>
                  <strong>Missões Anuais:</strong> +50 projetos
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores Section with Glassmorphism */}
        <div
          ref={missaoRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <h2 className="text-center text-3xl font-bold text-white mb-12 hover:text-yellow-400 transition-colors duration-500">
            Missão, Visão e Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white mb-4 text-xl font-semibold hover:text-yellow-400 transition-colors duration-500">
                Missão
              </h3>
              <p className="text-white/80 hover:text-white/90 transition-colors duration-500">
                Preservar e conservar o Parque Estadual da Serra do Tabuleiro
                através de pesquisa científica, educação ambiental e mobilização
                comunitária sustentável.
              </p>
            </div>
            <div className="p-8 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white mb-4 text-xl font-semibold hover:text-yellow-400 transition-colors duration-500">
                Visão
              </h3>
              <p className="text-white/80 hover:text-white/90 transition-colors duration-500">
                Ser referência nacional em conservação da Mata Atlântica,
                promovendo o equilíbrio entre preservação ambiental e
                desenvolvimento socioeconômico.
              </p>
            </div>
            <div className="p-8 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white mb-4 text-xl font-semibold hover:text-yellow-400 transition-colors duration-500">
                Valores
              </h3>
              <p className="text-white/80 hover:text-white/90 transition-colors duration-500">
                Sustentabilidade, Ciência, Comunidade, Transparência e Inovação
                guiam todas as nossas ações e decisões.
              </p>
            </div>
          </div>
        </div>

        {/* Nossa Equipe Section with Glassmorphism */}
        <div
          ref={equipeRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <h2 className="text-center text-3xl font-bold text-white mb-12 hover:text-yellow-400 transition-colors duration-500">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-white/30">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-white font-semibold hover:text-yellow-400 transition-colors duration-500">
                Dr. João Silva
              </h3>
              <p className="text-white/80">Diretor Executivo</p>
              <p className="text-sm mt-2 text-white/80 hover:text-white/90 transition-colors duration-500">
                Especialista em Ecologia, com 20 anos de experiência em
                conservação.
              </p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-white/30">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-white font-semibold hover:text-yellow-400 transition-colors duration-500">
                Maria Santos
              </h3>
              <p className="text-white/80">Coordenadora de Educação</p>
              <p className="text-sm mt-2 text-white/80 hover:text-white/90 transition-colors duration-500">
                Pedagoga especializada em educação ambiental e mobilização
                comunitária.
              </p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-white/30">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-white font-semibold hover:text-yellow-400 transition-colors duration-500">
                Carlos Oliveira
              </h3>
              <p className="text-white/80">Pesquisador Sênior</p>
              <p className="text-sm mt-2 text-white/80 hover:text-white/90 transition-colors duration-500">
                Biológo com foco em biodiversidade da Mata Atlântica.
              </p>
            </div>
          </div>
        </div>

        {/* Contato Section with Glassmorphism */}
        <div
          ref={contatoRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 hover:text-yellow-400 transition-colors duration-500">
              Entre em Contato
            </h2>
            <p className="mb-8 text-white/80 hover:text-white/90 transition-colors duration-500">
              Quer saber mais sobre nosso trabalho ou como se envolver? Entre em
              contato conosco.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contato"
                className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-yellow-400"
              >
                Fale Conosco
              </Link>
              <Link
                href="/"
                className="px-8 py-3 bg-transparent border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-yellow-400"
              >
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
