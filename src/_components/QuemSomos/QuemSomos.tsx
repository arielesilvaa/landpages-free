import Image from "next/image";

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="w-full bg-white text-black px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Imagem */}
        <div className="flex-1 flex justify-start">
          <Image
            src="/img/about-1.png" // substitua pelo caminho da sua imagem
            alt="Imagem Quem Somos"
            width={450}
            height={450}
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold mb-6">Quem Somos</h2>
          <p className="text-lg leading-relaxed">
            A Royal é uma empresa focada em excelência e inovação, buscando sempre oferecer o melhor para nossos seupet, Tratando como familia, com os melhores equipamentos e garantido a saude do seus pets.
            <br /><br />
            Nosso time é composto por profissionais experientes e dedicados em transformar sonhos em realidade.
          </p>
        </div>
      </div>
    </section>
  );
}
