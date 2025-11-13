import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instituto Tabuleiro",
  description:
    "Organização não governamental (ONG) - Pesquisa científica, uso público, educação ambiental e mobilização comunitária no território abrangido pelo Parque Estadual da Serra do Tabuleiro.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} bg-center bg-no-repeat bg-fixed text-white`}
        style={{
          backgroundImage: "url('background/capa.jpg')",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
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