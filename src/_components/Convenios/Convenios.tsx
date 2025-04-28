import Image from "next/image";

export default function ConveniosAceitos() {
  return (
    <section id="convenios" className="w-full bg-white text-black px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-4">Convênios Aceitos</h2>

        {/* Linha de separação */}
        <div className="w-24 h-1 bg-yellow-400 mb-12"></div>

        {/* Imagens dos convênios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center w-full">
          <div>
            <Image
              src="/img/golden.png" // substitua pelo seu caminho real
              alt="Convênio 1"
              width={150}
              height={80}
              className="w-auto h-20 object-contain"
            />
          </div>
          <div>
            <Image
              src="/img/primier.png"
              alt="Convênio 2"
              width={150}
              height={80}
              className="w-auto h-20 object-contain"
            />
          </div>
          <div>
            <Image
              src="/img/golden.png"
              alt="Convênio 3"
              width={150}
              height={80}
              className="w-auto h-20 object-contain"
            />
          </div>
          <div>
            <Image
              src="/img/royal.png"
              alt="Convênio 4"
              width={150}
              height={80}
              className="w-auto h-20 object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
