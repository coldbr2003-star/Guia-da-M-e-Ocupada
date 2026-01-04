
import React, { useState, useEffect } from 'react';

// --- Sub-componentes internos para garantir performance e evitar erros de import ---

const ProgressHeader = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScroll((currentScroll / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-stone-100">
      <div className="h-1 journey-gradient transition-all duration-300 progress-glow" style={{ width: `${scroll}%` }}></div>
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-[10px] font-bold tracking-widest text-[#5A7258] uppercase">Minhas 7 Decisões</span>
        <div className="flex items-center gap-2">
           <span className="text-[10px] text-stone-400">Progresso da Solução:</span>
           <span className="text-xs font-bold text-[#8BA888]">{Math.round(scroll)}%</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto animate-fade-in">
    <div className="inline-block px-3 py-1 rounded-full bg-[#E8F0E8] text-[#5A7258] text-[9px] font-bold tracking-[0.2em] uppercase mb-8">
      Ciência para Mães Ocupadas
    </div>
    <h1 className="text-4xl md:text-6xl text-gray-800 leading-[1.1] mb-8 font-serif italic">
      7 Decisões que seu corpo <br /> entende, aceita e agradece.
    </h1>
    <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
      A solução definitiva para mães que cansaram de dietas malucas e querem emagrecer com ciência, sem precisar de 1 hora livre no dia.
    </p>
    <a href="#solucao" className="inline-block bg-[#8BA888] hover:bg-[#7a9677] text-white px-10 py-5 rounded-full text-lg font-medium shadow-xl transition-all hover:-translate-y-1 active:scale-95">
      Começar Minha Jornada (R$ 9,90)
    </a>
  </section>
);

const ScienceFact = () => (
  <section className="py-20 px-4 bg-[#1A1A1A] text-white rounded-[3rem] mx-4 my-10">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-serif italic mb-6">Por que tudo falhou até agora?</h2>
        <p className="text-stone-400 leading-relaxed mb-6">
          A ciência explica: o corpo feminino queima até <span className="text-white font-bold">300 calorias a menos</span> que o masculino. Além disso, o estresse materno eleva o <span className="text-white font-bold">Cortisol</span>, que sinaliza para seu corpo guardar gordura abdominal.
        </p>
        <div className="flex gap-4">
          <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/10">
            <span className="block text-2xl font-bold text-[#8BA888]">-20%</span>
            <span className="text-[9px] uppercase tracking-wider text-stone-500">Gordura Abdominal</span>
          </div>
          <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/10">
            <span className="block text-2xl font-bold text-[#8BA888]">+34%</span>
            <span className="text-[9px] uppercase tracking-wider text-stone-500">Qualidade de Sono</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" className="rounded-3xl grayscale opacity-60" alt="Ciência" />
        <div className="absolute -bottom-6 -right-6 bg-[#8BA888] p-6 rounded-2xl shadow-2xl max-w-[200px]">
          <p className="text-xs font-medium leading-tight">"Não é sobre força de vontade, é sobre estratégia biológica."</p>
        </div>
      </div>
    </div>
  </section>
);

const JourneyTrail = () => {
  const levels = [
    { title: "Nível 1: Reset Matinal", desc: "12 minutos de luz natural para regular seus hormônios de fome e saciedade.", icon: "☀️" },
    { title: "Nível 2: Café Térmico", desc: "A proteína certa que gasta 30% mais energia apenas para ser digerida.", icon: "🍳" },
    { title: "Nível 3: Almoço 50-25-25", desc: "A montagem do prato que ativa o GLP-1 (o hormônio da saciedade natural).", icon: "🍱" },
    { title: "Nível 4: Bloqueio das 16h", desc: "O lanche estratégico para evitar a queda de glicose e a compulsão noturna.", icon: "🥜" },
    { title: "Nível 5: Jantar Biológico", desc: "Comer antes das 20h para aproveitar a janela de sensibilidade à insulina.", icon: "🥣" },
    { title: "Nível 6: Ativação de Irisina", desc: "7 minutos de movimento HIIT que transformam gordura branca em energia.", icon: "⚡" },
    { title: "Nível 7: Timing de Água", desc: "Hidratação que aumenta o metabolismo em 3% imediatamente.", icon: "💧" }
  ];

  return (
    <section className="py-24 px-4 bg-white" id="solucao">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif italic text-gray-800 mb-4">Seu Mapa de Conquistas</h2>
          <p className="text-sm text-stone-400">7 níveis simples que cabem na rotina de quem não tem tempo.</p>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-stone-100 z-0"></div>
          {levels.map((level, i) => (
            <div key={i} className="relative pl-14 group">
              <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#8BA888] rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform text-lg">
                {level.icon}
              </div>
              <div>
                <h3 className="text-md font-bold text-gray-800 mb-1">{level.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{level.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BonusLevels = () => (
  <section className="py-20 px-4 bg-[#FAF9F6] border-y border-stone-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center text-2xl font-serif italic mb-12">Recursos Bônus de Desbloqueio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center">
          <div className="text-2xl mb-4">📊</div>
          <h3 className="font-bold text-sm mb-2">Planilha Hormonal</h3>
          <p className="text-xs text-stone-400">Rastreie seu ciclo e adapte sua comida a cada fase.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center">
          <div className="text-2xl mb-4">🍎</div>
          <h3 className="font-bold text-sm mb-2">43 Substituições</h3>
          <p className="text-xs text-stone-400">Trocas inteligentes que não mudam o sabor, só as calorias.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center">
          <div className="text-2xl mb-4">📱</div>
          <h3 className="font-bold text-sm mb-2">Detox Digital</h3>
          <p className="text-xs text-stone-400">Protocolo de 15 min para silenciar a mente e dormir mais.</p>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-4 text-center bg-white">
    <div className="max-w-2xl mx-auto">
      <div className="inline-block px-4 py-1 rounded-full bg-rose-50 text-rose-400 text-[10px] font-bold tracking-widest uppercase mb-6">
        Oferta de Manutenção da Solução
      </div>
      <h2 className="text-4xl font-serif italic mb-6">Comece sua jornada hoje.</h2>
      <p className="text-stone-500 mb-10 leading-relaxed">
        Não é um gasto, é o acesso vitalício a um método que respeita sua rotina. Menos que um café para transformar sua energia.
      </p>

      <div className="bg-[#FAF9F6] p-10 rounded-[3rem] border border-stone-100 mb-10 inline-block w-full max-w-sm">
        <div className="flex flex-col items-center">
          <span className="text-stone-300 line-through text-sm mb-1">De R$ 47,00</span>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-lg text-gray-400">Por</span>
            <span className="text-6xl font-bold text-[#5A7258]">R$ 9,90</span>
          </div>
          <p className="text-[10px] text-[#8BA888] font-bold tracking-widest uppercase mb-8">Pagamento único • Acesso para sempre</p>
          
          <button className="w-full bg-[#8BA888] hover:bg-[#7a9677] text-white py-5 rounded-full text-xl font-bold shadow-2xl transition-all hover:-translate-y-1 active:scale-95">
            Quero Minha Solução
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-stone-400">
           <svg className="w-4 h-4 text-[#8BA888]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
           Garantia incondicional de 7 dias
        </div>
        <div className="flex gap-4 opacity-30 grayscale items-center h-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-full" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-full" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Pix_logo.svg" alt="Pix" className="h-full" />
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#8BA888]/20">
      <ProgressHeader />
      <main>
        <Hero />
        <ScienceFact />
        <JourneyTrail />
        <BonusLevels />
        <FinalCTA />
      </main>
      <footer className="py-12 bg-[#1A1A1A] text-stone-600 text-[10px] text-center uppercase tracking-[0.3em] px-4">
        <p className="mb-4">Minhas 7 Decisões • Direitos Reservados</p>
        <p className="max-w-2xl mx-auto opacity-50">Este site não substitui acompanhamento médico. Resultados variam de acordo com cada organismo.</p>
      </footer>
    </div>
  );
};

export default App;
