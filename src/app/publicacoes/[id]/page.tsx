"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { publications } from "./publications";
import Carousel from "@/app/components/Carousel";

const folderNames: Record<number, string> = {
  1: "3.1. Publicação do Livro “Criador de Peixe, Criador de Gente_ a pesca, a vida e a natureza do Estuário do Rio da Madre”",
  2: "3.2. Programa de Pesquisa “Felinos do Tabuleiro”",
  3: "3.3.  Plano de Ação Estadual (PAE) para a conservação do Preá-de-Moleques-do-Sul",
  4: "3.4. Projeto de Pesquisa “Monitoramento da flora da restinga da Baixada do Massiambu inserida no Parque Estadual da Serra do Tabuleiro_ avaliação histórica e correlação das condições natural e pós-distúrbios antrópicos” ",
  5: "3.5. Projeto de Pesquisa “Avaliação de procedimentos de monitoramento populacional não invasivo do Preá-de-Moleques (Cavia intermedia) endêmico da ilha de Moleques do Sul, Parque Estadual da Serra do Tabuleiro”",
  6: "3.6. Projeto de Pesquisa “Conservação ex-situ de Commelina catharinensis Hassemer et al. (Commelinaceae)”",
  7: "3.7.  “Programa de Educação Ambiental para Conservação da espécie endêmica Cavia intermedia, o Preá do Arquipélago de Moleques do Sul - Santa Catarina - Brasil” ",
  8: "3.8. Projeto_ Refloresta Maciambu_ Recuperação de mata ciliar e troca de saberes na Terra Indígena Maciambu (Aldeia Pira Rupá-SC) ",
  9: "Fotos extras",
  10: "4.2.1 - Oficina de Educação Ambiental_ Invasão Biológica por Pinus na Restinga do Parque Estadual da Serra do Tabuleiro (PAEST)",
  11: "4.2.2 - Oficina de Educação Ambiental_ Plantas Medicinais da Restinga do Parque Estadual da Serra do Tabuleiro",
  12: "4.1 Grupo Técnico Científico de Apoio à Restauração Ecológica da Baixada do Massiambú ",
  13: "4.1. Conselho Consultivo da Área de Proteção Ambiental da Baleia Franca (CONAPABF-ICMBio).",
};

