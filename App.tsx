
import React, { useState, useEffect } from 'react';

// --- COMPONENTES INTERNOS (Para garantir que nada falhe) ---

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
    <div className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-100">
      <div className="h-1.5 bg-gradient-to-r from-[#8BA888] to-[#E8F0E8] transition-all duration-300" style={{ width: `${scroll}%` }}></div>
      <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#5A7258] uppercase">Minhas 7 Decisões</span>
        <div className="flex items-center gap-2">
           <span className="text-[10px] text-stone-400 font-medium">JORNADA:</span>
           <span className="text-xs font-bold text-[#8BA888]">{Math.round(scroll)}%</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
    <div className="inline-block px-4 py-1.5 rounded-full bg-[#E8F0E8] text-[#5A7258] text-[10px] font-bold tracking-widest uppercase mb-8 animate-pulse">
      Solução Baseada em Ciência
    </div>
    <h1 className="text-4xl md:text-6xl text-gray-800 leading-[1.15] mb-8 font-serif italic">
      7 Decisões que seu corpo <br /> entende, aceita e agradece.
    </h1>
    <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
      A solução definitiva para mães que cansaram de dietas malucas e querem emagrecer com ciência, respeitando sua biologia e sua rotina real.
    </p>
    <a href="#checkout" className="inline-block bg-[#8BA888] hover:bg-[#7a9677] text-white px-12 py-5 rounded-full text-lg font-semibold shadow-2xl transition-all hover:-translate-y-1 active:scale-95">
      Começar Minha Jornada (R$ 9,90)
    </a>
  </section>
);

