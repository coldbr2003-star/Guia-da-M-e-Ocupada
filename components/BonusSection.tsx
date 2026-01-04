
import React from 'react';

const BonusSection: React.FC = () => {
  const bonuses = [
    { title: "Planilha Hormonal", desc: "Rastreie seu ciclo e adapte sua rotina a cada fase." },
    { title: "43 Substituições", desc: "Trocas inteligentes que mantêm o sabor sem o peso." },
    { title: "Detox Digital", desc: "Protocolo de 15 min para dormir melhor e desinflamar." }
  ];

  return (
    <section className="py-20 px-4 bg-[#FDF8F3]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-serif italic mb-12">Recursos Extras Desbloqueados</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {bonuses.map((bonus, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
              <div className="text-[#8BA888] mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-sm text-gray-800 mb-2">{bonus.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