const imageLists: Record<number, string[]> = {
  1: [
    "Canon EOS 6D_20180320_112232.Id_2750.jpg",
    "IMG_3926_pb.jpg",
    "IMG_6436_pb.jpg",
    "IMG_7524_pb.jpg",
  ],
  2: [
    "WhatsApp Image 2025-08-08 at 13.43.20 (1).jpeg",
    "WhatsApp Image 2025-08-08 at 13.43.20.jpeg",
    "WhatsApp Image 2025-08-08 at 13.43.21 (1).jpeg",
    "WhatsApp Image 2025-08-08 at 13.43.21 (2).jpeg",
    "WhatsApp Image 2025-08-08 at 13.43.21.jpeg",
    "WhatsApp Image 2025-08-08 at 13.43.22.jpeg",
    "WhatsApp Image 2025-08-08 at 13.48.16 (1).jpeg",
    "WhatsApp Image 2025-08-08 at 13.48.16.jpeg",
    "WhatsApp Image 2025-08-08 at 13.48.17 (1).jpeg",
    "WhatsApp Image 2025-08-08 at 13.48.17.jpeg",
    "d7e253_e7860a31fee9441bbe64d14cd1e00611.jpg",
  ],
  3: [
    "DSCF3874.JPG",
    "DSCF3905.JPG",
    "Logo Pró-preá_versões_Prancheta 1.jpg",
    "WhatsApp Image 2019-04-12 at 03.08.36 (2).jpeg",
  ],
  4: [
    "Acisanthera aff variabilis cordaoCV Manoel 14 jan (2).JPG",
    "Acisanthera cf variabilis resgate dez 21 (2).JPG",
    "Baccharis aff linearifolia CV MariPascoa 20 abr (7).jpg",
    "CV guris 2 set21 (10).JPG",
    "Cad_Jhon ago21 (1).JPG",
    "Calea uniflora Cang 18 set (6).JPG",
    "Calea uniflora Intro Com nov23 (14).JPG",
    "Chromolaena ulei CV MariPascoa 20 abr (4).JPG",
    "Coccocypselum cf capitatum Com3M 8 set (6).JPG",
    "Cyrtocymura scorpioides CV Jhon 14 out (6).JPG",
    "Desmodium barbatum cordaoCVManoel 14jan (2).JPG",
    "Eugenia handroana pluriflora Cang 18 set (2).JPG",
    "Eugenia handroana pluriflora Cang 18 set (6).JPG",
    "IMG_20220609_122744_099.jpg",
    "Mandevilla coccinea cordaoCV bomb23 jan (3).JPG",
    "Miconia ligustroides monit nov23 (49).JPG",
    "Monit Raizes 15dez23 (1).JPG",
    "RGA01876.jpg",
    "T1Arb 31 out22 (2).JPG",
    "T_Arb5 P3 Gato 16 jun (24).JPG",
    "T_Arb6 Espanhol 19 ago22 (9).jpeg",
  ],
  5: [
    "2021-12-28 11.13.44.jpg",
    "2021-12-28 11.17.37.jpg",
    "2021-12-28 11.58.40.jpg",
    "2021-12-28 13.43.25.jpg",
    "2021-12-28 13.43.38.jpg",
    "2021-12-28 20.57.58.jpg",
    "2021-12-28 20.58.04-1.jpg",
    "2021-12-31 16.26.30-1.jpg",
  ],
  6: [
    "C21 abr 23 (47).JPG",
    "DSCN0086.JPG",
    "Introdução 8_3_23 Felipe (4).JPG",
    "Marcelo Intro mar 23 (11).jpeg",
    "Monit Introdução fev 23 (4).JPG",
    "N5 abr 23 (4).JPG",
  ],
  7: [
    "IMG_2154-3.jpg",
    "IMG_3748 (2).jpg",
    "IMG_4281.jpg",
    "IMG_5310.JPEG",
    "IMG_5397 (2).JPG",
    "PHOTO-2024-03-21-13-33-45.jpg",
  ],
  8: [
    "Refloresta Maciambu 1.jpg",
    "Refloresta Maciambu 2.jpg",
    "Refloresta Maciambu 3.jpg",
    "Refloresta Maciambu 4.jpg",
  ],
  9: [
    "Canon EOS 6D_20180313_174530.jpg",
    "DSC01886.JPG",
    "DSC_7455.JPG",
    "DSC_7461.JPG",
    "DSC_7486.JPG",
    "DSC_7501.JPG",
    "DSC_9044.JPG",
    "IMG_0078.JPG",
    "capa.jpg",
  ],
  10: [
    "Anna antes.jpeg",
    "Anna depois.jpeg",
    "Cards (1).jpeg",
    "Cards (2).jpeg",
    "Jaque (7).jpeg",
    "Ju (2).jpeg",
    "Ju (3).jpeg",
    "Rafa (2).JPG",
    "Raka (18).jpeg",
    "Raka (4).jpeg",
  ],
  11: [
    "Oficina educação ambiental1.jpg",
    "Oficina educação ambiental2.jpg",
    "Oficina educação ambiental3.jpg",
  ],
  12: [
    "Incendio 2018 tlvz (1).jpg",
    "Monit Raizes 15dez23 (1).JPG",
    "Pinus banhado Cang set21 (2).jpg",
    "Pinus cordao nordeste bacupari jul21(6).JPG",
    "WhatsApp Image 2019-09-21 at 21.09.19.jpeg",
    "WhatsApp Image 2019-09-21 at 21.10.11.jpeg",
    "WhatsApp Image 2019-09-21 at 21.10.18(1).jpeg",
    "corte pinus ago21 Cad_Jhon (7).JPG",
  ],
  13: [
    "WhatsApp Image 2025-08-04 at 14.13.37.jpeg",
    "WhatsApp Image 2025-08-04 at 14.13.38.jpeg",
    "WhatsApp Image 2025-08-04 at 14.15.17.jpeg",
    "WhatsApp Image 2025-08-05 at 17.01.14.jpeg",
  ],
};

const imagesMap: Record<number, string[]> = {};
for (const idStr in imageLists) {
  const id = parseInt(idStr, 10);
  imagesMap[id] = imageLists[id].map(
    (img: string) =>
      `/${encodeURIComponent(folderNames[id])}/${encodeURIComponent(img)}`
  );
}

export default function PublicationDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string, 10);
  const publication = publications.find((pub) => pub.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!publication) {
    return (
      <div>
        <div className="space-y-8">
          <div
            className="
            w-full max-w-7xl mx-auto flex flex-col p-6 sm:p-8 md:p-10 min-h-[20vh]
            bg-black/25 backdrop-blur-md 
            border border-white/20 
            rounded-2xl shadow-lg"
          >
            <Header />
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight hover:text-white hover:scale-105 transition-all duration-700 cursor-pointer">
                Publicação não encontrada
              </h2>
              <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 transition-colors duration-700 ease-in-out">
                Verifique o ID da publicação.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const galleryImages = imagesMap[id] || [];

  return (
    <div>
      <div className="space-y-8">
        <div
          className="
          w-full max-w-7xl mx-auto flex flex-col p-6 sm:p-8 md:p-10 min-h-[20vh]
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg"
        >
          <Header />
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl md:text-5xl font-bold tracking-tight text-white leading-tight ">
              {publication.title}
            </h2>
            <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 hover:scale-105 transition-colors duration-700 ease-in-out cursor-pointer">
              {publication.type}
            </p>
          </div>
        </div>

        <div
          className="
          w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              {galleryImages.length > 0 ? (
                <Carousel
                  images={galleryImages}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  alt={publication.title}
                />
              ) : (
                <Image
                  src={publication.image}
                  alt={publication.title}
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              )}
            </div>
            <div>
              {publication.description.split(". ").map((sentence, index) => (
                <p key={index} className="text-white/80 mb-4 cursor-pointer">
                  {sentence}.
                </p>
              ))}
              <p className="text-white/60">
                Publicado em:{" "}
                {new Date(publication.date).toLocaleDateString("pt-BR")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/publicacoes"
            className="px-6 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-700 text-white hover:text-white cursor-pointer"
          >
            ← Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
