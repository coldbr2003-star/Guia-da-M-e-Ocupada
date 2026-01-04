
import React from 'react';

const GamifiedJourney: React.FC = () => {
  const steps = [
    {
      title: "Checkpoint 1: O Fim do Ciclo",
      desc: "Entenda por que seu corpo parou de responder a dietas tradicionais e como desligar o 'modo sobrevivência'.",
      icon: "🛑"
    },
    {
      title: "Checkpoint 2: Micro-Decisões",
      desc: "Como fazer ajustes de 2 minutos na sua manhã que mudam sua queima de energia o dia todo.",
      icon: "⚡"
    },
    {
      title: "Checkpoint 3: Nutrição Real",
      desc: "Comer o que a família come, sem precisar cozinhar separado. Praticidade é a regra.",
      icon: "🥗"
    },
    {
      title: "Checkpoint 4: O Resgate do Sono",
      desc: "Estratégias para mães que acordam à noite voltarem a ter um sono que realmente descansa.",
      icon: "🌙"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif italic text-gray-800 mb-2">Seu Progresso Começa Aqui</h2>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mt-4">
            <div className="bg-[#8BA888] h-full w-1/3 transition-all duration-1000"></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Você está a um passo de completar a fase de 'Espera'</p>
        </div>

        <div className="relative space-y-12">
          <div className="journey-line"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative pl-14 group">
              <div className="absolute left-0 top-0 w-10 h-10 bg-[#FAF9F6] border-2 border-[#8BA888] rounded-full flex items-center justify-center z-10 text-lg group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}

          <div className="relative pl-14">
            <div className="absolute left-0 top-0 w-10 h-10 bg-[#8BA888] rounded-full flex items-center justify-center z-10 animate-pulse-soft">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <div className="pt-2">
              <h3 className="text-lg font-bold text-[#8BA888]">E mais 3 níveis de conquistas...</h3>
              <p className="text-sm text-gray-400 italic">Desbloqueie para ver o mapa completo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamifiedJourney;
