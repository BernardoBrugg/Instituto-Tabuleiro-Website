"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/header";

const publications = [
  {
    id: 1,
    title: "Estudo sobre Biodiversidade da Mata Atlântica",
    description: "Análise detalhada da fauna e flora no Parque Estadual da Serra do Tabuleiro.",
    date: "2023-10-01",
    link: "/publicacoes/1",
    image: "/images/publicacao1.jpg",
  },
  {
    id: 2,
    title: "Relatório de Conservação Sustentável",
    description: "Estratégias para o uso público sustentável da área protegida.",
    date: "2023-08-15",
    link: "/publicacoes/2",
    image: "/images/publicacao2.jpg",
  },
  {
    id: 3,
    title: "Educação Ambiental em Comunidades Locais",
    description: "Impacto dos programas de mobilização comunitária na preservação.",
    date: "2023-06-20",
    link: "/publicacoes/3",
    image: "/images/publicacao3.jpg",
  },
];

export default function PublicationDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string, 10);
  const [publication, setPublication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublication = () => {
      const found = publications.find((pub) => pub.id === id);
      setPublication(found);
      setLoading(false);
    };
    fetchPublication();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <Header />
        <div className="text-center text-white">
          <p>Carregando publicação...</p>
        </div>
      </div>
    );
  }

  if (!publication) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <Header />
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Publicação não encontrada</h1>
          <p className="mt-4">Verifique o ID da publicação.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
      <Header />
      <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
        <div className="bg-black/25 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 hover:bg-black/30 transition-all duration-500">
          <img
            src={publication.image}
            alt={publication.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-white mb-4">{publication.title}</h1>
          <p className="text-white/80 mb-4">{publication.description}</p>
          <p className="text-white/60">Publicado em: {new Date(publication.date).toLocaleDateString("pt-BR")}</p>
          {/* Add more content like full article, download link, etc. */}
        </div>
      </div>
    </div>
  );
}