import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div
        className='flex flex-col items-center justify-center px-40 py-20'
        style={{
          backgroundImage: "url('/outrun-neon-dark-background-purple-3840x2160-4523.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="flex flex-col justify-center gap-8  bg-opacity-60 p-8 rounded-lg max-w-4xl">
          <h2 className='text-3xl font-bold w-full text-center text-white'>Sobre nós</h2>
          <p className='text-white'>A Rocket Visuals transforma ideias em vídeos impactantes. Com VFX e motion design, criamos conteúdos que elevam sua comunicação e fazem sua marca se destacar. Usando criatividade e técnicas, garantimos produções de alta qualidade que capturam a atenção do seu público. Se busca vídeos que impressionam e geram resultados, estamos prontos para decolar com você. 🚀</p>
          <p className='text-white'>Fundada por Gustavo, um apaixonado por contar histórias através de vídeos, a Rocket Visuals nasceu do desejo de criar conteúdos visuais que realmente impactem. Com uma equipe dedicada e criativa, estamos aqui para transformar suas ideias em realidade.</p>
          <p className='text-white'>Se você está procurando uma produtora de vídeos que combine criatividade, inovação e resultados, a Rocket Visuals é a escolha certa. Vamos juntos criar algo incrível!</p>
          <Link className='text-sm underline text-orange-500' href=''>Leia Mais</Link>
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 px-4 py-8">
      <Image
        className="border rounded-xl hover:scale-105 transition-transform duration-300 md:w-[400px] object-fill"
        src="/gustavo.jpeg"
        alt="Foto do gustavo"
        width={400}
        height={400}
        priority
        />
      <div className="gap-4 flex flex-col items-start justify-center max-w-xl text-justify mt-6 md:mt-0">
        <h1 className="text-2xl font-bold text-white">Quem sou eu</h1>
        <p className='text-white'>
          Gustavo Junior, fundador e criador da Rocket Visuals. Me especializei em VFX e motion design para transformar ideias em experiências visuais únicas.
        </p>
        <p className='text-white'>
          Minha missão é ajudar marcas e empresas a se destacarem com vídeos de alta qualidade, que realmente conectem com o público e gerem resultados. Com experiência em produção audiovisual e uma visão criativa, estou sempre em busca da perfeição em cada projeto.
        </p>
        <p className='text-white'>
          Se você está buscando um parceiro para criar conteúdo visual impactante, estou pronto para fazer acontecer. Vamos decolar juntos e levar sua comunicação a outro nível!
        </p>
      </div>
    </div>
        </div>
      </div>

    </>
  );
};

export default Contact;