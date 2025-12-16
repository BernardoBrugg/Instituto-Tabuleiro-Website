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
  "/Fotos extras/DSC_7486.JPG",
  "/Fotos extras/DSC_7501.JPG",
  "/Fotos extras/DSC_9044.JPG",
  "/Fotos extras/capa.jpg",
];

const defaultBackground = "/Fotos extras/capa.jpg";

export default function RootLayout({ children }: RootLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(defaultBackground);

  useEffect(() => {
    setMounted(true);
    
    const currentIndex = parseInt(
      localStorage.getItem("backgroundIndex") || "0",
      10
    );
    const nextIndex = (currentIndex + 1) % backgroundImages.length;

    setBackgroundImage(backgroundImages[nextIndex]);
    localStorage.setItem("backgroundIndex", nextIndex.toString());

    backgroundImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const currentBackground = mounted ? backgroundImage : defaultBackground;

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
          backgroundImage: `url('${currentBackground}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          minHeight: "100vh",
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
