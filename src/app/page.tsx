import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center px-40 py-20'>
      <div className="flex flex-col justify-center gap-8">
        <h2 className='text-3xl font-bold w-full text-center'>Sobre nós</h2>
        <p>A Rocket Visuals transforma ideias em vídeos impactantes. Com VFX e motion design, criamos conteúdos que elevam sua comunicação e fazem sua marca se destacar. Usando criatividade e técnicas, garantimos produções de alta qualidade que capturam a atenção do seu público. Se busca vídeos que impressionam e geram resultados, estamos prontos para decolar com você. 🚀</p>
        <p>Fundada por Gustavo, um apaixonado por contar histórias através de vídeos, a Rocket Visuals nasceu do desejo de criar conteúdos visuais que realmente impactem. Com uma equipe dedicada e criativa, estamos aqui para transformar suas ideias em realidade.</p>
        <p>Se você está procurando uma produtora de vídeos que combine criatividade, inovação e resultados, a Rocket Visuals é a escolha certa. Vamos juntos criar algo incrível!</p>
        <Link className='text-sm underline text-orange-500' href=''>Leia Mais</Link>
      </div>
    </div>
  );
}
