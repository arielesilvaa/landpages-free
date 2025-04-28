// Componente Footer
export default function Footer() {
    return (
      <footer className="w-full bg-black text-white py-8 mt-0">
        <div className="max-w-7xl mx-auto text-center">
          {/* Links do Footer */}
          <div className="mb-4">
            <a href="#Banner" className="mx-4 hover:text-yellow-400">Home</a>
            <a href="#quem-somos" className="mx-4 hover:text-yellow-400">Quem Somos</a>
            <a href="#contatos" className="mx-4 hover:text-yellow-400">Contato</a>
            <a href="#convenios" className="mx-4 hover:text-yellow-400">Convênios</a>
          </div>
  
          {/* Direitos autorais */}
          <p className="text-sm">© {new Date().getFullYear()} Ariele Silva. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }
  