"use client";

import { ReactNode, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

const backgroundImages = [
  "/Fotos extras/Canon EOS 6D_20180313_174530.jpg",
  "/Fotos extras/DSC_7455.JPG",
  "/Fotos extras/DSC_7461.JPG",
  "/Fotos extras/DSC_7486.JPG",
  "/Fotos extras/DSC_7501.JPG",
  "/Fotos extras/DSC_9044.JPG",
  "/Fotos extras/DSC01886.JPG",
  "/Fotos extras/IMG_0078.JPG",
  "/Fotos extras/capa.jpg",
];

export default function RootLayout({ children }: RootLayoutProps) {
  const [backgroundImage, setBackgroundImage] = useState(
    "/Fotos extras/capa.jpg"
  );

  useEffect(() => {
    const currentIndex = parseInt(
      localStorage.getItem("backgroundIndex") || "0",
      10
    );
    const nextIndex = (currentIndex + 1) % backgroundImages.length;

    setBackgroundImage(backgroundImages[nextIndex]);
    localStorage.setItem("backgroundIndex", nextIndex.toString());
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        <title>Instituto Tabuleiro</title>
        <meta
          name="description"
          content="Organização não governamental (ONG) - Pesquisa científica, uso público, educação ambiental e mobilização comunitária no território abrangido pelo Parque Estadual da Serra do Tabuleiro."
        />
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={`${inter.className} bg-center bg-no-repeat bg-fixed text-white`}
        style={{
          backgroundImage: backgroundImage
            ? `url('${backgroundImage}')`
            : "url('/Fotos extras/capa.jpg')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <main className="flex items-center justify-center min-h-screen p-4 sm:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
