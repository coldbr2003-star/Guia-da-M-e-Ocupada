
import React from 'react';

const ScienceSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#8BA888] text-xs font-bold tracking-widest uppercase">Capítulo 1</span>
          <h2 className="text-3xl font-serif mt-2 italic">Por que tudo falhou até agora?</h2>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto">Não foi falta de vontade. Foi biologia pura ignorada.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-[#8BA888] font-bold mb-3 uppercase text-xs tracking-wider">Metabolismo</h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Mulheres queimam até <span className="text-white font-bold">300 calorias a menos</span> que homens. Seu corpo foi feito para preservar energia.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-[#8BA888] font-bold mb-3 uppercase text-xs tracking-wider">Cortisol</h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              O estresse da rotina materna sinaliza para o corpo <span className="text-white font-bold">guardar gordura abdominal</span> como sobrevivência.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-[#8BA888] font-bold mb-3 uppercase text-xs tracking-wider">Hormônios</h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Dietas restritivas fazem seu corpo parar de ouvir a <span className="text-white font-bold">Leptina</span> (saciedade), gerando fome constante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
