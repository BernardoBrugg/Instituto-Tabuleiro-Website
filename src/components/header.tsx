import Image from 'next/image';

export default function Header() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Publicações', href: '/publicacoes' },
    { name: 'Localização', href: '/local' },
  ];

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
      <a 
        href="contato" 
        className="px-5 py-2 text-sm border border-white/50 rounded-full hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:text-yellow-500 transition-all duration-500 ease-in-out cursor-pointer"
      >
        Contato
      </a>
    </header>
  );
}