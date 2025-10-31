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
      title:
        "Criador de Peixe, Criador de Gente: a pesca, a vida e a natureza do Estuário do Rio da Madre",
      description:
        "Obra viabilizada através do Edital Elizabete Anderle, foi publicada no ano de 2019, recebendo a premiação de 1o lugar na categoria arte popular. O livro foi desenvolvido a partir da pesquisa etnográfica realizada por membros do Instituto Tabuleiro, contendo história oral e registros fotográficos das comunidades pesqueiras do estuário do Rio da Madre. Essa é uma linha de atuação da entidade que busca a valorização da sociobiodiversidade e conservação dos atributos naturais dos territórios tradicionais que abrangem o Parque Estadual da Serra do Tabuleiro. A distribuição de mil exemplares do livro ocorreu de forma gratuita nas comunidades pesqueiras do Estuário do Rio da Madre e nas escolas. Duração: 2017/2019. Financiador: Prêmio Elizabete Anderle – 2017.",
      date: "2019-01-01",
      link: "/publicacoes/1",
      image: "/capa.jpg",
    },
  ];

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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight hover:text-yellow-400 transition-colors duration-500 ease-in-out">
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
