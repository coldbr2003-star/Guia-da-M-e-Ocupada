
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-12 pb-16 px-4 max-w-4xl mx-auto text-center">
      <div className="inline-block px-4 py-1 rounded-full bg-[#E8F0E8] text-[#5A7258] text-[10px] font-bold tracking-[0.2em] uppercase mb-6 animate-fade-in-up">
        Guia Prático • Ciência Aplicada
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6 animate-fade-in-up font-serif italic">
        7 Decisões Diárias para Emagrecer com Ciência
      </h1>
      <p className="text-md md:text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        Este não é um plano de sacrifícios. É uma solução desenhada para mães brasileiras que lidam com estresse, hormônios e falta de tempo. Trabalhe com seu corpo, não contra ele.
      </p>

      {/* VSL Placeholder */}
      <div className="relative aspect-video w-full max-w-2xl mx-auto bg-stone-200 rounded-3xl shadow-2xl overflow-hidden mb-10 group cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-[#8BA888] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=1200" 
          alt="Mom looking through window" 
          className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale-[20%]"
        />
      </div>

      <div className="relative group inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <button className="bg-[#8BA888] hover:bg-[#7a9677] hover:shadow-xl hover:-translate-y-0.5 text-white px-10 py-5 rounded-full text-lg font-medium shadow-md transition-all duration-300 active:scale-95">
          Desbloquear Solução (R$ 9,90)
        </button>
      </div>
    </section>
  );
};

export default Hero;
