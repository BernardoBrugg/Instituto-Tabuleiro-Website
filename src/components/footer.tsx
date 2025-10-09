export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 p-8 bg-white text-[#1a3310] text-center">
      <div className="mx-auto">
        <p>Instituto Tabuleiro &copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
        <p>Organização não governamental dedicada à preservação do Parque Estadual da Serra do Tabuleiro</p>
      </div>
    </footer>
  );
}