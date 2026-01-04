
import React from 'react';

const GamifiedJourney: React.FC = () => {
  const steps = [
    {
      title: "Nível 1: Reset de Cortisol",
      desc: "12 minutos de luz natural ao acordar, sem celular. Regula a melatonina e reduz o estresse matinal.",
      icon: "☀️"
    },
    {
      title: "Nível 2: Despertar Térmico",
      desc: "Proteína no café da manhã para gastar 30% mais energia apenas na digestão e estabilizar o açúcar.",
      icon: "🍳"
    },
    {
      title: "Nível 3: Regra 50-25-25",
      desc: "Ative o GLP-1 natural (hormônio da saciedade) com a montagem estratégica do prato de almoço.",
      icon: "🍱"
    },
    {
      title: "Nível 4: Bloqueio de Compulsão",
      desc: "O lanche estratégico das 16h que evita a queda de glicose e a vontade incontrolável de doces à noite.",
      icon: "🥜"
    },
    {
      title: "Nível 5: Janela Metabólica",
      desc: "Jantar leve antes das 20h. Após esse horário, sua sensibilidade à insulina cai 50%.",
      icon: "🥣"
    },
    {
      title: "Nível 6: Ativação de Irisina",
      desc: "Apenas 7 minutos de movimento HIIT adaptado para transformar gordura branca em marrom.",
      icon: "⚡"
    },
    {
      title: "Nível 7: Hidratação Estratégica",
      desc: "Timing da água para aumentar o metabolismo em 3% e reduzir ingestão calórica em 13%.",
      icon: "💧"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif italic text-gray-800 mb-2">O Mapa da Transformação</h2>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mt-4">
            <div className="bg-[#8BA888] h-full w-2/3 transition-all duration-1000"></div>
          </div>
          <p className="text-xs text-stone-400 mt-2 uppercase tracking-widest font-bold">Você está visualizando a trilha completa</p>
        </div>

        <div className="relative space-y-10">
          <div className="journey-line"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative pl-14 group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#8BA888] rounded-full flex items-center justify-center z-10 text-lg shadow-sm group-hover:bg-[#E8F0E8] transition-colors">
                {step.icon}
              </div>
              <div className="pb-4 border-b border-stone-100">
                <h3 className="text-md font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-[#FAF9F6] rounded-2xl">
            <span className="block text-xl font-bold text-[#8BA888]">-20%</span>
            <span className="text-[9px] uppercase text-stone-400 font-bold">Gordura Abdominal</span>
          </div>
          <div className="p-4 bg-[#FAF9F6] rounded-2xl">
            <span className="block text-xl font-bold text-[#8BA888]">+34%</span>
            <span className="text-[9px] uppercase text-stone-400 font-bold">Qualidade Sono</span>
          </div>
          <div className="p-4 bg-[#FAF9F6] rounded-2xl">
            <span className="block text-xl font-bold text-[#8BA888]">7min</span>
            <span className="text-[9px] uppercase text-stone-400 font-bold">Tempo Diário</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamifiedJourney;
