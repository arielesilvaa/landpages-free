import Image from "next/image";

export default function Banner() {
  return (
    <section id="banner" className="w-full bg-yellow-300 text-black px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Texto */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold mb-4">Royal a Clinica que trata seu pet como parte da nosso Familia !</h2>
          <p className="text-lg leading-relaxed mb-6">
            Oferecemos os melhores serviços para você e sua família.<br />
            Conheça nossos diferenciais e venha fazer parte dessa experiência única!
          </p>
          
          {/* Botão Entrar em Contato */}
          <div className="flex justify-start">
            <button className="bg-red-700 text-white px-6 py-3 rounded-md text-lg hover:bg-red-400 transition-colors duration-300">
              Entrar em Contato
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <Image
            src="/img/foto-hero.webp"
            alt="Imagem ilustrativa"
            width={550}
            height={550}
            className="w-full max-w-md h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
