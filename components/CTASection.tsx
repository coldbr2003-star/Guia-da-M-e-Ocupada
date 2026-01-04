
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 text-center bg-[#FAF9F6]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl text-gray-800 mb-4 font-serif italic">Algo possível por um preço simbólico</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Eu sei o peso das contas e do tempo. Por isso, esta solução custa menos que um café. Quero que o dinheiro não seja a desculpa para você não se cuidar hoje.
        </p>
        
        <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm mb-10 inline-block w-full max-w-sm">
          <div className="flex flex-col items-center gap-1">
            <span className="text-stone-300 line-through text-sm">De R$ 47,00</span>
            <div className="flex items-center gap-1">
              <span className="text-lg text-gray-500">Apenas</span>
              <span className="text-5xl font-bold text-[#5A7258]">R$ 9,90</span>
            </div>
            <span className="text-[10px] text-rose-400 font-bold tracking-widest uppercase mt-2">Pagamento Único • Acesso Vitalício</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <button className="w-full sm:w-auto bg-[#8BA888] hover:bg-[#7a9677] hover:shadow-2xl hover:-translate-y-1 text-white px-12 py-5 rounded-full text-xl font-medium shadow-lg transition-all duration-300 active:scale-95 mb-6">
            Desbloquear Minha Solução Agora
          </button>
          
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-8">
            <svg className="w-4 h-4 text-[#8BA888]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Garantia de 7 dias ou seu dinheiro de volta
          </div>

          <div className="flex items-center justify-center gap-4 opacity-30 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Pix_logo.svg" alt="Pix" className="h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
