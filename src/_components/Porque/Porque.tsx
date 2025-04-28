import { CheckCircle } from "lucide-react"; // ícone de certinho (lindo e leve!)

export default function PorQueNosContratar() {
  return (
    <section id="porque" className="w-full bg-yellow-300 text-black px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-12">Por que nos contratar?</h2>
        
        {/* Vantagens */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          
          {/* Lado Esquerdo */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-600 w-8 h-8" />
              <p className="text-lg">Planos personalizados para seu pet</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-600 w-8 h-8" />
              <p className="text-lg">Cobertura nacional ampla</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-600 w-8 h-8" />
              <p className="text-lg">Atendimento especializado 24h</p>
            </div>
          </div>

          {/* Lado Direito */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-600 w-8 h-8" />
              <p className="text-lg">Descontos exclusivos em clínicas</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-600 w-8 h-8" />
              <p className="text-lg">Apoio para emergências veterinárias</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-600 w-8 h-8" />
              <p className="text-lg">Rede credenciada de qualidade</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
