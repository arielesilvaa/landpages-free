/* eslint-disable @next/next/no-img-element */
// Componente de Contato
export default function Contato() {
  return (
    <section id="contatos" className="w-full bg-gray-100 text-black px-12 lg:px-24 py-20 mb-0">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-4">Entre em Contato</h2>

        {/* Barrinha amarela */}
        <div className="w-24 h-1 bg-yellow-400 mb-12 mx-auto"></div>

        {/* Informações de Contato e Formulário */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-0">

          {/* Formulário */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Solicitar Orçamento</h3>
            <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Seu nome"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Seu e-mail"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold">Mensagem</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Descreva sua solicitação"
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Telefone</h3>
            <p className="text-xl mb-2">+55 (11) 1234-5678</p>
            <h3 className="text-2xl font-semibold mb-4">Endereço</h3>
            <p className="text-xl mb-4">Rua dos Exemplos, 123, São Paulo, SP</p>

            {/* Imagem abaixo do endereço */}
            <div className="w-full flex justify-center">
              <img
                src="/img/about-2.png" // Substitua pelo caminho da sua imagem
                alt="Endereço da empresa"
                className="w-full md:w-full h-full rounded-md shadow-lg object-cover"
                style={{ maxHeight: '250px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
