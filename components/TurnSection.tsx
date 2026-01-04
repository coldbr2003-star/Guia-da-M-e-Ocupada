
import React from 'react';

const TurnSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-row gap-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">A virada começa sem milagres</h2>
          <p className="text-gray-600 leading-relaxed">
            O problema não é sua falta de força de vontade. O corpo feminino muda de verdade depois da maternidade, e tentar seguir protocolos feitos para pessoas sem filhos e com tempo de sobra é a receita para o fracasso.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-[#FDF8F3] rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-2">Ajustes Reais</h3>
            <p className="text-sm text-gray-600">Pequenas trocas que não exigem horas na cozinha ou idas ao mercado especializado.</p>
          </div>
          <div className="p-6 bg-[#FDF8F3] rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-2">Fisiologia Materna</h3>
            <p className="text-sm text-gray-600">Entenda por que seu corpo reage diferente agora e como trabalhar a favor dele.</p>
          </div>
          <div className="p-6 bg-[#FDF8F3] rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-2">Sem Pressa</h3>
            <p className="text-sm text-gray-600">Não buscamos emagrecimento relâmpago, mas sim um corpo que funciona e te faz feliz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurnSection;
