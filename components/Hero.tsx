
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-12 pb-16 px-4 max-w-4xl mx-auto text-center">
      <div className="inline-block px-4 py-1 rounded-full bg-[#E8F0E8] text-[#5A7258] text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
        Missão: Redescobrir Você
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6 animate-fade-in-up">
        Uma solução real para mães <br />
        <span className="italic font-serif opacity-80">sem tempo e sem energia</span>
      </h1>
      <p className="text-md md:text-lg text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        Chega de dietas que falham. Descubra o caminho das 7 decisões pensadas para quem cuida de todo mundo, mas esqueceu de si mesma.
      </p>

      {/* VSL Placeholder Simplificado */}
      <div className="relative aspect-video w-full max-w-2xl mx-auto bg-stone-200 rounded-3xl shadow-lg overflow-hidden mb-8 group cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-[#8BA888] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=1200" 
          alt="Mom moment" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%]"
        />
      </div>

      <div className="relative group inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <button className="bg-[#8BA888] hover:bg-[#7a9677] hover:shadow-xl hover:-translate-y-0.5 text-white px-10 py-4 rounded-full text-lg font-medium shadow-md transition-all duration-300 active:scale-95">
          Desbloquear Minha Jornada
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-stone-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Acesso imediato por apenas R$ 9,90
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-stone-800"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
