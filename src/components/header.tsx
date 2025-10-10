"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Publicações', href: '/publicacoes' },
    { name: 'Localização', href: '/local' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
        <Image src="/logo.jpg" alt="Instituto Tabuleiro Logo" width={50} height={50} className="mr-4 rounded-full hover:scale-110 transition-all duration-500 ease-in-out" />
        <h1 className="text-xl font-bold tracking-wider hover:text-yellow-500 transition-colors duration-500 ease-in-out">Instituto Tabuleiro</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-sm hover:text-yellow-500 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer">
            {link.name}
          </a>
        ))}
      </nav>
      <div className="md:hidden relative">
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col items-center justify-center w-8 h-8">
          <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg p-4 flex flex-col gap-4 z-50">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-black hover:text-yellow-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
      <a 
        href="contato" 
        className="px-5 py-2 text-sm border border-white/50 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:text-yellow-500 transition-all duration-500 ease-in-out cursor-pointer"
      >
        Contato
      </a>
    </header>
  );
}