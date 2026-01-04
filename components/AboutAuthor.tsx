
import React from 'react';

const AboutAuthor: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 shadow-inner">
          <img 
            src="https://picsum.photos/seed/mother/400/400" 
            alt="Foto da Autora" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>
        <div>
          <h2 className="text-3xl text-gray-800 mb-4">De uma mãe para outra</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed italic">
            <p>
              "Eu não sou uma coach fitness inalcançável. Sou uma mulher real, com dois filhos, uma casa para cuidar e um trabalho que exige muito de mim."
            </p>
            <p>
              "Criei o 'Minhas 7 Decisões' primeiro para mim, quando percebi que eu não conseguia mais seguir nada que o mercado me oferecia. Eu precisava de algo que fizesse sentido na minha rotina caótica."
            </p>
            <p>
              "O que eu compartilho aqui é o que me devolveu a autoestima e a energia para brincar com meus filhos sem cansar em 5 minutos. É vida real, testada na prática."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
