"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/header";
import LocalizationModal from "@/components/localizationModal";

export default function LocalPage() {
  const comoChegarRef = useRef(null);
  const mapaRef = useRef(null);
  const enderecoRef = useRef(null);
  const contatoRef = useRef(null);
  const googleMapsUrlParque =
    "https://www.google.com/maps/place/Trilha+da+Pousada+-+Hotel+Plaza+Caldas+da+Imperatriz/@-27.7393855,-48.8128669,16z/data=!4m9!1m2!2m1!1shotel+caldas+da+imperatriz!3m5!1s0x9520c952d5495a1f:0xf1c8733887f1b008!8m2!3d-27.7416018!4d-48.8071144!16s%2Fg%2F11gf16td_n?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D";
  const googleMapsUrlSede =
    "https://www.google.com/maps/search/?api=1&query=Av.+Des.+Vitor+Lima,+260,+Trindade,+Florianópolis,+SC";

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
              Localização da Serra do Tabuleiro
            </h1>
            <p className="mt-4 max-w-xl text-white/80 hover:text-white/90 transition-colors duration-500 ease-in-out">
              Descubra como nos encontrar e explore nossa localização no coração
              da Mata Atlântica.
            </p>
          </div>
        </div>

        <div
          ref={mapaRef}
          className="
          w-full max-w-7xl mx-auto flex flex-col items-center justify-center p-6 sm:p-8 md:p-10
          bg-black/25 backdrop-blur-md 
          border border-white/20 
          rounded-2xl shadow-lg
          opacity-0 transition-opacity duration-500
          hover:bg-black/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
        >
          <h2 className="text-center text-3xl font-bold text-white mb-12 hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
            Como chegar?
          </h2>
          <div
            className="w-full aspect-video overflow-hidden"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            <LocalizationModal />
          </div>
        </div>

        <div className="mt-4 text-center space-x-4">
          <button
            className="px-6 py-2 bg-black/25 backdrop-blur-md border border-white/20 text-white rounded shadow-lg hover:bg-black/30 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            onClick={() => window.open(googleMapsUrlParque, "_blank")}
          >
            Veja como chegar no Parque
          </button>
          <button
            className="px-6 py-2 bg-black/25 backdrop-blur-md border border-white/20 text-white rounded shadow-lg hover:bg-black/30 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            onClick={() => window.open(googleMapsUrlSede, "_blank")}
          >
            Veja como chegar na Sede
          </button>
        </div>
      </div>
    </div>
  );
}
