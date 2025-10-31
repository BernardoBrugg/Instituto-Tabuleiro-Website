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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
              Sobre o Instituto Tabuleiro
            </h1>
            <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 transition-colors duration-500">
              Conheça nossa história, missão e compromisso com a preservação da
              Mata Atlântica.
            </p>
          </div>
        </div>

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
          <h2 className="text-center text-3xl font-bold text-white mb-6 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
            Nossa História
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 mb-6 hover:text-white/90 transition-colors duration-500">
                A Associação para a Conservação do Parque Estadual da Serra do
                Tabuleiro - Instituto Tabuleiro - foi constituída em 1 de
                novembro de 2015, reunindo profissionais de diversas áreas de
                conhecimento que atuam há mais de 20 anos nas áreas de pesquisa
                científica, uso público, educação ambiental e mobilização
                comunitária no território abrangido pelo Parque Estadual da
                Serra do Tabuleiro e entorno.
              </p>
              <p className="text-white/80 mb-6 hover:text-white/90 transition-colors duration-500">
                Nosso objetivo de criação foi reunir em uma mesma Instituição um
                coletivo de profissionais experientes e com vasta atuação dentro
                de um território específico. Nossa missão é auxiliar a gestão do
                Parque e promover a conservação de seus ecossistemas naturais.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg text-left border border-white/20">
              <blockquote className="text-white/80 italic border-l-4 border-white/50 pl-4 hover:text-white/90 transition-colors duration-500">
                &quot;A topografia acidentada das montanhas, que se elevam até 1.250
                m, e a baixada, de formação quaternária, com inúmeros cordões de
                restinga, a orla marítima, composta de belíssimas praias e ilhas
                oceânicas compõem um quadro que, dificilmente, encontra similar
                no mundo&quot;
                <cite className="block mt-2 text-white/60">
                  Pe. Raulino Reitz, Decreto de Criação do Parque 1975
                </cite>
              </blockquote>
            </div>
          </div>
        </div>

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
          <h2 className="text-center text-3xl font-bold text-white mb-12 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
            Missão, Visão e Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white mb-4 text-xl font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Missão
              </h3>
              <p className="text-white/80 hover:text-white/90 transition-colors duration-500">
                Auxiliar a gestão do Parque e promover a conservação de seus
                ecossistemas naturais.
              </p>
            </div>
            <div className="p-8 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white mb-4 text-xl font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Visão
              </h3>
              <p className="text-white/80 hover:text-white/90 transition-colors duration-500">
                Ser referência nacional em conservação da Mata Atlântica,
                promovendo o equilíbrio entre preservação ambiental e
                desenvolvimento socioeconômico.
              </p>
            </div>
            <div className="p-8 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white mb-4 text-xl font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Valores
              </h3>
              <p className="text-white/80 hover:text-white/90 transition-colors duration-500">
                Sustentabilidade, Ciência, Comunidade, Transparência e Inovação
                guiam todas as nossas ações e decisões.
              </p>
            </div>
          </div>
        </div>

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
          <h2 className="text-center text-3xl font-bold text-white mb-12 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Marcos Adriano Tortato
              </h3>
              <p className="text-white/80">Presidente</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Jorge José Cherem
              </h3>
              <p className="text-white/80">Vice Presidente</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Haliskarla Moreira de Sá
              </h3>
              <p className="text-white/80">Secretária Executiva</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Mônica Araújo de Miranda Gomes
              </h3>
              <p className="text-white/80">Conselheira Consultiva</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Mariama Brod Bacci
              </h3>
              <p className="text-white/80">Conselheira Consultiva</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                André Ivan Tortato
              </h3>
              <p className="text-white/80">Conselheiro Fiscal</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Fernando Maciel Bruggemann
              </h3>
              <p className="text-white/80">Conselheiro Fiscal</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500">
              <h3 className="text-white font-semibold hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
                Hugo Borghezan Mozerle
              </h3>
              <p className="text-white/80">Conselheiro Fiscal</p>
            </div>
          </div>
        </div>

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
            <h2 className="text-3xl font-bold text-white mb-4 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
              Entre em Contato
            </h2>
            <p className="mb-8 text-white/80 hover:text-white/90 transition-colors duration-500">
              Quer saber mais sobre nosso trabalho ou como se envolver? Entre em
              contato conosco.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contato"
                className="px-8 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-white cursor-pointer"
              >
                Fale Conosco
              </Link>
              <Link
                href="/"
                className="px-8 py-3 bg-transparent border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-500 text-white hover:text-white cursor-pointer"
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
