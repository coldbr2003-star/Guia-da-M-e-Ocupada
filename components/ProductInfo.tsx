
import React from 'react';

const ProductInfo: React.FC = () => {
  const features = [
    "Ebook prático e direto ao ponto",
    "Linguagem simples, como uma conversa",
    "Baseado em ciência aplicada à vida real",
    "Criado especificamente para a rotina de mães",
    "Organização alimentar sem restrições loucas",
    "Estratégias de movimento que cabem em 10 minutos"
  ];

  return (
    <section className="py-24 px-4 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <img 
            src="https://picsum.photos/seed/ebook/600/800" 
            alt="Mockup do Ebook" 
            className="rounded-lg shadow-xl w-full max-w-sm mx-auto transform -rotate-2"
          />
        </div>
        <div className="flex-1">
          <span className="text-rose-400 font-semibold tracking-widest text-xs uppercase">O Material</span>
          <h2 className="text-3xl md:text-4xl text-gray-800 mt-2 mb-6">O que é o "Minhas 7 Decisões"?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Mais do que um guia, é um mapa de navegação para a mãe que está cansada de se sentir perdida. São sete pilares simples que, quando ajustados, mudam a sua relação com a comida e com o seu espelho.
          </p>
          <ul className="space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-[#8BA888] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
