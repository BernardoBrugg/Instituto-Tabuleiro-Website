"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Header from "@/components/header";
import LocalizationModal from "@/components/localizationModal";

export default function LocalPage() {
  const comoChegarRef = useRef(null);
  const mapaRef = useRef(null);
  const enderecoRef = useRef(null);
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

    if (comoChegarRef.current) observer.observe(comoChegarRef.current);
    if (mapaRef.current) observer.observe(mapaRef.current);
    if (enderecoRef.current) observer.observe(enderecoRef.current);
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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight hover:text-yellow-400 transition-colors duration-500 ease-in-out">
              Localização da Serra do Tabuleiro
            </h1>
            <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 transition-colors duration-500 ease-in-out">
              Descubra como nos encontrar e explore nossa localização no coração
              da Mata Atlântica.
            </p>
          </div>
        </div>

        {/* Mapa Interativo Section with Glassmorphism */}
        <div
          ref={mapaRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <h2 className="text-center text-3xl font-bold text-white mb-12 hover:text-yellow-400 transition-colors duration-500 ease-in-out">
            Como chegar?
          </h2>
          <div className="flex justify-center">
            <LocalizationModal />
          </div>
        </div>

        {/* Como Chegar Section with Glassmorphism */}
        <div
          ref={comoChegarRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 mb-6 hover:text-white/90 transition-colors duration-500 ease-in-out">
                O Instituto Tabuleiro está localizado no Parque Estadual da
                Serra do Tabuleiro, acessível por estradas principais e trilhas
                ecológicas.
              </p>
              <p className="text-white/80 mb-6 hover:text-white/90 transition-colors duration-500 ease-in-out">
                Venha de carro, ônibus ou bicicleta e desfrute de uma viagem
                sustentável até nosso centro de visitantes.
              </p>
              <p className="text-white/80 mb-6 hover:text-white/90 transition-colors duration-500 ease-in-out">
                Oferecemos guias e mapas para facilitar sua chegada e garantir
                uma experiência segura.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg text-center border border-white/20">
              <h3 className="text-white mb-4 hover:text-yellow-400 transition-colors duration-500 ease-in-out">
                Dicas de Acesso
              </h3>
              <ul className="text-left leading-loose text-white/80">
                <li>
                  <strong>Distância da Capital:</strong> 150 km
                </li>
                <li>
                  <strong>Tempo Estimado:</strong> 2-3 horas
                </li>
                <li>
                  <strong>Estrada Principal:</strong> BR-101
                </li>
                <li>
                  <strong>Transporte Público:</strong> Ônibus diários
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Endereço Section with Glassmorphism */}
        <div
          ref={enderecoRef}
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <h2 className="text-center text-3xl font-bold text-white mb-12 hover:text-yellow-400 transition-colors duration-500 ease-in-out">
            Endereço e Contatos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white mb-4 text-xl font-semibold hover:text-yellow-400 transition-colors duration-500 ease-in-out">
                Endereço
              </h3>
              <p className="text-white/80 hover:text-white/90 transition-colors duration-500 ease-in-out">
                Parque Estadual da Serra do Tabuleiro, SC, Brasil
              </p>
            </div>
            <div className="p-8 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white mb-4 text-xl font-semibold hover:text-yellow-400 transition-colors duration-500 ease-in-out">
                Telefone
              </h3>
              <p className="text-white/80 hover:text-white/90 transition-colors duration-500 ease-in-out">
                (48) 1234-5678
              </p>
            </div>
            <div className="p-8 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white mb-4 text-xl font-semibold hover:text-yellow-400 transition-colors duration-500 ease-in-out">
                Email
              </h3>
              <p className="text-white/80 hover:text-white/90 transition-colors duration-500 ease-in-out">
                contato@institutotabuleiro.org
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
            <h2 className="text-3xl font-bold text-white mb-4 hover:text-yellow-400 transition-colors duration-500 ease-in-out">
              Entre em Contato
            </h2>
            <p className="mb-8 text-white/80 hover:text-white/90 transition-colors duration-500 ease-in-out">
              Precisa de mais informações sobre como nos visitar? Entre em
              contato.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contato"
                className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 ease-in-out text-white hover:text-yellow-400"
              >
                Fale Conosco
              </Link>
              <Link
                href="/"
                className="px-8 py-3 bg-transparent border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 ease-in-out text-white hover:text-yellow-400"
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
