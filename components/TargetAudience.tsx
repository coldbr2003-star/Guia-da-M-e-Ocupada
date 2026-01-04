
import React from 'react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white border-y border-stone-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center text-gray-800 mb-16">Este caminho é para você?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* É para */}
          <div className="bg-[#E8F0E8]/40 p-10 rounded-3xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#8BA888] rounded-full"></span>
              Isso É para você se:
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-2"><span>✓</span> <span>É uma mãe com rotina corrida e pouco tempo.</span></li>
              <li className="flex gap-2"><span>✓</span> <span>Já tentou várias dietas e desistiu no meio.</span></li>
              <li className="flex gap-2"><span>✓</span> <span>Quer algo sustentável, que dure a vida toda.</span></li>
              <li className="flex gap-2"><span>✓</span> <span>Busca se sentir bem sem deixar de conviver com a família.</span></li>
            </ul>
          </div>

          {/* Não é para */}
          <div className="bg-rose-50/40 p-10 rounded-3xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-rose-300 rounded-full"></span>
              Isso NÃO é para você se:
            </h3>
            <ul className="space-y-4 text-gray-500">
              <li className="flex gap-2"><span>✕</span> <span>Busca resultados imediatos e "milagrosos".</span></li>
              <li className="flex gap-2"><span>✕</span> <span>Quer uma dieta restritiva de passar fome.</span></li>
              <li className="flex gap-2"><span>✕</span> <span>Não está disposta a mudar pequenas rotinas.</span></li>
              <li className="flex gap-2"><span>✕</span> <span>Prefere fórmulas mágicas a ciência real.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