const ScienceData = () => (
  <section className="py-20 px-6 bg-[#1A1A1A] text-white rounded-[2.5rem] mx-4 my-10 shadow-2xl">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif italic mb-4">A Ciência por trás da Solução</h2>
        <p className="text-stone-400 max-w-xl mx-auto text-sm">Por que as dietas comuns falham com mães ocupadas?</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-[#8BA888] font-bold">1</div>
            <p className="text-sm text-stone-300 leading-relaxed">
              <strong className="text-white block mb-1">Diferença Metabólica:</strong>
              Mulheres queimam até <span className="text-[#8BA888] font-bold">300 calorias a menos</span> que homens. Seu corpo foi feito para preservar energia.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-[#8BA888] font-bold">2</div>
            <p className="text-sm text-stone-300 leading-relaxed">
              <strong className="text-white block mb-1">Impacto do Cortisol:</strong>
              O estresse materno sinaliza para o corpo <span className="text-[#8BA888] font-bold">guardar gordura abdominal</span> como mecanismo de defesa.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-[#8BA888] font-bold">3</div>
            <p className="text-sm text-stone-300 leading-relaxed">
              <strong className="text-white block mb-1">Hormônios da Fome:</strong>
              O sono interrompido desregula a <span className="text-[#8BA888] font-bold">Grelina</span>, aumentando drasticamente a vontade de comer doces.
            </p>
          </div>
        </div>
        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
           <h3 className="text-sm uppercase tracking-widest text-[#8BA888] font-bold mb-6">Resultados Reais do Guia</h3>
           <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/20 rounded-2xl">
                <span className="text-3xl font-bold">-20%</span>
                <span className="block text-[9px] text-stone-500 uppercase mt-1">Gordura Abdominal</span>
              </div>
              <div className="p-4 bg-black/20 rounded-2xl">
                <span className="text-3xl font-bold">+34%</span>
                <span className="block text-[9px] text-stone-500 uppercase mt-1">Melhora no Sono</span>
              </div>
           </div>
           <p className="text-[10px] text-stone-500 mt-6 italic">* Resultados baseados nas 7 decisões implementadas em 8 semanas.</p>
        </div>
      </div>
    </div>
  </section>
);

const Journey = () => {
  const steps = [
    { title: "Reset Matinal (12 min)", desc: "Luz natural para regular melatonina e cortisol.", icon: "☀️" },
    { title: "Despertar Térmico", desc: "A proteína certa que gasta 30% more energia na digestão.", icon: "🍳" },
    { title: "Prato 50-25-25", desc: "Ative o GLP-1 natural e sinta saciedade real no almoço.", icon: "🍱" },
    { title: "Bloqueio das 16h", desc: "O lanche estratégico que silencia a vontade de doces.", icon: "🥜" },
    { title: "Janela de Insulina", desc: "Jantar antes das 20h para evitar o acúmulo de gordura.", icon: "🌙" },
    { title: "Ativação de Irisina", desc: "7 minutos de movimento HIIT adaptado para mães.", icon: "⚡" },
    { title: "Hidratação com Timing", desc: "Água gelada no momento certo para subir o metabolismo 3%.", icon: "💧" }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-xl mx-auto relative">
        <h2 className="text-3xl font-serif italic text-center mb-16">Seu Novo Caminho</h2>
        <div className="absolute left-5 top-24 bottom-10 w-0.5 bg-stone-100"></div>
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="relative pl-14 flex items-start gap-4">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-[#8BA888] flex items-center justify-center z-10 text-lg shadow-sm">
                {step.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bonus = () => (
  <section className="py-20 px-6 bg-[#FAF9F6]">
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 text-center">
        <h4 className="font-bold text-sm mb-2 text-gray-800">Planilha Hormonal</h4>
        <p className="text-xs text-stone-400">Rastreie seu ciclo e adapte sua rotina.</p>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 text-center">
        <h4 className="font-bold text-sm mb-2 text-gray-800">43 Substituições</h4>
        <p className="text-xs text-stone-400">Trocas inteligentes que mantêm o sabor.</p>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 text-center">
        <h4 className="font-bold text-sm mb-2 text-gray-800">Detox Digital</h4>
        <p className="text-xs text-stone-400">Rotina de 15 min para dormir melhor.</p>
      </div>
    </div>
  </section>
);

const Checkout = () => (
  <section id="checkout" className="py-24 px-6 text-center bg-white">
    <div className="max-w-xl mx-auto">
      <h2 className="text-4xl font-serif italic mb-6">Comece agora.</h2>
      <p className="text-stone-500 mb-10 leading-relaxed">
        Menos que um café para ter em mãos a estratégia que respeita sua biologia de mãe ocupada.
      </p>

      <div className="bg-[#FAF9F6] p-10 rounded-[3rem] border border-stone-100 shadow-2xl relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 bg-[#8BA888] text-white text-[9px] font-bold px-4 py-1 rounded-bl-xl uppercase">Acesso Imediato</div>
        <span className="text-stone-300 line-through text-sm">R$ 47,00</span>
        <div className="flex justify-center items-center gap-2 my-2">
           <span className="text-lg text-stone-400 font-medium italic">por</span>
           <span className="text-6xl font-bold text-[#5A7258]">R$ 9,90</span>
        </div>
        <p className="text-[10px] text-[#8BA888] font-bold uppercase tracking-widest mb-8">Pagamento Único • Vitalício</p>
        <button className="w-full bg-[#8BA888] hover:bg-[#7a9677] text-white py-5 rounded-full text-xl font-bold shadow-lg transition-all active:scale-95">
          Desbloquear Minha Solução
        </button>
      </div>
      
      <div className="flex flex-col items-center gap-4 opacity-40">
        <div className="flex gap-4 items-center h-4 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-full" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-full" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Pix_logo.svg" alt="Pix" className="h-full" />
        </div>
        <p className="text-[10px] text-stone-500 font-medium">Garantia Blindada de 7 Dias</p>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#8BA888]/20 bg-[#FAF9F6]">
      <ProgressHeader />
      <main>
        <Hero />
        <ScienceData />
        <Journey />
        <Bonus />
        <Checkout />
      </main>
      <footer className="py-12 bg-[#1A1A1A] text-stone-600 text-[10px] text-center uppercase tracking-[0.3em] px-6">
        <p className="mb-4">Minhas 7 Decisões • Solução para Mães Reais</p>
        <p className="max-w-xl mx-auto opacity-50 lowercase tracking-normal italic">Este produto não garante resultados sem a aplicação do método. Consulte seu médico.</p>
      </footer>
    </div>
  );
};

export default App;
