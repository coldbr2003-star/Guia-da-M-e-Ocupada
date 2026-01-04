
import React from 'react';

const PainSection: React.FC = () => {
  return (
    <section className="bg-stone-100 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg italic font-serif">
          <p>
            "Sabe aquele momento em que você se olha no espelho e não se reconhece mais? Não é só o corpo que mudou. É a energia que sumiu entre uma troca de fraldas, o trabalho e a casa."
          </p>
          <p>
            "A gente tenta. Começa uma dieta na segunda, mas o cansaço na quarta-feira é tão grande que o chocolate vira o único refúgio. E aí vem a culpa. De novo."
          </p>
          <p>
            "Falta tempo para respirar, quem dirá para ir à academia por uma hora. Parece que, depois dos filhos, o nosso cuidado ficou sempre por último na lista de prioridades."
          </p>
        </div>
        <div className="mt-12 h-[1px] bg-stone-300 w-24"></div>
        <p className="mt-8 text-gray-600 font-medium">
          Se você se sente assim, eu quero te dizer uma coisa: a culpa não é sua.
        </p>
      </div>
    </section>
  );
};

export default PainSection;
